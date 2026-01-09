"use client";

import { FOOTER } from "@/lib/content";
import { getQuoteLink, trackWhatsAppClick } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export function Footer() {
  const handleWhatsAppClick = () => {
    trackWhatsAppClick("footer-link");
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-green-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          {/* Logo/Name area */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <p className="text-sm text-gray-400 font-medium">{FOOTER.text}</p>
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href={getQuoteLink()}
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg px-4 py-2 hover:bg-white/5"
            >
              <MessageCircle className="w-4 h-4 group-hover:text-green-400 transition-colors" />
              WhatsApp
            </a>
            {FOOTER.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-lg px-4 py-2 hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
          
          {/* Copyright */}
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
