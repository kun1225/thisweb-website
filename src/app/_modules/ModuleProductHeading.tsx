export default function ModuleProductHeading({
  heading,
}: {
  heading?: string;
}) {
  if (!heading) return null;
  return <h2 className="m-product__heading">{heading}</h2>;
}
