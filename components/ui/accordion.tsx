"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Accordion Context
interface AccordionContextValue {
  value?: string;
  onValueChange: (value: string) => void;
  type: "single" | "multiple";
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(
  undefined
);

function useAccordion() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within Accordion");
  }
  return context;
}

// Accordion Root
interface AccordionProps {
  type: "single" | "multiple";
  collapsible?: boolean;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

export function Accordion({
  type,
  defaultValue,
  value: controlledValue,
  onValueChange: controlledOnValueChange,
  children,
  className,
}: AccordionProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue || "");
  const value = controlledValue ?? internalValue;
  const onValueChange = controlledOnValueChange ?? setInternalValue;

  return (
    <AccordionContext.Provider value={{ value, onValueChange, type }}>
      <div className={cn("w-full", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

// Item Context (para passar o value do item para trigger/content)
const AccordionItemContext = React.createContext<string>("");

// Accordion Item
interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export function AccordionItem({ value, children, className }: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={value}>
      <div className={cn("border-b border-gray-200 last:border-0", className)}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

// Accordion Trigger
interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionTrigger({ children, className }: AccordionTriggerProps) {
  const { value: openValue, onValueChange } = useAccordion();
  const itemValue = React.useContext(AccordionItemContext);
  const isOpen = openValue === itemValue;

  return (
    <button
      onClick={() => onValueChange(isOpen ? "" : itemValue)}
      className={cn(
        "flex w-full items-center justify-between py-5 text-left font-semibold text-gray-900 transition-colors hover:text-green-600",
        className
      )}
      aria-expanded={isOpen}
    >
      <span className="text-lg">{children}</span>
      <ChevronDown
        className={cn(
          "h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200",
          isOpen && "rotate-180 text-green-600"
        )}
      />
    </button>
  );
}

// Accordion Content
interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

export function AccordionContent({ children, className }: AccordionContentProps) {
  const { value: openValue } = useAccordion();
  const itemValue = React.useContext(AccordionItemContext);
  const isOpen = openValue === itemValue;

  return (
    <div
      className={cn(
        "grid overflow-hidden transition-all duration-200",
        isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
        className
      )}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}
