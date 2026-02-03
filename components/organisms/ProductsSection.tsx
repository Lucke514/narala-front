import { SectionHeader } from "@/components/molecules/SectionHeader";
import { ProductCard } from "@/components/molecules/ProductCard";

const products = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1764513168260-391d5a3ea21a?w=560&q=80",
    imageAlt: "Perfume Natura",
    name: "Perfume Essencial",
    description: "Fragancia única que realza tu esencia natural. Duración prolongada.",
    price: "$24.990",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1763503836825-97f5450d155a?w=560&q=80",
    imageAlt: "Crema facial",
    name: "Crema Hidratante",
    description: "Hidratación intensiva con ingredientes naturales para todo tipo de piel.",
    price: "$18.990",
  },
  {
    imageSrc:
      "https://images.unsplash.com/photo-1664530964972-66ef1bc29d61?w=560&q=80",
    imageAlt: "Serum facial",
    name: "Sérum Vitamina C",
    description: "Antioxidante que ilumina y unifica el tono de tu piel.",
    price: "$22.990",
  },
];

export function ProductsSection() {
  return (
    <section
      id="productos"
      className="flex w-full flex-col items-center gap-12 bg-gradient-to-b from-pink-50 to-pink-200 py-20 px-6 md:px-[120px]"
    >
      <SectionHeader
        title="Productos Destacados"
        subtitle="Los favoritos de nuestras clientas"
      />
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}
