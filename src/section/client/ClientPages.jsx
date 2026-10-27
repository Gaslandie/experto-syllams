import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import PageTitle from "../PageTitle";
import { firms } from "../../components/NavLinks";

function Page({ title, children }) {
  return <div className="page-wrapper"><Layout><PageTitle pageName={title} /><main className="client-page"><div className="container">{children}</div></main></Layout></div>;
}

export function AboutPage() {
  return <Page title="Qui sommes-nous ?">
    <div className="client-page-copy">
      <p>Le Groupe Experto-Syllams, un groupe de cabinet de référence dans toutes les branches du cœur de métiers des entreprises, projets, ONG, GIE, banque, assurance, Institution de Microfinance, bref les organisations qui sont indirectement exposées à des risques économiques, comptables, financiers et informatiques…</p>
      <p>Nous intervenons auprès des entreprises, des projets, des ONG, des GIE, des Institution de Microfinance, des caisses de retraite et institutions de prévoyance, des compagnies d’assurances et banques, des cabinets d’audit et entreprises industrielles ou commerciales, afin de leur apporter notre compétences et savoir-faire en matière de Comptabilité, de finances, de gestion, d’informatique, de statistiques, d’analyse, d’estimation et de gestion des risques financiers.</p>
      <h2>Une expertise unique en Afrique de l’Ouest</h2>
      <p>Notre équipe, constituée de praticiens experts ou non rompu à la tâche en Comptabilité, Finances, Assurances et Statistiques se distinguant par sa proximité avec les clients dans la résolution de problématiques complexes.</p>
      <p>Le Groupe Experto-Syllams est, sur le plan national et sous-régional, crédité du statut de Cabinet International du fait du cursus académique et de l’expérience professionnelle de ses principaux intervenants d’une part, et de l’approche méthodologique développée lors la réalisation de ses missions dans le strict respect des normes professionnelles, d’éthiques et déontologie applicables à la profession de Conseil et d’Audit.</p>
      <p>Forts de nos compétences en gestion, en comptabilités techniques, en réglementaires et, le Groupe Experto-Syllams a développé ses propres outils, méthodologies et applications permettant de nous conformer aux spécificités du marché international et celle Africain en particulier. Ces atouts garantissent à nos clients un service professionnel de qualité au même titre que les autres cabinets internationaux, et confèrent une notoriété sous-régionale à notre signature.</p>
      <Link className="btn-two" to="/contacts">Nous contacter</Link>
    </div>
  </Page>;
}

export function FirmsPage() {
  const logos = { panaudex: "panaudex.jpeg", "aces-guinea": "aces-guinea.png", noveo: "noveo.jpeg" };
  return <Page title="Nos cabinets"><div className="client-page-copy"><h2>Un groupe de cabinets</h2><p>Découvrez les cabinets présentés par le Groupe Experto-Syllams. Leurs présentations seront complétées progressivement.</p><div className="client-firms-grid">{firms.map(([slug, name]) => <article className="client-firm" key={slug}>
    <div className="client-firm-logo">{logos[slug] ? <img src={`${import.meta.env.BASE_URL}images/${logos[slug]}`} alt={`Logo ${name}`} /> : <span>Logo à fournir</span>}</div>
    <div className="client-firm-content"><h3>{name}</h3><Link to={`/nos-cabinets/${slug}`}>Présentation à venir</Link></div>
  </article>)}</div></div></Page>;
}

export function ServicesPage() {
  const items = [
    ["Comptabilité", "Accompagnement en comptabilité et en finances, adapté aux besoins des organisations."],
    ["Juridique", "Prestations et modalités à confirmer par le groupe."],
    ["Gestion sociale", "Prestations et modalités à confirmer par le groupe."],
    ["Gestion et optimisation", "Compétences en gestion, analyse et estimation au service des organisations."],
    ["Informatique et statistiques", "Expertises en informatique et en statistiques pour accompagner les activités des organisations."],
    ["Risques financiers", "Analyse, estimation et gestion des risques financiers."],
  ];
  return <Page title="Nos services"><div className="client-page-copy"><h2>Nos domaines d’intervention</h2><p>Découvrez les domaines présentés par le groupe. Le détail des prestations sera complété par le client.</p><div className="client-service-grid">{items.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div><Link className="btn-two" to="/contacts">Nous contacter</Link></div></Page>;
}

export function ContactPage() {
  return <Page title="Nous contacter"><div className="client-page-copy"><h2>Parlons de votre projet</h2><p>Contactez-nous pour échanger sur vos besoins.</p><ul className="client-contact-list"><li><strong>Téléphone :</strong> <a href="tel:+224628216975">+224 628 21 69 75</a></li><li><strong>E-mail :</strong> <a href="mailto:manager@experto-syllams.com">manager@experto-syllams.com</a></li><li><strong>Localisation :</strong> Guinée, Conakry</li><li><strong>WhatsApp principal :</strong> <a href="https://wa.me/224628216975">+224 628 21 69 75</a></li><li><strong>WhatsApp secondaire :</strong> <a href="https://wa.me/2290197590310">+229 01 97 59 03 10</a></li></ul></div></Page>;
}

export function ReferencesPage() {
  return <Page title="Ils nous font confiance"><div className="client-page-copy"><h2>Nos références</h2><p>Les références nationales et internationales seront ajoutées après leur transmission et leur validation par le groupe.</p><div className="client-service-grid"><article><h3>Références nationales</h3><p>À venir</p></article><article><h3>Références internationales</h3><p>À venir</p></article></div></div></Page>;
}
