"use client";

export function Impact() {
  return (
    <section className="max-w-[1200px] mx-auto py-[var(--space)] px-5 border-b border-[var(--line)]" id="impacto">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-3xl font-bold">Sostenibilidad operativa con IA</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--line)] to-transparent" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="glass-card p-8">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center mb-5 shadow-lg shadow-[var(--accent)]/30">
            <span className="text-3xl">🌍</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-[var(--accent)]">Monitorización continua ESG</h3>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            Integramos datos de consumos energéticos, emisiones Scope 1-2-3, métricas laborales y compliance regulatorio (CSRD, taxonomía europea) en dashboards unificados. <span className="text-foreground font-bold">Power BI + Azure Synapse</span> consolidan fuentes heterogéneas.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span className="text-[var(--muted)]">Visibilidad en tiempo real de KPIs no financieros</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span className="text-[var(--muted)]">Alertas predictivas ante desviaciones regulatorias</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span className="text-[var(--muted)]">Reportes audit-ready para inversores y auditores</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-8">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center mb-5 shadow-lg shadow-[var(--accent)]/30">
            <span className="text-3xl">⚡</span>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-[var(--accent)]">Optimización de recursos</h3>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            Modelos de IA analizan patrones de consumo y recomiendan ajustes operativos. Automatización inteligente reduce waste, optimiza cadenas de suministro y mejora eficiencia sin comprometer output.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span className="text-[var(--muted)]">Reducción 20-35% huella carbono operativa</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span className="text-[var(--muted)]">Machine learning predice demanda energética</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span className="text-[var(--muted)]">Economía circular: trazabilidad de materiales reciclados</span>
            </div>
          </div>
        </div>
      </div>

      <div className="glass-card p-8">
        <div className="flex items-start gap-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center shrink-0 shadow-lg shadow-[var(--accent)]/30">
            <span className="text-3xl">📊</span>
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3 text-[var(--accent)]">Reporting automatizado CSRD</h3>
            <p className="text-[var(--muted)] leading-relaxed mb-4">
              La Corporate Sustainability Reporting Directive exige métricas precisas y auditorías exhaustivas. Automatizamos la recopilación, validación y generación de reportes conforme ESRS (European Sustainability Reporting Standards).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <div className="font-bold text-sm mb-1">Trazabilidad de doble materialidad</div>
                  <div className="text-xs text-[var(--muted)]">Impacto financiero + impacto sobre personas y planeta</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <div className="font-bold text-sm mb-1">Workflows de aprobación</div>
                  <div className="text-xs text-[var(--muted)]">Power Automate coordina stakeholders internos</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <div className="font-bold text-sm mb-1">Gestión de evidencias</div>
                  <div className="text-xs text-[var(--muted)]">Blockchain opcional para inmutabilidad de registros</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs">✓</span>
                </div>
                <div>
                  <div className="font-bold text-sm mb-1">Publicación multicanal</div>
                  <div className="text-xs text-[var(--muted)]">Web corporativa, ESEF, registros públicos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
