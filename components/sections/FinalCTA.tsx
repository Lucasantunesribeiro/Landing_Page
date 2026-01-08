import { FINAL_CTA } from "@/lib/content";
import { getQuoteLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-green-800 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            {FINAL_CTA.title}
          </h2>
          <p className="mt-6 text-lg text-green-100 sm:text-xl">
            {FINAL_CTA.subtitle}
          </p>

          {/* Badge de escassez */}
          {FINAL_CTA.badge && (
            <div className="mt-6 inline-block">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                {FINAL_CTA.badge}
              </span>
            </div>
          )}

          <div className="mt-10">
            <a
              href={getQuoteLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 h-14 px-10 text-lg whitespace-nowrap rounded-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white text-green-700 hover:bg-gray-100 shadow-xl"
            >
              {FINAL_CTA.cta}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-white opacity-5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-white opacity-5 blur-3xl" />
    </section>
  );
}
