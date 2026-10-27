import { Link } from "react-router-dom";

const processingSteps = [
  { number: "01", icon: "fa-building", title: "Découvrir le groupe", text: "Découvrez le groupe et ses domaines d’activité.", link: "/qui-sommes-nous" },
  { number: "02", icon: "fa-users", title: "Découvrir nos cabinets", text: "Découvrez les cabinets qui composent notre groupe.", link: "/nos-cabinets" },
  { number: "03", icon: "fa-graduation-cap", title: "Développer vos compétences", text: "Découvrez les futurs programmes de formation et de certification.", link: "/formations" },
  { number: "04", icon: "fa-comments", title: "Nous contacter", text: "Appelez le +224 628 21 69 75 ou écrivez à manager@experto-syllams.com.", link: "/contacts" },
];

export default function Processing() {
  return <section className="processing-section pt-120 pb-120">
    <div className="container">
      <div className="sec-title center mb-50">
        <h6 className="sub-title">Votre parcours</h6>
        <h2 className="title">Découvrez, échangez et construisez <br />vos projets avec nous.</h2>
      </div>
      <ol className="parcours-grid">
        {processingSteps.map(({ number, icon, title, text, link }) => <li key={number}>
          <Link className="parcours-step" to={link}>
            <div className="parcours-step-top"><span className="parcours-icon" aria-hidden="true"><i className={`fa-solid ${icon}`} /></span><span className="parcours-number" aria-hidden="true">{number}</span></div>
            <h4>{title}</h4>
            <p>{text}</p>
            <span className="parcours-arrow" aria-hidden="true"><i className="fa-solid fa-arrow-right" /></span>
          </Link>
        </li>)}
      </ol>
      <div className="parcours-footer"><p>Découvrez notre groupe, nos cabinets et nos futurs programmes.</p><Link className="btn-two" to="/qui-sommes-nous">Découvrir le groupe</Link></div>
    </div>
  </section>;
}
