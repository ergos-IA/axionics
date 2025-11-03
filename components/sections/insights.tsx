"use client";

export function Insights() {
  return (
    <div className="light-section">
      <section className="max-w-[1200px] mx-auto py-[var(--space)] px-5 border-b border-[var(--line-light)]" id="insights">
        <div className="flex items-center gap-3 mb-5">
          <h2 className="text-2xl font-bold text-[var(--ink-light)]">Insights</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--line-light)] to-transparent" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <a
            href="#"
            className="bg-white border border-[var(--line-light)] rounded-[var(--radius)] p-6 shadow-[0_14px_40px_rgba(0,0,0,.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,.12)] transition-shadow"
            aria-label="Artículo sobre IA con confianza"
          >
            <h3 className="text-lg font-bold mb-2 text-[var(--ink-light)]">Guía: IA con confianza</h3>
            <p className="text-[var(--muted-light)] text-sm">
              Gobierno, seguridad y rendimiento para IA responsable en Azure.
            </p>
          </a>
          <a
            href="#"
            className="bg-white border border-[var(--line-light)] rounded-[var(--radius)] p-6 shadow-[0_14px_40px_rgba(0,0,0,.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,.12)] transition-shadow"
            aria-label="Artículo sobre operaciones autónomas"
          >
            <h3 className="text-lg font-bold mb-2 text-[var(--ink-light)]">Blueprint: Operaciones autónomas</h3>
            <p className="text-[var(--muted-light)] text-sm">
              De procesos manuales a decisiones aumentadas con datos.
            </p>
          </a>
          <a
            href="#"
            className="bg-white border border-[var(--line-light)] rounded-[var(--radius)] p-6 shadow-[0_14px_40px_rgba(0,0,0,.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,.12)] transition-shadow"
            aria-label="Artículo sobre RPA y Power Platform"
          >
            <h3 className="text-lg font-bold mb-2 text-[var(--ink-light)]">Playbook: RPA + Power Platform</h3>
            <p className="text-[var(--muted-light)] text-sm">
              10 patrones que entregan ROI en semanas.
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
