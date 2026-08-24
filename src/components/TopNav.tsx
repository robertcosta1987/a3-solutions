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
  // Horizontal lockup: generated mark + wordmark set in live type.
  //
  // The previous logo was a square emblem — cube, cloud, four icon badges and a
  // chrome-bevelled wordmark — scaled to fit an 80px bar. A square lockup is
  // capped by the bar's height, so everything inside it, the name included,
  // collapsed to a smear. Splitting it horizontally lets the mark breathe and
  // frees the name to be set at a size people can actually read.
  //
  // The name is TEXT, not part of the image, and that is the whole point: it
  // stays crisp at every size and zoom, recolours with the theme, costs no
  // bytes, and is selectable. Letterforms baked into a raster are the first
  // thing to fall apart — which is exactly what went wrong here before.
  // Abaixo de 390px sobra só o símbolo. Não é preferência: nessa largura a
  // barra guarda o botão de contato (171px) mais o respiro do shell, e o que
  // resta não comporta a palavra em corpo legível — espremê-la reproduziria
  // exatamente o problema que este lockup veio resolver. O símbolo sozinho é
  // logotipo legítimo, e o nome da empresa continua no <title> e no h1.
  //
  // O botão fica onde está de propósito, ainda que o código o declare
  // `hidden sm:inline-flex`: `.btn` está definida fora das camadas do Tailwind
  // em globals.css, e regra sem camada vence regra em camada — então o
  // `hidden` nunca teve efeito. No celular o menu está oculto, então esse botão
  // é a única navegação da barra; fazê-lo sumir deixaria o topo sem saída.
  return (
    <span className="flex items-center gap-2 sm:gap-3">
      <Image
        src="/marca-rubix360.webp"
        alt=""
        aria-hidden
        width={256}
        height={256}
        priority
        className="h-10 w-auto sm:h-12"
      />
      <span className="font-display leading-none tracking-[-0.03em] text-[20px] sm:text-[29px] text-[var(--ink-strong)] max-[389px]:hidden">
        Rubix<span style={{ color: "var(--cobalt)" }}>360</span>
      </span>
    </span>
  );
}
