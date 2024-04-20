import { client } from '@/lib/sanity/client';
import { SERVICE_QUERY } from '@/lib/sanity/queries';
import { ServiceType } from '@/lib/sanity/type';
import CustomPortableText from '../_components/CustomPortableText';

const servicePage = async () => {
  const services = await client.fetch<ServiceType[]>(
    SERVICE_QUERY,
    {},
    { next: { revalidate: 0 } },
  );

  return (
    <section className="service-page">
      <div>
        <p>嗨！我是請網這邊走 ThisWeb</p>
        <p>
          在我自學前端轉職的路上，遇到很多挫折，也多次迷茫過，不知道放棄研究所走前端到底正不正確，也不知道該從哪裡學起，要學什麼。
        </p>
        <p>
          每次卡關時，我都很希望能有人引導我前進，我學習更順利。
        </p>
        <p>
          現在，我自學轉職成功了，我希望我也能盡我一份力量，幫助在前端的迷茫者。
        </p>
      </div>
      <div className="flex flex-col gap-8">
        {services.map((service) => (
          <div>
            <h3>{service.title}</h3>
            <CustomPortableText value={service.body} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default servicePage;
