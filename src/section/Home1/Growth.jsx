import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GrowthImage1 from '../../assets/images/bg/growth-bg.jpg';
import GrowthImage2 from '../../assets/images/shape/growth-shape.png';

const growthData = [
  {
    value: 6,
    title: "Cabinets du groupe",
    text: "Des cabinets réunis au sein d’un groupe.",
    delay: "00ms",
  },
  {
    value: 3,
    title: "Domaines d’activité",
    text: "Audit, conseil et formation.",
    delay: "200ms",
  },
];

const GrowthItem = ({ value, title, text, delay }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const animateCount = () => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 20);

    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);
  };

  return (
    <div
      className="col-md-6 col-xl-4 wow fadeInLeft"
      data-wow-delay={delay}
      data-wow-duration="1500ms"
      ref={ref}
    >
      <div className="growth-block">
        <div className="pie-graph">
          <div
            className="graph-outer"
            style={{ width: 120, height: 120, position: "relative" }}
          >
            <CircularProgressbar
              value={100}
              strokeWidth={8}
              styles={buildStyles({
                pathColor: "var(--theme-color1)",
                trailColor: "#fff",
              })}
            />
            <div
              className="inner-text"
              style={{
                width: 80,
                height: 80,
                lineHeight: "80px",
                backgroundColor: "#fff",
                fontWeight: 700,
                fontSize: 20,
                color: "#163839",
                textAlign: "center",
                borderRadius: "50%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {count}
            </div>
          </div>
        </div>
        <div className="content-box">
          <h4 className="title">{title}</h4>
          <p className="text">{text}</p>
        </div>
      </div>
    </div>
  );
};

function Growth({className}){
  return (
    <>
    <section className={`growth-section pt-120 pb-120 ${className || ''}`} style={{ backgroundImage: `url(${GrowthImage1})` }} >
      <span className="temporary-image-label">Image temporaire</span>
      <div className="sec-shape">
        <img src={GrowthImage2} alt="Growth Shape" className="sway_Y__animation" />
      </div>
      <div className="container">
        <div className="sec-title pb-50 mb-50">
          <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms"> Le groupe en bref</h6>
          <div className="flex-content">
            <h2 className="title text-white wow splt-txt" data-splitting="true" >Réunir les expertises <br />Ouvrir de nouvelles perspectives.</h2>
            <Link to="/page-about" className="btn-one-light border-0 rounded-0 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">En savoir plus</Link>
          </div>
        </div>

        <div className="row g-5">
          {growthData.map((item, index) => (
            <GrowthItem
              key={index}
              value={item.value}
              title={item.title}
              text={item.text}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Growth;
