"use client";

export function Cases() {
  return (
    <div className="light-section">
      <section className="max-w-[1200px] mx-auto py-[var(--space)] px-5 border-b border-[var(--line-light)]" id="casos">
        <div className="flex items-center gap-3 mb-5">
          <h2 className="text-2xl font-bold text-[var(--ink-light)]">Casos</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--line-light)] to-transparent" />
        </div>
        <div className="grid grid-auto-flow-col grid-auto-columns-[80%] md:grid-cols-3 gap-5 overflow-x-auto snap-x snap-mandatory pb-2">
          <div className="bg-white border border-[var(--line-light)] rounded-[var(--radius)] p-6 shadow-[0_14px_40px_rgba(0,0,0,.06)] snap-start">
            <h3 className="text-lg font-bold mb-2 text-[var(--ink-light)]">ABC Manufacturing</h3>
            <p className="text-[var(--muted-light)] text-sm">–25% no calidad • +40% velocidad</p>
          </div>
          <div className="bg-white border border-[var(--line-light)] rounded-[var(--radius)] p-6 shadow-[0_14px_40px_rgba(0,0,0,.06)] snap-start">
            <h3 className="text-lg font-bold mb-2 text-[var(--ink-light)]">Banco Retail</h3>
            <p className="text-[var(--muted-light)] text-sm">+35% eficiencia • –48% espera</p>
          </div>
          <div className="bg-white border border-[var(--line-light)] rounded-[var(--radius)] p-6 shadow-[0_14px_40px_rgba(0,0,0,.06)] snap-start">
            <h3 className="text-lg font-bold mb-2 text-[var(--ink-light)]">Operador Logístico</h3>
            <p className="text-[var(--muted-light)] text-sm">–19% coste envío • +2.1× ETA</p>
          </div>
        </div>
      </section>
    </div>
  );
}
