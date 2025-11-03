"use client";

export function Insights() {
  return (
    <div className="light-section">
      <section className="max-w-[1200px] mx-auto py-[var(--space)] px-5 border-b border-[var(--line-light)]" id="insights">
        <div className="flex items-center gap-3 mb-5">
          <h2 className="text-2xl font-bold text-[var(--ink-light)]">Insights</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--line-light)] to-transparent" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="#"
            className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[var(--accent)] hover:shadow-[0_8px_32px_rgba(168,220,255,0.2),0_0_0_1px_rgba(168,220,255,0.1)_inset] transition-all duration-300 hover:-translate-y-1"
            aria-label="Artículo sobre IA con confianza"
          >
            <div className="w-full h-32 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-2)]/20 flex items-center justify-center mb-4">
              <span className="text-5xl">📚</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[var(--ink-light)] group-hover:text-[var(--accent)] transition-colors">Guía: IA con confianza</h3>
            <p className="text-[var(--muted-light)] text-sm leading-relaxed">
              Gobierno, seguridad y rendimiento para IA responsable en Azure.
            </p>
            <div className="mt-4 text-[var(--accent)] font-bold text-sm group-hover:translate-x-1 transition-transform">
              Leer más →
            </div>
          </a>
          <a
            href="#"
            className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[var(--accent)] hover:shadow-[0_8px_32px_rgba(168,220,255,0.2),0_0_0_1px_rgba(168,220,255,0.1)_inset] transition-all duration-300 hover:-translate-y-1"
            aria-label="Artículo sobre operaciones autónomas"
          >
            <div className="w-full h-32 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-2)]/20 flex items-center justify-center mb-4">
              <span className="text-5xl">📐</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[var(--ink-light)] group-hover:text-[var(--accent)] transition-colors">Blueprint: Operaciones autónomas</h3>
            <p className="text-[var(--muted-light)] text-sm leading-relaxed">
              De procesos manuales a decisiones aumentadas con datos.
            </p>
            <div className="mt-4 text-[var(--accent)] font-bold text-sm group-hover:translate-x-1 transition-transform">
              Leer más →
            </div>
          </a>
          <a
            href="#"
            className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[var(--accent)] hover:shadow-[0_8px_32px_rgba(168,220,255,0.2),0_0_0_1px_rgba(168,220,255,0.1)_inset] transition-all duration-300 hover:-translate-y-1"
            aria-label="Artículo sobre RPA y Power Platform"
          >
            <div className="w-full h-32 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent-2)]/20 flex items-center justify-center mb-4">
              <span className="text-5xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[var(--ink-light)] group-hover:text-[var(--accent)] transition-colors">Playbook: RPA + Power Platform</h3>
            <p className="text-[var(--muted-light)] text-sm leading-relaxed">
              10 patrones que entregan ROI en semanas.
            </p>
            <div className="mt-4 text-[var(--accent)] font-bold text-sm group-hover:translate-x-1 transition-transform">
              Leer más →
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
