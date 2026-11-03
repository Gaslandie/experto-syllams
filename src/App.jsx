import { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import Home1 from "./pages/index";
import ClientTrustPage from "./section/client/ClientTrustPage";
import Layout from "./layouts/Layout";
import { AboutPage, ContactPage } from "./section/client/ClientPages";

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
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    document.title = `${pathname === "/" ? "Accueil" : pathname === "/qui-sommes-nous" ? "Qui sommes-nous ?" : pathname === "/references" ? "Nous font confiance" : pathname === "/contacts" ? "Contacts" : "En construction"} | GROUPE EXPERTO-SYLLAMS`;
    document.body.classList.remove("mobile-menu-visible");
    let targetId = "";
    try {
      targetId = decodeURIComponent(hash.slice(1));
    } catch {
      // Ignore malformed URL fragments and keep normal page navigation.
    }
    const target = targetId ? document.getElementById(targetId) : null;
    if (target) {
      target.scrollIntoView({ behavior: "instant", block: "start" });
      target.focus({ preventScroll: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash, key]);
  return <Routes>
    <Route path="/" element={<Home1 />} />
    <Route path="/qui-sommes-nous" element={<AboutPage />} />
    <Route path="/references" element={<ClientTrustPage />} />
    <Route path="/contacts" element={<ContactPage />} />
    <Route path="*" element={<Construction />} />
  </Routes>;
}
export default function App() { return <BrowserRouter basename={import.meta.env.BASE_URL}><SiteRoutes /></BrowserRouter>; }
