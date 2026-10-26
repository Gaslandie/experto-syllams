import React from "react";
import TeamShapeImage from "../../assets/images/shape/team-shape.png";

function Team() {
  return (
    <section className="team-section pt-120 pb-120">
      <div className="team-shape wow slideInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">
        <img className="sway__animation" src={TeamShapeImage} alt="" />
      </div>
      <div className="container">
        <div className="sec-title center mb-50">
          <h6 className="sub-title">Notre équipe</h6>
          <h2 className="title">Découvrez les personnes derrière <br /> notre groupe — bientôt disponible</h2>
        </div>
        <div className="row g-4">
          {[0, 1, 2, 3].map((slot) => (
            <div className="col-md-6 col-xl-3" key={slot}>
              <div className="team-placeholder">
                <div className="team-placeholder-photo">
                  <i className="fa-regular fa-user" aria-hidden="true" />
                  <span>Photo de l’équipe à venir</span>
                </div>
                <div className="team-placeholder-content">
                  <h4>Nom à confirmer</h4>
                  <p>Fonction à confirmer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
