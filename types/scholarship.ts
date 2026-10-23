export type Scholarship = {
    id: number;
    slug: string;
    nameEn: string;
    nameKm: string;
    provider: string;
    level: "bachelor" | "master" | "any";
    coverage: "full" | "partial";
    deadline: string;
    website: string;
    descriptionEn: string;
    descriptionKm: string;
};