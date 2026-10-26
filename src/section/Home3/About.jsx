import React from 'react'
import { Link } from 'react-router-dom';
import CounterUp from '../../lib/CounterUp';
import AboutImage1 from '../../assets/images/about/about-three-info.png';
import AboutImage2 from '../../assets/images/about/about-three-image.jpg';
import AboutImage3 from '../../assets/images/about/about-two-line.png';
import AboutUserImg1 from '../../assets/images/about/about-two-user1.png';
import AboutUserImg2 from '../../assets/images/about/about-two-user2.png';
import AboutUserImg3 from '../../assets/images/about/about-two-user3.png';
import AboutUserImg4 from '../../assets/images/about/about-two-user4.png';

function About() {
    return (
        <>
        <section id="about" className="about-section-three pt-120 pb-120">
            <div className="container">
                <div className="row g-5 g-xxl-0">
                <div className="col-xl-6 image-column">
                    <div className="inner-column">
                    <div className="shape">
                        <img className="animation__rotate" src={AboutImage1} alt="Image"/>
                    </div>
                    <figure className="image">
                        <img src={AboutImage2} alt="Image"/>
                    </figure>
                    <p className="text mt-30 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Consumers today increasingly rely on digital channels to research products. We analyze brands and their offerings, engaging with them accordingly. Meanwhile, 51% of consumers..</p>
                    <div className="info mt-50 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                        <Link className="btn-one-rounded" to="/page-about">more about <i className="fa-regular fa-arrow-up-right"></i></Link>
                        <div className="user">
                        <ul>
                            <li><img src={AboutUserImg1} alt="Image"/></li>
                            <li><img src={AboutUserImg2} alt="Image"/></li>
                            <li><img src={AboutUserImg3} alt="Image"/></li>
                            <li><img src={AboutUserImg4} alt="Image"/></li>
                        </ul>
                        <h6 className="title">10M+ Impact Across the World. <img src={AboutImage3} alt="Image"/></h6>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-xl-6 content-column">
                    <div className="inner-column">
                    <div className="sec-title">
                        <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">ABOUT US</h6>
                        <h2 className="title wow splt-txt" data-splitting>We provide brilliant idea to grow the <span className="font-weight-300">consulting</span> <span className="font-weight-300">agency</span> your sharp brand</h2>
                    </div>
                    <div className="about-block-three mt-50">
                        <div className="row g-0">
                        <div className="col-sm-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="content-box">
                            <div className="count-box"><span className="count-text"><CounterUp end={15} /></span>+</div>
                            <p className="text">Experience Team Help you</p>
                            </div>
                        </div>
                        <div className="col-sm-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="content-box margin-minus">
                            <div className="count-box"><span className="count-text"><CounterUp end={18} /></span>M</div>
                            <p className="text">We helped to get companies</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default About
