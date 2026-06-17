// gloss.tsx — turn a plain copy string into React nodes where each known
// technical term (first occurrence within the given `seen` scope) becomes an
// interactive <Term> with a PT-BR explanation.
//
// Usage inside a (client) section component:
//
//   const seen = new Set<string>();           // one scope per section
//   <p>{gloss("Conectores idempotentes para ERPs e CRMs.", seen)}</p>
//
// `seen` makes each term link only on its first appearance per section, so the
// page stays clean. It is a plain local Set built during render — no hooks, no
// refs — so it is render-pure and deterministic.

import { Term } from "@/components/Term";
import { GLOSS_RE, lookupAlias } from "@/lib/glossary";

export function gloss(text: string, seen: Set<string>): React.ReactNode {
  const out: React.ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const m of text.matchAll(GLOSS_RE)) {
    const full = m[0];
    const alias = m[1];
    const idx = m.index ?? 0;
    const entry = lookupAlias(alias);
    if (!entry || seen.has(entry.label)) continue;

    if (idx > last) out.push(text.slice(last, idx));
    out.push(
      <Term key={key++} label={entry.label} def={entry.def}>
        {full}
      </Term>,
    );
    seen.add(entry.label);
    last = idx + full.length;
  }

  if (last === 0) return text; // nothing matched → return the plain string
  if (last < text.length) out.push(text.slice(last));
  return out;
}
