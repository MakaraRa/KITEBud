"use client";

import { useState } from "react";
import { Scholarship } from "@/types/scholarship";
import Link from "next/link";

export default function ScholarshipList({
    scholarships,
}: {
    scholarships: Scholarship[];
}) {
    const [query, setQuery] = useState("");
    const [level, setLevel] = useState("all");
    const [coverage, setCoverage] = useState("all");
    const levels = [...new Set(scholarships.map((u) => u.level))];
    const coverages = [...new Set(scholarships.map((u) => u.coverage))];

    const search = query.toLowerCase();
    const filtered = scholarships.filter((u) => {
        const matchesSearch =
            u.nameEn.toLowerCase().includes(search) ||
            u.nameKm.includes(query) ||
            u.provider.toLowerCase().includes(search)
        const matchesLevel = level === "all" || u.level === level;
        const matchesCoverage = coverage === "all" || u.coverage === coverage;

        return matchesSearch && matchesLevel && matchesCoverage;

    });

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search scholarship..."
                className="mt-4 w-full rounded border border-green-600 p-2"
            />
            <div className="mt-3 flex gap-3">
                <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className="rounded border border-green-600 p-2"
                >
                    <option value="all">All levels</option>
                    {levels.map((p) => (
                        <option key={p} value={p}>{p}</option>
                    ))}
                </select>

                <select
                    value={coverage}
                    onChange={(e) => setCoverage(e.target.value)}
                    className="rounded border border-green-600 p-2"
                >
                    <option value="all">Full and Partial</option>
                    <option value="full">Full</option>
                    <option value="partial">Partial</option>
                </select>
            </div>


            {filtered.length === 0 ? (
                <p className="mt-6 text-gray-500">No scholarships found.</p>
            ) : (
                <ul className="mt-6 space-y-4">
                    {filtered.map((u) => (
                        <li key={u.id} className="rounded border border-green-600 p-4">
                            <h3 className="text-lg font-semibold">
                                <Link href={`/scholarships/${u.slug}`} className="text-green-700 hover:underline">
                                    {u.nameEn}
                                </Link>
                            </h3>
                            <p>{u.nameKm}</p>
                            <p className="text-sm text-gray-500">
                                {u.level} · {u.coverage}
                            </p>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    );
}