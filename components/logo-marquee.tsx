"use client";

export function LogoMarquee() {
  // Placeholder logos - replace with actual logo images
  const logos = [
    { id: 1, name: "Logo 1" },
    { id: 2, name: "Logo 2" },
    { id: 3, name: "Logo 3" },
    { id: 4, name: "Logo 4" },
    { id: 5, name: "Logo 5" },
  ];

  return (
    <div className="overflow-hidden border-t border-b border-[var(--line)] bg-[#0a0c10]" aria-hidden="true">
      <div className="flex gap-10 items-center animate-marquee py-4.5 px-5 opacity-90">
        {/* First set of logos */}
        {logos.map((logo) => (
          <div
            key={`first-${logo.id}`}
            className="h-7 min-w-[120px] bg-[var(--muted)] opacity-75 rounded grayscale flex items-center justify-center text-xs"
          >
            {logo.name}
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo) => (
          <div
            key={`second-${logo.id}`}
            className="h-7 min-w-[120px] bg-[var(--muted)] opacity-75 rounded grayscale flex items-center justify-center text-xs"
          >
            {logo.name}
          </div>
        ))}
      </div>
    </div>
  );
}
