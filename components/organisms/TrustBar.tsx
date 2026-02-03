import { Truck, ShieldCheck, CreditCard, Headphones } from "lucide-react";
import { TrustItem } from "@/components/molecules";

const items = [
  {
    icon: Truck,
    title: "Envío Gratis",
    subtitle: "En compras sobre $30.000",
  },
  {
    icon: ShieldCheck,
    title: "100% Original",
    subtitle: "Garantía Natura oficial",
  },
  {
    icon: CreditCard,
    title: "Pago Seguro",
    subtitle: "Transferencia y tarjetas",
  },
  {
    icon: Headphones,
    title: "Atención Directa",
    subtitle: "WhatsApp disponible",
  },
];

export function TrustBar() {
  return (
    <div className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-4 sm:grid-cols-4 sm:gap-4 sm:px-6 sm:py-5 lg:px-8">
        {items.map((item) => (
          <TrustItem
            key={item.title}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>
    </div>
  );
}
