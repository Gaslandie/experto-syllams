import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChooseImage1 from '../../assets/images/experto/professionnel.webp';
import CounterUp from '../../lib/CounterUp';

const progressData = [
  { value: 100, percent: 6, title: "Group Firms" },
  { value: 100, percent: 3, title: "Core Activities" },
];

const tabData = {
  about: {
    title: "About Us",
    content: "Six firms, one group: explore our audit, consulting and training activities. Institutional information is being prepared.",
  },
  mission: {
    title: "Our Mission",
    content: "Provisional mission: bring together complementary expertise to support organisations and professional development. To be validated by the group.",
  },
  vision: {
    title: "Our Vision",
    content: "Provisional vision: create lasting connections between business expertise and the development of skills. To be validated by the group.",
  },
};

function ProgressBlock({ item, progress }) {
  return (
    <div className="choose-block">
      <div className="pie-graph me-3">
        <div className="graph-outer">
          <CircularProgressbar
            value={progress}
            styles={buildStyles({
              pathColor: "#000",
              textColor: "#000",
              trailColor: "#ffffff33",
              strokeLinecap: "butt",
              textSize: "24px",
              pathTransitionDuration: 1.4,
            })}
          />
        </div>
        <i className="fa-solid icon fa-arrow-up-right"></i>
      </div>
      <div className="content-box">
        <div className="inner-text count-box">
          <span className="count-text">
            <CounterUp end={item.percent} />
          </span>
        </div>
        <h5 className="title">{item.title}</h5>
      </div>
    </div>
  );
}

ProgressBlock.propTypes = {
  item: PropTypes.object.isRequired,
  progress: PropTypes.number.isRequired,
};

function Choose() {
  const [activeTab, setActiveTab] = useState("about");
  const [progress, setProgress] = useState(progressData.map(() => 0));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(progressData.map((item) => item.value));
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="choose-section pt-120 pb-120">
      <div className="container">
        <div className="row g-4 align-items-center">
          {/* Left Column */}
          <div className="col-xl-6 content-column">
            <div className="inner-column">
              <div className="sec-title mb-30">
                <h6 className="sub-title wow fadeInUp">Mission & Vision</h6>
                <h2 className="title wow splt-txt" data-splitting>
                  Bringing our expertise together to support your next steps.
                </h2>
              </div>
              <div className="choose-tab">
                <ul className="nav nav-tabs" role="tablist">
                  {Object.keys(tabData).map((key) => (
                    <li className="nav-item" role="presentation" key={key}>
                      <button
                        className={`nav-link ${activeTab === key ? "active" : ""}`}
                        onClick={() => setActiveTab(key)}
                        type="button"
                        role="tab"
                        aria-selected={activeTab === key}
                      >
                        {tabData[key].title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tab-content mt-30">
                <div className="tab-pane fade show active">
                  <div className="content-box">
                    <p className="text">{tabData[activeTab].content}</p>
                    <div className="list mt-30 mb-50 d-flex flex-wrap gap-4">
                      <ul className="list-unstyled">
                        <li><i className="fa-solid fa-check"></i> Audit Activities</li>
                        <li><i className="fa-solid fa-check"></i> Business Consulting</li>
                      </ul>
                      <ul className="list-unstyled">
                        <li><i className="fa-solid fa-check"></i> Professional Training</li>
                        <li><i className="fa-solid fa-check"></i> Certification Programmes</li>
                      </ul>
                    </div>
                    <Link to="/page-about" className="btn-two">Discover More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-xl-6 image-column">
            <div className="inner-column position-relative">
              <figure className="image">
                <img className="wow" src={ChooseImage1} alt="Choose Us" loading="lazy" />
                <div className="outer-box d-flex flex-wrap gap-4 mt-4">
                  {progressData.map((item, index) => (
                    <ProgressBlock key={index} item={item} progress={progress[index]} />
                  ))}
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choose;