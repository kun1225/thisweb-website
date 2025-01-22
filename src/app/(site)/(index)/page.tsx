import { PageHome } from '@/src/page/home/ui/PageHome';
import { getHome } from '@/src/page/home/api/apiHome';

export default async function Home() {
  const data = await getHome();

  return <PageHome data={data} />;
}
