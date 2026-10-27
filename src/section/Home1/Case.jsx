import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
    { id: 2, category: "Cabinet du groupe", title: "SYLLAMS EXPERTISE", link: "/nos-cabinets/syllams-expertise" },
    { id: 3, category: "Cabinet du groupe", title: "PANAUDIT", link: "/nos-cabinets/panaudit" },
    { id: 4, img: `${import.meta.env.BASE_URL}images/aces-guinea.png`, category: "Cabinet du groupe", title: "ACES-GUINEA", link: "/nos-cabinets/aces-guinea", logo: true },
    { id: 5, category: "Cabinet du groupe", title: "LIFE-PARTNERS", link: "/nos-cabinets/life-partners" },
    { id: 6, img: `${import.meta.env.BASE_URL}images/noveo.jpeg`, category: "Cabinet du groupe", title: "NOVEO BJ & GN", link: "/nos-cabinets/noveo", logo: true },
];

function Case ({className}){
    return (
        <section className={`case-section have-combine pt-120 pb-120 ${className || ''}`}>
            <div className="outer-box">
                <div className="sec-title center mb-50">
                    <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Nos cabinets</h6>
                    <h2 className="title wow splt-txt" data-splitting>Un groupe de cabinets, des expertises complémentaires <br />Découvrez notre groupe.</h2>
                </div>
                <div className="swiper case-slider">
                    <Swiper {...swiperOptions}>
                        {caseItems.concat(caseItems).map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <div className={`case-block ${item.logo ? "case-block--logo" : "case-block--photo"}`}>
                                <div className="inner-box">
                                    <figure className="image">
                                        {item.logo ? <img src={item.img} alt={`Logo ${item.title}`} /> : <div className="firm-logo-placeholder">Logo à fournir</div>}
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