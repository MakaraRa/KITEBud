import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Home", href: "/" },
  { label: "Universities", href: "/universities" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Shortlist", href: "/shortlist" },
];

export default function Navbar() {
  return (
    <header className="border-b border-border bg-white/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <Image src="/logo/logo_kd.jpg" alt="KITEBud logo" width={50} height={50} />
          KITEBud
        </Link>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-primary/80">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}