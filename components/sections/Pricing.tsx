import { PACKAGES } from "@/lib/content";
import { getQuoteLink } from "@/lib/whatsapp";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button-link";
import { Check, X, Clock, CreditCard } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-white lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Pacotes e Preços
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Escolha o plano ideal para seu negócio
          </p>
        </div>

        {/* Grid de pacotes */}
        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {PACKAGES.map((pkg) => (
            <Card
              key={pkg.id}
              className={`relative flex flex-col ${
                pkg.highlight
                  ? "border-2 border-green-600 shadow-xl scale-105 lg:scale-110"
                  : "border-gray-200"
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                  {pkg.badge}
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="mt-2">{pkg.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {pkg.price}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="flex-1 space-y-6">
                {/* Prazo e Pagamento */}
                <div className="flex items-center gap-2 text-sm text-gray-600 border-b border-gray-200 pb-4">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span className="font-medium">Entrega: {pkg.deadline}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 pb-4 border-b border-gray-200">
                  <CreditCard className="h-4 w-4 text-green-600" />
                  <span className="font-medium">{pkg.payment}</span>
                </div>

                {/* Incluído */}
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-green-600 mb-3">
                    Incluído
                  </h4>
                  <ul className="space-y-2">
                    {pkg.included.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Não incluído */}
                {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
                      Não incluído
                    </h4>
                    <ul className="space-y-2">
                      {pkg.notIncluded.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <X className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>

              <CardFooter className="pt-6">
                <ButtonLink
                  size="lg"
                  href={getQuoteLink(undefined, pkg.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full ${pkg.highlight ? "bg-green-600 hover:bg-green-700 text-white" : ""}`}
                  variant={pkg.highlight ? "default" : "outline"}
                >
                  Escolher {pkg.name}
                </ButtonLink>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
