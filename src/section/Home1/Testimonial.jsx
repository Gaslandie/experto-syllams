import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import testimonialsShapeImg from '../../assets/images/shape/testimonial-shape.png';

const swiperOptions = {
  modules: [Autoplay, Navigation],
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: '.testimonial-next',
    prevEl: '.testimonial-prev',
  },
  spaceBetween: 30,
  speed: 1000,
};

const testimonials = [
  {
    id: 1,
    name: 'Avis clients',
    role: 'À venir',
    text: `Cet espace présentera les avis des clients après leur collecte et leur validation. Le contenu affiché est provisoire.`,
  },
  {
    id: 2,
    name: 'Avis clients',
    role: 'À venir',
    text: `Cet espace présentera les avis des clients après leur collecte et leur validation. Le contenu affiché est provisoire.`,
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial-section">
      <div className="outer-box">
        <figure className="shape">
          <img src={testimonialsShapeImg} alt="Shape" />
        </figure>
        <div className="testimonial-slider">
          <Swiper {...swiperOptions} className="swiper-wrapper">
            {testimonials.map(({ id, name, role, text }) => (
              <SwiperSlide key={id}>
                <div className="testimonial-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="quate">
                        <svg width="33" height="26" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M29.1965 2.87439C30.9987 4.85084 32.0801 7.00696 32.0801 10.6005C32.0801 16.8892 27.5745 22.4592 21.2666 25.334L19.6446 22.9982C25.592 19.764 26.8536 15.6314 27.214 12.9363C26.3129 13.4753 25.0513 13.655 23.7897 13.4753C20.5457 13.116 18.0225 10.6005 18.0225 7.18663C18.0225 5.56954 18.7434 3.95245 19.8248 2.69472C21.0864 1.43698 22.5282 0.897949 24.3304 0.897949C26.3129 0.897949 28.1151 1.79633 29.1965 2.87439ZM11.174 2.87439C12.9763 4.85084 14.0576 7.00696 14.0576 10.6005C14.0576 16.8892 9.55198 22.4592 3.24412 25.334L1.6221 22.9982C7.56951 19.764 8.83109 15.6314 9.19153 12.9363C8.29041 13.4753 7.02884 13.655 5.76727 13.4753C2.52322 13.116 7.62939e-05 10.6005 7.62939e-05 7.18663C7.62939e-05 5.56954 0.720974 3.95245 1.80232 2.69472C2.88367 1.43698 4.50569 0.897949 6.30794 0.897949C8.29041 0.897949 10.0927 1.79633 11.174 2.87439Z"
                            fill="#163839"
                          />
                        </svg>
                      </div>
                      <div className="testimonial-placeholder">
                        <i className="fa-regular fa-user" aria-hidden="true" />
                        <span>Photo à venir</span>
                      </div>
                      <div className="star" aria-label="Décoration : aucune note client publiée">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star" />
                        ))}
                      </div>
                    </div>
                    <div className="content-box">
                      <h3 className="text">{text}</h3>
                      <h4 className="title">
                        {name} / <span>{role}</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-arry">
            <button className="testimonial-prev" aria-label="Avis précédent">
              <i className="fa-solid fa-arrow-left" />
            </button>
            <button className="testimonial-next" aria-label="Avis suivant">
              <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
