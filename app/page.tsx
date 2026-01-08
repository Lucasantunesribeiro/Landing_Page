import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { NicheDemos } from "@/components/sections/NicheDemos";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1) HERO - Acima da dobra com CTA principal */}
      <Hero />

      {/* 2) OFERTA - Planos com preços */}
      <Pricing />

      {/* 3) DEMOS POR NICHO - Tabs (desktop) + Accordion (mobile) */}
      <NicheDemos />

      {/* 4) PROVA SOCIAL - Depoimentos + transparência */}
      <Testimonials />

      {/* 5) PROCESSO - Como funciona */}
      <Process />

      {/* 6) FAQ - Perguntas frequentes */}
      <FAQ />

      {/* 7) CTA FINAL - Reforço da promessa */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
