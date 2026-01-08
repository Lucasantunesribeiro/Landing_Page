import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
}

export const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <a
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-600/30":
              variant === "default",
            "border-2 border-green-600 text-green-600 hover:bg-green-50":
              variant === "outline",
            "hover:bg-gray-100 text-gray-700": variant === "ghost",
            "text-green-600 underline-offset-4 hover:underline":
              variant === "link",
            "h-11 px-8 text-base": size === "default",
            "h-9 px-4 text-sm": size === "sm",
            "h-14 px-10 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

ButtonLink.displayName = "ButtonLink";
