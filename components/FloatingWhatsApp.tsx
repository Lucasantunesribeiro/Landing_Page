"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { getQuoteLink, trackWhatsAppClick } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar apenas em mobile
    const checkMobile = () => {
      setIsVisible(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = () => {
    trackWhatsAppClick("floating");
    window.open(getQuoteLink(), "_blank", "noopener,noreferrer");
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
}
