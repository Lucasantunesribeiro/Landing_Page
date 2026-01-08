"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { NICHES } from "@/lib/content";
import { getQuoteLink } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/button-link";
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
    <section id="demos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Demos por nicho
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore exemplos criados para diferentes negócios. Todos
            personalizáveis com sua marca.
          </p>
        </div>

        {/* Desktop: TABS */}
        <div className="hidden md:block">
          <Tabs
            defaultValue={NICHES[0].id}
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="w-full justify-start mb-8 bg-white border border-gray-200">
              {NICHES.map((niche) => (
                <TabsTrigger
                  key={niche.id}
                  value={niche.id}
                  className="flex-1 data-[state=active]:bg-gray-900 data-[state=active]:text-white"
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
            className="overflow-hidden hover:shadow-lg transition-shadow"
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
                  <li key={idx} className="flex items-start text-sm text-gray-600">
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
                <ButtonLink
                  size="sm"
                  href={getQuoteLink(niche.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  Quero um igual
                </ButtonLink>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* O que você recebe em 72h */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          O que você recebe em 72h para {niche.title}
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-green-600" />
            </div>
            <p className="text-gray-700">
              Página 100% responsiva (mobile, tablet, desktop)
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-green-600" />
            </div>
            <p className="text-gray-700">
              Integração com WhatsApp para captura de leads
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-green-600" />
            </div>
            <p className="text-gray-700">SEO básico configurado</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-green-600" />
            </div>
            <p className="text-gray-700">Hospedagem gratuita incluída</p>
          </div>
        </div>

        {/* CTA dentro da seção */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <ButtonLink
            size="lg"
            href={getQuoteLink(niche.title)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white"
          >
            Pedir orçamento para {niche.title}
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
