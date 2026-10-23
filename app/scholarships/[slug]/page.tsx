import { notFound } from "next/navigation";
import { getScholarships, getScholarshipBySlug } from "@/lib/scholarship";
import { scholarships } from "@/data/scholarships";


export function generateStaticParams() {
    return getScholarships().map((u) => ({ slug: u.slug }));
}

export default async function ScholarshipPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const scholarships = getScholarshipBySlug(slug);

    if (!scholarships) {
        notFound();
    }

    return (
        <main className="mx-auto max-w-4xl p-8">
            <h1 className="text-3xl font-bold text-green-700">{scholarships.nameEn}</h1>
            <p className="mt-1 text-lg">{scholarships.nameKm}</p>
            <p className="mt-2 text-sm text-gray-500">
                {scholarships.level} · {scholarships.coverage}
            </p>
            <p className="mt-6">{scholarships.descriptionEn}</p>
            <p className="mt-2">{scholarships.descriptionKm}</p>
            <a
                href={scholarships.website}
                target="_blank"
                className="mt-6 inline-block rounded bg-green-700 px-4 py-2 text-white"
            >
                Visit website
            </a>
        </main>
    );
}