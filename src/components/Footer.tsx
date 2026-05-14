export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--hairline)] bg-white">
      <div className="shell py-10 grid sm:grid-cols-2 gap-8 items-start">
        <div>
          <div className="font-display text-lg text-[var(--ink-strong)] tracking-tight">A3 Soluções</div>
          <p className="mt-2 text-sm text-[var(--ink-muted)] max-w-md">
            Tecnologia trabalhando para você. Software sob medida, IA, automação e produtos SaaS desenvolvidos junto com a sua empresa.
          </p>
        </div>
        <div className="flex flex-col sm:items-end gap-3 text-sm text-[var(--ink-muted)]">
          <div className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
            <a href="#processo" className="hover:text-[var(--ink)] transition-colors">Como trabalhamos</a>
            <a href="#modular"  className="hover:text-[var(--ink)] transition-colors">Modular</a>
            <a href="#servicos" className="hover:text-[var(--ink)] transition-colors">Serviços</a>
            <a href="#solucoes" className="hover:text-[var(--ink)] transition-colors">Soluções</a>
            <a href="#contato"  className="hover:text-[var(--ink)] transition-colors">Contato</a>
          </div>
          <div className="mono text-[11px] tracking-[0.16em] text-[var(--ink-faint)] uppercase">
            © {year} A3 Soluções — feito no Brasil
          </div>
        </div>
      </div>
    </footer>
  );
}
