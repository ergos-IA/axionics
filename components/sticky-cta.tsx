"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export function StickyCTA() {
  return (
    <div className="fixed left-0 right-0 bottom-3 z-[70] flex justify-center">
      <div className="flex gap-3 items-center bg-[#0e1116cc] border border-[var(--line)] backdrop-blur-lg rounded-[var(--radius)] px-3.5 py-2.5 shadow-[0_10px_36px_rgba(0,0,0,.4)]">
        <span className="text-[var(--muted)] font-extrabold text-sm max-sm:hidden">
          ¿Quieres ver tu ROI en 90 días?
        </span>
        <Link href="#assessment">
          <Button className="rounded-full bg-gradient-to-br from-[rgba(168,220,255,.24)] to-[rgba(159,245,225,.18)] border-transparent shadow-[0_10px_40px_rgba(0,0,0,.35)] text-sm py-2 px-4">
            Haz el assessment
          </Button>
        </Link>
        <Link href="#contacto">
          <Button
            variant="outline"
            className="rounded-full border-[var(--line)] bg-[rgba(18,20,26,.62)] text-sm py-2 px-4"
          >
            Agenda 30 min
          </Button>
        </Link>
      </div>
    </div>
  );
}
