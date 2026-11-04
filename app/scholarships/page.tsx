import { getScholarships } from "@/lib/scholarship";
import ScholarshipList from "@/components/ScholarshipList";
import PageIntro from "@/components/PageIntro";

export default function ScholarshipsPage() {
    const scholarships = getScholarships();

    return (
        <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 md:px-8 md:py-14">
            <PageIntro
                eyebrow="Funding your next step"
                title="Scholarships in Cambodia"
                description="Explore funding opportunities by study level and coverage, then review the details that matter to you."
            />
            <ScholarshipList scholarships={scholarships} />
        </main>
    );
}