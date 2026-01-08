import { getQuoteLink } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Quote } from "lucide-react";

interface NicheSectionProps {
  id: string;
  name: string;
  problem: string;
  solution: string;
  included: string[];
  testimonial: {
    text: string;
    author: string;
    role: string;
  };
}

export function NicheSection({
  id,
  name,
  problem,
  solution,
  included,
  testimonial,
}: NicheSectionProps) {
  return (
    <section id={id} className="py-16 lg:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {name}
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Problema e Solução */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-2">
                  O Problema
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {problem}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-2">
                  A Solução
                </h3>
                <p className="text-lg text-gray-900 font-medium leading-relaxed">
                  {solution}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-600 mb-4">
                  O que entra
                </h3>
                <ul className="space-y-3">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <ButtonLink
                size="lg"
                href={getQuoteLink(name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                Pedir orçamento para {name}
              </ButtonLink>
            </div>

            {/* Depoimento */}
            <div className="flex items-center">
              <Card className="border-l-4 border-l-emerald-600 shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-10 w-10 text-emerald-600/20 mb-4" />
                  <p className="text-lg text-gray-800 italic leading-relaxed mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
