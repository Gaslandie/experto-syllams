import { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import Home1 from "./pages/index";
import Layout from "./layouts/Layout";
import PageTitle from "./section/PageTitle";

function Construction() {
  return <div className="page-wrapper"><Layout><PageTitle pageName="Under construction" /><section className="pt-120 pb-120"><div className="container text-center"><h2>En construction / Under construction</h2><p className="mt-20 mb-30">This page is being prepared. Discover GROUPE EXPERTO-SYLLAMS on our home page.</p><Link className="btn-two" to="/">Back to Home</Link></div></section></Layout></div>;
}
function SiteRoutes() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = `${pathname === "/" ? "Home" : "Under construction"} | GROUPE EXPERTO-SYLLAMS`;
    document.body.classList.remove("mobile-menu-visible");
    window.scrollTo(0, 0);
  }, [pathname]);
  return <Routes><Route path="/" element={<Home1 />} /><Route path="*" element={<Construction />} /></Routes>;
}
export default function App() { return <BrowserRouter><SiteRoutes /></BrowserRouter>; }
