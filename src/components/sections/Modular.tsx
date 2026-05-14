"use client";

import { motion } from "framer-motion";

export function Modular() {
  return (
    <section id="modular" className="section relative">
      <div className="shell">
        {/* ─── Section heading ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-3xl"
        >
          <span className="eyebrow">Software & IA Modulares</span>
          <h2 className="font-display mt-6 text-[clamp(32px,4.6vw,52px)] leading-[1.04] tracking-[-0.022em] text-[var(--ink-strong)]">
            Não troque sua operação.<br/>
            <span className="text-gradient-cool">Conecte mais potência a ela.</span>
          </h2>
          <p className="mt-6 text-[17px] text-[var(--ink-muted)] leading-relaxed">
            Construímos peças de software e de IA que se plugam por API ao que a sua empresa já usa — ERP, CRM, planilhas, sistemas legados. Você ganha capacidade nova sem migrar nada.
          </p>
        </motion.div>

        {/* ─── Two concept columns ──────────────────────────────────── */}
        <div className="mt-14 grid lg:grid-cols-2 gap-4">
          <motion.article
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            className="card card-hover p-7"
          >
            <div className="flex items-center justify-between">
              <span className="mono text-[11px] tracking-[0.18em] text-[var(--ink-faint)]">CONCEITO · 01</span>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--cobalt-soft)] text-[var(--cobalt-deep)]">
                <BlocksIcon />
              </span>
            </div>
            <h3 className="font-display mt-5 text-[26px] tracking-[-0.014em] text-[var(--ink-strong)]">Software Modular</h3>
            <p className="mt-3 text-[15px] text-[var(--ink-muted)] leading-relaxed">
              Peças de software prontas — dashboards, relatórios, motores de busca, integradores — que conversam por API com os seus sistemas. Entregam funcionalidade nova em semanas, sem reescrever a base que já funciona.
            </p>
            <ul className="mt-5 space-y-2 text-[14px] text-[var(--ink)]">
              {[
                "Dashboards com métricas vivas e drill-down por dimensão",
                "Relatórios programados disparados para e-mail ou canal",
                "Conectores idempotentes para ERPs, CRMs e marketplaces",
                "Camada de cache e fallback que reduz custo com vendors externos",
              ].map((b) => <Bullet key={b}>{b}</Bullet>)}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
            className="card card-hover p-7"
          >
            <div className="flex items-center justify-between">
              <span className="mono text-[11px] tracking-[0.18em] text-[var(--ink-faint)]">CONCEITO · 02</span>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--cobalt-soft)] text-[var(--cobalt-deep)]">
                <AiIcon />
              </span>
            </div>
            <h3 className="font-display mt-5 text-[26px] tracking-[-0.014em] text-[var(--ink-strong)]">IA Modular</h3>
            <p className="mt-3 text-[15px] text-[var(--ink-muted)] leading-relaxed">
              Assistentes conversacionais que entendem o contexto da sua empresa. O gestor pergunta em linguagem natural — &ldquo;quais carros estão parados há mais de 60 dias?&rdquo; — e recebe a resposta certa, com a fonte e o filtro aplicado.
            </p>
            <ul className="mt-5 space-y-2 text-[14px] text-[var(--ink)]">
              {[
                "Conversa em português natural, sem prompt-engineering",
                "Acessa apenas os dados que o usuário tem permissão para ver",
                "Cita a fonte da resposta (qual tabela, qual registro)",
                "Executa ações com confirmação humana onde faz sentido",
              ].map((b) => <Bullet key={b}>{b}</Bullet>)}
            </ul>
          </motion.article>
        </div>

        {/* ─── Case study card — abstracted "Revendas de Carros" ─── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-10 card overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left: narrative */}
            <div className="p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-[var(--hairline)] bg-[var(--bg-soft)]">
              <span className="mono text-[11px] tracking-[0.18em] text-[var(--cobalt-deep)]">CASO REAL · ANONIMIZADO</span>
              <h3 className="font-display mt-4 text-[28px] sm:text-[32px] leading-[1.08] tracking-[-0.016em] text-[var(--ink-strong)]">
                Revendas de Carros — do achismo à <span className="text-gradient-cool">decisão em segundos</span>
              </h3>
              <p className="mt-5 text-[15px] text-[var(--ink-muted)] leading-relaxed">
                Uma rede de revendas operava decisões de precificação, giro de estoque e prioridade de venda a partir de planilhas atualizadas manualmente e relatórios que chegavam dois dias depois. Plugamos por API ao sistema existente:
              </p>
              <ul className="mt-5 space-y-2.5 text-[14.5px] text-[var(--ink)]">
                <li className="flex items-start gap-2">
                  <Dot color="var(--cobalt)" />
                  <span><strong className="font-semibold">Software Modular:</strong> dashboards de estoque, margem por modelo, tempo médio em pátio e tabela FIPE viva.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Dot color="var(--cyan)" />
                  <span><strong className="font-semibold">IA Modular:</strong> assistente que responde perguntas operacionais e gera ações sugeridas.</span>
                </li>
              </ul>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { v: "−72%", l: "tempo gasto em planilhas semanais" },
                  { v: "3×",   l: "decisões de remarcação por dia" },
                  { v: "+18%", l: "margem média nos modelos de giro" },
                ].map((m) => (
                  <div key={m.v} className="card p-3 bg-white">
                    <div className="font-display text-[22px] text-[var(--ink-strong)]">{m.v}</div>
                    <div className="text-[11px] text-[var(--ink-muted)] leading-snug mt-0.5">{m.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: visual mock — dashboard tile + AI chat tile, stacked */}
            <div className="p-6 sm:p-8 flex flex-col gap-4 bg-white">
              <DashboardMock />
              <ChatMock />
            </div>
          </div>
        </motion.div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 text-center text-[14px] text-[var(--ink-faint)]"
        >
          A entrega é uma <span className="mono text-[var(--ink)]">API</span> + um painel. Sem migração, sem trocar fornecedor, sem reescrever sistema.
        </motion.p>
      </div>
    </section>
  );
}

