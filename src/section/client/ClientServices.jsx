export const clientServices = [
  ["Comptabilité", "Notre cabinet dématérialisé vous propose des solutions en ligne pour une comptabilité accessible. Scannez vos factures à l'aide de votre smartphone et laissez-vous guider par nos outils."],
  ["Juridique", "Chaque société est soumise à des obligations juridiques. Nous vous accompagnons dans vos démarches : de la création à la cession, en passant par la gestion des actes courants de la vie de votre société."],
  ["Gestion sociale", "Vous avez des salariés ? Une solution complète pour le suivi de votre personnel : suivi des absences, protection des données et digitalisation des bulletins de paie."],
  ["Gestion et optimisation", "Besoin d'un tableau de bord, d'un prévisionnel, d'un budget ou d'un dossier de financement ? Contactez votre expert-comptable pour établir ensemble la liste de vos besoins."],
];

export default function ClientServices() {
  return <section className="client-services pt-120 pb-120" aria-labelledby="client-services-title">
    <div className="container">
      <div className="sec-title mb-50"><h6 className="sub-title">Nos services</h6><h2 id="client-services-title" className="title">Une expertise complète à votre disposition</h2></div>
      <div className="client-request-grid">{clientServices.map(([title, text]) => <article className="client-request-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div>
  </section>;
}
