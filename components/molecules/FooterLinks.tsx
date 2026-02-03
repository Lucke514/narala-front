import Link from "next/link";

interface LinkItem {
  label: string;
  href: string;
}

interface FooterLinksProps {
  title: string;
  links: LinkItem[];
}

export function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <nav className="flex flex-col gap-4">
      <h4 className="text-base font-semibold text-white">{title}</h4>
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
