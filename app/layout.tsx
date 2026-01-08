import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sites e Landing Pages que Convertem | Lucas Antunes",
  description:
    "Criação de sites e landing pages para academias, lojas, restaurantes e negócios locais. Entrega em 48-72h, mobile-first e com foco em conversão via WhatsApp. Pacotes a partir de R$ 690.",
  keywords: [
    "criação de sites",
    "landing page",
    "academia",
    "loja online",
    "restaurante",
    "whatsapp",
    "conversão",
    "negócios locais",
  ],
  authors: [{ name: "Lucas Antunes" }],
  creator: "Lucas Antunes",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seudominio.com.br", // TODO: Trocar pela URL real
    title: "Sites e Landing Pages que Convertem | Lucas Antunes",
    description:
      "Criação de sites e landing pages para negócios locais. Entrega rápida em 48-72h com foco em conversão.",
    siteName: "Lucas Antunes - Landing Pages",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sites e Landing Pages que Convertem | Lucas Antunes",
    description:
      "Criação de sites e landing pages para negócios locais. Entrega rápida em 48-72h com foco em conversão.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
