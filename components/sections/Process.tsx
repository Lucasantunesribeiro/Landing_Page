import { PROCESS } from "@/lib/content";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

export function Process() {
  return (
    <section className="py-16 bg-gray-50 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {PROCESS.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{PROCESS.subtitle}</p>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-16">
          {PROCESS.steps.map((step) => (
            <Card key={step.number} className="text-center border-t-4 border-t-emerald-600">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-600 text-white text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Checklist */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-emerald-50 to-blue-50">
            <CardContent className="p-8">
              <h3 className="font-bold text-xl text-gray-900 mb-6 text-center">
                {PROCESS.checklist.title}
              </h3>
              <ul className="space-y-3">
                {PROCESS.checklist.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-gray-800">{item}</span>
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
