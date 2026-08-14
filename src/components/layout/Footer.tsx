import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import Image from "next/image";

// Brand icon components with SVG paths
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const SOCIAL_LINKS = [
  { 
    icon: LinkedInIcon, 
    href: "#", 
    label: "LinkedIn", 
    hoverColor: "hover:bg-[#0A66C2] hover:border-[#0A66C2]" 
  },
  { 
    icon: GitHubIcon, 
    href: "#", 
    label: "GitHub", 
    hoverColor: "hover:bg-slate-900 hover:border-slate-900" 
  },
  { 
    icon: TwitterIcon, 
    href: "#", 
    label: "Twitter", 
    hoverColor: "hover:bg-slate-900 hover:border-slate-900" 
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative mt-24 border-t border-slate-900/5 overflow-hidden">
      {/* Soft brand blobs */}
      <div aria-hidden className="absolute -top-[30%] left-[10%] w-[40rem] h-[40rem] gpu bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.10),transparent_60%)]" />
      <div aria-hidden className="absolute -bottom-[30%] right-[10%] w-[40rem] h-[40rem] gpu bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.10),transparent_60%)]" />

      {/* Top CTA */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
        <p className="text-xs text-slate-500 mb-4 font-mono uppercase tracking-widest">
          Get in Touch
        </p>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4">
          Take your <span className="text-gradient">right decision</span>.
        </h2>
        <p className="text-slate-600 max-w-xl mx-auto mb-10">
          You&apos;re at the right place, right time. Let&apos;s talk about your next project.
        </p>

        {/* Email CTA */}
        <a
          href="mailto:info@Seefalk.com"
          className="inline-flex items-center gap-2 bg-brand-orange text-white font-semibold px-8 py-4 rounded-full hover:bg-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange mb-8"
        >
          info@Seefalk.com <ArrowUpRight size={18} />
        </a>

        {/* Social links with icons and labels */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
            Follow us
          </p>
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="group flex flex-col items-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-purple rounded-lg p-2"
                >
                  <div className={`w-11 h-11 rounded-full border border-slate-900/15 bg-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:text-white hover:shadow-lg ${social.hoverColor} text-slate-600`}>
                    <Icon className="w-5 h-5 transition-colors duration-300" />
                  </div>
                  <span className="text-xs text-slate-500 font-medium group-hover:text-ink transition-colors">
                    {social.label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4-column info grid */}
      <div className="relative border-t border-slate-900/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand + short pitch */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/seefa-logo.png"
                alt="Seefa IT Solutions"
                width={140}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Quality software solutions that let you manage inventory, sales, customers, and every critical function anytime, anywhere.
            </p>
          </div>

          {/* Location */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={14} className="text-brand-purple" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Location</span>
            </div>
            <address className="not-italic text-slate-600 text-sm leading-relaxed">
              No-38, Obahena Road,<br />
              Madiwela, Kotte,<br />
              Sri Lanka.
            </address>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Phone size={14} className="text-brand-blue" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Contact</span>
            </div>
            <div className="space-y-2 text-sm">
              <a href="tel:+94773247216" className="block text-slate-600 hover:text-ink transition-colors">
                +94 (077) 324 7216
              </a>
              <a href="tel:+94113042141" className="block text-slate-600 hover:text-ink transition-colors">
                +94 (011) 304 2141
              </a>
              <a href="mailto:info@Seefalk.com" className="block text-slate-600 hover:text-ink transition-colors">
                info@Seefalk.com
              </a>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={14} className="text-brand-green" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Why Us</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Business-critical software you can rely on daily — scalable, accessible, and built around real end-users.
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-brand-orange" /> End-to-end solutions
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-brand-orange" /> Ongoing support
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-brand-orange" /> Local expertise
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-slate-900/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-center text-sm text-slate-500">
          <span>© 2026 Seefa IT Solutions. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}