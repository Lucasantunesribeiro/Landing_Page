import { HERO } from "@/lib/content";
import { getQuoteLink } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 pt-20 pb-16 lg:pt-28 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {HERO.headline}
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg text-gray-700 sm:text-xl lg:text-2xl">
            {HERO.subheadline}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={getQuoteLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 h-14 px-10 text-lg whitespace-nowrap rounded-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/30"
            >
              {HERO.ctaPrimary}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#demos"
              className="inline-flex items-center justify-center gap-2 h-14 px-10 text-lg whitespace-nowrap rounded-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 border-2 border-green-600 text-green-600 hover:bg-green-50"
            >
              {HERO.ctaSecondary}
            </a>
          </div>

          {/* Badges de confiança */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            {HERO.badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm font-medium text-gray-700"
              >
                <Check className="h-5 w-5 text-green-600" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-green-100 opacity-30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-100 opacity-30 blur-3xl" />
    </section>
  );
}
