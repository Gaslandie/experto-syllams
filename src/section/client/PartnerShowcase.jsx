// References confirmed by the client on 2026-10-28, in the supplied order.
const references = [
  { name: 'Deloitte', logo: 'deloitte.svg', country: 'CÔTE D’IVOIRE' },
  { name: 'EY', logo: 'ey.svg', country: 'CÔTE D’IVOIRE' },
  { name: 'KPMG', logo: 'kpmg.svg', country: 'CÔTE D’IVOIRE' },
  { name: 'PwC', logo: 'pwc.svg', country: 'CÔTE D’IVOIRE – PAYS-BAS' },
  { name: 'Mazars', logo: 'mazars.svg', country: 'BÉNIN – CÔTE D’IVOIRE' },
];

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
      <h3 className="partner-category">Cabinets d’Audit</h3>
      <div className="partner-strip" tabIndex={0} aria-label="Références clients : Deloitte, EY, KPMG, PwC et Mazars">
        <div className="partner-track">
          {[0, 1].map(copy => <div className="partner-items" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {references.map(reference => <div className="partner-logo-card" key={reference.name}>
              <div className="partner-logo-slot"><img src={`${import.meta.env.BASE_URL}images/references/${reference.logo}`} alt={reference.name} width="210" height="110" loading="lazy" /></div>
              <div className="partner-logo-caption"><span>{reference.country}</span></div>
            </div>)}
          </div>)}
        </div>
      </div>
      </div>
    </div>
  </section>;
}
