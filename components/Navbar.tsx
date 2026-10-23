
import Link from "next/link";

const links = [
    { label: "Home", href: "/" },
    { label: "Universities", href: "/universities" },
    { label: "Scholarships", href: "/scholarships" },
    { label: "Shortlist", href: "/shortlist" },
];

export default function Navbar() {
    return (
        <header className="bg-green-800 text-white">
            <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-8 py-4">
                <Link href="/" className="text-xl font-bold">
                    KITEBud
                </Link>
                <ul className="flex flex-wrap gap-x-5 gap-y-1">
                    {links.map((l) => (
                        <li key={l.href}>
                            <Link href={l.href} className="hover:underline">
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}