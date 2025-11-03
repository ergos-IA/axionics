"use client";

import Link from "next/link";
import { GL } from "./gl";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

const slogans = [
  'Procesos superiores. Resultados medibles.',
  'Automatiza lo repetitivo. Escala lo valioso.',
  'Discovery → Automatización → IA con ROI.',
  'Menos coste. Más velocidad. Clientes felices.'
];

export function Hero() {
  const [hovering, setHovering] = useState(false);
  const [currentSlogan, setCurrentSlogan] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentSlogan((prev) => (prev + 1) % slogans.length);
        setFadeIn(true);
      }, 260);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex flex-col min-h-screen justify-center items-center text-center px-5 pb-10 pt-20" id="inicio">
      <GL hovering={hovering} />

      <div className="relative z-10 max-w-4xl">
        <div className="text-[var(--accent-2)] font-bold tracking-[0.12em] uppercase text-sm mb-4">
          Discovery • Automatización • IA
        </div>

        <h1
          className={`text-5xl sm:text-6xl md:text-7xl font-black leading-[1.02] mb-4 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
        >
          {slogans[currentSlogan].split(' ').map((word, i) => {
            if (word === 'superiores' || word === 'repetitivo.' || word === 'IA' || word === 'velocidad.') {
              return <span key={i} className="gradient-text">{word} </span>;
            }
            return <span key={i}>{word} </span>;
          })}
        </h1>

        <p className="font-mono text-base sm:text-lg text-[var(--muted)] max-w-[62ch] mx-auto mb-6">
          Detectamos fricción, automatizamos lo repetitivo y activamos <strong>IA aplicada</strong> sobre tu negocio. Menos coste, más velocidad y clientes más satisfechos.
        </p>

        <div className="flex justify-center gap-3 flex-wrap mb-4">
          <Link href="#contacto">
            <Button
              className="rounded-full bg-gradient-to-br from-[rgba(168,220,255,.24)] to-[rgba(159,245,225,.18)] border-transparent shadow-[0_10px_40px_rgba(0,0,0,.35)]"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              Empezar
            </Button>
          </Link>
          <Link href="#servicios">
            <Button
              variant="outline"
              className="rounded-full border-[var(--line)] bg-[rgba(18,20,26,.62)]"
            >
              Ver cómo
            </Button>
          </Link>
        </div>

        <div className="flex justify-center gap-2 flex-wrap mt-4">
          <span className="border border-[var(--line)] bg-[rgba(15,18,22,.55)] backdrop-blur-sm px-3 py-1.5 rounded-full text-[var(--muted)] text-sm">
            Azure & Power Platform
          </span>
          <span className="border border-[var(--line)] bg-[rgba(15,18,22,.55)] backdrop-blur-sm px-3 py-1.5 rounded-full text-[var(--muted)] text-sm">
            ROI en 90 días
          </span>
          <span className="border border-[var(--line)] bg-[rgba(15,18,22,.55)] backdrop-blur-sm px-3 py-1.5 rounded-full text-[var(--muted)] text-sm">
            Procesos E2E
          </span>
        </div>

        <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 flex gap-2 items-center opacity-90 text-[var(--muted)] text-sm">
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="#9aa0aa"/>
            <circle cx="8" cy="6" r="2" fill="#9aa0aa"/>
          </svg>
          Desliza
        </div>
      </div>
    </header>
  );
}
