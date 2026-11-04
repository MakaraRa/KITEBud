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
    <header className="sticky top-0 z-20 border-b border-border bg-white/95 backdrop-blur-sm">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-3 md:px-8"
      >
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg text-lg font-bold tracking-tight text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        >
          <Image
            src="/logo/logo_kd.jpg"
            alt=""
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span>KITEBud</span>
        </Link>

        <ul className="flex flex-wrap items-center gap-1 text-sm font-semibold text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex rounded-lg px-3 py-2 transition-colors hover:bg-surface-alt hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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