import { universities } from "@/data/universities";

export function getUniversities() {
    return universities;
}

export function getUniversityBySlug(slug: string) {
    return universities.find((u) => u.slug === slug);
}