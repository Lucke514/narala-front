import { Zap, ArrowRight } from "lucide-react";
import { Badge, Button } from "@/components/atoms";

export function PromoSection() {
  return (
    <section className="w-full bg-gradient-to-br from-pink-500 via-rose-600 to-rose-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 lg:flex-row lg:gap-16 lg:px-8">
        <div className="flex w-full flex-col gap-5 sm:gap-6 lg:flex-1">
          <Badge variant="white" icon={<Zap className="h-4 w-4" />}>
            OFERTA LIMITADA
          </Badge>
          <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
            ¡20% OFF en tu Primera Compra!
          </h2>
          <p className="max-w-[480px] text-base leading-relaxed text-pink-200 sm:text-lg">
            Usa el código BIENVENIDA20 en tu primer pedido. Válido para compras
            sobre $25.000. ¡No te lo pierdas!
          </p>
          <Button
            variant="white"
            href="https://wa.me/56974464160?text=Quiero%20usar%20el%20código%20BIENVENIDA20"
            icon={<ArrowRight className="h-5 w-5" />}
            className="self-start"
          >
            Obtener Descuento
          </Button>
        </div>
        <div className="flex w-full flex-col items-center gap-4 rounded-3xl bg-white/20 px-6 py-6 sm:px-8 sm:py-8 lg:w-auto lg:min-w-[340px] lg:py-10">
          <span className="text-base font-medium text-white">Tu código:</span>
          <div className="rounded-xl border-3 border-pink-400 bg-white px-6 py-3 sm:px-8 sm:py-4">
            <span className="text-xl font-extrabold text-pink-500 sm:text-2xl">
              BIENVENIDA20
            </span>
          </div>
          <span className="text-sm font-medium text-pink-200">
            ⏰ Válido hasta agotar stock
          </span>
        </div>
      </div>
    </section>
  );
}
