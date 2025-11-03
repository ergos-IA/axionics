"use client";

export function Services() {
  return (
    <section
      className="max-w-[1200px] mx-auto py-[var(--space)] px-5"
      id="servicios"
    >
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-3xl font-bold">Nuestras Capacidades</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--line)] to-transparent" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-8">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center mb-5 shadow-lg shadow-[var(--accent)]/30">
            <span className="text-3xl">🔍</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-[var(--accent)]">Process Discovery</h3>
          <p className="text-[var(--muted)] leading-relaxed">
            Minería de procesos con IA para identificar ineficiencias ocultas. Workshops ejecutivos, análisis de datos operativos y business case con ROI proyectado. <span className="text-foreground font-bold">Entregable: Roadmap 90 días.</span>
          </p>
        </div>
        <div className="glass-card p-8">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center mb-5 shadow-lg shadow-[var(--accent)]/30">
            <span className="text-3xl">🤖</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-[var(--accent)]">Automatización Inteligente</h3>
          <p className="text-[var(--muted)] leading-relaxed">
            RPA + Power Platform para automatizar procesos end-to-end. Integraciones nativas con SAP, Dynamics, Salesforce. <span className="text-foreground font-bold">Despliegue: 2-3 flujos en producción primer mes.</span>
          </p>
        </div>
        <div className="glass-card p-8">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center mb-5 shadow-lg shadow-[var(--accent)]/30">
            <span className="text-3xl">🧠</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-[var(--accent)]">IA Generativa & Analytics</h3>
          <p className="text-[var(--muted)] leading-relaxed">
            Azure OpenAI para extracción documental, clasificación inteligente y análisis predictivo. Copilots personalizados sobre tus datos. <span className="text-foreground font-bold">MVP funcional: 4-6 semanas.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
