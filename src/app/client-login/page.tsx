import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, History, KeyRound, LifeBuoy, LogIn, Mail, Phone, ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { GLOBE_PHOTOS } from "@/lib/constants";
import { SITE } from "@/lib/site";

// A members' doorway, not content: noindex keeps it out of search results.
export const metadata: Metadata = pageMetadata({
  title: "Client Login",
  description: "Secure portal access for Seefa Business Solutions support and maintenance clients.",
  path: "/client-login",
  noindex: true,
});

/**
 * Server-side redirect that resolves the portal URL from CLIENT_PORTAL_URL at
 * request time, so the destination is configurable without a rebuild.
 */
const PORTAL_URL = "/client-login/portal";
const ACCESS_MAIL = `mailto:${SITE.email}?subject=${encodeURIComponent("Client Portal Access")}`;

const PHONES = [
  { href: "tel:+94773247216", label: "+94 (077) 324 7216" },
  { href: "tel:+94113042141", label: "+94 (011) 304 2141" },
];

// Only what this page has always said about the portal; no invented features.
const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Secure, per-organisation access",
    body: "Portal credentials are issued to each organisation by your account manager, so only your team can sign in.",
  },
  {
    icon: LifeBuoy,
    title: "Support tickets",
    body: "Log issues with your Seefa systems and track their progress through to resolution.",
  },
  {
    icon: History,
    title: "Maintenance history",
    body: "Review the support and maintenance work carried out on your systems over time.",
  },
];

const STEPS = [
  { title: "Request access", body: "Email us from your organisation's address and ask for portal access." },
  { title: "Get your credentials", body: "Your account manager issues sign-in details for your organisation." },
  { title: "Sign in", body: "Use the sign-in button at the top of this page whenever you need support." },
];

export default function ClientLoginPage() {
  return (
    <main id="main" className="relative">
      <PageHero
        photos={GLOBE_PHOTOS.clientLogin}
        title={<>Your Seefa <span className="text-gradient-light">client portal</span>.</>}
        lede="Support tickets and maintenance history for clients on an active support agreement, in one secure place."
        crumbs={[{ name: "Client Login", path: "/client-login" }]}
      >
        {/* The two actions lead the page, so signing in needs no scrolling */}
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href={PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-7 py-4 font-semibold text-ink transition-[transform,box-shadow] duration-500 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/40"
          >
            <LogIn size={18} className="shrink-0" />
            Already a client? Sign in
            <ArrowUpRight size={16} className="shrink-0 opacity-60 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href={ACCESS_MAIL}
            className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/25 px-7 py-4 font-semibold text-white transition-colors duration-500 hover:border-white/60 hover:bg-white/10"
          >
            <KeyRound size={17} className="shrink-0" />
            Request portal access
          </a>
        </div>
        <p className="mt-5 text-sm text-white/60">
          Not a client yet?{" "}
          <Link href="/contact" className="font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white">
            Talk to us
          </Link>
          .
        </p>
      </PageHero>

      {/* What the portal is for */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading
            title={<>Everything about your support, <span className="text-gradient">in one place</span>.</>}
            lede="The portal is for organisations on an active Seefa support agreement."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-slate-900/5 bg-white p-8 shadow-sm transition-shadow duration-500 hover:shadow-xl hover:shadow-slate-900/5">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-purple to-brand-blue text-white shadow-lg shadow-brand-purple/25">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to get access */}
      <section className="border-y border-slate-900/5 bg-white/60 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <SectionHeading
            title={<>Getting <span className="text-gradient">access</span>.</>}
            lede="Three steps, and your account manager handles the middle one."
            className="mb-0 md:mb-0"
          />
          <ol className="grid gap-4">
            {STEPS.map((step, i) => (
              // <li> stays the direct child of <ol>; the reveal wraps its content.
              <li key={step.title}>
                <Reveal delay={i * 0.08} className="flex gap-5 rounded-3xl border border-slate-900/5 bg-white p-6 shadow-sm sm:p-7">
                  <span aria-hidden className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink font-display text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-slate-600">{step.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Help with signing in */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="relative isolate overflow-hidden rounded-3xl bg-ink px-6 py-12 text-white sm:px-12 md:py-14">
              <div aria-hidden className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.35),transparent_65%)]" />
              <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
                <div>
                  <h2 className="text-3xl font-bold sm:text-4xl">Trouble signing in?</h2>
                  <p className="mt-3 max-w-md leading-relaxed text-white/70">
                    Call or email the support team and we&apos;ll get you back into the portal.
                  </p>
                </div>
                <div className="grid gap-3">
                  {PHONES.map((p) => (
                    <a
                      key={p.href}
                      href={p.href}
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 px-5 py-4 transition-colors duration-500 hover:border-white/30 hover:bg-white/5"
                    >
                      <span className="flex items-center gap-3 font-semibold">
                        <Phone size={18} className="text-brand-purple-light" />
                        {p.label}
                      </span>
                      <ArrowRight size={16} className="text-white/40 transition-transform duration-500 group-hover:translate-x-0.5" />
                    </a>
                  ))}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 px-5 py-4 transition-colors duration-500 hover:border-white/30 hover:bg-white/5"
                  >
                    <span className="flex items-center gap-3 font-semibold">
                      <Mail size={18} className="text-brand-purple-light" />
                      {SITE.email}
                    </span>
                    <ArrowRight size={16} className="text-white/40 transition-transform duration-500 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
