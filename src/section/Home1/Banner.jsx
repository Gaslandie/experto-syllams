import React, { useState } from "react";
import PropTypes from "prop-types";
import DOMPurify from 'dompurify';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import BannerImage1 from '../../assets/images/experto/equipe.webp';
import BannerImage2 from '../../assets/images/experto/collegues.webp';
import BannerImage3 from '../../assets/images/experto/formation.webp';
import BannerShapeImage from '../../assets/images/shape/banner-arry.png';
import BannerShapeImage2 from '../../assets/images/shape/banner-shape.png';

const slides = [
  {
    Image: BannerImage1,
    subtitle: "GROUPE EXPERTO-SYLLAMS",
    title: "Un groupe de cabinets, <span>une même ambition</span> pour vos projets",
    buttonText: "Découvrir nos cabinets",
    link: "/nos-cabinets",
    text: "Des expertises complémentaires réunies au sein d’un même groupe.",
  },
  {
    Image: BannerImage2,
    subtitle: "AUDIT ET CONSEIL",
    title: "Une expertise <span>à vos côtés</span> pour avancer",
    buttonText: "Nos activités",
    link: "/nos-services",
    text: "Découvrez les activités d’audit et de conseil des cabinets du groupe.",
  },
  {
    Image: BannerImage3,
    subtitle: "FORMATION ET CERTIFICATIONS",
    title: "Développons <span>vos compétences</span> ensemble",
    buttonText: "Découvrir les formations",
    link: "/formations",
    text: "Les programmes et les modalités de formation sont en cours de préparation.",
  },
];

const swiperOptions = {
  modules: [Autoplay, EffectFade],
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  loop: true,
  effect: "fade",
  fadeEffect: { crossFade: true },
  speed: 3000,
};

function BannerSlide({ slide, isActive }) {
  return (
    <div className={`slide-bg ${isActive ? 'active' : ''}`} style={{ "--hero-image": `url(${slide.Image})` }}>
      <span className="temporary-image-label">Image temporaire</span>
      <div className="container">
        <div className="outer-box">
          <div className="row g-0 align-items-end">
            <div className="col-lg-8 content-column">
              <div className="inner-column">
                <h6 className="sub-title animated fadeInUp" style={{ animationDelay: ".3s" }}>
                  {slide.subtitle}
                </h6>
                <h1
                  className="title animated fadeInUp"
                  style={{ animationDelay: ".5s" }}
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(slide.title) }}
                />
                <Link className="btn-one animated fadeInUp" style={{ animationDelay: ".8s" }} to={slide.link}>
                  {slide.buttonText}
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <p className="text animated fadeInUp" style={{ animationDelay: ".9s" }}>
                {slide.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

BannerSlide.propTypes = {
  slide: PropTypes.object.isRequired,
  isActive: PropTypes.bool,
};

function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="home" className="banner-section">
      <div className="arry">
        <img className="animation__arryLeftRight" src={BannerShapeImage} alt="Shape" />
      </div>
      <div className="sec-shape">
        <img src={BannerShapeImage2} alt="Shape" />
      </div>
      <div className="swiper banner-slider">
        <Swiper
          {...swiperOptions}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <BannerSlide slide={slide} isActive={index === activeIndex} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Banner;