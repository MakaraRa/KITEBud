import { getUniversities } from "@/lib/universities";
import { getScholarships } from "@/lib/scholarship";
import ShortlistView from "@/components/ShortListView";

export default function ShortlistPage() {
    return (
        <main className="mx-auto max-w-4xl p-8">
            <h1 className="text-3xl font-bold text-green-700">My Shortlist</h1>
            <ShortlistView
                universities={getUniversities()}
                scholarships={getScholarships()}
            />
        </main>
    );
}