"use client";

export function Services() {
  return (
    <section
      className="max-w-[1200px] mx-auto py-[var(--space)] px-5"
      id="servicios"
    >
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-3xl font-bold">Servicios</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--line)] to-transparent" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-8">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center mb-5 shadow-lg shadow-[var(--accent)]/30">
            <span className="text-3xl">🔍</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-[var(--accent)]">Discovery</h3>
          <p className="text-[var(--muted)] leading-relaxed">
            Workshops, data‑pull y business case priorizado. Entregable: roadmap de 90 días.
          </p>
        </div>
        <div className="glass-card p-8">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center mb-5 shadow-lg shadow-[var(--accent)]/30">
            <span className="text-3xl">🤖</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-[var(--accent)]">Automatización</h3>
          <p className="text-[var(--muted)] leading-relaxed">
            Power Apps + Power Automate. Integración con ERP/CRM. 2–3 flujos productivos.
          </p>
        </div>
        <div className="glass-card p-8">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center mb-5 shadow-lg shadow-[var(--accent)]/30">
            <span className="text-3xl">🧠</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-[var(--accent)]">IA aplicada</h3>
          <p className="text-[var(--muted)] leading-relaxed">
            Azure OpenAI/ML: clasificación, extracción y predicción. MVP en 4–6 semanas.
          </p>
        </div>
      </div>
    </section>
  );
}
