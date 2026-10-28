import { Link } from "react-router-dom";
import Layout from "../../layouts/Layout";
import PageTitle from "../PageTitle";
import PartnerShowcase from "./PartnerShowcase";
import ClientAbout from "./ClientAbout";
import { clientServices } from "./ClientServices";
import { firms } from "../../components/NavLinks";

function Page({ title, children, hideBreadcrumb = false }) {
  return <div className="page-wrapper"><Layout><PageTitle pageName={title} hideBreadcrumb={hideBreadcrumb} /><main className="client-page"><div className="container">{children}</div></main></Layout></div>;
}

export function AboutPage() {
  return <Page title="Qui sommes-nous ?" hideBreadcrumb>
    <div className="experto-home-content">
      <ClientAbout />
    </div>
    <Link className="btn-two" to="/contacts">Nous contacter</Link>
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
  const items = clientServices;
  return <Page title="Nos services"><div className="client-page-copy"><h2>Nos domaines d’intervention</h2><p>Une expertise complète à votre disposition.</p><div className="client-service-grid">{items.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div><Link className="btn-two" to="/contacts">Nous contacter</Link></div></Page>;
}

export function ContactPage() {
  return <Page title="Nous contacter"><div className="client-page-copy"><h2>Parlons de votre projet</h2><p>Contactez-nous pour échanger sur vos besoins.</p><ul className="client-contact-list"><li><strong>Téléphone :</strong> <a href="tel:+224628216975">+224 628 21 69 75</a></li><li><strong>E-mail :</strong> <a href="mailto:manager@experto-syllams.com">manager@experto-syllams.com</a></li><li id="adresse" tabIndex={-1}><strong>Localisation :</strong> Guinée, Conakry</li><li><strong>WhatsApp principal :</strong> <a href="https://wa.me/224628216975">+224 628 21 69 75</a></li><li><strong>WhatsApp secondaire :</strong> <a href="https://wa.me/2290197590310">+229 01 97 59 03 10</a></li></ul></div></Page>;
}

export function ReferencesPage({ category }) {
  const title = category === "nationales" ? "Références nationales" : category === "internationales" ? "Références internationales" : "Ils nous font confiance";
  const categories = category ? [category] : ["nationales", "internationales"];
  return <Page title={title}><div className="client-page-copy"><h2>Nos références</h2><p>Les références nationales et internationales seront ajoutées après leur transmission et leur validation par le groupe.</p><div className="client-service-grid">{categories.map((item) => <article key={item}><h3>Références {item}</h3><p>À venir</p></article>)}</div></div></Page>;
}

export function AffiliationsPage() {
  return <Page title="Affiliations & partenaires"><PartnerShowcase /><Link className="btn-two" to="/references">Découvrir nos références</Link></Page>;
}
