"use client";

import { FINAL_CTA } from "@/lib/content";
import { getQuoteLink, trackWhatsAppClick } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

export function FinalCTA() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick("footer");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-700 py-24 lg:py-32">
      {/* Background decorations mais sofisticados */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      
      {/* Grid pattern sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge decorativo */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-semibold text-white mb-8 shadow-lg">
            <Zap className="w-3.5 h-3.5" />
            <span>Entrega rápida garantida</span>
          </div>

          <h2 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl mb-6 leading-tight">
            {FINAL_CTA.title}
          </h2>
          <p className="mt-6 text-xl text-green-50 sm:text-2xl leading-relaxed max-w-2xl mx-auto">
            {FINAL_CTA.subtitle}
          </p>

          {/* Badge de escassez melhorado */}
          {FINAL_CTA.badge && (
            <div className="mt-8 inline-block">
              <div className="relative">
                <div className="absolute inset-0 bg-white/30 rounded-full blur-md" />
                <span className="relative inline-flex items-center gap-2.5 rounded-full bg-white/25 backdrop-blur-md border border-white/40 px-5 py-2.5 text-sm font-semibold text-white shadow-lg">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                  </span>
                  {FINAL_CTA.badge}
                </span>
              </div>
            </div>
          )}

          <div className="mt-12">
            <a
              href={getQuoteLink()}
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir orçamento no WhatsApp"
              className="group relative inline-flex items-center justify-center gap-3 h-16 px-12 text-lg whitespace-nowrap rounded-2xl font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white bg-white text-green-700 hover:bg-gray-50 shadow-2xl hover:shadow-3xl hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                {FINAL_CTA.cta}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </span>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
