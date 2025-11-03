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
    <header className="flex flex-col min-h-screen justify-start items-center text-center px-5 pb-10 pt-32" id="inicio">
      <GL hovering={hovering} />

      <div className="relative z-10 max-w-[90vw] w-full">
        <div className="text-[var(--accent-2)] font-bold tracking-[0.12em] uppercase text-sm mb-6">
          Discovery • Automatización • IA
        </div>

        <h1
          className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.95] mb-8 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
        >
          {slogans[currentSlogan].split(' ').map((word, i) => {
            if (word === 'IA' || word === 'predecible.' || word === 'medibles.' || word === 'decisiones.') {
              return <span key={i} className="gradient-text">{word} </span>;
            }
            return <span key={i}>{word} </span>;
          })}
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-[var(--muted)] max-w-[50ch] mx-auto leading-relaxed">
          Transformamos operaciones en sistemas inteligentes con <strong className="text-foreground">IA aplicada</strong> y <strong className="text-foreground">resultados en 90 días</strong>.
        </p>
      </div>
    </header>
  );
}
