import { Link } from 'react-router-dom';
import '../../assets/css/experto-footer.css';
const FooterLogo = `${import.meta.env.BASE_URL}images/experto-syllams-blue.png`;

export default function Footer() {
  return <footer id="contact" className="experto-footer">
    <div className="container">
      <div className="footer-main">
                    <div className="footer-brand">
                        <Link to="/" aria-label="Accueil — Groupe Experto-Syllams">
                            <img src={FooterLogo} alt="Groupe Experto-Syllams" />
                        </Link>
                    </div>
        <div className="footer-contacts">
          <h4 className="widget-title">Contacts</h4>
                    <div className="footer-contact-grid">
                        <div className="footer-contact-column">
                        <div className="info-item">
                            <ul>
                            <li><i className="fa-sharp fa-solid fa-phone"/></li>
                            <li>
                                <span>Téléphone :</span>
                                <h5 className="title"><a href="tel:+224628216975">+224 628 21 69 75</a></h5>
                                <div className="footer-contact-number"><span>WhatsApp principal :</span><a href="https://wa.me/224628216975">+224 628 21 69 75</a></div>
                                <div className="footer-contact-number"><span>WhatsApp secondaire :</span><a href="https://wa.me/2290197590310">+229 01 97 59 03 10</a></div>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="footer-contact-column">
                        <div className="info-item">
                            <ul>
                            <li><i className="fa-sharp fa-solid fa-envelope"/></li>
                            <li>
                                <span>E-mail :</span>
                                <h5 className="title"><a href="mailto:manager@experto-syllams.com">manager@experto-syllams.com</a></h5>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="footer-contact-column">
                        <div className="info-item">
                            <ul>
                            <li><i className="fa-sharp fa-solid fa-location-dot"/></li>
                            <li>
                                <span>Localisation :</span>
                                <h5 className="title">Guinée, Conakry</h5>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
        </div>
                    <div className="widgets-section">
                    <div className="row g-4">
                        <div className="footer-column">
                        <div className="footer-widget links-widget">
                            <h4 className="widget-title">Services</h4>
                            <div className="widget-content">
                            <ul className="user-links">
                                <li><Link to="/nos-services">Audit</Link></li>
                                <li><Link to="/nos-services">Conseil</Link></li>
                                <li><Link to="/formations">Formation</Link></li>
                                <li><Link to="/formations">Certifications</Link></li>
                                <li><Link to="/nos-cabinets">Nos cabinets</Link></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="footer-column">
                        <div className="footer-widget links-widget">
                            <h4 className="widget-title">Pages</h4>
                            <div className="widget-content">
                            <ul className="user-links">
                                <li><Link to="/actualites">Actualités du groupe</Link></li>
                                <li><Link to="/nos-cabinets">Nos cabinets</Link></li>
                                <li><Link to="/affiliations-partenaires">Nos partenaires</Link></li>
                                <li><Link to="/contacts">Nous contacter</Link></li>
                                <li><Link to="/qui-sommes-nous">Qui sommes-nous</Link></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
      </div>
      <div className="footer-bottom">
                    <p className="copyright-text">© 2026. Tous droits réservés par <Link to="/">GROUPE EXPERTO-SYLLAMS</Link></p>                            <ul className="footer-nav">
                            <li><span title="Facebook — lien à venir" aria-label="Facebook : lien à venir"><i className="fa-brands fa-facebook-f" aria-hidden="true" /></span></li>
                            <li><span title="Instagram — lien à venir" aria-label="Instagram : lien à venir"><i className="fa-brands fa-instagram" aria-hidden="true" /></span></li>
                            <li><span title="X — lien à venir" aria-label="X : lien à venir"><i className="fa-brands fa-x-twitter" aria-hidden="true" /></span></li>
                            <li><span title="LinkedIn — lien à venir" aria-label="LinkedIn : lien à venir"><i className="fa-brands fa-linkedin-in" aria-hidden="true" /></span></li>
                            </ul>
      </div>
    </div>
  </footer>;
}
