import Link from "next/link";

import { getUniversities } from "@/lib/universities";

const features = [
  {
    title: "Universities",
    description: "Browse and compare universities across Cambodia.",
    href: "/universities",
    ready: true,
  },
  {
    title: "Scholarships",
    description: "Find scholarships you may qualify for.",
    href: "/scholarships",
    ready: true,
  },
  {
    title: "majors",
    description: "Find majors you want to discover.",
    href: "/majors",
    ready: false,
  },
  {
    title: "Shortlist",
    description: "Save the universities and scholarships you want to revisit.",
    href: "/shortlist",
    ready: true,
  },
  {
    title: "Find My Major",
    description: "Not sure what to study? Get guided suggestions.",
    href: "",
    ready: false,
  },
  {
    title: "Try Major",
    description: "Get a taste of a major before you choose it.",
    href: "",
    ready: false,
  },
];

export default function Home() {
  const universities = getUniversities();
  const previewUniversities = universities.slice(0, 4);

  return (
    <main>
      <section className="bg-primary text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 lg:px-10 lg:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Explore Cambodia&apos;s university options in one place.
              </h1>
              <p className="mt-4 max-w-xl text-base text-accent md:text-lg">
                Find universities, majors and scholarships in Cambodia, all in one place.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/universities"
                  className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 font-semibold text-primary shadow-sm transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  Browse universities
                </Link>
                <Link
                  href="/scholarships"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-transparent px-5 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                >
                  View scholarships
                </Link>

              </div>
            </div>

            <div className="w-full max-w-md rounded-2xl border border-white/15 bg-white/10 p-5 shadow-[0_18px_40px_rgba(12,28,25,0.18)] backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/90">
                Explore
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/90">
                {[
                  "Universities",
                  "Scholarships",
                  "Shortlist",
                ].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
            How students explore
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            A clear path to your next study decision
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const card = (
              <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-[0_8px_20px_rgba(17,35,30,0.04)] transition-shadow duration-200 hover:shadow-[0_12px_30px_rgba(17,35,30,0.08)]">
                <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">{feature.description}</p>
                {!feature.ready && (
                  <span className="mt-4 inline-flex w-fit rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-primary">
                    Coming soon
                  </span>
                )}
              </div>
            );

            return feature.ready ? (
              <Link key={feature.title} href={feature.href} className="block h-full">
                {card}
              </Link>
            ) : (
              <div key={feature.title}>{card}</div>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                University preview
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary">
                Find a university
              </h2>
            </div>

            <Link
              href="/universities"
              className="inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              View all universities
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {previewUniversities.map((university) => (
              <Link
                key={university.id}
                href={`/universities/${university.slug}`}
                className="group block rounded-2xl border border-border bg-surface p-5 shadow-[0_8px_20px_rgba(17,35,30,0.03)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(17,35,30,0.08)]"
              >
                <div className="flex min-h-\[180px] flex-col justify-between">
                  <div>
                    <span className="inline-flex rounded-full bg-accent px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                      {university.type}
                    </span>
                    <h3 className="mt-4 text-xl font-semibold text-primary group-hover:text-primary-soft">
                      {university.nameEn}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{university.nameKm}</p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs font-medium uppercase tracking-[0.14em] text-primary/75">
                    <span>{university.province}</span>
                    <span>View</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}