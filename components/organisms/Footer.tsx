import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Instagram, Facebook } from "lucide-react";
import { FooterLinks } from "@/components/molecules/FooterLinks";

const productLinks = [
  { label: "Perfumería", href: "#productos" },
  { label: "Cuidado Facial", href: "#productos" },
  { label: "Cuidado Corporal", href: "#productos" },
  { label: "Maquillaje", href: "#productos" },
  { label: "Cabello", href: "#productos" },
];

const companyLinks = [
  { label: "Sobre Nosotros", href: "#nosotros" },
  { label: "Nuestra Historia", href: "#nosotros" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

const supportLinks = [
  { label: "Preguntas Frecuentes", href: "#" },
  { label: "Envíos", href: "#" },
  { label: "Devoluciones", href: "#" },
  { label: "Términos y Condiciones", href: "#" },
];

export function Footer() {
  return (
    <footer className="w-full bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3 no-underline text-white transition-colors hover:text-pink-300"
            >
              <Image
                src="/icon.png"
                alt="Narala Tienda"
                width={44}
                height={44}
                className="h-9 w-9 shrink-0 object-contain sm:h-11 sm:w-11"
              />
              <span className="font-serif text-xl font-semibold sm:text-2xl">
                Narala Tienda
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Tu destino para productos de belleza y cuidado personal de alta
              calidad. Distribuidores oficiales de Natura en Ovalle, Chile.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/56974464160"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition-colors hover:bg-[#25D366]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/tiendanarala/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition-all hover:bg-gradient-to-br hover:from-amber-400 hover:via-rose-500 hover:to-purple-600"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/danitzad1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-white transition-colors hover:bg-[#1877F2]"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          <FooterLinks title="Productos" links={productLinks} />
          <FooterLinks title="Empresa" links={companyLinks} />
          <FooterLinks title="Atención" links={supportLinks} />
        </div>
        <div className="mt-10 h-px w-full bg-gray-600 sm:mt-12" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:mt-8 md:flex-row">
          <p className="text-sm text-gray-500">
            © 2025 Narala SPA. Todos los derechos reservados.
          </p>
          <p className="text-sm text-gray-500">
            Creado con ❤ por Lucas Gonzalez
          </p>
        </div>
      </div>
    </footer>
  );
}
