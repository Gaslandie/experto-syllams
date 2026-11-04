import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import PartnerLogoStrip from "./PartnerLogoStrip";
import "../../assets/css/experto-trust.css";

// Temporary mockup copy, reproduced verbatim from the user's reference.
// These reviews and figures are not verified EXPERTO-SYLLAMS reviews.
const testimonials = [
  {
    name: "AFIF AHMAD",
    role: "PDG Guinea MultiTrading",
    text: "Super conseil pour ma création de société. Expert-comptable disponible et à l'écoute.",
  },
  {
    name: "TATIANA EBOT",
    role: "DG CIP",
    text: "Toujours disponible pour m'aider à gérer ma société, je recommande le Groupe Experto-Syllams",
  },
  {
    name: "HENRY LIU",
    role: "DG Sous-Regional Star DTV Co",
    text: "Le groupe Experto-Syllams est d'une grande aide, une expertise comme on aime en avoir ! Je recommande vivement ses services.",
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

function TestimonialsCarousel() {
  const viewportRef = useRef(null);
  const groupRef = useRef(null);
  const [pressed, setPressed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (pressed || hovered || focused) return;

    const viewport = viewportRef.current;
    const group = groupRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame;
    let previousTime;
    let offset = viewport.scrollLeft;

    function advance(time) {
      if (previousTime !== undefined) {
        const loopWidth = group.getBoundingClientRect().width;
        offset += Math.min(time - previousTime, 64) * 0.024;
        if (loopWidth > 0) offset %= loopWidth;
        viewport.scrollLeft = offset;
      }
      previousTime = time;
      frame = window.requestAnimationFrame(advance);
    }

    function updateMotion() {
      window.cancelAnimationFrame(frame);
      previousTime = undefined;
      offset = viewport.scrollLeft;
      if (!reducedMotion.matches) frame = window.requestAnimationFrame(advance);
    }

    updateMotion();
    reducedMotion.addEventListener("change", updateMotion);
    return () => {
      window.cancelAnimationFrame(frame);
      reducedMotion.removeEventListener("change", updateMotion);
    };
  }, [pressed, hovered, focused]);

  return <section className="trust-testimonials" aria-label="Témoignages clients">
    <div className="trust-testimonials-viewport" ref={viewportRef} tabIndex={0} role="group" aria-label="Liste des témoignages"
      onPointerEnter={event => { if (event.pointerType === "mouse") setHovered(true); }}
      onPointerLeave={event => { if (event.pointerType === "mouse") setHovered(false); }}
      onFocus={event => setFocused(event.currentTarget.matches(":focus-visible"))} onBlur={() => setFocused(false)}
      onTouchStart={() => setPressed(true)} onTouchEnd={() => setPressed(false)} onTouchCancel={() => setPressed(false)}>
      <div className="trust-testimonials-track">
        {[0, 1].map(copy => <div className="trust-testimonials-group" key={copy} ref={copy === 0 ? groupRef : undefined} aria-hidden={copy === 1 ? true : undefined}>
          {testimonials.map(({ name, role, text }) => <figure className="trust-testimonial" key={name}>
            <QuoteIcon />
            <blockquote><p>{text}</p></blockquote>
            <figcaption>
              <span className="trust-testimonial-name">{name}</span>
              <span className="trust-testimonial-role">{role}</span>
            </figcaption>
          </figure>)}
        </div>)}
      </div>
    </div>
  </section>;
}

export function ClientTrustSection({ embedded = false }) {
  const Container = embedded ? "section" : "main";
  const Heading = embedded ? "h2" : "h1";
  const InvitationHeading = embedded ? "h3" : "h2";

  return <Container className="client-trust-page experto-home-content" aria-labelledby="trust-page-title">
      <div className="container trust-container">
        <Heading id="trust-page-title" className="trust-page-title">Nous font confiance</Heading>

        <div className="trust-client-logos">
          <PartnerLogoStrip />
        </div>

        <section className="trust-rating-band" aria-label="Note des avis Google">
          <div className="trust-rating-score">
            <span className="trust-rating-number">5.0</span>
            <ReviewStars />
          </div>
          <p className="trust-rating-description">Note moyenne de <strong>5/5</strong> sur 12 avis Google</p>
          {/* No Google business link has been supplied for this mockup. */}
          <button className="trust-google-link" type="button" disabled title="Lien Google à fournir">Voir les avis Google</button>
        </section>

        <TestimonialsCarousel />

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
