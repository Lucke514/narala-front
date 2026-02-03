import { SectionHeader } from "@/components/molecules/SectionHeader";
import { TestimonialCard } from "@/components/molecules/TestimonialCard";

const testimonials = [
  {
    quote:
      '"Los productos de Natura son increíbles y Danitza siempre me asesora súper bien. El servicio es excelente y los envíos llegan rapidísimo. 100% recomendado!"',
    authorName: "María González",
    authorRole: "Clienta desde 2023",
  },
  {
    quote:
      '"Compré el perfume Essencial y es divino! La atención por WhatsApp fue muy rápida y el producto llegó perfectamente empacado. Volveré a comprar seguro."',
    authorName: "Carmen López",
    authorRole: "Clienta",
  },
  {
    quote:
      '"Soy clienta hace más de un año. Los precios son buenos, los productos son originales y Danitza siempre tiene las últimas novedades de Natura. Super recomendada!"',
    authorName: "Andrea Silva",
    authorRole: "Clienta frecuente",
  },
];

export function TestimonialsSection() {
  return (
    <section className="flex w-full flex-col items-center gap-12 bg-white py-20 px-6 md:px-[120px]">
      <SectionHeader
        title="Lo Que Dicen Nuestras Clientas"
        subtitle="Más de 500 clientas satisfechas nos respaldan"
      />
      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((t) => (
          <TestimonialCard
            key={t.authorName}
            quote={t.quote}
            authorName={t.authorName}
            authorRole={t.authorRole}
          />
        ))}
      </div>
    </section>
  );
}
