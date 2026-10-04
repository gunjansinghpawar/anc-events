import { generateMetadata as getSeoMetadata } from "@/lib/seo";

export const metadata = getSeoMetadata({
  title: "Terms of Service | ANC Events",
  description: "Terms and conditions governing event commissions with ANC Events.",
  path: "/terms",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <div className="pt-28 md:pt-36 pb-24">
      <div className="container-editorial max-w-3xl">
        <span className="label mb-4 block">Legal</span>
        <h1 className="display-md mb-8">Terms of Commission</h1>
        <div className="divider-bronze mb-12" />

        <div className="prose-editorial">
          <p>
            Welcome to ANC Events. These terms govern your use of our digital presence and provide general principles regarding our event production and planning commissions.
          </p>

          <h2>Private Commissions & Agreements</h2>
          <p>
            All destination wedding and bespoke event engagements are governed by individual, formalized commission contracts executed between ANC Events and the client. In the event of any variance between this website and a signed event agreement, the provisions of the signed agreement shall prevail.
          </p>

          <h2>Intellectual Property & Scenography</h2>
          <p>
            All custom sketches, moodboards, 3D renderings, spatial schematics, and design proposals created by ANC Events remain the intellectual property of ANC Events until formally transferred under the terms of a commissioned agreement.
          </p>

          <h2>Third-Party Vendors & Logistics</h2>
          <p>
            While ANC Events curates, audits, and supervises premier vendors (including venues, caterers, sound and lighting engineers, florists, and artists), contracts with third-party service providers are managed under agreed terms specified in individual event documentation.
          </p>

          <h2>Jurisdiction</h2>
          <p>
            Any disputes arising in connection with ANC Events shall be subject to the exclusive jurisdiction of the competent courts in Ahmedabad, Gujarat, India.
          </p>
        </div>
      </div>
    </div>
  );
}
