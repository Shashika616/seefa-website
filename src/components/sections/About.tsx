"use client";
import { memo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Users, Award, Rocket, CheckCircle2, Code2, Globe, Smartphone } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const DIFFERENTIATORS = [
  { icon: Rocket, title: "Best Solutions for Growth", description: "Helping your business scale with cutting-edge software." },
  { icon: Code2, title: "Fully Customized", description: "Every solution tailored to your exact requirements." },
  { icon: Users, title: "Affordable Pricing", description: "Enterprise-grade solutions at reasonable costs." },
  { icon: Award, title: "Smart Operations", description: "Bringing intelligence to your daily business workflows." },
];

const STATS = [
  { value: "25+", label: "Years of Excellence" },
  { value: "100+", label: "Clients Served" },
  { value: "100+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
];

const About = memo(function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { ref: triggerRef, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section id="about" ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient blob */}
      <motion.div
        style={{ y, opacity }}
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] gpu bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08),transparent_60%)]"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-3">About Us</p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Who We <span className="text-gradient">Are</span>
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left: Story */}
          <motion.div
            ref={triggerRef}
            initial={{ opacity: 0, x: -30 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed">
                <span className="font-semibold text-ink">Seefa IT Solutions</span> is one of the leading IT solutions providers since 1999, delivering quality software solutions for private and government sectors in Sri Lanka.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                We empower businesses to achieve outstanding outcomes by developing and implementing innovative software solutions tailored to each client&apos;s unique needs.
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <h3 className="text-xl font-bold text-ink flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                What We Deliver
              </h3>
              <ul className="space-y-2.5">
                {[
                  "ERP Applications",
                  "Customized Software Solutions",
                  "Industrial Software Development",
                  "Web Applications",
                  "Mobile Apps Development",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 size={18} className="text-brand-green mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: How We're Different */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              How We&apos;re <span className="text-gradient">Different</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {DIFFERENTIATORS.map((diff, i) => {
                const Icon = diff.icon;
                return (
                  <motion.div
                    key={diff.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="bg-white rounded-2xl border border-slate-900/5 p-5 shadow-sm hover:shadow-lg hover:shadow-slate-900/5 transition-shadow duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center mb-3">
                      <Icon size={20} className="text-white" />
                    </div>
                    <h4 className="font-bold text-sm mb-1.5">{diff.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{diff.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl border border-slate-900/5 p-8 shadow-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default About;