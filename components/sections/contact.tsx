"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias! Te contactaremos.");
  };

  return (
    <section className="max-w-[1200px] mx-auto py-[var(--space)] px-5" id="contacto">
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-2xl font-bold">Hablemos</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-[var(--line)] to-transparent" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="glass-card p-6 md:col-span-2">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input
              required
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-4 rounded-xl border border-[var(--line)] bg-[#0b0d10] text-foreground"
            />
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-4 rounded-xl border border-[var(--line)] bg-[#0b0d10] text-foreground"
            />
            <textarea
              rows={4}
              placeholder="Tu reto en 3 líneas"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="p-4 rounded-xl border border-[var(--line)] bg-[#0b0d10] text-foreground resize-none"
            />
            <Button type="submit" className="w-full">
              Quiero mi evaluación
            </Button>
          </form>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold mb-2">Contacto directo</h3>
          <p className="text-[var(--muted)] mb-2">contacto@axionics.ai</p>
          <p className="text-[var(--muted)]">Madrid • Remoto • EU</p>
        </div>
      </div>
    </section>
  );
}
