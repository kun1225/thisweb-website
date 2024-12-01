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
      className="m-product__heading"
      {...(headingId ? { id: headingId } : {})}
    >
      {heading}
    </h2>
  );
}
