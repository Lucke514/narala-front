import {
  Package,
  UserCircle,
  Truck,
  Leaf,
} from "lucide-react";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { BenefitCard } from "@/components/molecules/BenefitCard";

const benefits = [
  {
    icon: <Package className="h-8 w-8 text-white" strokeWidth={2} />,
    title: "100% Originales",
    description:
      "Todos nuestros productos son originales de Natura, garantizando calidad y autenticidad.",
  },
  {
    icon: <UserCircle className="h-8 w-8 text-white" strokeWidth={2} />,
    title: "Atención Personalizada",
    description:
      "Te asesoramos para encontrar los productos perfectos para tu tipo de piel y necesidades.",
  },
  {
    icon: <Truck className="h-8 w-8 text-white" strokeWidth={2} />,
    title: "Envíos a Todo Chile",
    description:
      "Realizamos envíos a todo el país. También puedes visitarnos en nuestra tienda en Ovalle.",
  },
  {
    icon: <Leaf className="h-8 w-8 text-white" strokeWidth={2} />,
    title: "Eco-Friendly",
    description:
      "Natura está comprometida con el medio ambiente y la sustentabilidad en todos sus productos.",
  },
];

export function BenefitsSection() {
  return (
    <section className="flex w-full flex-col items-center gap-12 bg-white py-20 px-6 md:px-[120px]">
      <SectionHeader
        title="¿Por qué elegirnos?"
        subtitle="Comprometidos con tu bienestar y belleza natural"
      />
      <div className="flex flex-wrap items-stretch justify-center gap-8">
        {benefits.map((benefit) => (
          <BenefitCard
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </section>
  );
}
