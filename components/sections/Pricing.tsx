import { PACKAGES } from "@/lib/content";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { WhatsAppButtonLink } from "@/components/ui/whatsapp-button-link";
import { Check, X, Clock, CreditCard, Sparkles, TrendingUp } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white via-gray-50/30 to-white lg:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 mb-6">
            <TrendingUp className="w-7 h-7 text-green-600" />
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl mb-4">
            Pacotes e Preços
          </h2>
          <p className="text-xl text-gray-600 sm:text-2xl">
            Escolha o plano ideal para seu negócio
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto" />
        </div>

        {/* Grid de pacotes */}
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-3 max-w-7xl mx-auto items-start">
          {PACKAGES.map((pkg) => {
            // Lógica para decidir se deve mostrar o overflow (para o badge não ser cortado)
            const shouldShowOverflow = pkg.highlight || pkg.badge;

            return (
              <Card
                key={pkg.id}
                className={`group relative flex flex-col transition-all duration-500 
                  ${shouldShowOverflow ? "overflow-visible z-10" : "overflow-hidden"} 
                  ${pkg.highlight
                    ? "border-2 border-green-500 shadow-2xl scale-105 lg:scale-110 bg-gradient-to-br from-white to-green-50/30"
                    : "border-2 border-gray-200 hover:border-green-300 bg-white hover:shadow-xl"
                  }`}
              >
                {pkg.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 pointer-events-none rounded-xl" />
                )}

                {/* Badge (O Botão "Campanha") */}
                {pkg.badge && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-green-600 rounded-full blur-md opacity-50" />
                      <div className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2.5 rounded-full text-xs font-bold whitespace-nowrap shadow-lg flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        {pkg.badge}
                      </div>
                    </div>
                  </div>
                )}

                {/* Ajustei o pt (padding top) para compensar o badge */}
                <CardHeader className={`text-center pb-6 relative ${pkg.badge ? "pt-14" : "pt-8"}`}>
                  <CardTitle className="text-3xl font-extrabold text-gray-900 mb-2">{pkg.name}</CardTitle>
                  <CardDescription className="text-base text-gray-600 mt-3 leading-relaxed">{pkg.description}</CardDescription>
                  <div className="mt-6 flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-extrabold text-gray-900 tracking-tight">
                      {pkg.price.split(' ')[0]}
                    </span>
                    {pkg.price.split(' ')[1] && (
                      <span className="text-xl text-gray-500 font-medium">
                        {pkg.price.split(' ').slice(1).join(' ')}
                      </span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="flex-1 space-y-8 px-6">
                  {/* Prazo e Pagamento */}
                  <div className="space-y-3 pb-6 border-b border-gray-200/60">
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                        <Clock className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Entrega:</span>
                        <span className="text-gray-600 ml-1">{pkg.deadline}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                        <CreditCard className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{pkg.payment}</span>
                    </div>
                  </div>

                  {/* Incluído */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-green-600 mb-4 flex items-center gap-2">
                      <div className="w-1 h-4 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
                      Incluído
                    </h4>
                    <ul className="space-y-4">
                      {pkg.included.map((item, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <div className="flex-shrink-0 mt-0.5">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center group-hover/item:bg-green-200 transition-colors">
                              <Check className="h-3.5 w-3.5 text-green-600" />
                            </div>
                          </div>
                          <span className="text-sm text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Não incluído */}
                  {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                    <div className="pt-6 border-t border-gray-200/60">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-2">
                        <div className="w-1 h-4 bg-gray-300 rounded-full" />
                        Não incluído
                      </h4>
                      <ul className="space-y-4">
                        {pkg.notIncluded.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-0.5">
                              <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                                <X className="h-3.5 w-3.5 text-gray-400" />
                              </div>
                            </div>
                            <span className="text-sm text-gray-500 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>

                <CardFooter className="pt-8 px-6 pb-8">
                  <WhatsAppButtonLink
                    size="lg"
                    position="pricing"
                    packageName={pkg.name}
                    className={`w-full rounded-xl font-semibold transition-all duration-300 ${pkg.highlight
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg shadow-green-600/30 hover:shadow-green-600/50 hover:-translate-y-0.5"
                        : "border-2 border-green-600/80 text-green-700 hover:bg-green-50 hover:border-green-700"
                      }`}
                    variant={pkg.highlight ? "default" : "outline"}
                    aria-label={`Escolher plano ${pkg.name}`}
                  >
                    Escolher {pkg.name}
                  </WhatsAppButtonLink>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}