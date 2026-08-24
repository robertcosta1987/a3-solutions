"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section id="contato" className="section relative overflow-hidden">
      {/* Atmospheric band — different from the hero so it feels like a
          deliberate close, not a repeat. Cobalt-to-cyan sweep with a glass
          card centred on top. */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[70%] rounded-[36px] mx-6 sm:mx-12"
          style={{
            background: "linear-gradient(115deg, var(--cobalt-deep) 0%, var(--cobalt) 45%, var(--cyan) 100%)",
          }}
        />
        {/* Modular-glass plate over the sweep. Screen blend means the dark
            centre leaves the gradient untouched while the lit cubes at the
            edges add real depth — the band keeps its cobalt identity and stops
            reading as a flat CSS fill. Rendered dense at the sides and empty in
            the middle, so it never competes with the headline. */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[70%] rounded-[36px] mx-6 sm:mx-12 overflow-hidden">
          <Image
            src="/cta-textura.webp"
            alt=""
            aria-hidden
            fill
            sizes="100vw"
            className="object-cover opacity-55 mix-blend-screen"
          />
        </div>

        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[70%] rounded-[36px] mx-6 sm:mx-12 opacity-50 mix-blend-screen"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 22%, rgba(255,255,255,0.35), transparent 45%), radial-gradient(circle at 82% 78%, rgba(0,214,143,0.5), transparent 50%)",
          }}
        />
      </div>

      <div className="shell relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-3xl mx-auto text-center text-white py-20 sm:py-28"
        >
          <h2 className="font-display text-[clamp(34px,5.2vw,64px)] leading-[1.04] tracking-[-0.022em]">
            Sua empresa está pronta para trabalhar<br className="hidden sm:block" />
            <span className="opacity-90">de forma mais inteligente?</span>
          </h2>
          <p className="mt-6 text-[17px] sm:text-lg text-white/85 leading-relaxed">
            Falamos primeiro do seu cenário. Em uma conversa de 30 minutos saímos com um mapa do que pode ser automatizado, integrado ou repensado — sem compromisso.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:contato@rubix360.com.br?subject=Vamos%20construir%20juntos"
              className="btn btn-primary"
              style={{ background: "#fff", color: "var(--ink-strong)", boxShadow: "0 6px 22px -8px rgba(0,0,0,0.35)" }}
            >
              Vamos construir juntos
              <Arrow />
            </a>
            <a
              href="#servicos"
              className="btn btn-ghost"
              style={{ background: "transparent", borderColor: "rgba(255,255,255,0.4)", color: "#fff" }}
            >
              Ver serviços novamente
            </a>
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.18em] text-white/65 mono">
            contato@rubix360.com.br
          </p>
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
