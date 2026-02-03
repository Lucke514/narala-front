import Image from "next/image";
import { MapPin } from "lucide-react";
import { Badge, Button } from "@/components/atoms";

const MAP_IMAGE =
  "https://images.unsplash.com/photo-1573502160652-c5d8a218e081?w=1120&q=80";

export function LocationSection() {
  return (
    <section
      id="ubicacion"
      className="w-full bg-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-12 sm:gap-12 sm:px-6 sm:py-16 lg:flex-row lg:gap-16 lg:px-8 lg:py-20">
        <div className="flex w-full flex-col gap-6 sm:gap-8 lg:flex-1">
          <Badge
            variant="light"
            icon={<MapPin className="h-4 w-4 text-pink-500" />}
          >
            Visítanos
          </Badge>
          <h2 className="font-serif text-2xl font-semibold text-rose-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Nuestra Tienda en Ovalle
          </h2>
          <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
            Te invitamos a conocer nuestra tienda física en el corazón de Ovalle,
            Chile. Aquí podrás ver, probar y elegir los productos perfectos para
            ti con asesoría personalizada.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 shrink-0 text-pink-500" />
              <div>
                <p className="font-medium text-gray-800">Dirección</p>
                <p className="text-sm text-gray-500 sm:text-base">Independencia 422, local 2</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg">🕐</span>
              <div>
                <p className="font-medium text-gray-800">Horario</p>
                <p className="text-sm text-gray-500 sm:text-base">Lunes a Sábado, 09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[260px] w-full overflow-hidden rounded-2xl sm:h-[340px] sm:rounded-3xl lg:h-[420px] lg:max-w-[520px]">
          <Image
            src={MAP_IMAGE}
            alt="Ubicación Narala SPA Ovalle"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/50 p-4 sm:gap-4 sm:p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 shadow-[0_4px_20px_rgba(236,72,153,0.4)] sm:h-20 sm:w-20">
              <MapPin className="h-8 w-8 text-white sm:h-10 sm:w-10" strokeWidth={2} />
            </div>
            <p className="font-serif text-xl font-semibold text-white sm:text-2xl">
              Narala SPA
            </p>
            <p className="text-sm text-white/90 sm:text-base">Independencia 422, local 2</p>
            <Button
              variant="primary"
              href="https://maps.google.com/?q=Independencia+422+Ovalle+Chile"
            >
              Ver en mapa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
