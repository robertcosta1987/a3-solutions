import Link from "next/link";
import { LEGAL_NAME } from "@/lib/company";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--hairline)] bg-white">
      <div className="shell py-10 grid sm:grid-cols-2 gap-8 items-start">
        <div>
          <div className="font-display text-lg text-[var(--ink-strong)] tracking-tight">Rubix360</div>
          <p className="mt-2 text-sm text-[var(--ink-muted)] max-w-md">
            Transformando complexidade em inteligência. Conectamos sistemas, processos, pessoas e IA em um único ecossistema integrado.
          </p>
        </div>
        <div className="flex flex-col sm:items-end gap-3 text-sm text-[var(--ink-muted)]">
          <div className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
            <Link href="/#processo" className="hover:text-[var(--ink)] transition-colors">Como trabalhamos</Link>
            <Link href="/#modular" className="hover:text-[var(--ink)] transition-colors">Modular</Link>
            <Link href="/#servicos" className="hover:text-[var(--ink)] transition-colors">Serviços</Link>
            <Link href="/#solucoes" className="hover:text-[var(--ink)] transition-colors">Soluções</Link>
            <Link href="/#contato" className="hover:text-[var(--ink)] transition-colors">Contato</Link>
          </div>
          <div className="mono text-[11px] tracking-[0.16em] text-[var(--ink-faint)] uppercase">
            © {year} Rubix360 — feito no Brasil
          </div>
          <div className="text-[12px] text-[var(--ink-faint)] sm:text-right">
            {LEGAL_NAME}
          </div>
          <div className="flex gap-x-5 text-[12px] sm:justify-end">
            <Link href="/termos" className="hover:text-[var(--ink)] transition-colors">Termos de Uso</Link>
            <Link href="/privacidade" className="hover:text-[var(--ink)] transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
