"use client";
import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = memo(function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const Logo = (
    <Link href="/" className="flex items-center gap-2" aria-label="Seefa Business Solutions home">
      <Image
        src="/images/seefa-logo.png"
        alt="Seefa Business Solutions"
        width={140}
        height={40}
        priority
        className="h-8 w-auto object-contain"
      />
    </Link>
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

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full text-[15px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple",
                  isActive
                    ? "bg-ink text-white shadow-sm"
                    : "text-slate-800 hover:bg-slate-900/5 hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/client-login"
            className="hidden md:inline-flex bg-orange-400 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-orange-500 transition-colors items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <Lock size={14} /> Client Login
          </Link>
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
            <div className="px-4 py-6 space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block text-lg font-semibold py-2.5 px-3 rounded-xl transition-colors",
                      isActive
                        ? "text-brand-purple bg-brand-purple/10"
                        : "text-slate-800 hover:text-ink hover:bg-slate-900/5"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/client-login"
                onClick={() => setOpen(false)}
                className="w-full bg-orange-400 text-white font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:bg-orange-500 transition-colors mt-4"
              >
                <Lock size={16} /> Client Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
});

export default Navbar;