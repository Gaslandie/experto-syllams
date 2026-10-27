import { Link } from "react-router-dom";

export const firms = [
  ["panaudex", "PANAUDEX"],
  ["syllams-expertise", "SYLLAMS EXPERTISE"],
  ["panaudit", "PANAUDIT"],
  ["aces-guinea", "ACES-GUINEA"],
  ["life-partners", "LIFE-PARTNERS"],
  ["noveo", "NOVEO BJ & GN"],
];

export default function Navigation() {
 return <ul className="navigation">
  <li><Link to="/">Accueil</Link></li>
  <li><Link to="/qui-sommes-nous">Qui sommes-nous</Link></li>
  <li className="dropdown"><Link to="/nos-cabinets">Nos cabinets</Link><div className="dropdown-btn"><i className="fa fa-angle-down" /></div><ul>{firms.map(([slug, name]) => <li key={slug}><Link to={`/nos-cabinets/${slug}`}>{name}</Link></li>)}</ul></li>
  <li className="dropdown"><Link to="/nos-services">Nos services</Link><div className="dropdown-btn"><i className="fa fa-angle-down" /></div><ul><li><Link to="/audits-expertise">Audits & expertise</Link></li><li><Link to="/formations">Formations</Link></li></ul></li>
  <li><Link to="/affiliations-partenaires">Affiliations & partenaires</Link></li>
  <li className="dropdown"><Link to="/references">Ils nous font confiance</Link><div className="dropdown-btn"><i className="fa fa-angle-down" /></div><ul><li><Link to="/references/nationales">Nationales</Link></li><li><Link to="/references/internationales">Internationales</Link></li></ul></li>
 </ul>;
}
