import '../../assets/css/experto-contact.css';

const address = 'Immeuble Archevêché, Almamya, Kaloum, Conakry, Guinée';
const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed&hl=fr&z=16`;

export default function ClientContactMap() {
  return <section id="adresse" className="client-contact-map" tabIndex={-1} aria-label="Notre adresse sur Google Maps">
    <div className="container">
      <p className="client-contact-map-address">4ème étage, Immeuble Archevêché — Almamya / Kaloum, Conakry, Rép. de Guinée</p>
      <iframe
        title={`Google Maps — ${address}`}
        src={mapUrl}
        width="1280"
        height="450"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  </section>;
}
