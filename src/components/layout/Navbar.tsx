"use client";
import { useState, memo, useCallback, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";

const Navbar = memo(function Navbar() {
  const [open, setOpen] = useState(false);

  // Programmatic navigation — works identically on touch & desktop browsers
  const handleNavClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();          // stop the flaky native hash jump
      setOpen(false);              // close mobile menu first
      window.setTimeout(() => {    // let the menu close, then scroll
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.replaceState(null, "", `#${id}`); // keep URL in sync
        }
      }, 60);
    },
    []
  );

  const Logo = (
    <a href="#" className="flex items-center gap-2" aria-label="Seefa IT home">
      <Image
        src="/images/seefa-logo.png"
        alt="Seefa IT Solutions"
        width={140}
        height={40}
        priority
        className="h-8 w-auto object-contain"
      />
    </a>
  );

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 md:top-4 left-0 md:left-1/2 md:-translate-x-1/2 z-50 w-full md:w-[95%] md:max-w-5xl md:rounded-full",
        "bg-white border-b border-slate-900/5",
        // "md:border-b-0 md:bg-white/70 md:backdrop-blur-xl",
        "shadow-lg shadow-slate-900/5"
      )}
    >
      <div className="flex items-center justify-between px-4 md:px-6 py-4 md:py-3">
        {Logo}

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link: string) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, link.toLowerCase())}
              className="relative text-[15px] font-semibold text-slate-800 transition-colors hover:text-ink focus:outline-none focus:ring-2 focus:ring-brand-purple rounded
                after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-[2px] after:rounded-full
                after:bg-gradient-to-r after:from-brand-purple after:to-brand-blue
                after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                hover:after:scale-x-100"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#client-login"
            className="hidden md:inline-flex bg-orange-400 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-orange-500 transition-colors items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <Lock size={14} /> Client Login
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 hover:bg-slate-900/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-slate-900/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {NAV_LINKS.map((link: string) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, link.toLowerCase())}
                  className="block text-lg font-semibold text-slate-800 hover:text-ink py-2"
                >
                  {link}
                </a>
              ))}
              <a
                href="#client-login"
                className="w-full bg-orange-400 text-white font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-orange-500 transition-colors"
              >
                <Lock size={16} /> Client Login
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
});

export default Navbar;