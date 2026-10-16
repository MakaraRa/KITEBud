import { getUniversities } from "@/lib/universities";

export default function Home() {
  const universities = getUniversities();

  return (
    <main className="mx-auto max-w-4xl p-8">
      <h1 className="text-4xl font-bold">KITEBud</h1>
      <p className="mt-2 text-gray-600">
        Find universities and scholarships in Cambodia, all in one place.
      </p>

      <h2 className="mt-10 text-2xl font-semibold">Universities</h2>
      <ul className="mt-4 space-y-4">
        {universities.map((u) => (
          <li key={u.id} className="rounded border p-4">
            <h3 className="text-lg font-semibold">{u.nameEn}</h3>
            <p>{u.nameKm}</p>
            <p className="text-sm text-gray-500">
              {u.province} · {u.type}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}