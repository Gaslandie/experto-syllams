import React from "react";
import { Link } from "react-router-dom";

import AboutImage1 from "../../assets/images/experto/collaboration.webp";
import AboutImage2 from "../../assets/images/about/about-info.png";
import AboutImage3 from "../../assets/images/experto/collegues.webp";

function About() {
  return (
    <section id="about" className="about-section pt-120 pb-120 paralax__animation">
      <div className="container">
        <div className="row g-5">
          {/* Left column: images */}
          <div className="col-lg-6 image-column">
            <div className="inner-column">
              <div className="image1 overlay-anim temporary-image-frame">
                <span className="temporary-image-label">Image temporaire</span>
                <img src={AboutImage1} alt="Discussion en équipe" />
              </div>
              <div className="info animation__arryLeftRight temporary-image-frame">
                <img src={AboutImage2} alt="Illustration" />
              </div>
              <div className="image2 overlay-anim temporary-image-frame">
                <span className="temporary-image-label">Image temporaire</span>
                <img src={AboutImage3} alt="Environnement de travail" />
              </div>
            </div>
          </div>

          {/* Right column: content */}
          <div className="col-lg-6 content-column">
            <div className="inner-column">
              <div className="content-box">
                <div className="sec-title">
                  <h6 className="sub-title">QUI SOMMES-NOUS</h6>
                  <h2 className="title">Un groupe de cabinets, une vision commune pour vos projets</h2>
                  <p className="text group-firms">
                    Le GROUPE EXPERTO-SYLLAMS réunit <strong>PANAUDEX</strong>, <strong>SYLLAMS EXPERTISE</strong>, <strong>PANAUDIT</strong>, <strong>ACES-GUINEA</strong>, <strong>LIFE-PARTNERS</strong> et <strong>NOVEO BJ &amp; GN</strong>.
                  </p>
                </div>

                <div className="about-expertise-list">
                  <div className="about-block">
                    <div className="inner-box">
                      <div className="icon" aria-hidden="true"><i className="fa-solid fa-clipboard-check" /></div>
                      <div className="content">
                        <h4 className="title">Audit et conseil</h4>
                        <p className="text">Découvrez les activités d’audit et de conseil du groupe. Le détail des services sera confirmé par chaque cabinet.</p>
                      </div>
                    </div>
                  </div>
                  <div className="about-block">
                    <div className="inner-box">
                      <div className="icon" aria-hidden="true"><i className="fa-solid fa-graduation-cap" /></div>
                      <div className="content">
                        <h4 className="title">Formation et certifications</h4>
                        <p className="text">Découvrez notre futur catalogue de formations et de certifications. Les programmes, dates et modalités d’inscription sont en préparation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer info */}
              <div className="info mt-50">
                <Link to="/nos-cabinets" className="btn-two">
                  Nos cabinets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
