"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { University } from "@/types/university";
import { Scholarship } from "@/types/scholarship";

const STORAGE_KEY = "kitebud-shortlist";

export default function ShortlistView({
    universities,
    scholarships,
}: {
    universities: University[];
    scholarships: Scholarship[];
}) {
    const [ids, setIds] = useState<string[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            setIds(raw ? JSON.parse(raw) : []);
        } catch {
            setIds([]);
        }
        setLoaded(true);
    }, []);

    const savedUniversities = universities.filter((u) =>
        ids.includes(`university:${u.slug}`)
    );
    const savedScholarships = scholarships.filter((s) =>
        ids.includes(`scholarship:${s.slug}`)
    );

    if (!loaded) return <p className="mt-6 text-gray-500">Loading...</p>;

    if (savedUniversities.length === 0 && savedScholarships.length === 0) {
        return <p className="mt-6 text-gray-500">Nothing saved yet.</p>;
    }

    return (
        <div className="mt-6 space-y-8">
            {savedUniversities.length > 0 && (
                <section>
                    <h2 className="text-2xl font-semibold">Universities</h2>
                    <ul className="mt-4 space-y-4">
                        {savedUniversities.map((u) => (
                            <li key={u.id} className="rounded border border-green-600 p-4">
                                <Link href={`/universities/${u.slug}`} className="text-lg font-semibold text-green-700 hover:underline">
                                    {u.nameEn}
                                </Link>
                                <p>{u.nameKm}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {savedScholarships.length > 0 && (
                <section>
                    <h2 className="text-2xl font-semibold">Schorlaships</h2>
                    <ul className="mt-4 space-y-4">
                        {savedScholarships.map((u) => (
                            <li key={u.id} className="rounded border border-green-600 p-4">
                                <Link href={`/scholarchips/${u.slug}`} className="text-lg font-semibold text-green-700 hover:underline">
                                    {u.nameEn}
                                </Link>
                                <p>{u.nameKm}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
}