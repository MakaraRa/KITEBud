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
            u.provider.toLowerCase().includes(search);
        const matchesLevel = level === "all" || u.level === level;
        const matchesCoverage = coverage === "all" || u.coverage === coverage;

        return matchesSearch && matchesLevel && matchesCoverage;
    });
    const hasActiveFilters = query !== "" || level !== "all" || coverage !== "all";
    const clearFilters = () => {
        setQuery("");
        setLevel("all");
        setCoverage("all");
    };

    return (
        <section aria-label="Search and filter scholarships">
            <div className="rounded-2xl border border-border bg-white p-5 shadow-[0_8px_20px_rgba(17,35,30,0.04)] md:p-6">
                <label htmlFor="scholarship-search" className="sr-only">
                    Search scholarships by name or provider
                </label>
                <div className="relative">
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
                    >
                        <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.8" />
                        <path d="m16 16 4.2 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                    <input
                        id="scholarship-search"
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search by scholarship name or provider..."
                        className="w-full rounded-xl border border-border bg-surface px-4 py-3 pl-12 text-text placeholder:text-muted/80 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                    />
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="flex min-w-0 flex-col gap-2">
                        <label htmlFor="scholarship-level" className="text-sm font-semibold text-primary">
                            Study level
                        </label>
                        <select
                            id="scholarship-level"
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                            className="w-full rounded-xl border border-border bg-white px-3 py-3 text-text focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                        >
                            <option value="all">All study levels</option>
                            {levels.map((value) => (
                                <option key={value} value={value}>{value[0].toUpperCase() + value.slice(1)}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex min-w-0 flex-col gap-2">
                        <label htmlFor="scholarship-coverage" className="text-sm font-semibold text-primary">
                            Coverage
                        </label>
                        <select
                            id="scholarship-coverage"
                            value={coverage}
                            onChange={(e) => setCoverage(e.target.value)}
                            className="w-full rounded-xl border border-border bg-white px-3 py-3 text-text focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                        >
                            <option value="all">Full and partial</option>
                            {coverages.map((value) => (
                                <option key={value} value={value}>{value[0].toUpperCase() + value.slice(1)}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-muted" role="status" aria-live="polite">
                    Showing <span className="font-semibold text-primary">{filtered.length}</span>{" "}
                    of {scholarships.length} {scholarships.length === 1 ? "scholarship" : "scholarships"}
                </p>
                {hasActiveFilters && (
                    <button
                        type="button"
                        onClick={clearFilters}
                        className="rounded-lg px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-accent/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
                    >
                        Clear search and filters
                    </button>
                )}
            </div>
            {filtered.length === 0 ? (
                <div className="mt-5 rounded-2xl border border-dashed border-border bg-white px-6 py-12 text-center">
                    <h2 className="text-lg font-semibold text-primary">No scholarships found</h2>
                    <p className="mt-2 text-sm text-muted">
                        Try another search or clear your filters to see all scholarships.
                    </p>
                </div>
            ) : (
                <ul className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {filtered.map((u) => (
                        <li key={u.id} className="flex min-w-0 flex-col rounded-2xl border border-border bg-white p-5 shadow-[0_8px_20px_rgba(17,35,30,0.03)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(17,35,30,0.08)] md:p-6">
                            <div className="flex flex-wrap gap-2">
                                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold capitalize text-primary">{u.level}</span>
                                <span className="rounded-full bg-surface-alt px-3 py-1 text-xs font-semibold capitalize text-muted">{u.coverage} coverage</span>
                            </div>
                            <h2 className="mt-4 text-xl font-semibold leading-snug text-primary">
                                {u.nameEn}
                            </h2>
                            <p lang="km" className="mt-2 text-sm leading-6 text-muted">{u.nameKm}</p>
                            <p className="mt-4 text-sm text-muted">Provided by <span className="font-medium text-text">{u.provider}</span></p>
                            <div className="mt-auto border-t border-border pt-4">
                                <Link
                                    href={`/scholarships/${u.slug}`}
                                    className="inline-flex items-center gap-2 rounded-md text-sm font-semibold text-primary transition-colors hover:text-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2"
                                >
                                    View details
                                    <span aria-hidden="true">-&gt;</span>
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}