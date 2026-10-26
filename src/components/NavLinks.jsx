import { Link } from "react-router-dom";
export const firms = [["panaudex", "PANAUDEX"], ["life-partners", "LIFE-PARTNERS"], ["syllams-expertise", "Syllams Expertise"], ["noveo", "NOVEO"], ["fidexie", "FIDEXIE"], ["afric-conseil", "AFRIC CONSEIL"]];
export default function Navigation() {
 return <ul className="navigation">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/qui-sommes-nous">About Us</Link></li>
  <li className="dropdown"><Link to="/nos-cabinets">Our Firms</Link><div className="dropdown-btn"><i className="fa fa-angle-down" /></div><ul>{firms.map(([slug, name]) => <li key={slug}><Link to={`/nos-cabinets/${slug}`}>{name}</Link></li>)}</ul></li>
  <li><Link to="/formations">Training</Link></li>
  <li><Link to="/affiliations-partenaires">Partners</Link></li>
  <li><Link to="/contacts">Contact</Link></li>
 </ul>;
}
