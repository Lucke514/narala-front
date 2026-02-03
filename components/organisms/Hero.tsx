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
      className="w-full bg-gradient-to-br from-pink-50 via-pink-100 to-pink-200"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-12 sm:gap-12 sm:px-6 sm:py-16 lg:flex-row lg:gap-16 lg:px-8 lg:py-20">
        <div className="flex w-full flex-col gap-6 sm:gap-8 lg:flex-1">
          <Badge
            variant="default"
            icon={<Sparkles className="h-4 w-4 text-pink-500" />}
          >
            Productos Natura Originales
          </Badge>
          <h1 className="font-serif text-3xl font-semibold leading-tight text-rose-900 sm:text-4xl md:text-5xl lg:text-6xl">
            Descubre tu Belleza Natural
          </h1>
          <p className="max-w-[520px] text-base leading-relaxed text-gray-500 sm:text-lg md:text-xl">
            En Narala SPA encontrarás los mejores productos de cuidado personal y
            belleza. Somos distribuidores oficiales de Natura en Ovalle, Chile.
          </p>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
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
          <div className="flex flex-wrap gap-6 pt-2 sm:gap-8 sm:pt-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-serif text-xl font-semibold text-rose-900 sm:text-2xl">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[280px] w-full sm:h-[360px] md:h-[420px] lg:h-[500px] lg:max-w-[520px]">
          <HeroCarousel className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}
