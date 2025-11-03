"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Assessment() {
  const [processDoc, setProcessDoc] = useState(40);
  const [repetitiveTasks, setRepetitiveTasks] = useState(55);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gracias. Te enviaremos el informe.");
  };

  return (
    <section className="max-w-[1200px] mx-auto py-[var(--space)] px-5 border-b border-[var(--line)]" id="assessment">
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-2xl font-bold">Autoevaluación de madurez</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--line)] to-transparent" />
      </div>
      <div className="glass-card p-6">
        <p className="text-[var(--muted)] mb-4">
          Responde 8 preguntas y te enviamos un informe con palancas de ROI prioritarias.
        </p>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm font-medium">
              ¿Cuánto del proceso core está documentado? ({processDoc}%)
            </span>
            <input
              type="range"
              min="0"
              max="100"
              value={processDoc}
              onChange={(e) => setProcessDoc(Number(e.target.value))}
              className="w-full"
              aria-label="Documentación de procesos"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium">
              ¿Porcentaje de tareas repetitivas? ({repetitiveTasks}%)
            </span>
            <input
              type="range"
              min="0"
              max="100"
              value={repetitiveTasks}
              onChange={(e) => setRepetitiveTasks(Number(e.target.value))}
              className="w-full"
              aria-label="Tareas repetitivas"
            />
          </label>
          <input
            required
            type="email"
            placeholder="Email para recibir el informe"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-xl border border-[var(--line)] bg-[#0b0d10] text-foreground"
          />
          <Button type="submit" className="w-full">
            Obtener informe
          </Button>
        </form>
      </div>
    </section>
  );
}
