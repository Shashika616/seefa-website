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

/**
 * Server-side redirect that resolves the portal URL from CLIENT_PORTAL_URL at
 * request time, so the destination is configurable without a rebuild.
 */
const PORTAL_URL = "/client-login/portal";

const POINTS = [
  { icon: ShieldCheck, title: "Secure access", body: "Portal credentials are issued per organisation by your account manager." },
  { icon: LifeBuoy, title: "Support tickets", body: "Log issues, track progress and review your maintenance history." },
];

export default function ClientLoginPage() {
  return (
    <main id="main" className="relative pt-24 md:pt-32">
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
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

          {/* Primary actions lead the page, so signing in needs no scrolling */}
          <div className="text-center mb-14">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <a
                href={PORTAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 bg-ink text-white text-base font-semibold px-8 py-4 rounded-full shadow-lg shadow-slate-900/10 hover:bg-black hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/20 active:translate-y-0 transition-all duration-300"
              >
                <LogIn size={18} className="shrink-0" />
                Already a client? Sign in
                <ArrowUpRight
                  size={16}
                  className="shrink-0 opacity-60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href={`mailto:${SITE.email}?subject=Client%20Portal%20Access`}
                className="inline-flex items-center justify-center gap-2 bg-white text-ink text-base font-semibold px-8 py-4 rounded-full border border-slate-900/10 hover:border-slate-900/20 hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-900/5 active:translate-y-0 transition-all duration-300"
              >
                Request portal access
              </a>
            </div>
            <p className="mt-5 text-sm text-slate-500">
              Not a client yet?{" "}
              <Link href="/contact" className="text-ink font-semibold underline decoration-slate-900/20 underline-offset-4 hover:decoration-slate-900/60 transition-colors">
                Talk to us
              </Link>
              .
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {POINTS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-white rounded-2xl border border-slate-900/5 p-8 shadow-sm">
                <Icon size={20} className="text-brand-purple mb-4" />
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
