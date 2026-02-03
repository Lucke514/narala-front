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
    <div className="flex h-20 w-full items-center justify-around border-b border-gray-100 bg-white px-6 md:px-[120px]">
      {items.map((item) => (
        <TrustItem
          key={item.title}
          icon={item.icon}
          title={item.title}
          subtitle={item.subtitle}
        />
      ))}
    </div>
  );
}
