"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#abordagem", label: "Abordagem" },
  { href: "#processo",  label: "Como trabalhamos" },
  { href: "#modular",   label: "Modular" },
  { href: "#servicos",  label: "Serviços" },
  { href: "#industrias", label: "Indústrias" },
  { href: "#solucoes",  label: "Soluções" },
  { href: "#produtos",  label: "Produtos 360" },
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
      <div className="shell flex items-center justify-between h-20 sm:h-24">
        <motion.a
          href="#top"
          aria-label="Rubix360 — início"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="flex items-center"
        >
          <Logo />
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
  // Official Rubix360 lockup (transparent PNG in /public).
  return (
    <Image
      src="/rubix360-logo.png"
      alt="Rubix360"
      width={1040}
      height={988}
      priority
      className="h-14 w-auto sm:h-16"
    />
  );
}
