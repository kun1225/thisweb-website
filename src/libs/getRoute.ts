export default function getRoute({
  documentType,
  slug,
}: {
  documentType: string;
  slug: string;
}) {
  if (!documentType) return undefined;

  switch (documentType) {
    case 'pageHome':
      return '/';
    case 'pageFrontendCareerGuide':
      return '/products/frontend-career-guide';

    default:
      console.warn('Invalid document type:', documentType);
      return slug ? `/${slug}` : undefined;
  }
}
