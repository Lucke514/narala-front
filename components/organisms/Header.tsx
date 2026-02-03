"use client";

import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { Logo } from "@/components/molecules";
import { Button } from "@/components/atoms";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Productos", href: "#productos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex h-20 w-full items-center justify-between border-b-0 bg-white px-6 md:px-[120px]">
      <Logo />
      <nav className="hidden items-center gap-10 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-base font-medium text-gray-700 hover:text-pink-500 transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2 md:gap-4">
        <Button
          variant="whatsapp"
          href="https://wa.me/56974464160"
          icon={<MessageCircle className="h-[18px] w-[18px]" />}
          className="hidden sm:inline-flex"
        >
          WhatsApp
        </Button>
        <Button
          variant="primary"
          href="#productos"
          className="hidden sm:inline-flex"
        >
          Comprar Ahora
        </Button>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-20 z-40 flex flex-col gap-2 border-b border-gray-100 bg-white p-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-500"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-gray-100 pt-4">
            <Button
              variant="whatsapp"
              href="https://wa.me/56974464160"
              icon={<MessageCircle className="h-[18px] w-[18px]" />}
              className="w-full justify-center"
            >
              WhatsApp
            </Button>
            <Button variant="primary" href="#productos" className="w-full justify-center">
              Comprar Ahora
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
