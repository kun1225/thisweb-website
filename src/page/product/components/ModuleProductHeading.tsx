export default function ModuleProductHeading({
  heading,
  headingId,
}: {
  heading?: string;
  headingId?: string;
}) {
  if (!heading) return null;
  return (
    <h2
      className="mx-auto mb-6 max-w-md text-center text-3xl leading-[1.5em] font-bold sm:max-w-none sm:text-4xl md:text-5xl"
      {...(headingId ? { id: headingId } : {})}
    >
      {heading}
    </h2>
  );
}
