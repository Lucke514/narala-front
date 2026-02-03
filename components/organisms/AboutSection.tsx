import Image from "next/image";
import { Heart } from "lucide-react";
import { Badge } from "@/components/atoms";

const ABOUT_IMAGE = "/img_danitza.jpg";

export function AboutSection() {
  return (
    <section
      id="nosotros"
      className="w-full bg-white"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-12 sm:gap-12 sm:px-6 sm:py-16 lg:flex-row lg:gap-16 lg:px-8 lg:py-20">
        <div className="relative h-[280px] w-full overflow-hidden rounded-2xl sm:h-[360px] sm:rounded-3xl lg:h-[480px] lg:max-w-[440px]">
          <Image
            src={ABOUT_IMAGE}
            alt="Danitza - Fundadora de Narala Tienda"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 440px"
          />
        </div>
        <div className="flex w-full flex-col gap-5 sm:gap-6 lg:flex-1">
          <Badge
            variant="light"
            icon={<Heart className="h-4 w-4 text-pink-500" />}
          >
            Nuestra Historia
          </Badge>
          <h2 className="font-serif text-2xl font-semibold text-rose-900 sm:text-3xl md:text-4xl lg:text-5xl">
            Conoce a Danitza Díaz Palacio
          </h2>
          <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
            Soy Danitza, fundadora de Narala SPA. Mi pasión por el cuidado
            personal y la belleza natural me llevó a crear este emprendimiento en
            Ovalle, Chile.
          </p>
          <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
            Como consultora oficial de Natura, me dedico a ayudar a cada clienta
            a encontrar los productos perfectos para realzar su belleza natural.
            Creo firmemente que el autocuidado es un acto de amor propio.
          </p>
          <blockquote className="rounded-xl border-l-4 border-pink-500 bg-gradient-to-br from-pink-50 to-pink-100 p-4 font-serif text-base italic font-medium text-rose-900 sm:rounded-2xl sm:p-6 sm:text-lg md:text-xl">
            &quot;La belleza comienza en el momento en que decides ser tú misma&quot;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
