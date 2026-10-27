import { Link } from "react-router-dom";
import GrowthImage1 from '../../assets/images/bg/growth-bg.jpg';
import GrowthImage2 from '../../assets/images/shape/growth-shape.png';

const values = [
  { icon: "fa-shield-halved", title: "Rigueur", text: "La rigueur dans l’éthique et la déontologie." },
  { icon: "fa-briefcase", title: "Professionnalisme", text: "Le professionnalisme et la compétence." },
  { icon: "fa-handshake", title: "Satisfaction", text: "La satisfaction de nos clients." },
];

function Growth({ className }) {
  return <section className={`growth-section pt-120 pb-120 ${className || ''}`} style={{ backgroundImage: `url(${GrowthImage1})` }}>
    <span className="temporary-image-label">Image temporaire</span>
    <div className="sec-shape"><img src={GrowthImage2} alt="" className="sway_Y__animation" /></div>
    <div className="container">
      <div className="sec-title pb-50 mb-50">
        <h6 className="sub-title">Nos valeurs</h6>
        <div className="flex-content">
          <h2 className="title text-white">Réunir les expertises <br />Ouvrir de nouvelles perspectives.</h2>
          <Link to="/qui-sommes-nous" className="btn-one-light border-0 rounded-0">En savoir plus</Link>
        </div>
      </div>
      <div className="group-values-grid">
        {values.map(({ icon, title, text }) => <article className="group-value-card" key={title}>
          <div className="group-value-icon" aria-hidden="true"><i className={`fa-solid ${icon}`} /></div>
          <h4>{title}</h4>
          <p>{text}</p>
        </article>)}
      </div>
    </div>
  </section>;
}

export default Growth;