/* ───── Atoms ──────────────────────────────────────────────────────── */
function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-[var(--cobalt)] shrink-0" />
      <span className="text-[var(--ink)]">{children}</span>
    </li>
  );
}

function Dot({ color }: { color: string }) {
  return (
    <span
      className="mt-2 inline-block w-2 h-2 rounded-full shrink-0"
      style={{ background: color, boxShadow: `0 0 0 4px ${color.replace("var(", "rgba(").replace(")", ", 0.12)")}` }}
      aria-hidden
    />
  );
}

function BlocksIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3"  y="3"  width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="3"  width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="3"  y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" strokeDasharray="2 2" />
    </svg>
  );
}

function AiIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4"
            stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

/* ─── Visual mocks ─────────────────────────────────────────────────── */
function DashboardMock() {
  // A stylized "pátio de revenda" dashboard tile. Numbers + a bar chart +
  // a sparkline. Pure SVG/CSS so it scales crisp at any size and avoids
  // pulling in real screenshots.
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.55, delay: 0.1 }}
      className="card p-5 bg-white relative overflow-hidden"
    >
      <div className="flex items-center justify-between">
        <span className="mono text-[10px] tracking-[0.18em] text-[var(--ink-faint)]">PÁTIO · MAIO</span>
        <span className="flex items-center gap-1.5 text-[10px] text-[var(--mint-deep)] mono">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--mint)]" />
          ATUALIZADO HÁ 2 MIN
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-3">
        <Stat label="Veículos no pátio" value="184" trend="+12" trendColor="var(--cobalt)" />
        <Stat label="Dias médios"        value="38"  trend="−6"  trendColor="var(--mint-deep)" />
        <Stat label="Margem média"       value="18%" trend="+2pp" trendColor="var(--mint-deep)" />
      </div>

      {/* Tiny bar chart — giro por faixa de tempo */}
      <div className="mt-5">
        <div className="flex items-baseline justify-between mb-1.5">
          <span className="text-[11px] text-[var(--ink-muted)]">Estoque por idade</span>
          <span className="mono text-[10px] text-[var(--ink-faint)]">dias</span>
        </div>
        <svg viewBox="0 0 240 70" className="w-full">
          {[
            { x: 0,   h: 38, label: "0-30",  fill: "var(--cobalt)" },
            { x: 50,  h: 54, label: "31-60", fill: "var(--cobalt)" },
            { x: 100, h: 42, label: "61-90", fill: "var(--cyan)" },
            { x: 150, h: 22, label: "90+",   fill: "var(--mint)" },
          ].map((b, i) => (
            <g key={i}>
              <rect x={b.x + 8} y={60 - b.h} width="28" height={b.h} rx="2" fill={b.fill} opacity="0.92" />
              <text x={b.x + 22} y="68" textAnchor="middle" fontSize="8" fill="var(--ink-faint)" fontFamily="var(--font-mono)">{b.label}</text>
            </g>
          ))}
          {/* sparkline overlay — preço médio últimas 12 semanas */}
          <polyline
            points="200,46 206,38 212,42 218,30 224,34 230,22 236,26"
            fill="none" stroke="var(--cobalt-deep)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.div>
  );
}

function Stat({ label, value, trend, trendColor }: { label: string; value: string; trend: string; trendColor: string }) {
  return (
    <div>
      <div className="flex items-baseline gap-1">
        <span className="font-display text-[20px] text-[var(--ink-strong)] leading-none">{value}</span>
        <span className="mono text-[10px]" style={{ color: trendColor }}>{trend}</span>
      </div>
      <div className="text-[11px] text-[var(--ink-muted)] leading-snug mt-1">{label}</div>
    </div>
  );
}

function ChatMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.55, delay: 0.2 }}
      className="card p-5 bg-white"
    >
      <div className="flex items-center justify-between">
        <span className="mono text-[10px] tracking-[0.18em] text-[var(--ink-faint)]">ASSISTENTE · IA</span>
        <span className="flex items-center gap-1.5 text-[10px] mono text-[var(--cobalt-deep)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--cobalt)]" />
          ONLINE
        </span>
      </div>

      <div className="mt-3 space-y-2.5">
        <Bubble role="user">
          Quais SUVs do pátio estão acima de 60 dias e abaixo da FIPE?
        </Bubble>
        <Bubble role="ai">
          Encontrei <strong>7 veículos</strong> nessa condição. Os 3 com maior desconto sobre FIPE são:<br/>
          <span className="mono text-[12px] text-[var(--ink-strong)]">QOV3D42</span> · −9,2% · 78 dias<br/>
          <span className="mono text-[12px] text-[var(--ink-strong)]">EFS8F45</span> · −7,8% · 92 dias<br/>
          <span className="mono text-[12px] text-[var(--ink-strong)]">MYZ7H99</span> · −6,4% · 64 dias<br/>
          <span className="text-[11px] text-[var(--ink-faint)]">fonte: estoque vivo · base FIPE · maio</span>
        </Bubble>
      </div>
    </motion.div>
  );
}

function Bubble({ role, children }: { role: "user" | "ai"; children: React.ReactNode }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[88%] px-3.5 py-2.5 text-[13px] leading-relaxed ${
          isUser
            ? "bg-[var(--ink)] text-white rounded-2xl rounded-br-md"
            : "bg-[var(--bg-soft)] text-[var(--ink)] border border-[var(--hairline)] rounded-2xl rounded-bl-md"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
