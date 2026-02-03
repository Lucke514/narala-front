import { Sparkles, ShoppingBag, MapPin } from "lucide-react";
import { Badge, Button } from "@/components/atoms";
import { HeroCarousel } from "@/components/molecules";

const stats = [
  { value: "500+", label: "Clientas felices" },
  { value: "100%", label: "Original Natura" },
  { value: "Todo Chile", label: "Envíos" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[780px] w-full flex-col items-center gap-12 bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200 py-20 px-6 md:flex-row md:justify-center md:gap-16 md:px-[120px]"
    >
      <div className="flex w-full max-w-[580px] flex-col gap-8">
        <Badge
          variant="default"
          icon={<Sparkles className="h-4 w-4 text-pink-500" />}
        >
          Productos Natura Originales
        </Badge>
        <h1 className="font-serif text-5xl font-semibold leading-tight text-rose-900 md:text-6xl">
          Descubre tu Belleza Natural
        </h1>
        <p className="max-w-[520px] text-xl leading-relaxed text-gray-500">
          En Narala SPA encontrarás los mejores productos de cuidado personal y
          belleza. Somos distribuidores oficiales de Natura en Ovalle, Chile.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Button
            variant="primary"
            href="https://wa.me/56974464160"
            icon={<ShoppingBag className="h-5 w-5" />}
          >
            Ver Productos
          </Button>
          <Button variant="secondary" href="#nosotros" icon={<MapPin className="h-5 w-5" />}>
            Conocer más
          </Button>
        </div>
        <div className="flex flex-wrap gap-8 pt-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-serif text-2xl font-semibold text-rose-900">
                {stat.value}
              </span>
              <span className="text-sm text-gray-500">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative h-[400px] w-full max-w-[560px] md:h-[540px]">
        <HeroCarousel className="h-full w-full" />
      </div>
    </section>
  );
}
