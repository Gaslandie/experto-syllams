import { useState } from "react";

// No client or partner identities have been supplied for this strip yet.
// The supplied cabinet logos belong to the group and must not be used here.
const placeholders = ["Client — référence nationale", "Client — référence internationale", "Partenaire", "Affiliation"];

export default function PartnerShowcase() {
  const [paused, setPaused] = useState(false);
  return <section className="partner-showcase" aria-labelledby="partner-showcase-title">
    <div className="container">
      <div className="sec-title mb-30"><h6 className="sub-title">Clients & partenaires</h6><h2 className="title" id="partner-showcase-title">Ils nous font confiance</h2><p>Les logos et références seront ajoutés après leur transmission et leur validation par le groupe.</p></div>
      <div className="partner-strip" tabIndex={0} aria-label="Emplacements des futurs logos de clients et partenaires">
        <div className={`partner-track${paused ? " is-paused" : ""}`}>
          {[0, 1].map(copy => <div className="partner-items" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {placeholders.map(label => <div className="partner-logo-card" key={label}><div className="partner-logo-slot">Logo à fournir</div><div className="partner-logo-caption"><strong>{label}</strong><span>À venir</span></div></div>)}
          </div>)}
        </div>
      </div>
      <button type="button" className="partner-pause" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "Reprendre le défilement" : "Mettre en pause le défilement"}</button>
    </div>
  </section>;
}
