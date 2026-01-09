"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { NICHES } from "@/lib/content";
import { ButtonLink } from "@/components/ui/button-link";
import { WhatsAppButtonLink } from "@/components/ui/whatsapp-button-link";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function NicheDemos() {
  const [activeTab, setActiveTab] = useState(NICHES[0].id);

  return (
    <section
      id="demos"
      className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white md:py-28 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header melhorado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-green-100 to-blue-100 mb-6">
            <ExternalLink className="w-7 h-7 text-gray-700" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Demos por nicho
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore exemplos criados para diferentes negócios. Todos
            personalizáveis com sua marca.
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto" />
        </div>

        {/* Desktop: TABS */}
        <div className="hidden md:block">
          <Tabs
            defaultValue={NICHES[0].id}
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="w-full justify-start mb-10 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl p-1.5 shadow-lg">
              {NICHES.map((niche) => (
                <TabsTrigger
                  key={niche.id}
                  value={niche.id}
                  className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white data-[state=active]:shadow-md rounded-lg transition-all duration-300 font-semibold"
                >
                  {niche.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {NICHES.map((niche) => (
              <TabsContent key={niche.id} value={niche.id}>
                <NicheContent niche={niche} />
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Mobile: ACCORDION */}
        <div className="md:hidden">
          <Accordion type="single" collapsible defaultValue={NICHES[0].id}>
            {NICHES.map((niche) => (
              <AccordionItem key={niche.id} value={niche.id}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {niche.title}
                </AccordionTrigger>
                <AccordionContent>
                  <NicheContent niche={niche} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

interface NicheContentProps {
  niche: (typeof NICHES)[0];
}

function NicheContent({ niche }: NicheContentProps) {
  return (
    <div className="space-y-8">
      {/* Descrição */}
      <p className="text-gray-700 text-lg">{niche.description}</p>

      {/* Grid de Demos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {niche.demos.map((demo, index) => (
          <Card
            key={index}
            className="group overflow-hidden border-2 border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 bg-white"
          >
            {/* Screenshot */}
            <a
              href={demo.href}
              target={demo.href !== "#" ? "_blank" : undefined}
              rel={demo.href !== "#" ? "noopener noreferrer" : undefined}
              className={demo.href !== "#" ? "cursor-pointer" : "cursor-default"}
            >
              <div className="relative aspect-[4/3] bg-gray-200 group">
                <Image
                  src={demo.image}
                  alt={demo.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-3 right-3">
                  <span className="inline-block bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    {demo.tag}
                  </span>
                </div>
                {demo.href !== "#" && (
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                )}
              </div>
            </a>

            {/* Conteúdo */}
            <div className="p-5 space-y-4">
              <h3 className="font-bold text-lg text-gray-900">{demo.title}</h3>

              {/* Bullets */}
              <ul className="space-y-2">
                {demo.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-sm text-gray-600"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Botões */}
              <div className="flex flex-col gap-2 pt-2">
                <ButtonLink
                  variant="outline"
                  size="sm"
                  href={demo.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <ExternalLink className="w-4 h-4" />
                  Ver demo
                </ButtonLink>
                <WhatsAppButtonLink
                  size="sm"
                  position="niche-demo"
                  niche={niche.title}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  aria-label={`Pedir orçamento para ${niche.title}`}
                >
                  Quero um igual
                </WhatsAppButtonLink>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* O que você recebe em 72h */}
      <div className="relative bg-gradient-to-br from-white to-gray-50/50 border-2 border-gray-200 rounded-2xl p-8 md:p-10 shadow-lg overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-green-100/20 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h3 className="text-2xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-1.5 h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
            O que você recebe em 72h para {niche.title}
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Página 100% responsiva (mobile, tablet, desktop)",
              "Integração com WhatsApp para captura de leads",
              "SEO básico configurado",
              "Publicação no ar (deploy) incluída. Hospedagem/domínio ficam na conta do cliente.",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 group/item">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-6 h-6 rounded-lg bg-green-100 flex items-center justify-center group-hover/item:bg-green-200 transition-colors shadow-sm">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-600" />
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* CTA dentro da seção */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <WhatsAppButtonLink
              size="lg"
              position="niche-cta"
              niche={niche.title}
              className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white"
              aria-label={`Pedir orçamento para ${niche.title}`}
            >
              Pedir orçamento para {niche.title}
            </WhatsAppButtonLink>
          </div>
        </div>
      </div>

      {/* ✅ FECHAMENTO QUE FALTAVA: fecha o wrapper <div className="space-y-8"> */}
    </div>
  );
}
