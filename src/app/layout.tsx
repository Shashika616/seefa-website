import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import MotionProvider from "@/components/providers/MotionProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IntroSplash, { INTRO_SCRIPT } from "@/components/layout/IntroSplash";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/ui/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    // Kept under ~60 characters so search results show it whole.
    default: `${SITE.name} | ERP & POS Software in Sri Lanka`,
    template: `%s | ${SITE.shortName}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: ["ERP Sri Lanka", "POS system", "payroll EPF ETF", "inventory software", "business software", SITE.name],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_LK",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: SITE.name, description: SITE.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FDFCFB",
  colorScheme: "light",
};

// One @graph so Organization, the local business listing and the site itself
// are linked by @id rather than competing as three unrelated entities.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      alternateName: SITE.shortName,
      url: SITE.url,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE.url}/#logo`,
        url: `${SITE.url}/images/seefa-logo.png`,
        width: 254,
        height: 103,
      },
      image: { "@id": `${SITE.url}/#logo` },
      description: SITE.description,
      foundingDate: SITE.founded,
      email: SITE.email,
      telephone: SITE.phones[0],
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.locality,
        addressCountry: SITE.address.country,
      },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      knowsAbout: [
        "Enterprise Resource Planning",
        "Point of Sale systems",
        "Payroll and EPF/ETF processing",
        "Inventory management",
        "Custom software development",
      ],
    },
    {
      // Local search relies on this type far more than plain Organization.
      "@type": "ProfessionalService",
      "@id": `${SITE.url}/#business`,
      name: SITE.name,
      parentOrganization: { "@id": `${SITE.url}/#organization` },
      url: SITE.url,
      image: { "@id": `${SITE.url}/#logo` },
      priceRange: "$$",
      telephone: SITE.phones[0],
      email: SITE.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.locality,
        addressCountry: SITE.address.country,
      },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      serviceType: [
        "ERP software",
        "POS software",
        "Payroll software",
        "Custom software development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      publisher: { "@id": `${SITE.url}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: INTRO_SCRIPT adds a class to <html> before React hydrates.
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        {/* Must run before first paint, so it is inline rather than a deferred Script */}
        <script dangerouslySetInnerHTML={{ __html: INTRO_SCRIPT }} />
      </head>
      {/* Extensions such as Grammarly inject attributes on <body> before React hydrates. This
          only ignores attribute differences on <body> itself, never in the page content. */}
      <body className="min-h-dvh" suppressHydrationWarning>
        <IntroSplash />
        <a href="#main" className="skip-link">Skip to main content</a>
        <MotionProvider>
            <Navbar />
            {/* The page sheet: rounds off and lifts away from the footer beneath it.
                overflow-clip, not overflow-hidden, so sticky sections keep working. */}
            <div className="relative z-10 overflow-clip rounded-b-[2rem] bg-bg shadow-[0_40px_80px_-40px_rgba(11,13,18,0.45)] md:rounded-b-[3rem]">
              {children}
            </div>
            <Footer />
        </MotionProvider>
        {/* Escaped JSON-LD: a "</script>" in any value cannot break out of the tag */}
        <JsonLd data={structuredData} />
      </body>
    </html>
  );
}
