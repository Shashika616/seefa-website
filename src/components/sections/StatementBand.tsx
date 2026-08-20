export default function StatementBand() {
  return (
    <section className="relative py-24 md:py-32 bg-ink overflow-hidden">
      <div aria-hidden className="absolute -top-[40%] left-[5%] w-[40rem] h-[40rem] gpu bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.15),transparent_60%)]" />
      <div aria-hidden className="absolute -bottom-[40%] right-[5%] w-[40rem] h-[40rem] gpu bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-white/50 mb-6">Since 1999</p>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          We don&apos;t just build software. We build what{" "}
          <span className="bg-gradient-to-r from-brand-purple-light to-brand-blue bg-clip-text text-transparent">
            Sri Lankan businesses run on
          </span>
          .
        </h2>
      </div>
    </section>
  );
}