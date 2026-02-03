import type { ReactNode } from "react";

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex w-full flex-col items-center gap-5 rounded-3xl bg-pink-50 p-8 text-center">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-pink-500">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-semibold text-rose-900">
        {title}
      </h3>
      <p className="text-[15px] leading-relaxed text-gray-500">
        {description}
      </p>
    </div>
  );
}
