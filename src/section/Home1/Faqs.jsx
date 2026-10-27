import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FaqsImage1 from '../../assets/images/experto/formation.webp';
import FaqsImage2 from '../../assets/images/shape/faq-map.png';

const accordionData = [
  {
    title: "Quels cabinets composent le groupe ?",
    content: "Le groupe réunit PANAUDEX, SYLLAMS EXPERTISE, PANAUDIT, ACES-GUINEA, LIFE-PARTNERS et NOVEO BJ & GN.",
  },
  {
    title: "Quels sont les domaines d’activité du groupe ?",
    content: "Le groupe présente ses activités d’audit, de conseil et de formation. Le détail des services sera confirmé par chaque cabinet.",
  },
  {
    title: "Quand ouvriront les inscriptions aux formations ?",
    content: "Les inscriptions ouvriront après confirmation des programmes, des dates et des modalités pratiques.",
  },
  {
    title: "Où trouver les sites des cabinets ?",
    content: "Les liens vers les sites des cabinets seront ajoutés après confirmation de leurs adresses.",
  },
  {
    title: "Comment contacter le groupe ?",
    content: "La page de contact est en préparation. Appelez le +224 628 21 69 75 ou écrivez à manager@experto-syllams.com. Le groupe est situé en Guinée, à Conakry.",
  },
];

function AccordionItem({ title, content, isActive, onClick }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${isActive ? "" : "collapsed"}`}
          onClick={onClick}
          aria-expanded={isActive}
        >
          {title}
        </button>
      </h2>
      <div className={`accordion-collapse ${isActive ? "show" : "collapse"}`}>
        <div className="accordion-body">
          <p className="text">{content}</p>
        </div>
      </div>
    </div>
  );
}

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="row g-0">
        <div className="col-xl-4 d-none d-xl-block image-column">
          <div className="inner-column">
            <figure className="image temporary-image-frame">
              <span className="temporary-image-label">Image temporaire</span>
              <img className="wow" src={FaqsImage1} alt="FAQ Visual" loading="lazy" />
            </figure>
          </div>
        </div>
        <div className="col-xl-8 content-column">
          <div className="inner-column">
            <div className="map-shape">
              <img src={FaqsImage2} alt="Illustration" loading="lazy" />
            </div>
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <div className="sec-title">
                  <h6 className="sub-title wow fadeInUp">FAQ’S</h6>
                  <h2 className="title text-white wow splt-txt">Questions fréquentes</h2>
                  <p className="text text-white wow fadeInUp">
                    Découvrez le GROUPE EXPERTO-SYLLAMS, ses cabinets et ses futurs programmes de formation.
                  </p>
                  <Link className="btn-one-light border-0 wow fadeInUp rounded-0 mt-50" to="/page-contact">
                    Nous contacter
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="faq-accordion">
                  <div className="accordion" role="tablist">
                    {accordionData.map((item, index) => (
                      <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isActive={activeIndex === index}
                        onClick={() => toggleAccordion(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;