import { getScholarships } from "@/lib/scholarship";
import ScholarshipList from "@/components/ScholarshipList";

export default function ScholarshipsPage() {
    const scholarships = getScholarships();

    return (
        <main className="mx-auto max-w-4xl p-8">
            <h1 className="text-3xl font-bold text-green-700">Scholarships</h1>
            <ScholarshipList scholarships={scholarships} />
        </main>
    );
}