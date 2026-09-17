import { LEGAL_NAME } from "@/lib/company";

export type LegalSection = { title: string; body: (string | string[])[] };

// Página jurídica simples: título, data de atualização, identificação da
// empresa e seções numeradas. Um `string[]` dentro de `body` vira lista.
export function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <main className="section">
      <article className="shell max-w-3xl">
        <p className="mono text-[11px] tracking-[0.16em] uppercase text-[var(--ink-faint)]">
          Última atualização: {updated}
        </p>
        <h1 className="mt-3 font-display text-[clamp(32px,4.6vw,52px)] leading-[1.05] tracking-[-0.022em] text-[var(--ink-strong)]">
          {title}
        </h1>
        <p className="mt-6 text-[15px] leading-relaxed text-[var(--ink-muted)]">
          Este documento é emitido por <strong className="text-[var(--ink)]">{LEGAL_NAME}</strong>,
          titular da marca Rubix360 e responsável pelo site rubix360.com.br.
        </p>

        {sections.map((s, i) => (
          <section key={s.title} className="mt-10">
            <h2 className="font-display text-xl text-[var(--ink-strong)] tracking-tight">
              {i + 1}. {s.title}
            </h2>
            {s.body.map((b, j) =>
              Array.isArray(b) ? (
                <ul key={j} className="mt-3 list-disc pl-5 space-y-1.5 text-[15px] leading-relaxed text-[var(--ink-muted)]">
                  {b.map((li) => <li key={li}>{li}</li>)}
                </ul>
              ) : (
                <p key={j} className="mt-3 text-[15px] leading-relaxed text-[var(--ink-muted)]">{b}</p>
              ),
            )}
          </section>
        ))}
      </article>
    </main>
  );
}
