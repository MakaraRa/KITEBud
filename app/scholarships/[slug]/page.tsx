import { notFound } from "next/navigation";
import { getScholarships, getScholarshipBySlug } from "@/lib/scholarship";
import Link from "next/link";
import SaveButton from "@/components/SaveButton";

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
        <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-8 md:px-8 md:py-12">
            <nav aria-label="Breadcrumb" className="text-sm font-medium text-muted">
                <Link href="/scholarships" className="rounded text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30">
                    Scholarships
                </Link>
                <span aria-hidden="true" className="mx-2 text-muted/60">/</span>
                <span>{scholarships.nameEn}</span>
            </nav>
            <article className="mt-5 overflow-hidden rounded-3xl border border-border bg-white shadow-[0_12px_35px_rgba(17,35,30,0.06)]">
                <header className="bg-primary px-6 py-8 text-white md:px-10 md:py-10">
                    <div className="flex flex-wrap gap-2">
                        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold capitalize">{scholarships.level}</span>
                        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold capitalize">{scholarships.coverage} coverage</span>
                    </div>
                    <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">{scholarships.nameEn}</h1>
                    <p lang="km" className="mt-2 text-lg text-white/75">{scholarships.nameKm}</p>
                    <SaveButton kind="scholarship" slug={scholarships.slug} />
                </header>
                <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(260px,0.75fr)]">
                    <section>
                        <h2 className="text-xl font-semibold text-primary">About this scholarship</h2>
                        <p className="mt-4 leading-7 text-text">{scholarships.descriptionEn}</p>
                        <div className="mt-7 border-t border-border pt-6">
                            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">Description in Khmer</h3>
                            <p lang="km" className="mt-3 leading-7 text-text">{scholarships.descriptionKm}</p>
                        </div>
                    </section>
                    <aside className="rounded-2xl bg-surface-alt p-5 md:p-6">
                        <h2 className="text-lg font-semibold text-primary">Key details</h2>
                        <dl className="mt-4 divide-y divide-border">
                            <div className="py-3">
                                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Provider</dt>
                                <dd className="mt-1 font-medium text-text">{scholarships.provider}</dd>
                            </div>
                            <div className="py-3">
                                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Deadline</dt>
                                <dd className="mt-1 font-medium text-text">{scholarships.deadline}</dd>
                            </div>
                            <div className="py-3">
                                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Study level</dt>
                                <dd className="mt-1 font-medium capitalize text-text">{scholarships.level}</dd>
                            </div>
                            <div className="py-3">
                                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Coverage</dt>
                                <dd className="mt-1 font-medium capitalize text-text">{scholarships.coverage}</dd>
                            </div>
                        </dl>
                        <a
                            href={scholarships.website}
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