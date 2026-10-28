import { Link } from "react-router-dom";

export default function ClientContactBanner() {
  return <section className="project-contact" aria-labelledby="client-contact-title">
    <div className="container project-contact-inner">
      <div><h2 id="client-contact-title">Parlons de votre projet</h2><p>Contactez-nous dès aujourd’hui pour en discuter : le premier rendez-vous est offert.</p></div>
      <Link className="project-contact-button" to="/contacts">Nous contacter</Link>
    </div>
  </section>;
}
