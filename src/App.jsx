import { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import Home1 from "./pages/index";
import Layout from "./layouts/Layout";
import PageTitle from "./section/PageTitle";
import { AboutPage, FirmsPage, ServicesPage, ContactPage, ReferencesPage } from "./section/client/ClientPages";

function Construction() {
  return <div className="page-wrapper"><Layout><PageTitle pageName="En construction" /><section className="pt-120 pb-120"><div className="container text-center"><h2>En construction</h2><p className="mt-20 mb-30">Cette page est en préparation. Découvrez le GROUPE EXPERTO-SYLLAMS sur notre page d’accueil.</p><Link className="btn-two" to="/">Retour à l’accueil</Link></div></section></Layout></div>;
}
function SiteRoutes() {
  const { pathname } = useLocation();
  useEffect(() => {
    const titles = { "/": "Accueil", "/qui-sommes-nous": "Qui sommes-nous", "/page-about": "Qui sommes-nous", "/nos-cabinets": "Nos cabinets", "/nos-services": "Nos services", "/page-services": "Nos services", "/contacts": "Contact", "/page-contact": "Contact", "/references": "Nos références", "/references/nationales": "Références nationales", "/references/internationales": "Références internationales" };
    document.title = `${titles[pathname] || "En construction"} | GROUPE EXPERTO-SYLLAMS`;
    document.body.classList.remove("mobile-menu-visible");
    window.scrollTo(0, 0);
  }, [pathname]);
  return <Routes><Route path="/" element={<Home1 />} /><Route path="/qui-sommes-nous" element={<AboutPage />} /><Route path="/page-about" element={<AboutPage />} /><Route path="/nos-cabinets" element={<FirmsPage />} /><Route path="/nos-services" element={<ServicesPage />} /><Route path="/page-services" element={<ServicesPage />} /><Route path="/contacts" element={<ContactPage />} /><Route path="/page-contact" element={<ContactPage />} /><Route path="/references" element={<ReferencesPage />} /><Route path="/references/nationales" element={<ReferencesPage category="nationales" />} /><Route path="/references/internationales" element={<ReferencesPage category="internationales" />} /><Route path="*" element={<Construction />} /></Routes>;
}
export default function App() { return <BrowserRouter basename={import.meta.env.BASE_URL}><SiteRoutes /></BrowserRouter>; }
