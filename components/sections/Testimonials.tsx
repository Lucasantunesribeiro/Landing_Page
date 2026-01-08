import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";
import { Card } from "@/components/ui/card";

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {TESTIMONIALS.title}
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-gray-900 font-semibold">
              {TESTIMONIALS.rating}
            </span>
            <span className="text-gray-600">
              ({TESTIMONIALS.totalReviews} avaliações)
            </span>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {TESTIMONIALS.subtitle}
          </p>
        </div>

        {/* Grid de depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {TESTIMONIALS.items.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-6 hover:shadow-lg transition-shadow"
            >
              {/* Estrelas */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Texto */}
              <p className="text-gray-700 mb-4 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Autor */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonial.business} • {testimonial.niche}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Aviso de transparência */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center max-w-3xl mx-auto">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Transparência:</span> Os demos
            apresentados são projetos conceito criados para demonstrar o
            potencial das páginas. Cada projeto é 100% personalizado com sua
            marca, fotos, conteúdo e identidade visual.
          </p>
        </div>
      </div>
    </section>
  );
}
