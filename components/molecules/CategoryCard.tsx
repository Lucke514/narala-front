import type { ReactNode } from "react";

interface CategoryCardProps {
  icon: ReactNode;
  title: string;
  count: string;
}

export function CategoryCard({ icon, title, count }: CategoryCardProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 rounded-3xl bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)]">
      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[20px] bg-gradient-to-br from-pink-300 to-pink-400">
        {icon}
      </div>
      <h3 className="text-center font-serif text-xl font-semibold text-rose-900">
        {title}
      </h3>
      <p className="text-center text-sm font-medium text-gray-400">
        {count}
      </p>
    </div>
  );
}
