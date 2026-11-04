"use client";

import { useSyncExternalStore } from "react";
import {
    getServerShortlistSnapshot,
    getShortlistSnapshot,
    parseShortlist,
    subscribeToShortlist,
    writeShortlist,
} from "@/lib/shortlist";

export default function SaveButton({
    kind,
    slug,
}: {
    kind: "university" | "scholarship";
    slug: string;
}) {
    const id = `${kind}:${slug}`;
    const snapshot = useSyncExternalStore(
        subscribeToShortlist,
        getShortlistSnapshot,
        getServerShortlistSnapshot,
    );
    const saved = snapshot !== null && parseShortlist(snapshot).includes(id);

    function toggle() {
        const list = parseShortlist(getShortlistSnapshot());
        const next = list.includes(id)
            ? list.filter((x) => x !== id)
            : [...list, id];
        writeShortlist(next);
    }

    return (
        <button
            type="button"
            onClick={toggle}
            aria-pressed={saved}
            className="mt-6 inline-flex items-center rounded-xl border border-white/40 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
            {saved ? "Saved to shortlist" : "Save to shortlist"}
        </button>
    );
}