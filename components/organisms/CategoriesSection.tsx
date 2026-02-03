import {
  Sparkles,
  Smile,
  Droplets,
  Palette,
  Sparkle,
} from "lucide-react";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { CategoryCard } from "@/components/molecules/CategoryCard";

const categories = [
  {
    icon: <Sparkles className="h-10 w-10 text-white" strokeWidth={2} />,
    title: "Perfumería",
    count: "+50 productos",
  },
  {
    icon: <Smile className="h-10 w-10 text-white" strokeWidth={2} />,
    title: "Cuidado Facial",
    count: "+40 productos",
  },
  {
    icon: <Droplets className="h-10 w-10 text-white" strokeWidth={2} />,
    title: "Cuidado Corporal",
    count: "+60 productos",
  },
  {
    icon: <Palette className="h-10 w-10 text-white" strokeWidth={2} />,
    title: "Maquillaje",
    count: "+35 productos",
  },
  {
    icon: <Sparkle className="h-10 w-10 text-white" strokeWidth={2} />,
    title: "Cuidado Capilar",
    count: "+30 productos",
  },
];

export function CategoriesSection() {
  return (
    <section className="w-full bg-gradient-to-b from-pink-50 to-pink-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-12 sm:gap-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SectionHeader
          title="Nuestras Categorías"
          subtitle="Encuentra todo lo que necesitas para tu rutina de belleza"
        />
        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-5">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.title}
              icon={cat.icon}
              title={cat.title}
              count={cat.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
