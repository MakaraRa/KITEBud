"use client";

import { useState } from "react";
import { University } from "@/types/university";

export default function UniversityList({
    universities,
}: {
    universities: University[];
}) {
    const [query, setQuery] = useState("");

    const search = query.toLowerCase();

    const filtered = universities.filter((u) => {
        return (
            u.nameEn.toLowerCase().includes(search) ||
            u.nameKm.includes(query) ||
            u.province.toLowerCase().includes(search)
        );
    });

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search universities..."
                className="mt-4 w-full rounded border border-green-600 p-2"
            />

            <ul className="mt-6 space-y-4">
                {filtered.map((u) => (
                    <li key={u.id} className="rounded border border-green-600 p-4">
                        <h3 className="text-lg font-semibold">{u.nameEn}</h3>
                        <p>{u.nameKm}</p>
                        <p className="text-sm text-gray-500">
                            {u.province} · {u.type}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}