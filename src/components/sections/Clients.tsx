import fs from "fs";
import path from "path";
import { Building2 } from "lucide-react";
import Image from "next/image";

const SECTORS = ["Retail", "Manufacturing", "Government", "Education", "Hospitality", "Logistics", "Healthcare", "Finance"];

function getClientLogos() {
  try {
    const dir = path.join(process.cwd(), "public", "images", "clients");
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(png|jpe?g|svg|webp)$/i.test(f))
      .sort()
      .map((f) => ({
        src: `/images/clients/${f}`,
        name: f
          .replace(/\.[^.]+$/, "")
          .replace(/[-_]+/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase()),
      }));
  } catch {
    return [];
  }
}

export default function Clients() {
  const logos = getClientLogos();

  return (
    <section id="clients" className="py-20 md:py-28 bg-white/60 border-t border-slate-900/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">Our Clients</p>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Trusted across <span className="text-gradient">Sri Lanka</span>.
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-12">
          From retail chains to government institutions our systems run daily
          operations for 100+ organizations.
        </p>

        {logos.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="group bg-white rounded-2xl border border-slate-900/5 p-6 flex flex-col items-center justify-center gap-3 hover:shadow-lg hover:border-slate-900/10 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={64}
                  className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-xs font-semibold text-slate-500 group-hover:text-ink transition-colors">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SECTORS.map((s) => (
              <div key={s} className="bg-white rounded-2xl border border-slate-900/5 p-5 flex flex-col items-center gap-2 text-slate-500">
                <Building2 size={18} className="text-brand-purple" />
                <span className="text-sm font-semibold">{s}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}