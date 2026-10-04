import { Metadata } from "next";
import { generateMetadata as getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata({
  title: "The Journal — Perspectives on Design, Scenography & Celebration",
  description:
    "Essays and monographs from ANC Events on architectural scenography, destination wedding logistics, heirloom florals, and intentional hospitality.",
  path: "/journal",
});

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
