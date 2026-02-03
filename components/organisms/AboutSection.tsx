import Image from "next/image";
import { Heart } from "lucide-react";
import { Badge } from "@/components/atoms";

const ABOUT_IMAGE = "/img_danitza.jpg";

export function AboutSection() {
  return (
    <section
      id="nosotros"
      className="flex w-full flex-col items-center gap-16 bg-white py-24 px-6 md:flex-row md:justify-center md:gap-20 md:px-[120px]"
    >
      <div className="relative h-[400px] w-full max-w-[480px] overflow-hidden rounded-[32px] md:h-[560px]">
        <Image
          src={ABOUT_IMAGE}
          alt="Danitza - Fundadora de Narala Tienda"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 480px"
        />
      </div>
      <div className="flex max-w-[640px] flex-col gap-6">
        <Badge
          variant="light"
          icon={<Heart className="h-4 w-4 text-pink-500" />}
        >
          Nuestra Historia
        </Badge>
        <h2 className="font-serif text-4xl font-semibold text-rose-900 md:text-5xl">
          Conoce a Danitza Díaz Palacio
        </h2>
        <p className="text-lg leading-relaxed text-gray-500">
          Soy Danitza, fundadora de Narala SPA. Mi pasión por el cuidado
          personal y la belleza natural me llevó a crear este emprendimiento en
          Ovalle, Chile.
        </p>
        <p className="text-lg leading-relaxed text-gray-500">
          Como consultora oficial de Natura, me dedico a ayudar a cada clienta
          a encontrar los productos perfectos para realzar su belleza natural.
          Creo firmemente que el autocuidado es un acto de amor propio.
        </p>
        <blockquote className="rounded-2xl border-l-4 border-pink-500 bg-gradient-to-br from-pink-50 to-pink-100 p-6 font-serif text-xl italic font-medium text-rose-900">
          &quot;La belleza comienza en el momento en que decides ser tú misma&quot;
        </blockquote>
      </div>
    </section>
  );
}
