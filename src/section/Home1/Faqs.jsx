import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FaqsImage1 from '../../assets/images/faq/faq-image1.jpg';
import FaqsImage2 from '../../assets/images/shape/faq-map.png';

const accordionData = [
  {
    title: "Which Firms Make Up the Group?",
    content: "The group brings together PANAUDEX, LIFE-PARTNERS, Syllams Expertise, NOVEO, FIDEXIE and AFRIC CONSEIL.",
  },
  {
    title: "What Are the Group’s Areas of Activity?",
    content: "The group presents its audit, consulting and training activities. Detailed services will be confirmed by each firm.",
  },
  {
    title: "When Will Training Registration Open?",
    content: "Registration will open once the programmes, dates and practical details have been confirmed.",
  },
  {
    title: "Where Can I Find the Firm Websites?",
    content: "NOVEO, FIDEXIE and AFRIC CONSEIL will link to their existing websites once the addresses have been confirmed.",
  },
  {
    title: "How Can I Contact the Group?",
    content: "The contact page is being prepared. The group’s address, telephone number and email will be added after confirmation.",
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
            <figure className="image">
              <img className="wow" src={FaqsImage1} alt="FAQ Visual" loading="lazy" />
            </figure>
          </div>
        </div>
        <div className="col-xl-8 content-column">
          <div className="inner-column">
            <div className="map-shape">
              <img src={FaqsImage2} alt="Map Shape" loading="lazy" />
            </div>
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <div className="sec-title">
                  <h6 className="sub-title wow fadeInUp">FAQ’S</h6>
                  <h2 className="title text-white wow splt-txt">Frequently Asked Questions</h2>
                  <p className="text text-white wow fadeInUp">
                    Find your way around GROUPE EXPERTO-SYLLAMS, its firms and its upcoming training programmes.
                  </p>
                  <Link className="btn-one-light border-0 wow fadeInUp rounded-0 mt-50" to="/page-contact">
                    Get a quote
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