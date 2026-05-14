"use client";

import { motion } from "framer-motion";

const ROWS = [
  {
    before: "Trabalho manual repetido a cada novo pedido",
    after:  "Workflow automatizado dispara, audita e mede sozinho",
  },
  {
    before: "Caos de planilhas, e-mails e mensagens cruzadas",
    after:  "Visibilidade em um único painel com decisão clara",
  },
  {
    before: "Time perdendo horas operando ERPs e CRMs",
    after:  "Copilotos executam dentro dos sistemas que já existem",
  },
  {
    before: "Dados espalhados em silos sem definição comum",
    after:  "Lakehouse com métricas versionadas por domínio",
  },
  {
    before: "Decisões baseadas em achismo e relatórios atrasados",
    after:  "Dashboards vivos com alertas no canal certo",
  },
];

export function BeforeAfter() {
  return (
    <section className="section">
      <div className="shell">
        <div className="max-w-3xl">
          <span className="eyebrow">Antes & depois</span>
          <h2 className="font-display mt-6 text-[clamp(32px,4.6vw,52px)] leading-[1.04] tracking-[-0.022em] text-[var(--ink-strong)]">
            O mesmo time.<br/>
            <span className="text-gradient-cool">Resultados que não se comparam.</span>
          </h2>
          <p className="mt-6 text-[17px] text-[var(--ink-muted)] leading-relaxed">
            Os ganhos abaixo são padrão dos projetos que entregamos. Não são promessa de marketing — são a diferença que tecnologia bem aplicada produz no dia-a-dia operacional.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-4">
          {/* Column headers — visible only on >lg */}
          <div className="hidden lg:flex items-center justify-between px-4">
            <span className="mono text-xs tracking-widest text-[var(--ink-faint)]">ANTES</span>
            <span className="mono text-xs tracking-widest text-[var(--ink-faint)] opacity-0">—</span>
          </div>
          <div className="hidden lg:flex items-center justify-between px-4">
            <span className="mono text-xs tracking-widest text-[var(--ink-faint)]">DEPOIS</span>
            <span className="mono text-xs tracking-widest text-[var(--cobalt-deep)]">DELTA</span>
          </div>

          {ROWS.map((r, i) => (
            <ComparisonRow key={i} before={r.before} after={r.after} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonRow({ before, after, index }: { before: string; after: string; index: number }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.04 * index, ease: [0.2, 0.8, 0.2, 1] }}
        className="card p-5 flex items-start gap-3 bg-[var(--bg-soft)] border-dashed"
      >
        <span className="mt-1 inline-flex w-7 h-7 rounded-full bg-white border border-[var(--border)] items-center justify-center text-[var(--ink-faint)]">
          <X />
        </span>
        <p className="text-[14.5px] text-[var(--ink-muted)] leading-relaxed">{before}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.04 * index + 0.06, ease: [0.2, 0.8, 0.2, 1] }}
        className="card card-hover p-5 flex items-start gap-3 bg-white border-[var(--cobalt-soft)]"
      >
        <span className="mt-1 inline-flex w-7 h-7 rounded-full bg-[var(--cobalt-soft)] items-center justify-center text-[var(--cobalt-deep)]">
          <Check />
        </span>
        <p className="text-[14.5px] text-[var(--ink-strong)] leading-relaxed font-medium">{after}</p>
      </motion.div>
    </>
  );
}

function X() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
      <path d="M3 3l6 6m0-6l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
function Check() {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" aria-hidden>
      <path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
