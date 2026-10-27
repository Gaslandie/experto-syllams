import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import BlogImage1 from '../../assets/images/experto/equipe.webp';
import BlogImage2 from '../../assets/images/experto/collegues.webp';
import BlogImage3 from '../../assets/images/experto/formation.webp';

const blogData = [
  {
    id: 1,
    image: BlogImage1,
    author: 'GROUPE EXPERTO-SYLLAMS',
    comments: 'À venir',
    title: 'Actualités du groupe — à venir',
  },
  {
    id: 2,
    image: BlogImage2,
    author: 'GROUPE EXPERTO-SYLLAMS',
    comments: 'À venir',
    title: 'Découvrez nos cabinets — actualités à venir',
  },
  {
    id: 3,
    image: BlogImage3,
    author: 'GROUPE EXPERTO-SYLLAMS',
    comments: 'À venir',
    title: 'Formation et certifications — programmes à venir',
  },
  {
    id: 4,
    image: BlogImage2,
    author: 'GROUPE EXPERTO-SYLLAMS',
    comments: 'À venir',
    title: 'Découvrez nos cabinets — actualités à venir',
  },
  {
    id: 5,
    image: BlogImage3,
    author: 'GROUPE EXPERTO-SYLLAMS',
    comments: 'À venir',
    title: 'Formation et certifications — programmes à venir',
  },
];

const swiperOptions = {
  modules: [Pagination],
  pagination: {
    el: '.blog-pagination',
    clickable: true,
  },
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  breakpoints: {
    0: { slidesPerView: 1 },
    576: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  },
};

function News ({className}){
  return (
    <>
    <section id="news" className={`blog-section pb-120 ${className || ''}`}>
      <div className="container">
        <div className="sec-title mb-50">
          <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">Actualités</h6>
          <div className="flex-content">
            <h2 className="title wow splt-txt" data-splitting>Nos actualités</h2>
            <Link to="/actualites" className="btn-two wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Actualités à venir</Link>
          </div>
        </div>

        <div className="swiper blog-slider">
          <Swiper {...swiperOptions} className="swiper-wrapper">
            {blogData.map(({ id, image, author, comments, title }) => (
              <SwiperSlide key={id} className="swiper-slide">
                <div className="blog-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image temporary-image-frame">
                        <span className="temporary-image-label">Image temporaire</span>
                        <img src={image} alt="Blog" />
                      </figure>
                    </div>
                    <div className="content-box">
                      <ul className="info">
                        <li><span>{author}</span></li>
                        <li><span>{comments}</span></li>
                      </ul>
                      <h4 className="title">{title}</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-dot text-center blog-pagination mt-40" />
        </div>
      </div>
    </section>
    </>
  );
};

export default News;