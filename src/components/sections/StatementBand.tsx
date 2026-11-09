import ParallaxImage from "@/components/ui/ParallaxImage";
import Reveal from "@/components/ui/Reveal";
import { PHOTOS } from "@/lib/images";

export default function StatementBand() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-32 md:py-48">
      <ParallaxImage photo={PHOTOS.bandColombo} decorative strength={0.3} />
      <div aria-hidden className="absolute inset-0 bg-ink/75" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/80" />

      <Reveal className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          We don&apos;t just build software. We build what{" "}
          <span className="text-gradient-light">Sri Lankan businesses run on</span>.
        </h2>
      </Reveal>
    </section>
  );
}
