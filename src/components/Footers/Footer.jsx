import { Link } from 'react-router-dom';
import '../../assets/css/experto-footer.css';

const footerLogo = `${import.meta.env.BASE_URL}images/experto-syllams-blue.webp`;
const navigation = [
  ['/contacts', 'Contactez-nous'],
  ['/nos-cabinets', 'Nos cabinets'],
  ['/nos-services', 'Nos services'],
  ['/formations', 'Formations'],
  ['/qui-sommes-nous', 'Qui sommes-nous'],
];
const socialNetworks = [
  ['Facebook', 'fa-facebook-f'],
  ['X', 'fa-x-twitter'],
  ['LinkedIn', 'fa-linkedin-in'],
  ['Instagram', 'fa-instagram'],
];

export default function Footer() {
  return (
    <footer id="contact" className="experto-footer">
      <div className="experto-footer-inner">
        <div className="experto-footer-top">
          <Link className="experto-footer-brand" to="/" aria-label="Accueil — Groupe Experto-Syllams">
            <img src={footerLogo} alt="Groupe Experto-Syllams — Audit, Consulting, Training" width="897" height="301" />
          </Link>
          <nav aria-label="Navigation de pied de page">
            <ul className="experto-footer-links">
              {navigation.map(([to, label]) => <li key={to}><Link to={to}>{label}</Link></li>)}
            </ul>
          </nav>
        </div>
        <div className="experto-footer-lower">
          <div className="experto-footer-details">
            <p>Le Groupe Experto-Syllams est un groupe de cabinets qui accompagne les entreprises, les projets, les ONG et les institutions financières en Afrique de l’Ouest. Il mobilise ses compétences en comptabilité, finance, gestion, informatique et gestion des risques pour résoudre les problématiques de ses clients, dans le respect des normes professionnelles, de l’éthique et de la déontologie.</p>
          </div>
          <ul className="experto-footer-socials" aria-label="Réseaux sociaux — liens à venir">
            {socialNetworks.map(([name, icon]) => (
              <li key={name}>
                <span role="img" aria-label={`${name} : lien à venir`} title={`${name} — lien à venir`}>
                  <i className={`fa-brands ${icon}`} aria-hidden="true" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
