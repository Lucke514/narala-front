import { Zap, ArrowRight } from "lucide-react";
import { Badge, Button } from "@/components/atoms";

export function PromoSection() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-12 bg-gradient-to-br from-pink-500 via-rose-600 to-rose-900 py-16 px-6 md:flex-row md:gap-16 md:px-[120px]">
      <div className="flex max-w-[740px] flex-col gap-6">
        <Badge variant="white" icon={<Zap className="h-4 w-4" />}>
          OFERTA LIMITADA
        </Badge>
        <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
          ¡20% OFF en tu Primera Compra!
        </h2>
        <p className="max-w-[480px] text-lg leading-relaxed text-pink-200">
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
      <div className="flex flex-col items-center gap-4 rounded-3xl bg-white/20 px-8 py-8 md:w-[400px] md:py-10">
        <span className="text-base font-medium text-white">Tu código:</span>
        <div className="rounded-xl border-3 border-pink-400 bg-white px-8 py-4">
          <span className="font-extrabold text-2xl text-pink-500">
            BIENVENIDA20
          </span>
        </div>
        <span className="text-sm font-medium text-pink-200">
          ⏰ Válido hasta agotar stock
        </span>
      </div>
    </section>
  );
}
