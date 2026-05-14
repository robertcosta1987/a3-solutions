"use client";

import { motion } from "framer-motion";

const INDUSTRIES = [
  { name: "Automotivo", note: "Dealer ops, dados FIPE/veículo, copilotos de venda" },
  { name: "Saúde",      note: "Fluxos clínicos, prontuários, integrações HL7/FHIR" },
  { name: "Financeiro", note: "Onboarding, anti-fraude, conciliação automática" },
  { name: "Varejo",     note: "Estoque, precificação, recomendação personalizada" },
  { name: "Logística",  note: "Roteirização, tracking, exceções automatizadas" },
  { name: "Serviços",   note: "Agendamento, billing, ferramentas internas sob medida" },
  { name: "Startups",   note: "MVP → produto, escala técnica sem reescrever tudo" },
  { name: "Indústria",  note: "OEE, manutenção preditiva, integração de chão de fábrica" },
];

export function Industries() {
  return (
    <section id="industrias" className="section section-soft">
      <div className="shell">
        <div className="max-w-3xl">
          <span className="eyebrow">Indústrias</span>
          <h2 className="font-display mt-6 text-[clamp(32px,4.6vw,52px)] leading-[1.04] tracking-[-0.022em] text-[var(--ink-strong)]">
            Atendemos quem tem<br/>
            <span className="text-gradient-cool">processo crítico de verdade.</span>
          </h2>
          <p className="mt-6 text-[17px] text-[var(--ink-muted)] leading-relaxed">
            Trabalhamos com setores em que software ruim custa caro — em receita, tempo ou risco. Em todos eles, a entrega começa pela mesma postura: imersão antes de proposta.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {INDUSTRIES.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: 0.04 * i, ease: [0.2, 0.8, 0.2, 1] }}
              className="card card-hover p-5"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-[18px] tracking-[-0.012em] text-[var(--ink-strong)]">{it.name}</h3>
                <span className="inline-flex w-7 h-7 items-center justify-center rounded-full bg-[var(--cobalt-soft)] text-[var(--cobalt-deep)]">
                  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden>
                    <path d="M3 8h9m0 0L8 4m4 4L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </span>
              </div>
              <p className="mt-2 text-[13px] text-[var(--ink-muted)] leading-relaxed">{it.note}</p>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-[13.5px] text-[var(--ink-faint)] text-center">
          Não está aqui? <a href="#contato" className="text-[var(--cobalt)] hover:underline">Conte-nos o cenário</a> — nosso primeiro passo é entender, não vender.
        </p>
      </div>
    </section>
  );
}
