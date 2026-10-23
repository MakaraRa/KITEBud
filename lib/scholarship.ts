import { scholarships } from "@/data/scholarships";

export function getScholarships() {
    return scholarships;
}

export function getScholarshipBySlug(slug: string) {
    return scholarships.find((u) => u.slug === slug);
}

