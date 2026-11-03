import { useEffect, useState } from 'react';
import '../../assets/css/experto-contact.css';

const address = 'Immeuble Archevêché, Almamya, Kaloum, Conakry, Guinée';
// Use the embed URL returned by Google, without the initial Maps redirect.
const mapUrl = 'https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sImmeuble+Archev%C3%AAch%C3%A9,+Almamya,+Kaloum,+Conakry,+Guin%C3%A9e!6i16!3m1!1sfr!5m1!1sfr';
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export default function ClientContactMap() {
  const [phase, setPhase] = useState('loading');
  const [attempt, setAttempt] = useState(0);
  const loading = phase !== 'loaded';

  useEffect(() => {
    if (phase !== 'loading') return;
    const timeout = window.setTimeout(() => setPhase(current => current === 'loading' ? 'slow' : current), 10000);
    return () => window.clearTimeout(timeout);
  }, [phase, attempt]);

  function retry() {
    setPhase('loading');
    setAttempt(previous => previous + 1);
  }

  return <section id="adresse" className="client-contact-map" tabIndex={-1} aria-label="Notre adresse sur Google Maps">
    <div className="container">
      <p className="client-contact-map-address">4ème étage, Immeuble Archevêché — Almamya / Kaloum, Conakry, Rép. de Guinée</p>
      <div className="client-contact-map-stage">
        <iframe
          key={attempt}
          title={`Google Maps — ${address}`}
          src={mapUrl}
          width="1280"
          height="450"
          loading="eager"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={loading ? -1 : 0}
          aria-hidden={loading ? true : undefined}
          aria-busy={loading}
          onLoad={() => setPhase('loaded')}
          allowFullScreen
        />
        {loading && <div className="client-contact-map-loading">
          {phase === 'loading' && <span className="client-contact-map-spinner" aria-hidden="true" />}
          <p role="status">{phase === 'loading' ? 'Chargement de la carte…' : 'La carte met plus de temps à charger.'}</p>
          {phase === 'slow' && <button type="button" onClick={retry}>Réessayer</button>}
        </div>}
      </div>
      <a className="client-contact-map-link" href={mapsLink} target="_blank" rel="noopener noreferrer">Ouvrir dans Google Maps</a>
    </div>
  </section>;
}
