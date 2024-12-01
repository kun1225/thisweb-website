export default function ModuleProductSubheading({
  subheading,
}: {
  subheading: string;
}) {
  if (!subheading) return null;

  return <p className="m-product__subheading">{subheading}</p>;
}
