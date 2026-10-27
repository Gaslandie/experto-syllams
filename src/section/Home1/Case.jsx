import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CaseImage1 from '../../assets/images/experto/analyse.webp';
import CaseImage2 from '../../assets/images/experto/collegues.webp';
import CaseImage3 from '../../assets/images/experto/collaboration.webp';
import CaseImage4 from '../../assets/images/experto/equipe.webp';

// Swiper settings
const swiperOptions = {
    modules: [Autoplay],
    loop: true,
    spaceBetween: 35,
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        767: { slidesPerView: 2 },
        1199: { slidesPerView: 3 },
        1399: { slidesPerView: 4 },
    },
};

// Case study data
const caseItems = [
    { id: 1, img: `${import.meta.env.BASE_URL}images/panaudex.jpeg`, category: "Cabinet du groupe", title: "PANAUDEX", link: "/nos-cabinets/panaudex", logo: true },
    { id: 2, img: CaseImage2, category: "Cabinet du groupe", title: "LIFE-PARTNERS", link: "/nos-cabinets/life-partners" },
    { id: 3, img: CaseImage3, category: "Cabinet du groupe", title: "Syllams Expertise", link: "/nos-cabinets/syllams-expertise" },
    { id: 4, img: `${import.meta.env.BASE_URL}images/noveo.jpeg`, category: "Lien du site à confirmer", title: "NOVEO", link: "/nos-cabinets/noveo", logo: true },
    { id: 5, img: CaseImage1, category: "Lien du site à confirmer", title: "FIDEXIE", link: "/nos-cabinets/fidexie" },
    { id: 6, img: CaseImage4, category: "Lien du site à confirmer", title: "AFRIC CONSEIL", link: "/nos-cabinets/afric-conseil" },
];

function Case ({className}){
    return (
        <section className={`case-section have-combine pt-120 pb-120 ${className || ''}`}>
            <div className="outer-box">
                <div className="sec-title center mb-50">
                    <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Nos cabinets</h6>
                    <h2 className="title wow splt-txt" data-splitting>Six cabinets, des expertises complémentaires <br />Découvrez notre groupe.</h2>
                </div>
                <div className="swiper case-slider">
                    <Swiper {...swiperOptions}>
                        {caseItems.concat(caseItems).map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <div className={`case-block ${item.logo ? "case-block--logo" : "case-block--photo"}`}>
                                <div className="inner-box">
                                    <figure className="image">
                                        <img src={item.img} alt={item.logo ? `Logo ${item.title}` : `${item.title} — illustration provisoire`} />
                                    </figure>
                                    <div className="content-box">
                                        <span className="sub-title">{item.category}</span>
                                        <h4 className="title">
                                            <Link to={item.link}>{item.title}</Link>
                                        </h4>
                                    </div>
                                    <Link to={item.link} className="arry-btn">
                                        <i className="fa-regular fa-arrow-up-right" />
                                    </Link>
                                    <div className="hover-content">
                                        <span className="sub-title">{item.category}</span>
                                        <h4 className="title"><Link to={item.link}>{item.title}</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};
export default Case;