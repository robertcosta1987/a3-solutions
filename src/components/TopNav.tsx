"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#abordagem", label: "Abordagem" },
  { href: "#processo",  label: "Como trabalhamos" },
  { href: "#servicos",  label: "Serviços" },
  { href: "#industrias", label: "Indústrias" },
  { href: "#solucoes",  label: "Soluções" },
];

export function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-shadow ${scrolled ? "glass shadow-[0_1px_0_var(--hairline)]" : ""}`}>
      <div className="shell flex items-center justify-between h-16">
        <motion.a
          href="#top"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex items-center gap-2 font-display text-lg tracking-tight"
        >
          <Logo />
          <span>A3 Soluções</span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((it, i) => (
            <motion.a
              key={it.href}
              href={it.href}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 + i * 0.05 }}
              className="px-3 py-1.5 rounded-md text-sm text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-black/[0.03] transition-colors"
            >
              {it.label}
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="#contato"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="btn btn-primary text-sm hidden sm:inline-flex"
          style={{ padding: "10px 18px" }}
        >
          Falar com especialistas
        </motion.a>
      </div>
    </header>
  );
}

function Logo() {
  // Subtle "A3" mark — three stacked bars in a circular outline. Pure SVG,
  // scales with text. Cobalt → cyan gradient hints at the brand colours.
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden>
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--cobalt-deep)" />
          <stop offset="100%" stopColor="var(--cyan)" />
        </linearGradient>
      </defs>
      <circle cx="14" cy="14" r="13" fill="none" stroke="url(#logo-grad)" strokeWidth="1.6" />
      <rect x="8"  y="9"  width="12" height="2"   rx="1" fill="url(#logo-grad)" />
      <rect x="8"  y="13" width="9"  height="2"   rx="1" fill="var(--ink)" />
      <rect x="8"  y="17" width="12" height="2"   rx="1" fill="url(#logo-grad)" />
    </svg>
  );
}
