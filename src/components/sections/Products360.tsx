"use client";

import { motion } from "framer-motion";

type Product = {
  name: string;
  tag: string;
  status: string;
  what: string;
  help: string[];
  cta: { label: string; href: string; external?: boolean };
  accent: string;
};

const PRODUCTS: Product[] = [
  {
    name: "Placas 360",
    tag: "Consulta veicular inteligente por placa",
    status: "No ar",
    what:
      "Plataforma de consulta veicular por placa: em segundos retorna marca, modelo e valor FIPE e, nas consultas completas, histórico de sinistro, leilão, roubo/furto, débitos, recall e um Parecer de Compra por IA. Inclui o Anúncio360 — gerador de anúncios com IA, com texto pronto para vender, preço sugerido pela FIPE e melhoria automática das fotos.",
    help: [
      "Revendas e compradores decidem com segurança e fecham negócio com mais argumentos",
      "Consulta grátis (FIPE) capta leads; consultas completas são pagas por crédito",
      "Anúncio360 entrega anúncios prontos para publicar em minutos",
      "API e modelo white-label para parceiros (ex.: Moneycar, ProfitCar)",
    ],
    cta: { label: "Acessar placas360.com.br", href: "https://www.placas360.com.br", external: true },
    accent: "var(--cobalt)",
  },
  {
    name: "Assistente Virtual 360",
    tag: "Atendente de IA white-label no WhatsApp (voz e texto)",
    status: "No ar",
    what:
      "Assistente virtual white-label que conversa por texto e por áudio no WhatsApp, conhece o catálogo e os dados do seu negócio e responde com precisão — preços, estoque, condições, localização. Ela qualifica o interesse do cliente e encaminha o lead pronto para o time de vendas, 24 horas por dia, com a sua marca.",
    help: [
      "Mais lucro: atende e qualifica leads a qualquer hora, sem deixar oportunidade passar",
      "Mais eficiência: responde na hora, integra o estoque/base do cliente e tira o repetitivo do time",
      "Mais retenção de leads: nenhum contato fica sem resposta — o lead chega ao vendedor já aquecido",
      "100% white-label: sua marca, sua voz, com planos e limites definidos por cliente",
    ],
    cta: { label: "Acessar assistente360.com.br", href: "https://www.assistente360.com.br", external: true },
    accent: "var(--cyan)",
  },
];

export function Products360() {
  return (
    <section id="produtos" className="section">
      <div className="shell">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">Produtos 360</span>
            <h2 className="font-display mt-6 text-[clamp(32px,4.6vw,52px)] leading-[1.04] tracking-[-0.022em] text-[var(--ink-strong)]">
              Produtos próprios,<br />
              <span className="text-gradient-cool">prontos para gerar resultado.</span>
            </h2>
          </div>
          <p className="md:max-w-md text-[15.5px] text-[var(--ink-muted)] leading-relaxed">
            Além dos projetos sob medida, criamos produtos próprios da linha 360 — plataformas em produção que você pode usar hoje ou levar ao seu negócio como white-label.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-5">
          {PRODUCTS.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: 0.06 * i, ease: [0.2, 0.8, 0.2, 1] }}
              className="card card-hover p-7 sm:p-8 flex flex-col h-full"
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-medium"
                  style={{ background: p.accent.replace("var(", "rgba(").replace(")", ", 0.10)"), color: p.accent }}
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: p.accent }} aria-hidden />
                  {p.status}
                </span>
                <span className="mono text-[11px] tracking-widest text-[var(--ink-faint)]">{String(i + 1).padStart(2, "0")} / 02</span>
              </div>

              <h3 className="font-display mt-5 text-[26px] sm:text-[30px] tracking-[-0.018em] text-[var(--ink-strong)]">{p.name}</h3>
              <p className="mt-1 text-[14px] font-medium" style={{ color: p.accent }}>{p.tag}</p>

              <p className="mt-4 text-[14.5px] text-[var(--ink-muted)] leading-relaxed">{p.what}</p>

              <ul className="mt-5 space-y-2 text-[13.5px] text-[var(--ink)]">
                {p.help.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <Check />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <a
                  href={p.cta.href}
                  {...(p.cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="btn btn-primary text-sm"
                  style={{ padding: "11px 20px" }}
                >
                  {p.cta.label}
                  <Arrow />
                </a>
              </div>
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

function Arrow() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" className="ml-1.5" aria-hidden>
      <path d="M3 7.5h8M7.5 4l3.5 3.5L7.5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
