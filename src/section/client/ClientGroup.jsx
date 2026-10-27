import ClientIntro from './ClientIntro';
import ClientServices from './ClientServices';
import Service from '../Home1/Service';
import ClientContactBanner from './ClientContactBanner';

export default function ClientGroup() {
  return <section className="client-group" aria-labelledby="client-group-title">
    <div className="container">
    <div className="client-group-content">
    <ClientIntro />
    <ClientServices />
    <Service />
    <ClientContactBanner />
    </div>
    </div>
  </section>;
}
