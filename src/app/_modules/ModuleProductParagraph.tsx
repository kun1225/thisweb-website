import { formatBrNewLine } from '@/src/libs/helpers';

export default function ModuleProductParagraph({
  paragraph,
}: {
  paragraph?: string;
}) {
  if (!paragraph) return null;
  return (
    <p
      className="m-product__paragraph"
      dangerouslySetInnerHTML={{ __html: formatBrNewLine(paragraph) }}
    />
  );
}
