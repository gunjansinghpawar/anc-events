/* ─────────────────────────────────────────────
   ANC Events — SEO Utilities
   ───────────────────────────────────────────── */

import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ancevents.in";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "ANC Events";

export function generateMetadata({
  title,
  description,
  path = "",
  image,
  type = "website",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const ogImage = image || `${siteUrl}/images/placeholder-wedding-1.jpg`;

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "en_IN",
      type,
      images: [
        {
          url: ogImage,
          width: 1600,
          height: 1067,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function generateArticleMetadata({
  title,
  description,
  path,
  image,
  publishedTime,
  author,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  publishedTime: string;
  author: string;
}): Metadata {
  const base = generateMetadata({
    title,
    description,
    path,
    image,
    type: "article",
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime,
      authors: [author],
    },
  };
}
