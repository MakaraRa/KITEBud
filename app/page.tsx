import Link from "next/link";
import { getUniversities } from "@/lib/universities";

// "ready: false" means the page doesn't exist yet, so we show "Coming soon"
const features = [
  { title: "Universities", description: "Browse and compare universities across Cambodia.", href: "/universities", ready: false },
  { title: "Majors", description: "Explore programs and what you can study.", href: "/majors", ready: false },
  { title: "Scholarships", description: "Find scholarships you may qualify for.", href: "/scholarships", ready: false },
  { title: "Find My Major", description: "Not sure what to study? Get guided suggestions.", href: "/find-my-major", ready: false },
  { title: "Try Major", description: "Get a taste of a major before you choose it.", href: "/try-major", ready: false },
];

export default function Home() {
  const universities = getUniversities();

  return (
    <main>
      {/* Hero */}
      <section className="bg-green-700 px-8 py-16 text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold">KITEBud</h1>
          <p className="mt-3 max-w-xl text-lg text-green-100">
            Find universities, majors and scholarships in Cambodia, all in one place.
          </p>
        </div>
      </section>

      {/* Feature cards */}
      <section className="mx-auto max-w-4xl px-8 py-12">
        <h2 className="text-2xl font-semibold">What you can do</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const card = (
              <div className="h-full rounded-lg bg-green-50 p-5 text-gray-900">
                <h3 className="text-lg font-semibold text-green-800">{f.title}</h3>
                <p className="mt-1 text-sm">{f.description}</p>
                {!f.ready && (
                  <span className="mt-3 inline-block rounded bg-green-200 px-2 py-0.5 text-xs text-green-900">
                    Coming soon
                  </span>
                )}
              </div>
            );
            return f.ready ? (
              <Link key={f.title} href={f.href}>{card}</Link>
            ) : (
              <div key={f.title}>{card}</div>
            );
          })}
        </div>
      </section>

      {/* Universities preview (temporary) */}
      <section className="mx-auto max-w-4xl px-8 pb-12">
        <h2 className="text-2xl font-semibold">Universities</h2>
        <ul className="mt-4 space-y-4">
          {universities.map((u) => (
            <li key={u.id} className="rounded border border-green-600 p-4">
              <h3 className="text-lg font-semibold">{u.nameEn}</h3>
              <p>{u.nameKm}</p>
              <p className="text-sm text-gray-500">{u.province} · {u.type}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}