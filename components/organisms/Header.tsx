"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 transition-colors hover:text-pink-500 xl:text-base"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="whatsapp"
            href="https://wa.me/56974464160"
            icon={<MessageCircle className="h-[18px] w-[18px]" />}
          >
            WhatsApp
          </Button>
          <Button variant="primary" href="#productos">
            Comprar Ahora
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-gray-100 lg:hidden"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-16 z-40 bg-black/20 backdrop-blur-sm sm:top-20 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <nav className="absolute left-0 right-0 top-16 z-50 border-b border-gray-100 bg-white shadow-lg sm:top-20 lg:hidden">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-pink-50 hover:text-pink-500"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-2 border-t border-gray-100 pt-4 sm:flex-row">
                <Button
                  variant="whatsapp"
                  href="https://wa.me/56974464160"
                  icon={<MessageCircle className="h-[18px] w-[18px]" />}
                  className="w-full justify-center sm:w-auto sm:flex-1"
                >
                  WhatsApp
                </Button>
                <Button
                  variant="primary"
                  href="#productos"
                  className="w-full justify-center sm:w-auto sm:flex-1"
                >
                  Comprar Ahora
                </Button>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
