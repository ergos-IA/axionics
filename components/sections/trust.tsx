"use client";

export function Trust() {
  return (
    <section className="max-w-[1200px] mx-auto py-16 px-5 border-b border-[var(--line)]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="group">
          <div className="text-5xl md:text-6xl font-black text-[var(--accent)] mb-2 group-hover:scale-110 transition-transform">
            +50
          </div>
          <div className="text-sm text-[var(--muted)] font-medium">
            Proyectos de automatización entregados
          </div>
        </div>
        <div className="group">
          <div className="text-5xl md:text-6xl font-black text-[var(--accent)] mb-2 group-hover:scale-110 transition-transform">
            90%
          </div>
          <div className="text-sm text-[var(--muted)] font-medium">
            Clientes logran ROI en primer año
          </div>
        </div>
        <div className="group">
          <div className="text-5xl md:text-6xl font-black text-[var(--accent)] mb-2 group-hover:scale-110 transition-transform">
            35%
          </div>
          <div className="text-sm text-[var(--muted)] font-medium">
            Reducción promedio en costes operativos
          </div>
        </div>
        <div className="group">
          <div className="text-5xl md:text-6xl font-black text-[var(--accent)] mb-2 group-hover:scale-110 transition-transform">
            24/7
          </div>
          <div className="text-sm text-[var(--muted)] font-medium">
            Soporte y monitorización continua
          </div>
        </div>
      </div>
    </section>
  );
}
