import { useState } from "react";
import { Link } from "react-router-dom";
import { firms } from "./NavLinks";
export default function MobileMenu() {
 const [open, setOpen] = useState(false);
 const [referencesOpen, setReferencesOpen] = useState(false);
 const closeMenu = () => document.body.classList.remove("mobile-menu-visible");
 return <ul className="navigation">
  <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
  <li><Link to="/qui-sommes-nous" onClick={closeMenu}>Qui sommes-nous</Link></li>
  <li className="dropdown"><Link to="/nos-cabinets" onClick={closeMenu}>Nos cabinets</Link><button type="button" className="dropdown-btn" aria-label={open ? "Fermer la liste des cabinets" : "Ouvrir la liste des cabinets"} aria-expanded={open} onClick={() => setOpen(!open)}><i className="fa fa-angle-down" /></button><ul className="sub-menu" style={{display: open ? "block" : "none"}}>{firms.map(([slug,name]) => <li key={slug}><Link to={`/nos-cabinets/${slug}`} onClick={closeMenu}>{name}</Link></li>)}</ul></li>
  <li><Link to="/nos-services" onClick={closeMenu}>Nos services</Link></li>
  <li><Link to="/audits-expertise" onClick={closeMenu}>Audits & expertise</Link></li>
  <li><Link to="/formations" onClick={closeMenu}>Formations</Link></li>
  <li><Link to="/affiliations-partenaires" onClick={closeMenu}>Affiliations & partenaires</Link></li>
  <li className="dropdown"><Link to="/references" onClick={closeMenu}>Ils nous font confiance</Link><button type="button" className="dropdown-btn" aria-label={referencesOpen ? "Fermer les références" : "Ouvrir les références"} aria-expanded={referencesOpen} onClick={() => setReferencesOpen(!referencesOpen)}><i className="fa fa-angle-down" /></button><ul className="sub-menu" style={{ display: referencesOpen ? "block" : "none" }}><li><Link to="/references/nationales" onClick={closeMenu}>Nationales</Link></li><li><Link to="/references/internationales" onClick={closeMenu}>Internationales</Link></li></ul></li>
  <li><Link to="/contacts" onClick={closeMenu}>Nous contacter</Link></li>
 </ul>;
}
