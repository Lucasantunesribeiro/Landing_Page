import { WHATS_INCLUDED } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Package, Clock, Shield, FileText } from "lucide-react";

const sectionIcons = [Package, Clock, Shield, FileText];

export function WhatsIncluded() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
            <Package className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            {WHATS_INCLUDED.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 sm:text-xl">
            {WHATS_INCLUDED.subtitle}
          </p>
        </div>

        {/* Grid de seções */}
        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          {WHATS_INCLUDED.sections.map((section, index) => {
            const Icon = sectionIcons[index] || Package;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-2 border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl bg-white"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-blue-50/0 group-hover:from-green-50/50 group-hover:to-blue-50/50 transition-all duration-300" />
                
                <CardHeader className="relative pb-4">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {section.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="relative">
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center group-hover/item:bg-green-200 transition-colors">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                        </div>
                        <span className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
