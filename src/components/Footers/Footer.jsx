import React from "react";
import { Link } from 'react-router-dom';
const FooterLogo = `${import.meta.env.BASE_URL}images/experto-syllams.jpeg`;
import FooterShapeImage from '../../assets/images/shape/footer-one-shape.png';

function Footer({ handleOpen, searchToggle, }) {
    return (
        <>
        <footer id="contact" className={`main-footer footer-style-one ${searchToggle ? "moblie-search-active" : ""}`}>
            <div className="outer-box">
                <div className="footer-left">
                <div className="logo">
                    <Link to="/"><img src={FooterLogo} alt="Groupe Experto-Syllams" style={{ width: 170, height: 60, objectFit: "contain", backgroundColor: "white" }}/></Link>
                </div>
                <button className="back-top-btn mobile-nav-toggler" onClick={handleOpen}>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
                    <circle cx="1.5" cy="9.5" r="1.5" fill="white" />
                    <circle cx="1.5" cy="17.5" r="1.5" fill="white" />
                    <circle cx="9.5" cy="1.5" r="1.5" fill="white" />
                    <circle cx="9.5" cy="9.5" r="1.5" fill="white" />
                    <circle cx="9.5" cy="17.5" r="1.5" fill="white" />
                    <circle cx="17.5" cy="1.5" r="1.5" fill="white" />
                    <circle cx="17.5" cy="9.5" r="1.5" fill="white" />
                    <circle cx="17.5" cy="17.5" r="1.5" fill="white" />
                    </svg>
                </button>
                </div>
                <div className="row g-0 w-100">
                <div className="col-xl-8 left-column order-2 order-xl-1">
                    <div className="footer-top">
                    <div className="row g-4">
                        <div className="col-lg-4">
                        <div className="info-item">
                            <ul>
                            <li><i className="fa-sharp fa-solid fa-phone"/></li>
                            <li>
                                <span>Téléphone :</span>
                                <h5 className="title"><a href="tel:+224628216975">+224 628 21 69 75</a></h5>
                            </li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-4">
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
                        <div className="col-lg-4">
                        <div className="info-item">
                            <ul>
                            <li><i className="fa-sharp fa-solid fa-location-dot"/></li>
                            <li>
                                <span>Horaires :</span>
                                <h5 className="title">À confirmer</h5>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="widgets-section">
                    <div className="row g-4">
                        <div className="col-lg-4 footer-column">
                        <div className="footer-widget links-widget">
                            <h4 className="widget-title">Services</h4>
                            <div className="widget-content">
                            <ul className="user-links">
                                <li><Link to="/page-services">Audit</Link></li>
                                <li><Link to="/page-services">Conseil</Link></li>
                                <li><Link to="/formations">Formation</Link></li>
                                <li><Link to="/formations">Certifications</Link></li>
                                <li><Link to="/nos-cabinets">Nos cabinets</Link></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 footer-column">
                        <div className="footer-widget links-widget">
                            <h4 className="widget-title">Pages</h4>
                            <div className="widget-content">
                            <ul className="user-links">
                                <li><Link to="/actualites">Actualités du groupe</Link></li>
                                <li><Link to="/nos-cabinets">Nos cabinets</Link></li>
                                <li><Link to="/affiliations-partenaires">Nos partenaires</Link></li>
                                <li><Link to="/contacts">Nous contacter</Link></li>
                                <li><Link to="/qui-sommes-nous">À propos</Link></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4 footer-column">
                        <div className="footer-widget links-widget">
                            <h4 className="widget-title">Actualités du groupe</h4>
                            <div className="input-field">
                            <label htmlFor="email" className="sr-only">Adresse e-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Lettre d’information à venir" readOnly
                                autoComplete="email"
                            />
                            <Link className="btn-one-rounded" to="/newsletter">
                                À venir <i className="fa-regular fa-angle-right" />
                            </Link>
                            </div>
                            <ul className="footer-nav">
                            <li><Link to="/contacts"><i className="fa-brands fa-facebook-f"/></Link></li>
                            <li><Link to="/contacts"><i className="fa-solid fa-x"/></Link></li>
                            <li><Link to="/contacts"><i className="fa-brands fa-vimeo-v"/></Link></li>
                            <li><Link to="/contacts"><i className="fa-brands fa-pinterest-p"/></Link></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="footer-bottom">
                    <p className="copyright-text">© 2026. Tous droits réservés par <Link to="/">GROUPE EXPERTO-SYLLAMS</Link></p>
                    </div>
                </div>
                <div className="col-xl-4 right-column order-1 order-xl-2">
                    <div className="inner-column">
                    <h3 className="title">Vous avez un projet ?</h3>
                    <Link className="circle-btn" to="/page-contact">Nous contacter <i className="fa-regular fa-arrow-up-right"/></Link>
                    <div className="mt-10">
                        <h5 className="time">Horaires à confirmer</h5>
                        <h5 className="date">Guinée, Conakry</h5>
                    </div>
                    </div>
                    <div className="shape">
                    <img src={FooterShapeImage} alt="Image"/>
                    </div>
                </div>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;
