export default function ClientIntro() {
  return <section className="client-intro">
    <div className="container">
      <div className="client-page-copy client-intro-panel">
        <h2>Vous &amp; Notre Groupe</h2>
        <h3>Des cabinets Internationales à taille humaine, digitalisé et disponible</h3>
        <div className="client-intro-copy">
        <p>Le Groupe Experto-Syllams accompagne dirigeants d'entreprise et particuliers dans la gestion de leur comptabilité, avec des outils dématérialisés qui simplifient le quotidien : factures scannées depuis votre smartphone, déclarations fiscales suivies en ligne, échanges facilités avec votre expert-comptable.</p>
        <p>Mais derrière les outils, il y a avant tout des interlocuteurs dédiés. experts-comptables et financiers , qui vous écoutent, vous comprennent puis vous conseille et vous guide à chaque étape de votre projet, en s'adaptant à votre organisation et à vos objectifs.</p>
        </div>
      </div>
      <div className="client-request-grid client-intro-benefits">
        <article className="client-request-card"><i className="fa-solid fa-shield-halved" aria-hidden="true" /><h3>Proximité et sérénité</h3><p>Une expertise de proximité qui fait gagner du temps, de l'argent et de la tranquillité.</p></article>
        <article className="client-request-card"><i className="fa-solid fa-expand" aria-hidden="true" /><h3>100% dématérialisé</h3><p>Factures scannées depuis votre smartphone, déclarations suivies en ligne.</p></article>
      </div>
    </div>
  </section>;
}
