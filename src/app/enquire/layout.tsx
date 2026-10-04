import { Metadata } from "next";
import { generateMetadata as getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata({
  title: "Private Commission Inquiry — Plan Your Celebration | ANC Events",
  description:
    "Submit your confidential commission inquiry for destination weddings, palatial receptions, and bespoke events with ANC Events in Ahmedabad, Udaipur, Jaipur, or Goa.",
  path: "/enquire",
});

export default function EnquireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
