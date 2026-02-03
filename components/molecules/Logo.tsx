import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 no-underline text-pink-500 hover:text-pink-600 transition-colors"
    >
      <Image
        src="/icon.png"
        alt="Narala Tienda"
        width={44}
        height={44}
        className="h-11 w-11 shrink-0 object-contain"
      />
      <span className="font-serif text-2xl font-semibold text-pink-500">
        Narala Tienda
      </span>
    </Link>
  );
}
