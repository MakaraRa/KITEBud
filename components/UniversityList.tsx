"use client";

import { useState } from "react";
import { University } from "@/types/university";
import Link from "next/link";

export default function UniversityList({
    universities,
}: {
    universities: University[];
}) {
    const [query, setQuery] = useState("");
    const [province, setProvince] = useState("all");
    const [type, setType] = useState("all");
    const provinces = [...new Set(universities.map((u) => u.province))];

    const search = query.toLowerCase();

    const filtered = universities.filter((u) => {
        const matchesSearch =
            u.nameEn.toLowerCase().includes(search) ||
            u.nameKm.includes(query) ||
            u.province.toLowerCase().includes(search);
        const matchesProvince = province === "all" || u.province === province;
        const matchesType = type === "all" || u.type === type;

        return matchesSearch && matchesProvince && matchesType;
    });

    const hasActiveFilters = query !== "" || province !== "all" || type !== "all";
    const clearFilters = () => {
        setQuery("");
        setProvince("all");
        setType("all");
    };

    return (
        <section aria-label="Search and filter universities">
            <div className="rounded-2xl border border-border bg-white p-5 shadow-[0_8px_20px_rgba(17,35,30,0.04)] md:p-6">
                <label htmlFor="university-search" className="sr-only">
                    Search universities by name or province
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
                        id="university-search"
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search by university name or province..."
                        className="w-full rounded-xl border border-border bg-surface px-4 py-3 pl-12 text-text placeholder:text-muted/80 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                    />
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="flex min-w-0 flex-col gap-2">
                        <label htmlFor="university-province" className="text-sm font-semibold text-primary">
                            Province
                        </label>
                        <select
                            id="university-province"
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                            className="w-full rounded-xl border border-border bg-white px-3 py-3 text-text focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                        >
                            <option value="all">All provinces</option>
                            {provinces.map((p) => (
                                <option key={p} value={p}>{p}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex min-w-0 flex-col gap-2">
                        <label htmlFor="university-type" className="text-sm font-semibold text-primary">
                            University type
                        </label>
                        <select
                            id="university-type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className="w-full rounded-xl border border-border bg-white px-3 py-3 text-text focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
                        >
                            <option value="all">Public and private</option>
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-muted" role="status" aria-live="polite">
                    Showing <span className="font-semibold text-primary">{filtered.length}</span>{" "}
                    of {universities.length} {universities.length === 1 ? "university" : "universities"}
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
                    <h2 className="text-lg font-semibold text-primary">No universities found</h2>
                    <p className="mt-2 text-sm text-muted">
                        Try another search or clear your search and filters to see all universities.
                    </p>
                    {hasActiveFilters && (
                        <button
                            type="button"
                            onClick={clearFilters}
                            className="mt-5 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                            Clear search and filters
                        </button>
                    )}
                </div>
            ) : (
                <ul className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {filtered.map((u) => (
                        <li
                            key={u.id}
                            className="flex min-w-0 flex-col rounded-2xl border border-border bg-white p-5 shadow-[0_8px_20px_rgba(17,35,30,0.03)] transition-shadow duration-200 hover:shadow-[0_14px_35px_rgba(17,35,30,0.08)] md:p-6"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold capitalize text-primary">
                                    {u.type}
                                </span>
                                <span aria-hidden="true" className="rounded-xl bg-accent/60 p-2.5 text-primary">
                                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                                        <path d="M4 20V7.5L12 4l8 3.5V20M2.5 20h19M9 10h.01M15 10h.01M9 14h.01M15 14h.01M10 20v-3h4v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                            <h2 className="mt-4 min-w-0 break-words text-xl font-semibold leading-snug text-primary">
                                {u.nameEn}
                            </h2>
                            <p lang="km" className="mt-2 min-w-0 break-words text-sm leading-6 text-muted">
                                {u.nameKm}
                            </p>
                            <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0 text-primary">
                                    <path d="M19 10.2c0 5-7 10-7 10s-7-5-7-10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="1.7" />
                                    <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.7" />
                                </svg>
                                {u.province}
                            </p>
                            <div className="mt-5 border-t border-border pt-4">
                                <Link
                                    href={`/universities/${u.slug}`}
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