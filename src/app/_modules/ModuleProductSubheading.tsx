export default function ModuleProductSubheading({
  subheading,
}: {
  subheading: string;
}) {
  if (!subheading) return null;

  return <h2 className="m-product__subheading">{subheading}</h2>;
}
