import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Universities", href: "/universities" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Shortlist", href: "/shortlist" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <Link href="/" className="text-lg font-bold tracking-tight text-primary">
            KITEBud
          </Link>
          <p className="mt-1 text-sm text-muted">Helping students explore study options in Cambodia.</p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-muted">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}