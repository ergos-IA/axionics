"use client";

export function Valor360() {
  return (
    <div className="light-section">
      <section className="max-w-[1200px] mx-auto py-[var(--space)] px-5 border-b border-[var(--line-light)]" id="valor">
        <div className="flex items-center gap-3 mb-5">
          <h2 className="text-2xl font-bold text-[var(--ink-light)]">Valor 360° medible</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--line-light)] to-transparent" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border border-[var(--line-light)] rounded-[var(--radius)] p-6 shadow-[0_14px_40px_rgba(0,0,0,.06)]">
            <h3 className="text-lg font-bold mb-2 text-[var(--ink-light)]">Crecimiento</h3>
            <p className="text-[var(--muted-light)] text-sm">
              Ingresos y share aumentan con procesos optimizados y experiencias mejores.
            </p>
          </div>
          <div className="bg-white border border-[var(--line-light)] rounded-[var(--radius)] p-6 shadow-[0_14px_40px_rgba(0,0,0,.06)]">
            <h3 className="text-lg font-bold mb-2 text-[var(--ink-light)]">Operaciones</h3>
            <p className="text-[var(--muted-light)] text-sm">
              Coste por transacción, lead time y defectos bajan con automatización.
            </p>
          </div>
          <div className="bg-white border border-[var(--line-light)] rounded-[var(--radius)] p-6 shadow-[0_14px_40px_rgba(0,0,0,.06)]">
            <h3 className="text-lg font-bold mb-2 text-[var(--ink-light)]">Talento</h3>
            <p className="text-[var(--muted-light)] text-sm">
              Menos tareas repetitivas, más foco en valor y satisfacción interna.
            </p>
          </div>
          <div className="bg-white border border-[var(--line-light)] rounded-[var(--radius)] p-6 shadow-[0_14px_40px_rgba(0,0,0,.06)]">
            <h3 className="text-lg font-bold mb-2 text-[var(--ink-light)]">Impacto</h3>
            <p className="text-[var(--muted-light)] text-sm">
              KPIs ESG e impacto positivo medidos y reportados.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
