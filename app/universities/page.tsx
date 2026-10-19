import { getUniversities } from "@/lib/universities";
import UniversityList from "@/components/UniversityList";

export default function UniversitiesPage() {
    const universities = getUniversities();

    return (
        <main className="mx-auto max-w-4xl p-8">
            <h1 className="text-3xl font-bold text-green-700">Universities</h1>
            <UniversityList universities={universities} />
        </main>
    );
}