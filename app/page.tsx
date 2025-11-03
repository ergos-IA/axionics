'use client'

import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { Trust } from "@/components/sections/trust";
import { Valor360 } from "@/components/sections/valor360";
import { Services } from "@/components/sections/services";
import { Insights } from "@/components/sections/insights";
import { Cases } from "@/components/sections/cases";
import { Impact } from "@/components/sections/impact";
import { Assessment } from "@/components/sections/assessment";
import { Contact } from "@/components/sections/contact";
import { StickyCTA } from "@/components/sticky-cta";
import { Footer } from "@/components/footer";
import { Leva } from "leva";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Trust />
      <Valor360 />
      <Services />
      <Insights />
      <Cases />
      <Impact />
      <Assessment />
      <Contact />
      <Footer />
      <StickyCTA />
      <Leva hidden />
    </>
  );
}
