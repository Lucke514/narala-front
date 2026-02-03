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
    <section className="flex w-full flex-col items-center gap-12 bg-gradient-to-b from-pink-50 to-pink-200 py-20 px-6 md:px-[120px]">
      <SectionHeader
        title="Nuestras Categorías"
        subtitle="Encuentra todo lo que necesitas para tu rutina de belleza"
      />
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.title}
            icon={cat.icon}
            title={cat.title}
            count={cat.count}
          />
        ))}
      </div>
    </section>
  );
}
