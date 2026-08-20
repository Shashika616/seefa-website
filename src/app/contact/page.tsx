import { ArrowUpRight, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact | Seefa Business Solutions",
  description: "Get in touch with Seefa Business Solutions — request a demo or discuss your project.",
};

export default function ContactPage() {
  return (
    <main className="relative pt-24 md:pt-32">
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">Contact Us</p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
              Let&apos;s <span className="text-gradient">talk</span>
            </h1>
            <p className="text-slate-600 text-lg">
              Ready to transform your business with better software? We&apos;re here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl border border-slate-900/5 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Visit Us</h3>
              </div>
              <address className="not-italic text-slate-600 leading-relaxed">
                No-38, Obahena Road,<br />
                Madiwela, Kotte,<br />
                Sri Lanka.
              </address>
            </div>

            <div className="bg-white rounded-2xl border border-slate-900/5 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-blue to-cyan-400 flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Call Us</h3>
              </div>
              <div className="space-y-2 text-slate-600">
                <a href="tel:+94773247216" className="block hover:text-ink transition-colors">
                  +94 (077) 324 7216
                </a>
                <a href="tel:+94113042141" className="block hover:text-ink transition-colors">
                  +94 (011) 304 2141
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="mailto:info@Seefalk.com?subject=Demo%20Request"
              className="inline-flex items-center gap-2 bg-brand-orange text-white font-semibold px-8 py-4 rounded-full hover:bg-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange"
            >
              Request a Demo <ArrowUpRight size={18} />
            </a>
            <p className="mt-6 text-sm text-slate-500">
              Or email us directly at <a href="mailto:info@Seefalk.com" className="text-ink font-semibold hover:underline">info@Seefalk.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}