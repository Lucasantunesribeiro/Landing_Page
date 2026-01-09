import { FAQ as FAQ_DATA } from "@/lib/content";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function FAQ() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50/30 to-white lg:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-green-100 to-blue-100 mb-6">
            <HelpCircle className="w-7 h-7 text-gray-700" />
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 sm:text-2xl">
            Tire suas dúvidas antes de começar
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto" />
        </div>

        {/* Accordion melhorado */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl p-6 md:p-8 shadow-xl">
            <Accordion type="single" collapsible defaultValue={`item-0`} className="space-y-2">
              {FAQ_DATA.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-2 border-gray-100 rounded-xl px-4 py-2 hover:border-green-200 transition-colors data-[state=open]:border-green-300 data-[state=open]:bg-green-50/30"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-green-700 transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-2 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
