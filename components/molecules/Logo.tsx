import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 no-underline text-pink-500 transition-colors hover:text-pink-600 sm:gap-3"
    >
      <Image
        src="/icon.png"
        alt="Narala Tienda"
        width={44}
        height={44}
        className="h-9 w-9 shrink-0 object-contain sm:h-11 sm:w-11"
      />
      <span className="font-serif text-xl font-semibold text-pink-500 sm:text-2xl">
        Narala Tienda
      </span>
    </Link>
  );
}
