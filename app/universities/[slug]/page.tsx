import { notFound } from "next/navigation";
import { getUniversities, getUniversityBySlug } from "@/lib/universities";

export function generateStaticParams() {
    return getUniversities().map((u) => ({ slug: u.slug }));
}

export default async function UniversityPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const university = getUniversityBySlug(slug);

    if (!university) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-4xl p-8">
            <h1 className="text-3xl font-bold text-green-700">{university.nameEn}</h1>
            <p className="mt-1 text-lg">{university.nameKm}</p>
            <p className="mt-2 text-sm text-gray-500">
                {university.province} · {university.type}
            </p>
            <p className="mt-6">{university.descriptionEn}</p>
            <p className="mt-2">{university.descriptionKm}</p>
            <a
                href={university.website}
                target="_blank"
                className="mt-6 inline-block rounded bg-green-700 px-4 py-2 text-white"
            >
                Visit website
            </a>
        </main>
    );
}