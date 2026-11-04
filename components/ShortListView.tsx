"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { University } from "@/types/university";
import { Scholarship } from "@/types/scholarship";
import {
    getServerShortlistSnapshot,
    getShortlistSnapshot,
    parseShortlist,
    subscribeToShortlist,
} from "@/lib/shortlist";

export default function ShortlistView({
    universities,
    scholarships,
}: {
    universities: University[];
    scholarships: Scholarship[];
}) {
    const snapshot = useSyncExternalStore(
        subscribeToShortlist,
        getShortlistSnapshot,
        getServerShortlistSnapshot,
    );
    const ids = snapshot === null ? [] : parseShortlist(snapshot);

    const savedUniversities = universities.filter((u) =>
        ids.includes(`university:${u.slug}`)
    );
    const savedScholarships = scholarships.filter((s) =>
        ids.includes(`scholarship:${s.slug}`)
    );

    if (snapshot === null) {
        return (
            <p className="mt-6 rounded-2xl border border-border bg-white px-5 py-6 text-sm text-muted" role="status">
                Loading your shortlist...
            </p>
        );
    }

    if (savedUniversities.length === 0 && savedScholarships.length === 0) {
        return (
            <div className="rounded-2xl border border-dashed border-border bg-white px-6 py-12 text-center">
                <h2 className="text-lg font-semibold text-primary">Nothing saved yet</h2>
                <p className="mt-2 text-sm text-muted">
                    Save a university or scholarship to keep it close while you explore.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                    <Link href="/universities" className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                        Browse universities
                    </Link>
                    <Link href="/scholarships" className="rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2">
                        Explore scholarships
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {savedUniversities.length > 0 && (
                <section aria-labelledby="shortlist-universities">
                    <h2 id="shortlist-universities" className="text-xl font-semibold text-primary">Universities <span className="text-sm font-medium text-muted">({savedUniversities.length})</span></h2>
                    <ul className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {savedUniversities.map((u) => (
                            <li key={u.id} className="rounded-2xl border border-border bg-white p-5 shadow-[0_8px_20px_rgba(17,35,30,0.03)]">
                                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold capitalize text-primary">{u.type}</span>
                                <Link href={`/universities/${u.slug}`} className="mt-3 block text-lg font-semibold text-primary hover:text-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30">
                                    {u.nameEn}
                                </Link>
                                <p lang="km" className="mt-1 text-sm text-muted">{u.nameKm}</p>
                                <p className="mt-3 text-sm text-muted">{u.province}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {savedScholarships.length > 0 && (
                <section aria-labelledby="shortlist-scholarships">
                    <h2 id="shortlist-scholarships" className="text-xl font-semibold text-primary">Scholarships <span className="text-sm font-medium text-muted">({savedScholarships.length})</span></h2>
                    <ul className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {savedScholarships.map((u) => (
                            <li key={u.id} className="rounded-2xl border border-border bg-white p-5 shadow-[0_8px_20px_rgba(17,35,30,0.03)]">
                                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold capitalize text-primary">{u.level}</span>
                                <Link href={`/scholarships/${u.slug}`} className="mt-3 block text-lg font-semibold text-primary hover:text-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30">
                                    {u.nameEn}
                                </Link>
                                <p lang="km" className="mt-1 text-sm text-muted">{u.nameKm}</p>
                                <p className="mt-3 text-sm text-muted">{u.coverage} coverage</p>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
}