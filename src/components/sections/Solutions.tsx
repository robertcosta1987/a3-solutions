"use client";

import { motion } from "framer-motion";

const SOLUTIONS = [
  {
    code: "AI · CRM",
    title: "AI CRM Intelligence",
    body:
      "Camada de inteligência sobre o seu CRM. Detecta intenção, prioriza leads, gera próximos passos e executa ações de follow-up dentro do sistema que o time já usa.",
    bullets: ["Scoring por contexto, não regra fixa", "Próximos-passos sugeridos com fonte", "Auditoria por interação"],
    accent: "var(--cobalt)",
  },
  {
    code: "AUTO · DATA",
    title: "Automotive Intelligence Platform",
    body:
      "Plataforma B2B de dados veiculares com aggregator multi-provider, cache inteligente, controle de cota e billing por subscription. Pronta para revenda white-label.",
    bullets: ["Aggregator com fallback por vendor", "Cache que reduz custo em ~70%", "Telemetria por cliente para billing"],
    accent: "var(--cyan)",
  },
  {
    code: "WORKFLOW",
    title: "Workflow Automation",
    body:
      "Substitui tarefas humanas repetidas por workflows determinísticos com IA opcional. Cada etapa é observável, reversível e mensurável em ROI.",
    bullets: ["Triggers em eventos do negócio", "Compensação automática em falha", "Painel de horas economizadas por fluxo"],
    accent: "var(--mint)",
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="section">
      <div className="shell">
        <div className="max-w-3xl">
          <span className="eyebrow">Soluções em destaque</span>
          <h2 className="font-display mt-6 text-[clamp(32px,4.6vw,52px)] leading-[1.04] tracking-[-0.022em] text-[var(--ink-strong)]">
            Produtos prontos para<br/>
            <span className="text-gradient-cool">acelerar o seu primeiro mês.</span>
          </h2>
          <p className="mt-6 text-[17px] text-[var(--ink-muted)] leading-relaxed">
            Três plataformas que nascem dos projetos que entregamos. Quando o seu cenário encaixa, partimos delas e ganhamos meses de desenvolvimento.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-4">
          {SOLUTIONS.map((s, i) => (
            <motion.article
              key={s.code}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: 0.08 * i, ease: [0.2, 0.8, 0.2, 1] }}
              className="card card-hover overflow-hidden relative"
            >
              {/* Top color bar — accent that varies per solution */}
              <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${s.accent}, var(--cyan))` }} />
              <div className="p-7">
                <div className="flex items-center justify-between">
                  <span className="mono text-[11px] tracking-[0.18em] text-[var(--ink-faint)]">{s.code}</span>
                  <span
                    className="inline-block w-2 h-2 rounded-full"
                    style={{ background: s.accent, boxShadow: `0 0 0 6px ${s.accent.replace("var(", "rgba(").replace(")", ", 0.10)")}` }}
                    aria-hidden
                  />
                </div>
                <h3 className="font-display mt-4 text-[24px] tracking-[-0.014em] text-[var(--ink-strong)] leading-tight">{s.title}</h3>
                <p className="mt-3 text-[14.5px] text-[var(--ink-muted)] leading-relaxed">{s.body}</p>
                <ul className="mt-5 space-y-2 text-[13.5px] text-[var(--ink)]">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span
                        className="mt-2 inline-block w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: s.accent }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contato" className="btn-link mt-6 inline-flex items-center gap-1.5 text-sm">
                  Conversar sobre esta solução
                  <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden>
                    <path d="M3 8h9m0 0L8 4m4 4L8 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
