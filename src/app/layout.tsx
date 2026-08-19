import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: "Seefa Business Solutions | ERP, POS & Business Software — Sri Lanka",
  description: "Business software built around your business since 1999. ERP, POS, payroll, inventory and industry-specific solutions for private & government sectors across Sri Lanka.",
  openGraph: { title: "Seefa Business Solutions", description: "ERP, POS & business software since 1999.", type: "website" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#FDFCFB" };

const NOISE = "data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="min-h-dvh">
        {/* Film-grain overlay — static texture, zero JS cost */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[100] opacity-[0.04]"
          style={{ backgroundImage: `url("${NOISE}")` }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}