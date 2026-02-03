import Image from "next/image";
import { Button } from "@/components/atoms";

interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
  description: string;
  price: string;
}

export function ProductCard({
  imageSrc,
  imageAlt,
  name,
  description,
  price,
}: ProductCardProps) {
  return (
    <article className="flex w-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
      <div className="relative h-[260px] w-full overflow-hidden rounded-t-3xl bg-gray-100">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <h3 className="font-serif text-lg font-semibold text-rose-900">
          {name}
        </h3>
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="font-semibold text-rose-900">{price}</span>
          <Button variant="secondary" className="py-2 px-4 text-sm">
            Ver producto
          </Button>
        </div>
      </div>
    </article>
  );
}
