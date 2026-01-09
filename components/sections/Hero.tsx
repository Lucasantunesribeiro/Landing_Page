"use client";

import { HERO } from "@/lib/content";
import { getQuoteLink, trackWhatsAppClick } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";

export function Hero() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick("hero");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50/50 via-white to-cyan-50/30 pt-24 pb-20 lg:pt-32 lg:pb-28">
      {/* Background decorations - mais orgânicos */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-green-200/40 to-emerald-300/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/40 to-cyan-300/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-green-100/30 to-blue-100/30 rounded-full blur-[80px] animate-float" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge sutil no topo */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-green-100 text-xs font-medium text-gray-600 mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-green-600" />
            <span>Landing pages que convertem</span>
          </div>

          {/* Headline com mais personalidade */}
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl mb-6 leading-[1.1]">
            <span className="block">{HERO.headline.split('—')[0]}</span>
            <span className="block bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent mt-2">
              {HERO.headline.split('—')[1]}
            </span>
          </h1>

          {/* Subheadline mais espaçado */}
          <p className="mt-8 text-xl text-gray-600 sm:text-2xl lg:text-3xl leading-relaxed max-w-3xl mx-auto font-light">
            {HERO.subheadline}
          </p>

          {/* CTAs com design mais sofisticado */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <a
              href={getQuoteLink()}
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir orçamento no WhatsApp"
              className="group relative inline-flex items-center justify-center gap-2.5 h-16 px-12 text-lg whitespace-nowrap rounded-2xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600 bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-2xl shadow-green-600/40 hover:shadow-green-600/60 hover:-translate-y-0.5"
            >
              <span className="relative z-10">{HERO.ctaPrimary}</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
            </a>
            <a
              href="#demos"
              aria-label="Ver demos por nicho"
              className="group inline-flex items-center justify-center gap-2.5 h-16 px-12 text-lg whitespace-nowrap rounded-2xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600 border-2 border-green-600/80 text-green-700 hover:bg-green-50/80 hover:border-green-700 backdrop-blur-sm bg-white/60"
            >
              {HERO.ctaSecondary}
            </a>
          </div>

          {/* Badge de transparência mais elegante */}
          <div className="mt-14 flex flex-col items-center justify-center">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-md border border-green-100/50 text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <Check className="h-4 w-4 text-green-600" />
              <span className="max-w-md">{HERO.badges[0]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid pattern sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30" />
    </section>
  );
}
