import serviceImage0 from "../../assets/images/experto/service-comptabilite.webp";
import serviceImage1 from "../../assets/images/experto/service-juridique.webp";
import serviceImage2 from "../../assets/images/experto/service-social.webp";
import serviceImage3 from "../../assets/images/experto/service-gestion.webp";

export const clientServices = [
  ["Comptabilité", "Notre cabinet dématérialisé vous propose des solutions en ligne pour une comptabilité accessible. Scannez vos factures à l'aide de votre smartphone et laissez-vous guider par nos outils."],
  ["Juridique", "Chaque société est soumise à des obligations juridiques. Nous vous accompagnons dans vos démarches : de la création à la cession, en passant par la gestion des actes courants de la vie de votre société."],
  ["Gestion sociale", "Vous avez des salariés ? Une solution complète pour le suivi de votre personnel : suivi des absences, protection des données et digitalisation des bulletins de paie."],
  ["Gestion et optimisation", "Besoin d'un tableau de bord, d'un prévisionnel, d'un budget ou d'un dossier de financement ? Contactez votre expert-comptable pour établir ensemble la liste de vos besoins."],
];

export default function ClientServices() {
  return <section className="client-services pt-120 pb-120" aria-labelledby="client-services-title">
    <div className="container">
      <div className="sec-title mb-50"><p className="client-services-label">Nos services</p><h3 id="client-services-title" className="client-group-subtitle">Une expertise complète à votre disposition</h3></div>
      <div className="client-request-grid">{clientServices.map(([title, text], index) => <article className="client-request-card" key={title}>
        <figure className="home-service-image temporary-image-frame"><img src={[serviceImage0, serviceImage1, serviceImage2, serviceImage3][index]} alt="Échanges professionnels — photographie d’illustration" loading="lazy" width="1400" height="933" /><span className="temporary-image-label">Image temporaire</span></figure>
        <div className="home-service-copy"><h3>{title}</h3><p>{text}</p></div>
      </article>)}</div>
    </div>
  </section>;
}
