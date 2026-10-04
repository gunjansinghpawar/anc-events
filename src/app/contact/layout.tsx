import { Metadata } from "next";
import { generateMetadata as getSeoMetadata } from "@/lib/seo";

export const metadata: Metadata = getSeoMetadata({
  title: "Contact the Atelier — Private Consultations | Bodakdev, Ahmedabad",
  description:
    "Connect with directors Ashish Nahata & Anushka Nahata at our private studio in Bodakdev, Ahmedabad. Initiate a private consultation for your wedding or bespoke milestone celebration.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
