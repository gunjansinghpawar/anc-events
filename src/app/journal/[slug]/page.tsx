import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllJournalPosts, getJournalPostBySlug } from "@/data/journal";
import { generateArticleMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/structured-data";

interface JournalPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllJournalPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: JournalPostPageProps) {
  const { slug } = await params;
  const post = getJournalPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found | ANC Events" };
  }

  return generateArticleMetadata({
    title: `${post.title} | ANC Events Journal`,
    description: post.excerpt,
    path: `/journal/${post.slug}`,
    image: post.coverImage.src,
    publishedTime: post.date,
    author: post.author,
  });
}

export default async function JournalPostPage({ params }: JournalPostPageProps) {
  const { slug } = await params;
  const post = getJournalPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllJournalPosts();
  const relatedArticles = allPosts.filter(
    (p) => p.slug !== post.slug && (post.relatedArticles.includes(p.slug) || p.category === post.category)
  ).slice(0, 2);

  return (
    <article className="pt-28 md:pt-36 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: post.title,
              description: post.excerpt,
              url: `/journal/${post.slug}`,
              image: post.coverImage.src,
              datePublished: post.date,
              author: post.author,
            })
          ),
        }}
      />

      <div className="container-editorial">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.15em] uppercase text-warm-gray hover:text-charcoal transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Journal
          </Link>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 text-xs text-stone mb-4">
            <span className="label-sm text-stone">{post.categoryLabel}</span>
            <span className="w-1 h-1 rounded-full bg-stone" />
            <span>{post.readingTime}</span>
            <span className="w-1 h-1 rounded-full bg-stone" />
            <span>{new Date(post.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>
          </div>

          <h1 className="display-md text-charcoal mb-6">{post.title}</h1>
          <p className="font-display text-xl text-warm-gray leading-relaxed italic">
            {post.excerpt}
          </p>
        </div>

        {/* Hero Visual */}
        <div className="image-reveal aspect-[16/9] relative overflow-hidden bg-sand mb-16 md:mb-20">
          <Image
            src={post.coverImage.src}
            alt={post.coverImage.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Article Body */}
        <div className="max-w-2xl mx-auto mb-24">
          <div className="prose-editorial">
            {post.content.split("\n\n").map((block, idx) => {
              const trimmed = block.trim();
              if (trimmed.startsWith("## ")) {
                return <h2 key={idx}>{trimmed.replace("## ", "")}</h2>;
              }
              if (trimmed.startsWith("### ")) {
                return <h3 key={idx}>{trimmed.replace("### ", "")}</h3>;
              }
              if (trimmed.startsWith("> ")) {
                return (
                  <blockquote key={idx}>{trimmed.replace("> ", "")}</blockquote>
                );
              }
              return <p key={idx}>{trimmed}</p>;
            })}
          </div>

          <div className="pt-12 mt-12 border-t border-sand flex items-center justify-between text-xs text-stone">
            <span>Written by {post.author}</span>
            <Link href="/enquire" className="editorial-link">
              Inquire with ANC Events
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="pt-16 border-t border-sand">
            <h2 className="display-sm mb-10">Further Reading</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((rel) => (
                <Link key={rel.id} href={`/journal/${rel.slug}`} className="group block">
                  <div className="image-reveal aspect-[16/10] relative mb-4 bg-sand overflow-hidden">
                    <Image
                      src={rel.coverImage.src}
                      alt={rel.coverImage.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <span className="label-sm text-stone block mb-1">{rel.categoryLabel}</span>
                  <h3 className="font-display text-xl text-charcoal group-hover:text-bronze transition-colors">
                    {rel.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
