import ClientIntro from './ClientIntro';
import ClientServices from './ClientServices';
import Service from '../Home1/Service';
import ClientContactBanner from './ClientContactBanner';

export default function ClientGroup() {
  return <section className="client-group" aria-labelledby="client-group-title">
    <div className="client-group-content">
      <div className="home-section-band home-section-soft"><div className="container"><ClientIntro /></div></div>
      <div className="home-section-band home-section-white"><div className="container"><ClientServices /></div></div>
      <div className="home-section-band home-section-soft"><div className="container"><Service /></div></div>
      <div className="home-section-band home-section-white"><div className="container"><ClientContactBanner /></div></div>
    </div>
  </section>;
}
