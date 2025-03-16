export default function ModuleProductSubheading({ subheading }: { subheading: string }) {
  if (!subheading) return null;

  return <p className="text-center tracking-[0.2em]">{subheading}</p>;
}
