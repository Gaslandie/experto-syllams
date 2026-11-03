import PartnerLogoStrip from "./PartnerLogoStrip";

export default function PartnerShowcase() {
  return <section id="client-references" className="partner-showcase" aria-labelledby="partner-showcase-title">
    <div className="container">
      <div className="partner-panel">
      <div className="sec-title partner-introduction">
        <h2 className="title" id="partner-showcase-title">Nos clients sont nos meilleures références</h2>
        <div className="partner-introduction-copy">
        <p>Cabinets d’audit ; Compagnies d’assurance, institutions de retraite ; Banques, Entreprises industrielles et commerciales ;<br />Fonds de capital investissement.</p>
        <p>Ils ont fait confiance au Groupe Experto-Syllams pour les accompagner dans la résolution de problématiques aux enjeux importants.</p>
        <p className="partner-invitation">Découvrez ici quelques-unes de nos références clients:</p>
        </div>
      </div>
      <hr className="partner-divider" />
      <h3 className="partner-category">Clients et partenaires</h3>
      <PartnerLogoStrip />
      </div>
    </div>
  </section>;
}
