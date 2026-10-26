import { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import Home1 from "./pages/index";
import Layout from "./layouts/Layout";
import PageTitle from "./section/PageTitle";

function Construction() {
  return <div className="page-wrapper"><Layout><PageTitle pageName="En construction" /><section className="pt-120 pb-120"><div className="container text-center"><h2>En construction</h2><p className="mt-20 mb-30">Cette page est en préparation. Découvrez le GROUPE EXPERTO-SYLLAMS sur notre page d’accueil.</p><Link className="btn-two" to="/">Retour à l’accueil</Link></div></section></Layout></div>;
}
function SiteRoutes() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = `${pathname === "/" ? "Accueil" : "En construction"} | GROUPE EXPERTO-SYLLAMS`;
    document.body.classList.remove("mobile-menu-visible");
    window.scrollTo(0, 0);
  }, [pathname]);
  return <Routes><Route path="/" element={<Home1 />} /><Route path="*" element={<Construction />} /></Routes>;
}
export default function App() { return <BrowserRouter basename={import.meta.env.BASE_URL}><SiteRoutes /></BrowserRouter>; }
