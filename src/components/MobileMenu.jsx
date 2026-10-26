import { useState } from "react";
import { Link } from "react-router-dom";
import { firms } from "./NavLinks";
export default function MobileMenu() {
 const [open, setOpen] = useState(false);
 const closeMenu = () => document.body.classList.remove("mobile-menu-visible");
 return <ul className="navigation">
  <li><Link to="/" onClick={closeMenu}>Home</Link></li>
  <li><Link to="/qui-sommes-nous" onClick={closeMenu}>About Us</Link></li>
  <li className="dropdown"><Link to="/nos-cabinets" onClick={closeMenu}>Our Firms</Link><button className="dropdown-btn" aria-label="Our firms" aria-expanded={open} onClick={() => setOpen(!open)}><i className="fa fa-angle-down" /></button><ul className="sub-menu" style={{display: open ? "block" : "none"}}>{firms.map(([slug,name]) => <li key={slug}><Link to={`/nos-cabinets/${slug}`} onClick={closeMenu}>{name}</Link></li>)}</ul></li>
  <li><Link to="/formations" onClick={closeMenu}>Training</Link></li>
  <li><Link to="/affiliations-partenaires" onClick={closeMenu}>Partners</Link></li>
  <li><Link to="/contacts" onClick={closeMenu}>Contact</Link></li>
 </ul>;
}
