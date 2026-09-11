"use client";
import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main" className="relative pt-24 md:pt-32">
      <section className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">Something went wrong</p>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            We hit an <span className="text-gradient">unexpected error</span>.
          </h1>
          <p className="text-slate-600 text-lg max-w-xl mx-auto mb-10">
            Try again in a moment. If it keeps happening, email us at{" "}
            <a href="mailto:info@Seefalk.com" className="text-ink font-semibold hover:underline">
              info@Seefalk.com
            </a>
            .
          </p>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-ink text-white font-semibold px-8 py-4 rounded-full hover:bg-black transition-colors"
          >
            <RotateCcw size={18} /> Try again
          </button>
          {error.digest && (
            <p className="mt-8 text-xs font-mono text-slate-400">Reference: {error.digest}</p>
          )}
        </div>
      </section>
    </main>
  );
}
