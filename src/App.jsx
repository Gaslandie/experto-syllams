import { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import Home1 from "./pages/index";
import Layout from "./layouts/Layout";

function Construction() {
  return <div className="page-wrapper"><Layout hideFooter>
    <main className="pt-120 pb-120"><div className="container text-center">
      <h1>En construction</h1>
      <p className="mt-20 mb-30">Cette page est en préparation.</p>
      <Link className="btn-two" to="/">Retour à l’accueil</Link>
    </div></main>
  </Layout></div>;
}
function SiteRoutes() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = `${pathname === "/" ? "Accueil" : "En construction"} | GROUPE EXPERTO-SYLLAMS`;
    document.body.classList.remove("mobile-menu-visible");
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return <Routes>
    <Route path="/" element={<Home1 />} />
    <Route path="*" element={<Construction />} />
  </Routes>;
}
export default function App() { return <BrowserRouter basename={import.meta.env.BASE_URL}><SiteRoutes /></BrowserRouter>; }
