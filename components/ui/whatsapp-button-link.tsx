"use client";

import * as React from "react";
import { ButtonLink, ButtonLinkProps } from "./button-link";
import { getQuoteLink, trackWhatsAppClick } from "@/lib/whatsapp";

export interface WhatsAppButtonLinkProps extends Omit<ButtonLinkProps, "href"> {
  position?: string;
  niche?: string;
  packageName?: string;
}

export const WhatsAppButtonLink = React.forwardRef<
  HTMLAnchorElement,
  WhatsAppButtonLinkProps
>(({ position = "button", niche, packageName, onClick, ...props }, ref) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackWhatsAppClick(position);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <ButtonLink
      ref={ref}
      href={getQuoteLink(niche, packageName)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label={props["aria-label"] || "Falar no WhatsApp"}
      {...props}
    />
  );
});

WhatsAppButtonLink.displayName = "WhatsAppButtonLink";
