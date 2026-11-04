import "../../assets/css/experto-purpose.css";

const pillars = [
  {
    title: "Vision",
    text: "Être le plus grand moteur, levier et accélérateur de développement de l’Afrique, par la performance de ses organisations.",
  },
  {
    title: "Mission",
    text: "Des solutions intégrées pour l’amélioration continue de votre performance.",
  },
  {
    title: "Engagement",
    text: "Aller chez vous, pour fabriquer sur mesure et avec vous des solutions créatives.",
  },
  {
    title: "Démarche",
    text: "Partir de vos contraintes, des acquis de vos équipes et de votre culture.",
  },
  {
    title: "Résultat",
    text: "Un changement réel, des solutions consensuelles, un accompagnement à chaque étape.",
  },
];

export default function ClientPurpose() {
  return <section className="group-purpose" aria-labelledby="group-purpose-title">
    <header className="group-purpose-heading">
      <p className="group-purpose-label">Notre raison d’être</p>
      <h2 id="group-purpose-title">De la vision au résultat</h2>
    </header>
    <ol className="group-purpose-grid" role="list">
      {pillars.map(({ title, text }, index) => <li className="group-purpose-card" key={title}>
        <span className="group-purpose-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </li>)}
    </ol>
    <p className="group-purpose-statement">Groupe Experto-Syllams : être le partenaire stratégique de votre performance</p>
  </section>;
}
