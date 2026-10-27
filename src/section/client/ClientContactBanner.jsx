import { Link } from "react-router-dom";

export default function ClientContactBanner() {
  return <section className="client-contact-banner" aria-labelledby="client-contact-title">
    <div className="container client-contact-banner-inner">
      <div><h2 id="client-contact-title">Parlons de votre projet</h2><p>Contactez-nous dès aujourd’hui pour en discuter : le premier rendez-vous est offert.</p></div>
      <Link className="btn-one-light" to="/contacts">Nous contacter</Link>
    </div>
  </section>;
}
