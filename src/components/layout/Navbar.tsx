"use client";
import { useState, useEffect, useCallback, memo, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";

const Navbar = memo(function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Scrollspy — highlights the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback((e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    setActive(id); // instant feedback, even before the scroll lands
    window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `#${id}`);
      }
    }, 60);
  }, []);

  const Logo = (
    <a href="#" className="flex items-center gap-2" aria-label="Seefa Business Solutions home">
      <Image
        src="/images/seefa-logo.png"
        alt="Seefa Business Solutions"
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
        "md:border-b-0 md:bg-white/70 md:backdrop-blur-xl",
        "shadow-lg shadow-slate-900/5"
      )}
    >
      <div className="flex items-center justify-between px-4 md:px-6 py-4 md:py-3">
        {Logo}

        {/* Desktop links — active section gets a solid pill */}
        <div className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map((link: string) => {
            const id = link.toLowerCase();
            return (
              <a
                key={link}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                aria-current={active === id ? "page" : undefined}
                className={cn(
                  "px-4 py-2 rounded-full text-[15px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple",
                  active === id
                    ? "bg-ink text-white shadow-sm"
                    : "text-slate-800 hover:bg-slate-900/5 hover:text-ink"
                )}
              >
                {link}
              </a>
            );
          })}
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

      {/* Mobile dropdown — active link gets a soft tinted background */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-slate-900/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {NAV_LINKS.map((link: string) => {
                const id = link.toLowerCase();
                return (
                  <a
                    key={link}
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                    className={cn(
                      "block text-lg font-semibold py-2.5 px-3 rounded-xl transition-colors",
                      active === id
                        ? "text-brand-purple bg-brand-purple/10"
                        : "text-slate-800 hover:text-ink hover:bg-slate-900/5"
                    )}
                  >
                    {link}
                  </a>
                );
              })}
              <a
                href="#client-login"
                className="w-full bg-orange-400 text-white font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-orange-500 transition-colors mt-4"
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