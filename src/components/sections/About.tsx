"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { WHY_US } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">About Us</p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
            A partner, not just a <span className="text-gradient">provider</span>.
          </h2>
          <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            <p>
              <span className="font-semibold text-ink">Seefa Business Solutions</span> has been one of
              Sri Lanka&apos;s leading IT solutions providers since 1999, delivering quality software
              to private and government sectors alike.
            </p>
            <p>
              We empower businesses to achieve outstanding outcomes developing and implementing
              innovative systems for ERP, retail, hospitality, education, logistics and more.
            </p>
            <p>
              Every solution is built around real business workflows and backed by long-term,
              local support.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-2xl border border-slate-900/5 p-8 shadow-sm"
        >
          <h3 className="text-xl font-bold mb-6">Why Seefa Business Solutions</h3>
          <ul className="space-y-4">
            {WHY_US.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 size={19} className="text-brand-green mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}