import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { localBusinessSchema, organizationSchema } from "@/lib/structured-data";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ancevents.in"),
  title: "ANC Events — Destination Weddings & Bespoke Events | Ahmedabad",
  description:
    "ANC Events creates destination weddings and bespoke celebrations through thoughtful planning, distinctive design, and seamless execution. Based in Bodakdev, Ahmedabad, Gujarat.",
  keywords: [
    "ANC Events",
    "Destination Wedding Planner Ahmedabad",
    "Luxury Wedding Gujarat",
    "Destination Weddings Udaipur Jaipur Goa",
    "Bespoke Event Management",
    "Event Design Ahmedabad",
  ],
  authors: [{ name: "ANC Events" }],
  creator: "ANC Events",
  openGraph: {
    title: "ANC Events — Destination Weddings & Bespoke Events",
    description:
      "Crafting extraordinary celebrations with intention and architectural elegance. Based in Ahmedabad, working across India.",
    url: "https://ancevents.in",
    siteName: "ANC Events",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/placeholder-wedding-1.jpg",
        width: 1600,
        height: 1067,
        alt: "ANC Events Destination Wedding",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-ivory text-charcoal selection:bg-bronze selection:text-ivory">
        {/* Skip to Content for Accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Global Navigation */}
        <Navigation />

        {/* Main Page Content */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp CTA */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
