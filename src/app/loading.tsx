export default function Loading() {
  return (
    <main id="main" className="relative pt-24 md:pt-32" aria-busy="true" aria-label="Loading page">
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="skeleton h-3 w-28 mb-6" />
          <div className="skeleton h-12 sm:h-16 w-4/5 max-w-3xl mb-4" />
          <div className="skeleton h-12 sm:h-16 w-3/5 max-w-2xl mb-8" />
          <div className="skeleton h-4 w-full max-w-xl mb-3" />
          <div className="skeleton h-4 w-2/3 max-w-md" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="skeleton h-48 rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
