type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
}: PageIntroProps) {
  return (
    <header className="mb-9 max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-primary md:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-7 text-muted md:text-lg">
        {description}
      </p>
    </header>
  );
}
