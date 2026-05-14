"use client";

import { motion } from "framer-motion";

const FADE_UP = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.72, ease: [0.2, 0.8, 0.2, 1] as const, delay },
});

export function Hero() {
  return (
    <section id="top" className="hero-mesh relative overflow-hidden">
      <div className="hero-orb-a" aria-hidden />
      <div className="hero-orb-b" aria-hidden />
      <div className="hero-grid" aria-hidden />

      <div className="shell relative pt-24 pb-28 sm:pt-32 sm:pb-36">
        <motion.div {...FADE_UP(0)} className="flex items-center justify-center">
          <span className="eyebrow">Tecnologia trabalhando para você</span>
        </motion.div>

        <motion.h1
          {...FADE_UP(0.1)}
          className="font-display mt-7 text-center text-[clamp(40px,6.4vw,84px)] leading-[1.02] tracking-[-0.024em] text-[var(--ink-strong)]"
        >
          Transformamos desafios em <br className="hidden sm:block" />
          <span className="text-gradient-cool">tecnologia inteligente</span>
        </motion.h1>

        <motion.p
          {...FADE_UP(0.18)}
          className="mt-7 max-w-3xl mx-auto text-center text-[17px] sm:text-lg text-[var(--ink-muted)] leading-relaxed"
        >
          Software, IA, automação e soluções digitais desenvolvidas <em className="not-italic font-semibold text-[var(--ink)]">junto</em> com a sua empresa para acelerar crescimento, eficiência e inovação.
        </motion.p>

        <motion.div {...FADE_UP(0.26)} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#servicos" className="btn btn-primary">
            Conheça nossas soluções
            <Arrow />
          </a>
          <a href="#contato" className="btn btn-ghost">
            Fale com especialistas
          </a>
        </motion.div>

        <motion.div
          {...FADE_UP(0.36)}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto"
        >
          {[
            { value: "20+", label: "anos de experiência combinada" },
            { value: "50+", label: "projetos entregues" },
            { value: "8",   label: "setores atendidos" },
            { value: "100%", label: "co-criação com o cliente" },
          ].map((s, i) => (
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="card px-4 py-4 text-left bg-white/70 backdrop-blur"
            >
              <div className="font-display text-3xl text-[var(--ink-strong)]">{s.value}</div>
              <div className="mt-1 text-[12.5px] text-[var(--ink-muted)] leading-snug">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <path d="M3 8h9m0 0L8 4m4 4L8 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
