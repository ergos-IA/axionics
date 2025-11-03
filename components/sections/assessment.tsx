"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Assessment() {
  const [processDoc, setProcessDoc] = useState(40);
  const [repetitiveTasks, setRepetitiveTasks] = useState(55);
  const [dataIntegration, setDataIntegration] = useState(30);
  const [email, setEmail] = useState("");

  const calculatePotential = () => {
    const avg = (processDoc + repetitiveTasks + dataIntegration) / 3;
    if (avg < 40) return { level: "Alto potencial", savings: "35-45%", color: "text-[var(--accent)]" };
    if (avg < 70) return { level: "Potencial medio", savings: "20-35%", color: "text-[var(--accent-2)]" };
    return { level: "Optimización incremental", savings: "10-20%", color: "text-[var(--muted)]" };
  };

  const potential = calculatePotential();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gracias. Te enviaremos el informe de madurez operativa en las próximas 24h.");
  };

  return (
    <section className="max-w-[1200px] mx-auto py-[var(--space)] px-5 border-b border-[var(--line)]" id="assessment">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-3xl font-bold">Assessment de madurez operativa</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--line)] to-transparent" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Evalúa tu potencial de automatización</h3>
          <p className="text-[var(--muted)] leading-relaxed mb-6">
            En 3 minutos obtendrás un <span className="text-foreground font-bold">diagnóstico preliminar</span> con estimación de ahorro operativo, nivel de madurez digital y recomendaciones priorizadas por impacto.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center shrink-0 mt-1">
                <span className="text-xs">1</span>
              </div>
              <div>
                <div className="font-bold text-sm mb-1">Análisis de procesos</div>
                <div className="text-xs text-[var(--muted)]">Identificamos cuellos de botella y tareas automatizables</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center shrink-0 mt-1">
                <span className="text-xs">2</span>
              </div>
              <div>
                <div className="font-bold text-sm mb-1">Benchmarking sectorial</div>
                <div className="text-xs text-[var(--muted)]">Comparamos tu madurez con empresas similares</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center shrink-0 mt-1">
                <span className="text-xs">3</span>
              </div>
              <div>
                <div className="font-bold text-sm mb-1">Roadmap priorizado</div>
                <div className="text-xs text-[var(--muted)]">Quick wins + proyectos estratégicos con ROI proyectado</div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8">
          <div className="mb-6">
            <div className="text-sm text-[var(--muted)] mb-2">Potencial estimado</div>
            <div className={`text-2xl font-bold ${potential.color}`}>
              {potential.level}
            </div>
            <div className="text-sm text-[var(--muted)] mt-1">
              Ahorro potencial: <span className="font-bold text-foreground">{potential.savings}</span> en costes operativos
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-6">
            <label className="grid gap-3">
              <span className="text-sm font-bold">
                1. Documentación de procesos críticos
              </span>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={processDoc}
                  onChange={(e) => setProcessDoc(Number(e.target.value))}
                  className="flex-1 accent-[var(--accent)]"
                  aria-label="Documentación de procesos"
                />
                <span className="text-sm font-mono text-[var(--accent)] w-12 text-right">{processDoc}%</span>
              </div>
              <span className="text-xs text-[var(--muted)]">
                ¿Qué porcentaje de tus procesos críticos está documentado digitalmente?
              </span>
            </label>

            <label className="grid gap-3">
              <span className="text-sm font-bold">
                2. Tareas manuales repetitivas
              </span>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={repetitiveTasks}
                  onChange={(e) => setRepetitiveTasks(Number(e.target.value))}
                  className="flex-1 accent-[var(--accent)]"
                  aria-label="Tareas repetitivas"
                />
                <span className="text-sm font-mono text-[var(--accent)] w-12 text-right">{repetitiveTasks}%</span>
              </div>
              <span className="text-xs text-[var(--muted)]">
                Estimación del tiempo dedicado a tareas rutinarias (data entry, validaciones, reportes)
              </span>
            </label>

            <label className="grid gap-3">
              <span className="text-sm font-bold">
                3. Integración de sistemas
              </span>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={dataIntegration}
                  onChange={(e) => setDataIntegration(Number(e.target.value))}
                  className="flex-1 accent-[var(--accent)]"
                  aria-label="Integración de datos"
                />
                <span className="text-sm font-mono text-[var(--accent)] w-12 text-right">{dataIntegration}%</span>
              </div>
              <span className="text-xs text-[var(--muted)]">
                ¿Tus sistemas (ERP, CRM, financiero) intercambian datos automáticamente?
              </span>
            </label>

            <div className="pt-4 border-t border-[var(--line)]">
              <input
                required
                type="email"
                placeholder="Email corporativo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-xl border-2 border-[var(--line)] bg-[#0b0d10] text-foreground focus:border-[var(--accent)] focus:outline-none transition-colors mb-4"
              />
              <Button type="submit" className="w-full" size="lg">
                Recibir diagnóstico completo
              </Button>
              <p className="text-xs text-[var(--muted)] text-center mt-3">
                Informe detallado en PDF • Sin compromiso • Respuesta en 24h
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
