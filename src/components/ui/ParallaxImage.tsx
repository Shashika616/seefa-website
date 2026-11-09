import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import type { Photo } from "@/lib/images";

interface ParallaxImageProps {
  photo: Photo;
  /** Fraction of the frame height the image drifts across while scrolling past. */
  strength?: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  /** Decorative backdrops pass true so screen readers skip them. */
  decorative?: boolean;
}

/**
 * A full-bleed photo that drifts slower than the page as it scrolls by.
 *
 * A native CSS scroll-driven animation (.parallax-layer in globals.css), so it
 * runs on the compositor with no JavaScript at all, not even a scroll
 * listener. The image is oversized vertically so the drift never exposes an
 * edge. Browsers without scroll-driven animations, and reduced-motion users,
 * get a still image.
 */
export default function ParallaxImage({
  photo,
  strength = 0.18,
  priority,
  sizes = "100vw",
  className,
  imgClassName,
  decorative,
}: ParallaxImageProps) {
  return (
    <div className={cn("parallax-frame absolute inset-0 overflow-hidden", className)}>
      <div
        className="parallax-layer absolute inset-x-0 -top-[12%] -bottom-[12%]"
        style={{ "--pstr": `${(strength * 100) / 2}%` } as CSSProperties}
      >
        <Image
          src={photo.src}
          alt={decorative ? "" : photo.alt}
          fill
          priority={priority}
          fetchPriority={priority ? "high" : "auto"}
          sizes={sizes}
          placeholder="blur"
          blurDataURL={photo.blur}
          className={cn("object-cover", imgClassName)}
        />
      </div>
    </div>
  );
}
