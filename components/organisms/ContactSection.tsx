import { MessageCircle, Instagram, Facebook } from "lucide-react";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { ContactCard } from "@/components/molecules/ContactCard";

const WHATSAPP_LINK = "https://wa.me/56974464160";

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="flex w-full flex-col items-center gap-12 bg-gradient-to-br from-rose-900 via-rose-800 to-rose-700 py-24 px-6 md:px-[120px]"
    >
      <SectionHeader
        title="¿Lista para transformar tu rutina de belleza?"
        subtitle="Contáctanos y descubre los productos perfectos para ti"
        titleClassName="text-white"
        subtitleClassName="text-pink-200"
      />
      <div className="flex flex-wrap justify-center gap-8">
        <ContactCard
          icon={
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#25D366]">
              <MessageCircle className="h-8 w-8 text-white" strokeWidth={2} />
            </div>
          }
          title="WhatsApp"
          description="Escríbenos directamente para consultas y pedidos"
          buttonLabel="Escribir por WhatsApp"
          buttonHref={WHATSAPP_LINK}
          buttonVariant="whatsapp"
        />
        <ContactCard
          icon={
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-rose-500 to-purple-600">
              <Instagram className="h-8 w-8 text-white" strokeWidth={2} />
            </div>
          }
          title="Instagram"
          description="Síguenos para ver novedades y promociones"
          buttonLabel="Seguir en Instagram"
          buttonHref="https://www.instagram.com/tiendanarala/"
          buttonVariant="secondary"
        />
        <ContactCard
          icon={
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1877F2]">
              <Facebook className="h-8 w-8 text-white" strokeWidth={2} />
            </div>
          }
          title="Facebook"
          description="Síguenos en nuestra página oficial de Facebook"
          buttonLabel="Seguir en Facebook"
          buttonHref="https://www.facebook.com/danitzad1"
          buttonVariant="secondary"
        />
      </div>
    </section>
  );
}
