"use client";

export function Valor360() {
  return (
    <div className="light-section">
      <section className="max-w-[1200px] mx-auto py-[var(--space)] px-5 border-b border-[var(--line-light)]" id="valor">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-3xl font-bold text-[var(--ink-light)]">Valor 360° medible</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--line-light)] to-transparent" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,.08)] hover:border-[var(--accent)] hover:shadow-[0_8px_32px_rgba(168,220,255,0.2),0_0_0_1px_rgba(168,220,255,0.1)_inset] transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center mb-4 shadow-lg shadow-[var(--accent)]/20 group-hover:shadow-[var(--accent)]/40 transition-all">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[var(--ink-light)] group-hover:text-[var(--accent)] transition-colors">Crecimiento</h3>
            <p className="text-[var(--muted-light)] text-sm leading-relaxed">
              Ingresos y share aumentan con procesos optimizados y experiencias mejores.
            </p>
          </div>
          <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,.08)] hover:border-[var(--accent)] hover:shadow-[0_8px_32px_rgba(168,220,255,0.2),0_0_0_1px_rgba(168,220,255,0.1)_inset] transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center mb-4 shadow-lg shadow-[var(--accent)]/20 group-hover:shadow-[var(--accent)]/40 transition-all">
              <span className="text-2xl">⚙️</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[var(--ink-light)] group-hover:text-[var(--accent)] transition-colors">Operaciones</h3>
            <p className="text-[var(--muted-light)] text-sm leading-relaxed">
              Coste por transacción, lead time y defectos bajan con automatización.
            </p>
          </div>
          <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,.08)] hover:border-[var(--accent)] hover:shadow-[0_8px_32px_rgba(168,220,255,0.2),0_0_0_1px_rgba(168,220,255,0.1)_inset] transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center mb-4 shadow-lg shadow-[var(--accent)]/20 group-hover:shadow-[var(--accent)]/40 transition-all">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[var(--ink-light)] group-hover:text-[var(--accent)] transition-colors">Talento</h3>
            <p className="text-[var(--muted-light)] text-sm leading-relaxed">
              Menos tareas repetitivas, más foco en valor y satisfacción interna.
            </p>
          </div>
          <div className="group bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-[0_4px_24px_rgba(0,0,0,.08)] hover:border-[var(--accent)] hover:shadow-[0_8px_32px_rgba(168,220,255,0.2),0_0_0_1px_rgba(168,220,255,0.1)_inset] transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center mb-4 shadow-lg shadow-[var(--accent)]/20 group-hover:shadow-[var(--accent)]/40 transition-all">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-[var(--ink-light)] group-hover:text-[var(--accent)] transition-colors">Impacto</h3>
            <p className="text-[var(--muted-light)] text-sm leading-relaxed">
              KPIs ESG e impacto positivo medidos y reportados.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
