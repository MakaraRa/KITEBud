import { getUniversities } from "@/lib/universities";
import { getScholarships } from "@/lib/scholarship";
import ShortlistView from "@/components/ShortListView";
import PageIntro from "@/components/PageIntro";

export default function ShortlistPage() {
    return (
        <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 md:px-8 md:py-14">
            <PageIntro
                eyebrow="Your saved options"
                title="My shortlist"
                description="Keep the universities and scholarships you are considering together in one place."
            />
            <ShortlistView
                universities={getUniversities()}
                scholarships={getScholarships()}
            />
        </main>
    );
}