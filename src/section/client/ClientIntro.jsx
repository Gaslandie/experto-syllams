import DigitalImage from "../../assets/images/experto/dematerialise-qr.webp";
import ProximityImage from "../../assets/images/experto/proximite-accueil.webp";
import GroupImage from "../../assets/images/experto/groupe-equipe.webp";
export default function ClientIntro() {
  return <div className="client-intro">
    <div className="container">
      <div className="client-page-copy client-intro-panel">
        <h2 id="client-group-title">Vous &amp; Notre Groupe</h2>
        <div className="client-intro-editorial">
          <figure className="home-editorial-image temporary-image-frame"><img src={GroupImage} alt="Professionnels réunis devant un bureau — photographie d’illustration" loading="lazy" width="1400" height="933" /><span className="temporary-image-label">Image temporaire</span></figure>
          <div className="client-intro-editorial-copy">
        <h3 className="client-group-subtitle">Des cabinets Internationales à taille humaine, digitalisé et disponible</h3>
        <div className="client-intro-copy">
        <p>Le Groupe Experto-Syllams accompagne dirigeants d'entreprise et particuliers dans la gestion de leur comptabilité, avec des outils dématérialisés qui simplifient le quotidien : factures scannées depuis votre smartphone, déclarations fiscales suivies en ligne, échanges facilités avec votre expert-comptable.</p>
        <p>Mais derrière les outils, il y a avant tout des interlocuteurs dédiés. experts-comptables et financiers , qui vous écoutent, vous comprennent puis vous conseille et vous guide à chaque étape de votre projet, en s'adaptant à votre organisation et à vos objectifs.</p>
        </div>
      </div>
      </div>
      </div>
      <div className="client-request-grid client-intro-benefits">
        <div className="benefit-column"><article className="client-request-card"><h3>100% dématérialisé</h3><p>Factures scannées depuis votre smartphone, déclarations suivies en ligne.</p></article><figure className="benefit-photo temporary-image-frame"><img src={DigitalImage} alt="QR code sur un téléphone posé sur un ordinateur — illustration" loading="lazy" width="1200" height="800" /><span className="temporary-image-label">Image temporaire</span></figure></div>
        <div className="client-group-values">
          <div className="client-group-statement"><p className="client-group-promises">Vous écoutez pour mieux vous Parler<br />Vous comprendre pour mieux Vous Conseillez</p>
          <p className="client-group-motto">A Partners for one day Partners forever</p></div>
          <div className="client-values-list">
          <h3>Nos Valeurs pour y arriver :</h3>
          <ul>{["LA RIGUEUR DANS L’ETHIQUE & LA DEONTOLOGIE", "DES RESULTATS EFFICACES & EFFICIENTS", "LE PROFESSIONALISME & COMPETENCE", "LE RESPECT DE NOTRE REPUTATION"].map(value => <li key={value}><span aria-hidden="true">❖</span>{value}</li>)}</ul>
          </div>
        </div>
        <div className="benefit-column"><article className="client-request-card"><h3>Proximité et sérénité</h3><p>Une expertise de proximité qui fait gagner du temps, de l'argent et de la tranquillité.</p></article><figure className="benefit-photo temporary-image-frame"><img src={ProximityImage} alt="Professionnel tendant la main — illustration" loading="lazy" width="1200" height="800" /><span className="temporary-image-label">Image temporaire</span></figure></div>
      </div>
    </div>
  </div>;
}
