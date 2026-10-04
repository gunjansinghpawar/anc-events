import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-20 bg-ivory">
      <div className="container-editorial text-center max-w-2xl mx-auto">
        <span className="font-display text-7xl md:text-9xl text-stone/40 block mb-6 font-light">
          404
        </span>
        <span className="label-sm text-stone block mb-3">Page Not Located</span>
        <h1 className="display-sm text-charcoal mb-4">
          The requested path does not exist.
        </h1>
        <div className="divider-bronze mx-auto my-6" />
        <p className="body-lg text-warm-gray mb-10 leading-relaxed">
          The celebration or story you are seeking may have moved or been archived. Explore our selected works or return to the beginning.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Return to Homepage
          </Link>
          <Link href="/work" className="btn-outline">
            View Selected Works
          </Link>
        </div>
      </div>
    </div>
  );
}
