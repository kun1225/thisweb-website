export function HomeHeading({ heading, headingId }: { heading: string; headingId?: string }) {
  if (!heading) return null;

  return (
    <h2
      id={headingId || undefined}
      className="mb-12 text-pretty text-4xl font-bold leading-snug shadow-black drop-shadow-lg md:text-5xl md:leading-tight"
    >
      {heading}
    </h2>
  );
}

export function HomeSubheading({ subheading }: { subheading: string }) {
  if (!subheading) return null;

  return (
    <p className="mb-2 text-xl font-bold leading-normal tracking-wide text-blue-1">{subheading}</p>
  );
}
