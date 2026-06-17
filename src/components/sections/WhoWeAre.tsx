"use client";

import { motion } from "framer-motion";

export function WhoWeAre() {
  return (
    <section id="abordagem" className="section">
      <div className="shell grid lg:grid-cols-12 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="lg:col-span-5"
        >
          <span className="eyebrow">Quem somos</span>
          <h2 className="font-display mt-6 text-[clamp(32px,4.6vw,52px)] leading-[1.04] tracking-[-0.022em] text-[var(--ink-strong)]">
            Não trabalhamos <span className="text-gradient-cool">para</span> você.<br/>
            Trabalhamos <span className="text-gradient-cool">com</span> você.
          </h2>
          <p className="mt-6 text-[17px] text-[var(--ink-muted)] leading-relaxed">
            A Rubix360 é uma empresa de tecnologia que se posiciona como parceira estratégica das organizações que atende. Cada projeto começa imerso no contexto do cliente: regras de negócio, fluxos operacionais, métricas e ambições.
          </p>
          <p className="mt-4 text-[17px] text-[var(--ink-muted)] leading-relaxed">
            Construímos sistemas, automações e produtos digitais que entendem o negócio antes de escrever a primeira linha de código — e que continuam evoluindo depois do lançamento.
          </p>
        </motion.div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.06 * i, ease: [0.2, 0.8, 0.2, 1] }}
              className="card card-hover p-6"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--cobalt-soft)] text-[var(--cobalt-deep)]">
                  {p.icon}
                </span>
                <div>
                  <h3 className="font-display text-lg text-[var(--ink-strong)]">{p.title}</h3>
                  <p className="mt-2 text-[14.5px] text-[var(--ink-muted)] leading-relaxed">{p.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    title: "Imersão real no negócio",
    body: "Antes de qualquer arquitetura, mapeamos o fluxo do cliente, as decisões críticas e os pontos de fricção. Tecnologia que entende contexto é tecnologia que dura.",
    icon: <Icon paths={["M12 3v18", "M3 12h18"]} />,
  },
  {
    title: "Time sênior, sem terceirização opaca",
    body: "Quem conversa com o cliente é quem decide arquitetura e quem entrega. Sem camadas intermediárias que diluem responsabilidade ou contexto.",
    icon: <Icon paths={["M4 6h16", "M4 12h10", "M4 18h16"]} />,
  },
  {
    title: "Engenharia que envelhece bem",
    body: "Tipagem rigorosa, infraestrutura como código, observabilidade desde o dia um. O sistema entregue continua bom em 12 meses, não só na demo.",
    icon: <Icon paths={["M3 21V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v12", "M3 21h18"]} />,
  },
  {
    title: "Parceria que evolui",
    body: "Após o go-live, seguimos junto. Iteração curta, métricas em tela, decisões compartilhadas. O produto vivo se molda ao negócio em tempo real.",
    icon: <Icon paths={["M21 12a9 9 0 11-3-6.7", "M21 4v5h-5"]} />,
  },
];

function Icon({ paths }: { paths: string[] }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      {paths.map((d, i) => (
        <path key={i} d={d} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </svg>
  );
}
