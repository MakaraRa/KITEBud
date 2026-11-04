import { notFound } from "next/navigation";
import { getUniversities, getUniversityBySlug } from "@/lib/universities";
import SaveButton from "@/components/SaveButton";
import Link from "next/link";

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
        <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-8 md:px-8 md:py-12">
            <nav aria-label="Breadcrumb" className="text-sm font-medium text-muted">
                <Link href="/universities" className="rounded text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30">
                    Universities
                </Link>
                <span aria-hidden="true" className="mx-2 text-muted/60">/</span>
                <span>{university.nameEn}</span>
            </nav>
            <article className="mt-5 overflow-hidden rounded-3xl border border-border bg-white shadow-[0_12px_35px_rgba(17,35,30,0.06)]">
                <header className="bg-primary px-6 py-8 text-white md:px-10 md:py-10">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold capitalize">{university.type} university</span>
                    <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">{university.nameEn}</h1>
                    <p lang="km" className="mt-2 text-lg text-white/75">{university.nameKm}</p>
                    <SaveButton kind="university" slug={university.slug} />
                </header>
                <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(260px,0.75fr)]">
                    <section>
                        <h2 className="text-xl font-semibold text-primary">About this university</h2>
                        <p className="mt-4 leading-7 text-text">{university.descriptionEn}</p>
                        <div className="mt-7 border-t border-border pt-6">
                            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">Description in Khmer</h3>
                            <p lang="km" className="mt-3 leading-7 text-text">{university.descriptionKm}</p>
                        </div>
                    </section>
                    <aside className="rounded-2xl bg-surface-alt p-5 md:p-6">
                        <h2 className="text-lg font-semibold text-primary">Key details</h2>
                        <dl className="mt-4 divide-y divide-border">
                            <div className="py-3">
                                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Location</dt>
                                <dd className="mt-1 font-medium text-text">{university.province}</dd>
                            </div>
                            <div className="py-3">
                                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Institution type</dt>
                                <dd className="mt-1 font-medium capitalize text-text">{university.type}</dd>
                            </div>
                        </dl>
                        <a
                            href={university.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                            Visit official website
                        </a>
                    </aside>
                </div>
            </article>
        </main>
    );
}