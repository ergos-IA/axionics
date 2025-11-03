"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [lang, setLang] = useState<'es' | 'en'>('es');

  return (
    <div className="sticky top-0 z-50 backdrop-blur-[10px] backdrop-saturate-150 bg-gradient-to-b from-[rgba(10,12,15,.8)] to-[rgba(10,12,15,.35)] border-b border-[var(--line)]">
      <div className="max-w-[1200px] mx-auto px-5 py-3.5 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Logo-Axionics.png"
            alt="Axionics"
            width={560}
            height={128}
            className="h-20 w-auto brightness-0 invert"
            priority
          />
        </Link>

        <div className="flex-1" />

        <div className="flex items-center gap-2 border border-[var(--line)] rounded-xl overflow-hidden">
          <button
            className={`px-3 py-2 text-sm font-bold transition-colors ${
              lang === 'es' ? 'bg-[#0e1116] text-foreground' : 'bg-transparent text-[var(--muted)]'
            }`}
            onClick={() => setLang('es')}
            aria-pressed={lang === 'es'}
          >
            ES
          </button>
          <button
            className={`px-3 py-2 text-sm font-bold transition-colors ${
              lang === 'en' ? 'bg-[#0e1116] text-foreground' : 'bg-transparent text-[var(--muted)]'
            }`}
            onClick={() => setLang('en')}
            aria-pressed={lang === 'en'}
          >
            EN
          </button>
        </div>

        <Link href="#contacto">
          <button className="px-5 py-2.5 bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(168,220,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200">
            Discovery gratuito
          </button>
        </Link>
      </div>
    </div>
  );
};
