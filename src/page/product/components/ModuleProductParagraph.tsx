import { formatBrNewLine } from '@/src/shared/lib/utils';

export default function ModuleProductParagraph({ paragraph }: { paragraph?: string }) {
  if (!paragraph) return null;
  return (
    <p
      className="m-product__paragraph"
      dangerouslySetInnerHTML={{ __html: formatBrNewLine(paragraph) }}
    />
  );
}
