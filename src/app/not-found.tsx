import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ROUTES } from "@/lib/site";

export default function NotFound() {
  return (
    <main id="main" className="relative pt-24 md:pt-32">
      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">Error 404</p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-4">
            Page <span className="text-gradient">not found</span>.
          </h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mb-10">
            The page you were looking for has moved or never existed. Here&apos;s where to go instead.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-ink text-white font-semibold px-8 py-4 rounded-full hover:bg-black transition-colors"
          >
            <ArrowLeft size={18} /> Back to home
          </Link>

          <div className="mt-14 flex flex-wrap justify-center gap-2">
            {ROUTES.filter((r) => r.path !== "/").map((r) => (
              <Link
                key={r.path}
                href={r.path}
                className="glass px-4 py-2 rounded-full text-sm font-semibold text-slate-700 hover:bg-white transition-colors capitalize"
              >
                {r.path.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
