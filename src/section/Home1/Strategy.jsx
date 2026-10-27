import React, { useState } from "react";
import StrategyImage1 from '../../assets/images/shape/stategy-globe.png';
import StrategyImage2 from '../../assets/images/experto/analyse.webp';
import StrategyImage3 from '../../assets/images/strategy/strategy-info.png';

const accordionData = [
    {
    title: "Audit et conseil",
    content: "Découvrez les activités du groupe. Le détail des services sera confirmé par les cabinets.",
  },
  {
    title: "Nos six cabinets",
    content: "PANAUDEX, LIFE-PARTNERS, Syllams Expertise, NOVEO, FIDEXIE et AFRIC CONSEIL.",
  },
  {
    title: "Formation et certifications",
    content: "Le catalogue est en préparation. Les programmes, dates et tarifs seront confirmés avant l’ouverture des inscriptions.",
  },
  {
    title: "Affiliations et partenaires",
    content: "Les affiliations et logos des partenaires seront ajoutés après confirmation par le groupe.",
  },
];


function Strategy (){

    const [activeIndex, setActiveIndex] = useState(0);
    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    return (
        <section className="strategy-section">
            <div className="sec-shape">
                <img className="animation__rotateAndScale" src={StrategyImage1} alt="Rotating Shape" />
            </div>
            <div className="row g-5">
                <div className="col-xl-6 image-column">
                    <div className="inner-column">
                        <figure className="image tm-gsap-img-parallax temporary-image-frame">
                            <span className="temporary-image-label">Image temporaire</span>
                            <img src={StrategyImage2} alt="Illustration de nos activités" />
                            <div className="info"><img src={StrategyImage3} alt="Info Overlay" /></div>
                        </figure>
                    </div>
                </div>
                <div className="col-xl-6 content-column">
                    <div className="inner-column">
                        <div className="sec-title mb-30">
                        <h6 className="sub-title wow fadeInUp">Des expertises complémentaires</h6>
                        <h2 className="title wow splt-txt">
                            Un espace commun pour nos cabinets, nos expertises et nos programmes.
                        </h2>
                        </div>

                        <div className="accordion-area">
                        <div className="accordion">
                            {accordionData.map((item, index) => (
                            <div className="accordion-item" key={index}>
                                <h2 className="accordion-header">
                                <button
                                    className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    {item.title}
                                </button>
                                </h2>
                                <div className={`accordion-collapse ${activeIndex === index ? "show" : "collapse"}`}>
                                <div className="accordion-body">
                                    <p className="text">{item.content}</p>
                                </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default Strategy;