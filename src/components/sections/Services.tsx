"use client";

import { motion } from "framer-motion";
import { gloss } from "@/components/gloss";

const SERVICES = [
  {
    title: "Software sob medida",
    summary: "Aplicações web e plataformas internas construídas para o seu modelo operacional — não adaptadas de um template.",
    bullets: ["Backend tipado e auditável", "Frontend pensado para o operador", "DevEx que escala com o time"],
  },
  {
    title: "Automação com IA",
    summary: "LLMs, agentes e workflows que assumem etapas inteiras — não respondem perguntas soltas.",
    bullets: ["Agentes com guardrails reais", "RAG sobre dados privados", "Avaliação contínua de qualidade"],
  },
  {
    title: "Cloud",
    summary: "Azure e AWS desenhados para custo previsível, segurança séria e operação enxuta.",
    bullets: ["Infraestrutura como código", "Observabilidade desde o dia um", "FinOps por padrão"],
  },
  {
    title: "Produtos SaaS",
    summary: "Do MVP ao produto multi-tenant em produção. Arquitetura preparada para o terceiro cliente, não só o primeiro.",
    bullets: ["Onboarding self-service", "Billing + permissionamento", "Roadmap orientado por uso"],
  },
  {
    title: "Integrações",
    summary: "ERPs, CRMs, vendors, marketplaces. Conectamos sistemas que não foram desenhados para conversar.",
    bullets: ["Conectores idempotentes", "Filas + retry + dead-letter", "Contratos versionados"],
  },
  {
    title: "Arquitetura",
    summary: "Decisões de plataforma que envelhecem bem. ADRs, diagramas vivos, trade-offs explicados.",
    bullets: ["Domain-driven onde faz sentido", "Boundaries claros entre serviços", "Migrações com plano de saída"],
  },
  {
    title: "Inteligência de dados",
    summary: "Do dado bruto à decisão. Pipelines, modelos, dashboards e alertas que o time realmente usa.",
    bullets: ["Lakehouse + camadas medalion", "Semantic layer por domínio", "Métricas que o C-level lê"],
  },
  {
    title: "Copilotos IA",
    summary: "Assistentes embarcados nos sistemas que o seu time já usa — sem trocar de tela, sem prompt-engineering.",
    bullets: ["Ações com escopo limitado", "Memória por usuário", "Telemetria de uso e ROI"],
  },
];

export function Services() {
  const seen = new Set<string>();
  return (
    <section id="servicos" className="section">
      <div className="shell">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Serviços</span>
            <h2 className="font-display mt-6 text-[clamp(32px,4.6vw,52px)] leading-[1.04] tracking-[-0.022em] text-[var(--ink-strong)]">
              Oito frentes,<br/>
              <span className="text-gradient-cool">uma única engenharia.</span>
            </h2>
          </div>
          <p className="md:max-w-md text-[15.5px] text-[var(--ink-muted)] leading-relaxed">
            Combinamos as frentes abaixo conforme o problema do cliente. Nenhum projeto compra &ldquo;todo o catálogo&rdquo; — compra o desenho certo.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.04 * (i % 4), ease: [0.2, 0.8, 0.2, 1] }}
              className="card card-hover p-6 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="mono text-[11px] tracking-widest text-[var(--ink-faint)]">{String(i + 1).padStart(2, "0")} / 08</span>
                <Dot index={i} />
              </div>
              <h3 className="font-display text-[20px] tracking-[-0.012em] text-[var(--ink-strong)]">{gloss(s.title, seen)}</h3>
              <p className="mt-3 text-[14px] text-[var(--ink-muted)] leading-relaxed">{gloss(s.summary, seen)}</p>
              <ul className="mt-4 space-y-1.5 text-[13px] text-[var(--ink)]">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Check />
                    <span>{gloss(b, seen)}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" className="mt-1 shrink-0 text-[var(--mint-deep)]" aria-hidden>
      <path d="M2 7l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function Dot({ index }: { index: number }) {
  // Rotate the three accents subtly across the grid so the cards don't look identical.
  const palette = ["var(--cobalt)", "var(--cyan)", "var(--mint)"];
  const c = palette[index % palette.length];
  return (
    <span
      className="inline-block w-2 h-2 rounded-full"
      style={{ background: c, boxShadow: `0 0 0 4px ${c.replace("var(", "rgba(").replace(")", ", 0.12)")}` }}
      aria-hidden
    />
  );
}
