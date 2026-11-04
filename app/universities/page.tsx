import { getUniversities } from "@/lib/universities";
import UniversityList from "@/components/UniversityList";
import PageIntro from "@/components/PageIntro";

export default function UniversitiesPage() {
    const universities = getUniversities();

    return (
        <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 md:px-8 md:py-14">
            <PageIntro
                eyebrow="Your next step starts here"
                title="Discover universities in Cambodia"
                description="Explore universities by location and type to find options that fit your plans."
            />
            <UniversityList universities={universities} />
        </main>
    );
}