const STORAGE_KEY = "kitebud-shortlist";
const CHANGE_EVENT = "kitebud-shortlist-change";

export function subscribeToShortlist(onChange: () => void) {
    window.addEventListener("storage", onChange);
    window.addEventListener(CHANGE_EVENT, onChange);

    return () => {
        window.removeEventListener("storage", onChange);
        window.removeEventListener(CHANGE_EVENT, onChange);
    };
}

export function getShortlistSnapshot(): string {
    try {
        return localStorage.getItem(STORAGE_KEY) ?? "";
    } catch {
        return "";
    }
}

export function getServerShortlistSnapshot(): null {
    return null;
}

export function parseShortlist(snapshot: string): string[] {
    try {
        const parsed: unknown = JSON.parse(snapshot);
        return Array.isArray(parsed)
            ? parsed.filter((id): id is string => typeof id === "string")
            : [];
    } catch {
        return [];
    }
}

export function writeShortlist(ids: string[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    window.dispatchEvent(new Event(CHANGE_EVENT));
}
