import type { LucideIcon } from "lucide-react";

interface TrustItemProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export function TrustItem({ icon: Icon, title, subtitle }: TrustItemProps) {
  return (
    <div className="flex items-center gap-3">
      <Icon className="h-7 w-7 shrink-0 text-pink-500" strokeWidth={2} />
      <div className="flex flex-col gap-0.5">
        <span className="text-sm font-semibold text-gray-800">{title}</span>
        <span className="text-xs text-gray-500">{subtitle}</span>
      </div>
    </div>
  );
}
