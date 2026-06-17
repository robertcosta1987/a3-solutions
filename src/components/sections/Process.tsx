"use client";

import { motion } from "framer-motion";
import { gloss } from "@/components/gloss";

const STEPS = [
  { kicker: "01", title: "Descobrir",  body: "Entrevistas com lideranças, operadores e clientes finais. Mapa do que importa de fato — antes de qualquer slide de proposta." },
  { kicker: "02", title: "Entender",   body: "Decompomos o fluxo atual: dados, decisões, gargalos, exceções. Critérios de sucesso ficam quantificáveis." },
  { kicker: "03", title: "Arquitetar", body: "Desenho técnico em conjunto com o cliente: dados, integrações, segurança, custo de operação e estratégia de escala." },
  { kicker: "04", title: "Construir",  body: "Engenharia em ciclos curtos com qualidade de produto sênior: tipagem rigorosa, testes onde importa, infra como código." },
  { kicker: "05", title: "Automatizar",body: "Workflows, IA e copilotos integrados ao sistema do cliente. O que era manual vira eventos rastreáveis e auditáveis." },
  { kicker: "06", title: "Evoluir",    body: "Observabilidade ligada, métricas em tela, roadmap vivo. O sistema cresce com o negócio — não fica parado depois do go-live." },
];

export function Process() {
  const seen = new Set<string>();
  return (
    <section id="processo" className="section section-soft relative">
      <div className="shell">
        <div className="max-w-3xl">
          <span className="eyebrow">Como trabalhamos</span>
          <h2 className="font-display mt-6 text-[clamp(32px,4.6vw,52px)] leading-[1.04] tracking-[-0.022em] text-[var(--ink-strong)]">
            Seis passos. Um único princípio:<br/>
            <span className="text-gradient-cool">contexto antes de código.</span>
          </h2>
          <p className="mt-6 text-[17px] text-[var(--ink-muted)] leading-relaxed">
            Cada etapa é colaborativa, com entregáveis tangíveis. Você sempre sabe onde está, o que vem em seguida e por quê.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.kicker}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.06 * i, ease: [0.2, 0.8, 0.2, 1] }}
              className="card card-hover p-6 relative overflow-hidden"
            >
              <div className="flex items-baseline justify-between">
                <span className="mono text-xs tracking-widest text-[var(--ink-faint)]">FASE {s.kicker}</span>
                <Connector />
              </div>
              <h3 className="font-display mt-4 text-[26px] tracking-[-0.015em] text-[var(--ink-strong)]">{s.title}</h3>
              <p className="mt-2 text-[14.5px] text-[var(--ink-muted)] leading-relaxed">{gloss(s.body, seen)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Connector() {
  return (
    <svg width="46" height="14" viewBox="0 0 46 14" aria-hidden>
      <defs>
        <linearGradient id="conn" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"  stopColor="var(--cobalt)" />
          <stop offset="100%" stopColor="var(--cyan)" />
        </linearGradient>
      </defs>
      <line x1="0" y1="7" x2="40" y2="7" stroke="url(#conn)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M40 3l5 4-5 4" stroke="url(#conn)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
