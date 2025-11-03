"use client";

import Link from "next/link";
import { GL } from "./gl";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

const slogans = [
  'Reinventa tu negocio con IA aplicada.',
  'Del caos operativo al crecimiento predecible.',
  'Automatización inteligente. Resultados medibles.',
  'Transforma procesos. Acelera decisiones.'
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
            if (word === 'IA' || word === 'predecible.' || word === 'medibles.' || word === 'decisiones.') {
              return <span key={i} className="gradient-text">{word} </span>;
            }
            return <span key={i}>{word} </span>;
          })}
        </h1>

        <p className="font-mono text-base sm:text-lg text-[var(--muted)] max-w-[68ch] mx-auto mb-6">
          Transformamos operaciones complejas en sistemas inteligentes. Combinamos <strong>process discovery</strong>, automatización robótica y <strong>IA generativa</strong> para entregar resultados medibles en 90 días.
        </p>

        <div className="flex justify-center gap-4 flex-wrap mb-4">
          <Link href="#contacto">
            <Button
              size="lg"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              Empezar →
            </Button>
          </Link>
          <Link href="#servicios">
            <Button
              variant="outline"
              size="lg"
            >
              Ver cómo funciona
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
