export type University = {
    id: number;
    slug: string;
    nameEn: string;
    nameKm: string;
    province: string;
    type: "public" | "private";
    website: string;
    descriptionEn: string;
    descriptionKm: string;
};