// No client or partner identities have been supplied for this strip yet.
// The supplied cabinet logos belong to the group and must not be used here.
const placeholders = ["Client — référence nationale", "Client — référence internationale", "Partenaire", "Affiliation"];

export default function PartnerShowcase() {
  return <section id="client-references" className="partner-showcase" aria-labelledby="partner-showcase-title">
    <div className="container">
      <div className="partner-panel">
      <div className="sec-title partner-introduction">
        <h2 className="title" id="partner-showcase-title">Nos clients sont nos meilleures références</h2>
        <div className="partner-introduction-copy">
        <p>Cabinets d’audit, Compagnies d’assurance, institutions de retraite ; Banques, Entreprises industrielles et commerciales ; Fonds de capital Investissement.</p>
        <p>Ils ont fait confiance au Groupe Experto-Syllams pour les accompagner dans la résolution de problématiques aux enjeux importants.</p>
        <p className="partner-invitation">Découvrez ici quelques-unes de nos références clients.</p>
        </div>
      </div>
      <hr className="partner-divider" />
      <div className="partner-strip" tabIndex={0} aria-label="Emplacements des futurs logos de clients et partenaires">
        <div className="partner-track">
          {[0, 1].map(copy => <div className="partner-items" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {placeholders.map(label => <div className="partner-logo-card" key={label}><div className="partner-logo-slot">Logo à fournir</div><div className="partner-logo-caption"><strong>{label}</strong><span>À venir</span></div></div>)}
          </div>)}
        </div>
      </div>
      </div>
    </div>
  </section>;
}
