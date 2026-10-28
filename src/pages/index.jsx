import Layout from '../layouts/Layout';
import Banner from '../section/Home1/Banner';
import PartnerShowcase from '../section/client/PartnerShowcase';
import ClientGroup from '../section/client/ClientGroup';
import ClientAbout from '../section/client/ClientAbout';

export default function Home1() {
  return <div className="page-wrapper"><Layout>
    <Banner />
    <div className="experto-home-content">
    <PartnerShowcase />
    <ClientGroup />
    <ClientAbout />
    </div>
  </Layout></div>;
}
