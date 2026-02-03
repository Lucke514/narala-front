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
    <section className="w-full bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-12 sm:gap-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SectionHeader
          title="¿Por qué elegirnos?"
          subtitle="Comprometidos con tu bienestar y belleza natural"
        />
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
