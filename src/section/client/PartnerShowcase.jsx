import references from "./clientReferences.json";

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
      <div className="partner-strip" tabIndex={0} aria-label="Logos de nos clients et partenaires">
        <div className="partner-track" style={{ "--partner-scroll-duration": `${references.length * 7}s` }}>
          {[0, 1].map(copy => <div className="partner-items" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {references.map(reference => <div className="partner-logo-card" key={reference.id}>
              <div className="partner-logo-slot">
                {reference.viewBox ? <svg viewBox={reference.viewBox} width="210" height="110" role="img" aria-label={reference.name} overflow="hidden">
                  <svg width={reference.sourceWidth} height={reference.cropHeight} overflow="hidden">
                  <image href={`${import.meta.env.BASE_URL}images/references/${reference.logo}`} width={reference.sourceWidth} height={reference.sourceHeight} />
                  </svg>
                </svg> : <img src={`${import.meta.env.BASE_URL}images/references/${reference.logo}`} alt={reference.name} width="210" height="110" loading="lazy" decoding="async" />}
              </div>
            </div>)}
          </div>)}
        </div>
      </div>
      </div>
    </div>
  </section>;
}
