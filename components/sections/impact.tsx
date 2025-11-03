"use client";

export function Impact() {
  return (
    <section className="max-w-[1200px] mx-auto py-[var(--space)] px-5 border-b border-[var(--line)]" id="impacto">
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-2xl font-bold">Impacto & ESG</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--line)] to-transparent" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold mb-2">Datos ESG en tiempo real</h3>
          <p className="text-[var(--muted)] text-sm">
            Conectamos fuentes internas y externas para decisiones basadas en datos.
          </p>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold mb-2">Eficiencia energética</h3>
          <p className="text-[var(--muted)] text-sm">
            Automatización para reducir consumo y emisiones operativas.
          </p>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold mb-2">Reporte integrado</h3>
          <p className="text-[var(--muted)] text-sm">
            Cuadros de mando orientados a reguladores y stakeholders.
          </p>
        </div>
      </div>
    </section>
  );
}
