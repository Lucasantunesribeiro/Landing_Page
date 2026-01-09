import { WHATSAPP_NUMBER } from "./content";

/**
 * Gera link do WhatsApp com mensagem pré-preenchida
 * @param message - Mensagem a ser enviada
 * @returns URL completa do WhatsApp Web/App
 */
export function getWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

/**
 * Gera mensagem padrão de orçamento
 * @param niche - Nicho do negócio (opcional)
 * @param packageName - Nome do pacote (opcional)
 * @returns Mensagem formatada
 */
export function getQuoteMessage(niche?: string, packageName?: string): string {
  let message = "Olá! Quero um orçamento para";

  if (niche) {
    message += ` ${niche}`;
  } else {
    message += " uma landing page";
  }

  if (packageName) {
    message += ` (pacote ${packageName})`;
  }

  message += ".";

  return message;
}

/**
 * Gera link do WhatsApp com mensagem de orçamento
 * @param niche - Nicho do negócio (opcional)
 * @param packageName - Nome do pacote (opcional)
 * @returns URL completa do WhatsApp
 */
export function getQuoteLink(niche?: string, packageName?: string): string {
  const message = getQuoteMessage(niche, packageName);
  return getWhatsAppLink(message);
}

/**
 * Tracka clique no WhatsApp no GA4
 * @param position - Posição do botão (hero, footer, floating, etc)
 */
export function trackWhatsAppClick(position: string): void {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: position,
      value: 1,
    });
  }
}
