import React from "react";
import { Link } from "react-router-dom";
import ProcessImage1 from '../../assets/images/shape/dual-circle.png';

const processingSteps = [
  {
    number: "01",
    title: "Découvrir le groupe",
    text: "Découvrez le groupe et ses domaines d’activité.",
    delay: "00ms",
  },
  {
    number: "02",
    title: "Découvrir nos cabinets",
    text: "Découvrez les cabinets qui composent notre groupe.",
    delay: "200ms",
  },
  {
    number: "03",
    title: "Développer vos compétences",
    text: "Découvrez les futurs programmes de formation et de certification.",
    delay: "400ms",
  },
  {
    number: "04",
    title: "Nous contacter",
    text: "Appelez le +224 628 21 69 75 ou écrivez à manager@experto-syllams.com.",
    delay: "600ms",
  },
];

const Processing = () => {
  return (
    <section className="processing-section pt-120 pb-120">
      <div className="shape"><img src={ProcessImage1} alt="Decorative rotating dual circle" className="animation__rotate" /></div>
      <div className="container">
        <div className="sec-title center mb-50">
          <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Votre parcours</h6>
          <h2 className="title wow splt-txt" data-splitting>Découvrez, échangez et construisez <br /> vos projets avec nous.</h2>
        </div>
        <div className="outer-box">
          <div className="row g-0">
            {processingSteps.map((item, index) => (
              <div className="col-sm-6 col-xl-3 wow fadeInUp" key={index} data-wow-delay={item.delay} data-wow-duration="1500ms">
                <div className="processing-block">
                  <div className={`inner-box ${index === 3 ? "last-block" : ""}`}>
                    <h3 className="number">{item.number}</h3>
                    <h4 className="title">{item.title}</h4>
                    <p className="text">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h5 className="sec-text mt-50 wow fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
          Découvrez notre groupe, nos cabinets et nos futurs programmes.
          <Link to="/page-contact">Nous contacter</Link>
        </h5>
      </div>
    </section>
  );
};

export default Processing;
