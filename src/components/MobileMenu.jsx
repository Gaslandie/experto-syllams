import { useState } from "react";
import { Link } from "react-router-dom";
import { navigation } from "./NavLinks";

function MobileItem({ item, closeMenu }) {
  const [open, setOpen] = useState(false);
  return <li className={item.children ? "dropdown" : undefined}>
    {item.external ? <a href={item.to} onClick={closeMenu}>{item.title}</a> : <Link to={item.to} onClick={closeMenu}>{item.title}</Link>}
    {item.children && <><button type="button" className="dropdown-btn" aria-label={`${open ? "Fermer" : "Ouvrir"} : ${item.title}`} aria-expanded={open} onClick={() => setOpen(!open)}><i className="fa fa-angle-down" aria-hidden="true" /></button>
      <ul className="sub-menu" style={{ display: open ? "block" : "none" }}>{item.children.map(child => <MobileItem key={child.to} item={child} closeMenu={closeMenu} />)}</ul></>}
  </li>;
}
export default function MobileMenu() {
  const closeMenu = () => document.body.classList.remove("mobile-menu-visible");
  return <ul className="navigation">
    {navigation.map(item => <MobileItem key={item.to} item={item} closeMenu={closeMenu} />)}
  </ul>;
}
