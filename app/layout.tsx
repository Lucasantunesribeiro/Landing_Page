import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://landing-page-eta-beryl.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Landing Page no Ar em 72h — Feita pra Converter Cliques em WhatsApp | Lucas Antunes",
  description:
    "Landing pages otimizadas para negócios locais. Entrega em 72h, mobile-first, com foco em conversão via WhatsApp. Pacotes a partir de R$ 590. Sem promessas mágicas, foco em resultados reais.",
  keywords: [
    "criação de sites",
    "landing page",
    "academia",
    "loja online",
    "restaurante",
    "whatsapp",
    "conversão",
    "negócios locais",
    "site para negócio local",
    "página de conversão",
  ],
  authors: [{ name: "Lucas Antunes" }],
  creator: "Lucas Antunes",
  publisher: "Lucas Antunes",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    title: "Landing Page no Ar em 72h — Feita pra Converter Cliques em WhatsApp",
    description:
      "Landing pages otimizadas para negócios locais. Entrega em 72h, mobile-first, com foco em conversão via WhatsApp. Sem promessas mágicas, foco em resultados reais.",
    siteName: "Lucas Antunes - Landing Pages",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Lucas Antunes - Landing Pages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Landing Page no Ar em 72h — Feita pra Converter Cliques em WhatsApp",
    description:
      "Landing pages otimizadas para negócios locais. Entrega em 72h, mobile-first, com foco em conversão via WhatsApp.",
    images: [`${baseUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // TODO: Adicionar códigos de verificação quando disponível
    // google: "seu-codigo-google",
    // yandex: "seu-codigo-yandex",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lucas Antunes - Landing Pages",
    description:
      "Criação de sites e landing pages para negócios locais. Entrega rápida em 72h com foco em conversão via WhatsApp.",
    url: "https://seudominio.com.br", // TODO: Trocar pela URL real
    logo: "https://seudominio.com.br/logo.png", // TODO: Trocar pelo logo real
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+55-11-99999-9999", // TODO: Trocar pelo número real
      contactType: "Customer Service",
      areaServed: "BR",
      availableLanguage: "Portuguese",
    },
    sameAs: [
      // TODO: Adicionar links de redes sociais reais
      "https://instagram.com/seuusuario",
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "BRL",
      lowPrice: "590",
      highPrice: "1190",
      offerCount: "3",
    },
  };

  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="canonical" href={baseUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <React.Suspense fallback={null}>
          <GoogleAnalytics />
        </React.Suspense>
      </body>
    </html>
  );
}
