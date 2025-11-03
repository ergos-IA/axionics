"use client";

export function Services() {
  return (
    <section
      className="max-w-[1200px] mx-auto py-[var(--space)] px-5 border-b border-[var(--line)] glass-card my-12"
      id="servicios"
    >
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-2xl font-bold">Servicios</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--line)] to-transparent" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold mb-2">Discovery</h3>
          <p className="text-[var(--muted)] text-sm">
            Workshops, data‑pull y business case priorizado. Entregable: roadmap de 90 días.
          </p>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold mb-2">Automatización</h3>
          <p className="text-[var(--muted)] text-sm">
            Power Apps + Power Automate. Integración con ERP/CRM. 2–3 flujos productivos.
          </p>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold mb-2">IA aplicada</h3>
          <p className="text-[var(--muted)] text-sm">
            Azure OpenAI/ML: clasificación, extracción y predicción. MVP en 4–6 semanas.
          </p>
        </div>
      </div>
    </section>
  );
}
