import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Universities", href: "/universities" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Shortlist", href: "/shortlist" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <Link href="/" className="text-lg font-semibold text-primary">
            KITEBud
          </Link>
          <p className="mt-2 text-sm text-muted">Sample data for demonstration only</p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-4 text-sm text-muted">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}