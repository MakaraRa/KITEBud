"use client";

import { useState } from "react";
import { University } from "@/types/university";

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
            u.province.toLowerCase().includes(search)
        const matchesProvince = province === "all" || u.province === province;
        const matchesType = type === "all" || u.type === type;

        return matchesSearch && matchesProvince && matchesType;

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
            <div className="mt-3 flex gap-3">
                <select
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="rounded border border-green-600 p-2"
                >
                    <option value="all">All provinces</option>
                    {provinces.map((p) => (
                        <option key={p} value={p}>{p}</option>
                    ))}
                </select>

                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="rounded border border-green-600 p-2"
                >
                    <option value="all">Public and private</option>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
            </div>
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