export default function ClientIntro() {
  return <div className="group-introduction">
    <p className="group-introduction-label">Vous &amp; Notre Groupe</p>
    <h2 id="client-group-title">Des cabinets Internationales à taille humaine, digitalisé et disponible</h2>
    <div className="group-introduction-copy">
      <p>Le Groupe Experto-Syllams accompagne dirigeants d'entreprise et particuliers dans la gestion de leur comptabilité, avec des outils dématérialisés qui simplifient le quotidien : factures scannées depuis votre smartphone, déclarations fiscales suivies en ligne, échanges facilités avec votre expert-comptable.</p>
      <p>Mais derrière les outils, il y a avant tout des interlocuteurs dédiés. experts-comptables et financiers , qui vous écoutent, vous comprennent puis vous conseille et vous guide à chaque étape de votre projet, en s'adaptant à votre organisation et à vos objectifs.</p>
    </div>
    <div className="group-introduction-cards">
      <article className="group-introduction-card">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3M8 12h8" /></svg>
        <h3>100% dématérialisé</h3>
        <p>Factures scannées depuis votre smartphone, déclarations suivies en ligne.</p>
      </article>
      <article className="group-introduction-card">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="7" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2" /></svg>
        <h3>Interlocuteurs dédiés</h3>
        <p>Des experts-comptables et financiers vous conseillent et vous guident à chaque étape de votre projet.</p>
      </article>
      <article className="group-introduction-card">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8.5 12 2.5 2.5 4.5-5" /></svg>
        <h3>Proximité et sérénité</h3>
        <p>Une expertise de proximité qui fait gagner du temps, de l'argent et de la tranquillité.</p>
      </article>
    </div>
  </div>;
}
