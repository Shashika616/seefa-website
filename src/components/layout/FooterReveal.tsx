import type { ReactNode } from "react";

/**
 * Makes the footer feel like it was sitting underneath the page. As the
 * footer scrolls into view its content starts higher (tucked behind the page
 * sheet above) and moves slower than the scroll, settling into place as the
 * page bottoms out, so the page appears to slide up and off it.
 *
 * A native scroll-driven animation (.footer-layer in globals.css): no
 * JavaScript, and it runs on the compositor. Scroll-linked rather than a pinned
 * footer, because a pinned one taller than the screen would reveal its bottom
 * (the copyright line) first and hide the call to action at its top.
 */
export default function FooterReveal({ children }: { children: ReactNode }) {
  return (
    <div className="footer-frame">
      <div className="footer-layer relative overflow-hidden">{children}</div>
    </div>
  );
}
