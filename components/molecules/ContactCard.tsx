import type { ReactNode } from "react";
import { Button } from "@/components/atoms";

interface ContactCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  buttonVariant?: "primary" | "secondary" | "whatsapp";
}

export function ContactCard({
  icon,
  title,
  description,
  buttonLabel,
  buttonHref,
  buttonVariant = "primary",
}: ContactCardProps) {
  return (
    <div className="flex w-full flex-col items-center gap-5 rounded-3xl bg-white p-6 sm:p-8 text-center">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-semibold text-gray-800">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-500">{description}</p>
      <Button href={buttonHref} variant={buttonVariant}>
        {buttonLabel}
      </Button>
    </div>
  );
}
