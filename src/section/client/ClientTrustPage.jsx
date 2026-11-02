import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import "../../assets/css/experto-trust.css";

// Temporary mockup copy, reproduced verbatim from the user's reference.
// These reviews and figures are not verified EXPERTO-SYLLAMS reviews.
const testimonials = [
  {
    name: "Adrien",
    text: "Super conseil pour ma création de société. Expert-comptable disponible et à l'écoute.",
  },
  {
    name: "Cécile",
    text: "Toujours disponible pour m'aider à gérer ma société, je recommande Muriel.",
  },
  {
    name: "Paul",
    text: "Muriel est d'une grande aide, une experte comme on aime en avoir ! Je recommande vivement ses services.",
  },
];

function ReviewStars() {
  return <span className="trust-stars" aria-hidden="true">
    {[1, 2, 3, 4, 5].map(star => <svg key={star} viewBox="0 0 24 24" focusable="false">
      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3L5.8 21 7 14.2 2 9.3l6.9-1L12 2Z" />
    </svg>)}
  </span>;
}

function QuoteIcon() {
  return <svg className="trust-quote" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M3 21c3 0 7-5 7-12V3H2v9h5c0 5-2 8-4 9ZM15 21c3 0 7-5 7-12V3h-8v9h5c0 5-2 8-4 9Z" />
  </svg>;
}

export function ClientTrustSection({ embedded = false }) {
  const Container = embedded ? "section" : "main";
  const Heading = embedded ? "h2" : "h1";
  const InvitationHeading = embedded ? "h3" : "h2";

  return <Container className="client-trust-page experto-home-content" aria-labelledby="trust-page-title">
      <div className="container trust-container">
        <Heading id="trust-page-title" className="trust-page-title">Nous font confiance</Heading>

        <section className="trust-rating-band" aria-label="Note des avis Google">
          <div className="trust-rating-score">
            <span className="trust-rating-number">5.0</span>
            <ReviewStars />
          </div>
          <p className="trust-rating-description">Note moyenne de <strong>5/5</strong> sur 12 avis Google</p>
          {/* No Google business link has been supplied for this mockup. */}
          <button className="trust-google-link" type="button" disabled title="Lien Google à fournir">Voir les avis Google</button>
        </section>

        <section className="trust-testimonials" aria-label="Témoignages clients">
          {testimonials.map(({ name, text }) => <figure className="trust-testimonial" key={name}>
            <QuoteIcon />
            <blockquote><p>{text}</p></blockquote>
            <figcaption>{name}</figcaption>
          </figure>)}
        </section>

        <section className="trust-invitation" aria-labelledby="trust-invitation-title">
          <InvitationHeading id="trust-invitation-title">Laisser un témoignage</InvitationHeading>
          <p>Votre avis nous aide à progresser et guide les entrepreneurs qui cherchent un expert-comptable de proximité.</p>
          <div className="trust-actions">
            <button className="trust-button trust-button-primary" type="button" disabled title="Lien Google à fournir">Laisser un avis Google</button>
            <Link className="trust-button trust-button-secondary" to="/contacts">Nous écrire</Link>
          </div>
        </section>
      </div>
    </Container>;
}

export default function ClientTrustPage() {
  return <div className="page-wrapper"><Layout><ClientTrustSection /></Layout></div>;
}
