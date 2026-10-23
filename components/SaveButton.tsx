"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "kitebud-shortlist";

function readShortlist(): string[] {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

export default function SaveButton({
    kind,
    slug,
}: {
    kind: "university" | "scholarship";
    slug: string;
}) {
    const id = `${kind}:${slug}`;
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        setSaved(readShortlist().includes(id));
    }, [id]);

    function toggle() {
        const list = readShortlist();
        const next = list.includes(id)
            ? list.filter((x) => x !== id)
            : [...list, id];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        setSaved(next.includes(id));
    }

    return (
        <button
            onClick={toggle}
            className="mt-6 ml-3 rounded border border-green-700 px-4 py-2 text-green-700"
        >
            {saved ? "Saved ✓" : "Save"}
        </button>
    );
}