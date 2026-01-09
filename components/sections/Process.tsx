import { PROCESS } from "@/lib/content";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Send, Eye, Rocket, ClipboardList } from "lucide-react";

const stepIcons = [Send, Eye, Rocket];

export function Process() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50/50 lg:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 mb-6">
            <Rocket className="w-7 h-7 text-emerald-600" />
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl mb-4">
            {PROCESS.title}
          </h2>
          <p className="text-xl text-gray-600 sm:text-2xl">
            {PROCESS.subtitle}
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto" />
        </div>

        {/* Steps com design melhorado */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-20">
          {PROCESS.steps.map((step, index) => {
            const Icon = stepIcons[index] || Rocket;
            const isLast = index === PROCESS.steps.length - 1;
            
            return (
              <div key={step.number} className="relative">
                {/* Linha conectora (desktop) */}
                {!isLast && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-emerald-300 via-teal-300 to-transparent z-0" />
                )}
                
                <Card className="group relative text-center border-2 border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl bg-white overflow-hidden">
                  {/* Gradient overlay no hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-teal-50/0 group-hover:from-emerald-50/50 group-hover:to-teal-50/50 transition-all duration-300" />
                  
                  <CardContent className="p-8 relative z-10">
                    {/* Número com ícone */}
                    <div className="relative mb-6 flex justify-center">
                      <div className="absolute inset-0 bg-emerald-200 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex flex-col items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 mb-1" />
                        <span className="text-xs font-bold">{step.number}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-xl text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Checklist melhorado */}
        <div className="max-w-3xl mx-auto">
          <Card className="relative overflow-hidden border-2 border-emerald-200 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/80 shadow-xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl" />
            
            <CardContent className="p-10 relative z-10">
              <div className="flex items-center justify-center gap-3 mb-8">
                <ClipboardList className="w-6 h-6 text-emerald-600" />
                <h3 className="font-bold text-2xl text-gray-900">
                  {PROCESS.checklist.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {PROCESS.checklist.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group/item">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center group-hover/item:bg-emerald-200 transition-colors shadow-sm">
                        <Check className="h-4 w-4 text-emerald-600" />
                      </div>
                    </div>
                    <span className="text-gray-800 text-lg leading-relaxed group-hover/item:text-gray-900 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
