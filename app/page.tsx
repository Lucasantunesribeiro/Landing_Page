import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { NicheDemos } from "@/components/sections/NicheDemos";
import { Testimonials } from "@/components/sections/Testimonials";
import { Process } from "@/components/sections/Process";
import { WhatsIncluded } from "@/components/sections/WhatsIncluded";
import { HonestPolicy } from "@/components/sections/HonestPolicy";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Background pattern sutil em toda a página */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-40" />
      <div className="relative z-10">
      {/* 1) HERO - Acima da dobra com CTA principal */}
      <Hero />

      {/* 2) OFERTA - Planos com preços */}
      <Pricing />

      {/* 3) DEMOS POR NICHO - Tabs (desktop) + Accordion (mobile) */}
      <NicheDemos />

      {/* 4) COMO AS PESSOAS CHEGAM - Onde o link vai ficar */}
      <Testimonials />

      {/* 5) PROCESSO - Como funciona */}
      <Process />

      {/* 6) O QUE ESTÁ INCLUSO - Entregáveis, prazos e garantias */}
      <WhatsIncluded />

      {/* 7) POLÍTICA HONESTA - Sem promessas mágicas */}
      <HonestPolicy />

      {/* 8) SOBRE - Quem faz */}
      <About />

      {/* 9) FAQ - Perguntas frequentes */}
      <FAQ />

      {/* 10) CTA FINAL - Reforço da promessa */}
      <FinalCTA />

      {/* Footer */}
      <Footer />

      {/* Botão flutuante WhatsApp (mobile) */}
      <FloatingWhatsApp />
      </div>
    </main>
  );
}
