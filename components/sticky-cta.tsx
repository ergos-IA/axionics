"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export function StickyCTA() {
  return (
    <div className="fixed left-0 right-0 bottom-4 z-[70] flex justify-center px-4">
      <div className="flex gap-3 items-center bg-black/90 border-2 border-[var(--accent)]/30 backdrop-blur-xl rounded-2xl px-5 py-3 shadow-[0_8px_32px_rgba(0,0,0,.6),0_0_48px_rgba(168,220,255,0.15)]">
        <span className="text-foreground font-bold text-sm max-sm:hidden">
          ¿Quieres ver tu <span className="text-[var(--accent)]">ROI en 90 días</span>?
        </span>
        <Link href="#assessment">
          <Button size="sm">
            Haz el assessment
          </Button>
        </Link>
        <Link href="#contacto">
          <Button variant="outline" size="sm">
            Agenda 30 min
          </Button>
        </Link>
      </div>
    </div>
  );
}
