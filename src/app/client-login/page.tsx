import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Lock, LifeBuoy, LogIn, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Login",
  description: "Secure portal access for Seefa Business Solutions support and maintenance clients.",
  alternates: { canonical: "/client-login" },
  robots: { index: false, follow: true },
};

/** External client portal. Opened in a new tab so the marketing site stays put. */
const PORTAL_URL = "http://eauwp2pl11szzlimj7q7gu91.169.58.169.162.sslip.io/";

const POINTS = [
  { icon: ShieldCheck, title: "Secure access", body: "Portal credentials are issued per organisation by your account manager." },
  { icon: LifeBuoy, title: "Support tickets", body: "Log issues, track progress and review your maintenance history." },
];

export default function ClientLoginPage() {
  return (
    <main id="main" className="relative pt-24 md:pt-32">
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-orange to-amber-400 mb-6">
              <Lock size={22} className="text-white" />
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">Client Portal</p>
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              Client <span className="text-gradient">login</span>
            </h1>
            <p className="text-slate-600 text-lg">
              The portal is available to clients on an active support agreement. Contact your account
              manager to have access issued.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {POINTS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-2xl border border-slate-900/5 p-8 shadow-sm">
                <Icon size={20} className="text-brand-purple mb-4" />
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ink text-white font-semibold px-8 py-4 rounded-full hover:bg-black hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/15 transition-all duration-300"
              >
                <LogIn size={18} /> Already a client? Sign in
              </a>
              <a
                href={`mailto:${SITE.email}?subject=Client%20Portal%20Access`}
                className="inline-flex items-center gap-2 glass text-ink font-semibold px-8 py-4 rounded-full hover:bg-white transition-colors"
              >
                Request portal access <ArrowUpRight size={18} />
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Not a client yet?{" "}
              <Link href="/contact" className="text-ink font-semibold hover:underline">
                Talk to us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
