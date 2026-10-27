export default function ClientIntro() {
  return <div className="client-intro">
    <div className="container">
      <div className="client-page-copy client-intro-panel">
        <h2 id="client-group-title">Vous &amp; Notre Groupe</h2>
        <h3 className="client-group-subtitle">Des cabinets Internationales à taille humaine, digitalisé et disponible</h3>
        <div className="client-intro-copy">
        <p>Le Groupe Experto-Syllams accompagne dirigeants d'entreprise et particuliers dans la gestion de leur comptabilité, avec des outils dématérialisés qui simplifient le quotidien : factures scannées depuis votre smartphone, déclarations fiscales suivies en ligne, échanges facilités avec votre expert-comptable.</p>
        <p>Mais derrière les outils, il y a avant tout des interlocuteurs dédiés. experts-comptables et financiers , qui vous écoutent, vous comprennent puis vous conseille et vous guide à chaque étape de votre projet, en s'adaptant à votre organisation et à vos objectifs.</p>
        </div>
      </div>
      <div className="client-request-grid client-intro-benefits">
        <article className="client-request-card"><i className="fa-solid fa-expand" aria-hidden="true" /><h3>100% dématérialisé</h3><p>Factures scannées depuis votre smartphone, déclarations suivies en ligne.</p></article>
        <div className="client-group-values">
          <p className="client-group-promises">Vous écoutez pour mieux vous Parler<br />Vous comprendre pour mieux Vous Conseillez</p>
          <p className="client-group-motto">A Partners for one day Partners forever</p>
          <div className="client-values-list">
          <h3>Nos Valeurs pour y arriver :</h3>
          <ul>{["LA RIGUEUR DANS L’ETHIQUE & LA DEONTOLOGIE", "DES RESULTATS EFFICACES & EFFICIENTS", "LE PROFESSIONALISME & COMPETENCE", "LE RESPECT DE NOTRE REPUTATION"].map(value => <li key={value}><span aria-hidden="true">❖</span>{value}</li>)}</ul>
          </div>
        </div>
        <article className="client-request-card"><i className="fa-solid fa-shield-halved" aria-hidden="true" /><h3>Proximité et sérénité</h3><p>Une expertise de proximité qui fait gagner du temps, de l'argent et de la tranquillité.</p></article>
      </div>
    </div>
  </div>;
}
