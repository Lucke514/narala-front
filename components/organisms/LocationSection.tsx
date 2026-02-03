import Image from "next/image";
import { MapPin } from "lucide-react";
import { Badge, Button } from "@/components/atoms";

const MAP_IMAGE =
  "https://images.unsplash.com/photo-1573502160652-c5d8a218e081?w=1120&q=80";

export function LocationSection() {
  return (
    <section
      id="ubicacion"
      className="flex w-full flex-col items-center gap-12 bg-white py-20 px-6 md:flex-row md:justify-center md:gap-16 md:px-[120px]"
    >
      <div className="flex max-w-[580px] flex-col gap-8">
        <Badge
          variant="light"
          icon={<MapPin className="h-4 w-4 text-pink-500" />}
        >
          Visítanos
        </Badge>
        <h2 className="font-serif text-4xl font-semibold text-rose-900 md:text-5xl">
          Nuestra Tienda en Ovalle
        </h2>
        <p className="text-lg leading-relaxed text-gray-500">
          Te invitamos a conocer nuestra tienda física en el corazón de Ovalle,
          Chile. Aquí podrás ver, probar y elegir los productos perfectos para
          ti con asesoría personalizada.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <MapPin className="h-5 w-5 shrink-0 text-pink-500" />
            <div>
              <p className="font-medium text-gray-800">Dirección</p>
              <p className="text-gray-500">Independencia 422, local 2</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg">🕐</span>
            <div>
              <p className="font-medium text-gray-800">Horario</p>
              <p className="text-gray-500">Lunes a Sábado, 09:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[350px] w-full max-w-[560px] overflow-hidden rounded-3xl md:h-[450px]">
        <Image
          src={MAP_IMAGE}
          alt="Ubicación Narala SPA Ovalle"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 560px"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-3xl bg-black/50 p-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-pink-500 shadow-[0_4px_20px_rgba(236,72,153,0.4)]">
            <MapPin className="h-10 w-10 text-white" strokeWidth={2} />
          </div>
          <p className="font-serif text-2xl font-semibold text-white">
            Narala SPA
          </p>
          <p className="text-white/90">Independencia 422, local 2</p>
          <Button
            variant="primary"
            href="https://maps.google.com/?q=Independencia+422+Ovalle+Chile"
            className="mt-2"
          >
            Ver en mapa
          </Button>
        </div>
      </div>
    </section>
  );
}
