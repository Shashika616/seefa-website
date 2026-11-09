import { getImageProps } from "next/image";
import type { CSSProperties } from "react";
import type { Photo } from "@/lib/images";

/** Photos around the globe. The CSS geometry (.gc-stage radius and setback) is written for 6. */
export const GLOBE_FACES = 6;
/** Vertical strips per photo; more strips means a smoother curve. */
const STRIPS = 6;
const SLICE = 360 / (GLOBE_FACES * STRIPS);

/** A photo as an optimized CSS image-set, the route Next documents for backgrounds. */
function backgroundImage(photo: Photo) {
  const { props } = getImageProps({
    src: photo.src,
    alt: "",
    // 1200 at 1x and 2400 at 2x: sharp enough under the hero scrim, and much
    // lighter for the GPU than full-size textures on all 36 strips.
    width: 1200,
    height: Math.round((1200 * photo.height) / photo.width),
    quality: 60,
  });
  const set = (props.srcSet ?? "")
    .split(", ")
    .filter(Boolean)
    .map((entry) => {
      const [url, density] = entry.split(" ");
      return `url("${url}") ${density}`;
    })
    .join(", ");
  return `image-set(${set})`;
}

/**
 * Full-bleed hero background where the photos sit on the surface of a giant
 * globe that turns slowly and continuously: each picture curves away around
 * the horizon as the next one rolls into view.
 *
 * Every photo is cut into vertical strips arranged around a cylinder, so the
 * surface is genuinely curved: at rest the picture bulges gently toward the
 * viewer, and while turning it bends around the edge instead of folding at a
 * hard corner. The cylinder is set back so the front photo's edges meet the
 * screen exactly, which fills the frame with no gaps.
 *
 * Pure CSS 3D: the turn runs on the compositor with no per-frame JavaScript.
 * It pauses off-screen (data-paused) and holds on the first photo for
 * reduced-motion users.
 */
export default function GlobeCarousel({ photos, paused }: { photos: Photo[]; paused?: boolean }) {
  const faces = photos.slice(0, GLOBE_FACES);

  return (
    <div aria-hidden className="gc-stage absolute inset-0" data-paused={paused || undefined}>
      <div className="gc-axis">
        <div className="gc-ring">
          {faces.map((photo, fi) => {
            const ar = (photo.width / photo.height).toFixed(4);
            const bg = backgroundImage(photo);
            return (
              <div key={photo.src} className="gc-face" style={{ "--ar": ar } as CSSProperties}>
                {Array.from({ length: STRIPS }, (_, si) => (
                  <div
                    key={si}
                    className="gc-strip"
                    style={
                      {
                        "--i": si,
                        backgroundImage: bg,
                        transform: `rotateY(${fi * 360 / GLOBE_FACES + (si - (STRIPS - 1) / 2) * SLICE}deg) translateZ(var(--gc-r))`,
                      } as CSSProperties
                    }
                  />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
