"use client";

export function Cases() {
  return (
    <div className="light-section">
      <section className="max-w-[1200px] mx-auto py-[var(--space)] px-5 border-b border-[var(--line-light)]" id="casos">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-3xl font-bold text-[var(--ink-light)]">Impacto real en sectores clave</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-[var(--line-light)] to-transparent" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,.08)] hover:border-[var(--accent)] hover:shadow-[0_8px_32px_rgba(168,220,255,0.2),0_0_0_1px_rgba(168,220,255,0.1)_inset] transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center mb-4 shadow-lg shadow-[var(--accent)]/20 group-hover:shadow-[var(--accent)]/40 transition-all">
              <span className="text-2xl">🏭</span>
            </div>
            <div className="text-xs font-bold text-[var(--accent)] tracking-wider mb-2">MANUFACTURA</div>
            <h3 className="text-xl font-bold mb-3 text-[var(--ink-light)] group-hover:text-[var(--accent)] transition-colors">Multinacional automotriz</h3>
            <p className="text-[var(--muted-light)] text-sm leading-relaxed mb-4">
              Process mining identificó cuellos de botella en supply chain. Automatización RPA redujo defectos y sincronizó 4 ERP regionales.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span className="text-sm text-[var(--ink-light)]"><strong>–32%</strong> no calidad</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span className="text-sm text-[var(--ink-light)]"><strong>+47%</strong> velocidad producción</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span className="text-sm text-[var(--ink-light)]"><strong>ROI 14 meses</strong></span>
              </div>
            </div>
          </div>

          <div className="group bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,.08)] hover:border-[var(--accent)] hover:shadow-[0_8px_32px_rgba(168,220,255,0.2),0_0_0_1px_rgba(168,220,255,0.1)_inset] transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center mb-4 shadow-lg shadow-[var(--accent)]/20 group-hover:shadow-[var(--accent)]/40 transition-all">
              <span className="text-2xl">🏦</span>
            </div>
            <div className="text-xs font-bold text-[var(--accent)] tracking-wider mb-2">BANCA & SEGUROS</div>
            <h3 className="text-xl font-bold mb-3 text-[var(--ink-light)] group-hover:text-[var(--accent)] transition-colors">Banco líder en créditos pyme</h3>
            <p className="text-[var(--muted-light)] text-sm leading-relaxed mb-4">
              IA generativa para scoring crediticio y clasificación documental. Azure OpenAI analiza balances, contratos y extractos en segundos.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span className="text-sm text-[var(--ink-light)]"><strong>–61%</strong> tiempo aprobación</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span className="text-sm text-[var(--ink-light)]"><strong>+28%</strong> volumen créditos</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span className="text-sm text-[var(--ink-light)]"><strong>89% precisión IA</strong></span>
              </div>
            </div>
          </div>

          <div className="group bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,.08)] hover:border-[var(--accent)] hover:shadow-[0_8px_32px_rgba(168,220,255,0.2),0_0_0_1px_rgba(168,220,255,0.1)_inset] transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] flex items-center justify-center mb-4 shadow-lg shadow-[var(--accent)]/20 group-hover:shadow-[var(--accent)]/40 transition-all">
              <span className="text-2xl">📦</span>
            </div>
            <div className="text-xs font-bold text-[var(--accent)] tracking-wider mb-2">LOGÍSTICA & RETAIL</div>
            <h3 className="text-xl font-bold mb-3 text-[var(--ink-light)] group-hover:text-[var(--accent)] transition-colors">Operador 3PL paneuropeo</h3>
            <p className="text-[var(--muted-light)] text-sm leading-relaxed mb-4">
              Power Automate + IA predictiva optimiza rutas y gestión de flotas. Integración con TMS, WMS y plataformas de última milla.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span className="text-sm text-[var(--ink-light)]"><strong>–24%</strong> coste operativo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span className="text-sm text-[var(--ink-light)]"><strong>+33%</strong> precisión ETA</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span className="text-sm text-[var(--ink-light)]"><strong>18% mejora NPS</strong></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
