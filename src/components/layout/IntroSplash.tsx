const NAME = "Seefa";

/**
 * Opening animation, about 3.3s end to end: a gradient orbit draws around the
 * Seefa mark while a small satellite travels it (echoing the hero globe) and a
 * glow breathes behind it, the name rises letter by letter, then the lockup
 * zooms gently through as the curtain splits open top and bottom.
 *
 * Pure CSS layered over the already-rendered page, so content is never delayed
 * or hidden from crawlers. INTRO_SCRIPT (inlined in <head>) decides before
 * first paint whether it plays: on every full page load and refresh, never for
 * reduced-motion users, and never without JavaScript. Client-side navigation
 * between pages keeps the layout mounted, so it does not replay.
 */
export default function IntroSplash() {
  return (
    <div aria-hidden className="intro">
      <div className="intro-curtain intro-curtain-top" />
      <div className="intro-curtain intro-curtain-bottom" />

      <div className="intro-inner">
        <div className="intro-emblem">
          <span className="intro-glow" />
          {/* A small satellite that travels the orbit, echoing the hero globe */}
          <span className="intro-sat"><span className="intro-sat-dot" /></span>
          <svg className="intro-orbit" viewBox="0 0 120 120">
            <defs>
              <linearGradient id="intro-orbit-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#0EA5E9" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="56" pathLength={1} stroke="url(#intro-orbit-grad)" />
          </svg>
          {/* eslint-disable-next-line @next/next/no-img-element -- must paint before JS; next/image would wait on hydration */}
          <img src="/images/seefa-mark.png" alt="" width={96} height={96} className="intro-mark" />
        </div>

        <div className="intro-name">
          <span className="intro-word font-display">
            {NAME.split("").map((ch, i) => (
              <span key={i} className="intro-letter" style={{ "--i": i } as React.CSSProperties}>
                {ch}
              </span>
            ))}
          </span>
          <span className="intro-sub">Business Solutions</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Runs in <head> before the body paints.
 *
 * Refresh: a reload always starts at the top, on the intro and the hero,
 * instead of the browser restoring the old scroll position. Only reloads are
 * affected, and restoration is switched back on right after load, so the back
 * button still returns visitors to where they were.
 *
 * Intro: marks <html> with intro-play (the splash shows and page entrances
 * wait for it), then clears it. The class must outlive every entrance it
 * delays (the last, the hero globe fade, ends near 4.6s); removing it while
 * one is still running would shorten that element's delay mid-flight and make
 * it jump to its end state.
 */
export const INTRO_SCRIPT = `(function(){try{var d=document.documentElement,h=history;d.classList.add("js");var nav=performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(nav&&nav.type==="reload"&&"scrollRestoration"in h){h.scrollRestoration="manual";addEventListener("load",function(){scrollTo(0,0);setTimeout(function(){h.scrollRestoration="auto"},0)})}if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;d.classList.add("intro-play");setTimeout(function(){d.classList.remove("intro-play")},5600)}catch(e){}})();`;
