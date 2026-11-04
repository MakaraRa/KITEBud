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
    title: "Majors",
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
    <main className="flex-1">
      <section className="overflow-hidden bg-primary text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Your future, within reach
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Explore Cambodia&apos;s university options in one place.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/75 md:text-lg">
                Find universities, majors and scholarships in Cambodia, all in one place.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/universities"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-semibold text-primary shadow-sm transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Browse universities
              </Link>
              <Link
                href="/scholarships"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-5 py-3 font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                View scholarships
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/10 p-6 shadow-[0_18px_40px_rgba(12,28,25,0.18)] backdrop-blur-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Start exploring
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Find the path that fits you.
            </h2>
            <div className="mt-6 grid gap-3">
              {[
                { label: "Compare universities", href: "/universities" },
                { label: "Discover scholarships", href: "/scholarships" },
                { label: "Review your shortlist", href: "/shortlist" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {item.label}
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-14 md:px-8 md:py-16">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
            How students explore
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            A clear path to your next study decision
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const card = (
              <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-[0_8px_20px_rgba(17,35,30,0.04)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_30px_rgba(17,35,30,0.08)]">
                <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-muted">{feature.description}</p>
                {!feature.ready && (
                  <span className="mt-4 inline-flex w-fit rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-primary">
                    Coming soon
                  </span>
                )}
              </div>
            );

            return feature.ready ? (
              <Link key={feature.title} href={feature.href} className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2">
                {card}
              </Link>
            ) : (
              <div key={feature.title}>{card}</div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-white py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
                University preview
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-primary">
                Find a university
              </h2>
            </div>

            <Link
              href="/universities"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-surface-alt hover:text-primary-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              View all universities
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {previewUniversities.map((university) => (
              <Link
                key={university.id}
                href={`/universities/${university.slug}`}
                className="group block rounded-2xl border border-border bg-surface p-5 shadow-[0_8px_20px_rgba(17,35,30,0.03)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(17,35,30,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
              >
                <div className="flex min-h-[180px] flex-col justify-between">
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