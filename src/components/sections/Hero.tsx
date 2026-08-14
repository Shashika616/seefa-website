"use client";
import { memo } from "react";
import { motion } from "framer-motion";

const Hero = memo(function Hero() {
  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* The 4 brand blobs — radial gradients, zero GPU cost */}
      <div aria-hidden className="absolute -top-[20%] -left-[15%] w-[50rem] h-[50rem] gpu bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.16),transparent_60%)]" />
      <div aria-hidden className="absolute -top-[10%] -right-[15%] w-[45rem] h-[45rem] gpu bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.14),transparent_60%)]" />
      <div aria-hidden className="absolute -bottom-[20%] -left-[10%] w-[40rem] h-[40rem] gpu bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_60%)]" />
      <div aria-hidden className="absolute -bottom-[15%] -right-[10%] w-[40rem] h-[40rem] gpu bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12),transparent_60%)]" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05]"
        >
          Engineering the <br className="hidden sm:block" />
          <span className="text-gradient">future of</span> software.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8 sm:mb-12"
        >
          From custom application development to high-level consultancy.
          We build scalable systems that grow with your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
        >
          <a href="#work" className="bg-ink text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-ink">
            View Products
          </a>
          <a href="#contact" className="glass text-ink font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand-purple">
            Connect With Us
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 hidden md:flex flex-col items-center gap-2 text-xs text-slate-400"
      >
        <span>Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent"
        />
      </motion.div>
    </section>
  );
});

export default Hero;