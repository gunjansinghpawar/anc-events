import { generateMetadata as getSeoMetadata } from "@/lib/seo";

export const metadata = getSeoMetadata({
  title: "Privacy Policy | ANC Events",
  description: "Privacy policy and client confidentiality practices at ANC Events.",
  path: "/privacy",
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <div className="pt-28 md:pt-36 pb-24">
      <div className="container-editorial max-w-3xl">
        <span className="label mb-4 block">Legal</span>
        <h1 className="display-md mb-8">Privacy & Client Confidentiality</h1>
        <div className="divider-bronze mb-12" />

        <div className="prose-editorial">
          <p>
            At ANC Events (Bodakdev, Ahmedabad, Gujarat, India), we hold the privacy and discretion of our clients, their families, and their guests in the highest regard. This document outlines how we collect, handle, and safeguard confidential information.
          </p>

          <h2>Information Collection</h2>
          <p>
            When you enquire with ANC Events or engage our services for a celebration, we collect information necessary to design, plan, and execute your event. This may include host names, contact coordinates, event timelines, guest counts, dietary notes, and guest logistics details.
          </p>

          <h2>Strict Confidentiality & Discretion</h2>
          <p>
            We routinely handle private commissions for high-profile individuals and discerning families. We never disclose event details, client identities, financial contracts, or proprietary production schematics to unauthorized third parties. Where required, we execute formal Non-Disclosure Agreements (NDAs).
          </p>

          <h2>Photography & Media Permissions</h2>
          <p>
            Photographs or visual archives of your celebration are never published on our website, social media, or press releases without prior explicit written consent from the hosts.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions regarding our privacy practices or wish to review information held on file, please contact us at our Bodakdev studio or via email at privacy@ancevents.in.
          </p>
        </div>
      </div>
    </div>
  );
}
