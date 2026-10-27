import { Link } from "react-router-dom";

export const firms = [
  ["aces-guinea", "ACES-GUINEA"],
  ["life-partners", "LIFE-PARTNERS"],
  ["panaudex", "PANAUDEX"],
  ["noveo", "NOVEO BJ & GN"],
  ["syllams-expertise", "SYLLAMS EXPERTISE"],
  ["panaudit", "PANAUDIT"],
];

export const navigation = [
  { title: "Accueil", to: "/" },
  { title: "Qui sommes-nous", to: "/qui-sommes-nous" },
  { title: "Nos services", to: "/nos-services", children: [
    { title: "Formations", to: "/formations" },
    { title: "Audits & expertise", to: "/audits-expertise" },
  ] },
  { title: "Nos cabinets", to: "/nos-cabinets", children: firms.map(([slug, title]) => ({ title, to: `/nos-cabinets/${slug}` })) },
  { title: "Affiliations & partenaires", to: "/affiliations-partenaires", children: [
    { title: "Ils nous font confiance", to: "/references", children: [
      { title: "Nationales", to: "/references/nationales" },
      { title: "Internationales", to: "/references/internationales" },
    ] },
  ] },
];

function MenuItems({ items }) {
  return items.map(({ title, to, children }) => <li key={to} className={children ? "dropdown" : undefined}>
    <Link to={to}>{title}</Link>
    {children && <><div className="dropdown-btn" aria-hidden="true"><i className="fa fa-angle-down" /></div><ul><MenuItems items={children} /></ul></>}
  </li>);
}
export default function Navigation() {
  return <ul className="navigation"><MenuItems items={navigation} /></ul>;
}
