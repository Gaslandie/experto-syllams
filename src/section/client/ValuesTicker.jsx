import { useState } from "react";

const phrases = [
  "Vous écoutez pour mieux vous Parler",
  "Vous comprendre pour mieux Vous Conseillez",
  "A Partners for one day Partners forever",
  "Nos Valeurs pour y arriver :",
  "LA RIGUEUR DANS L’ETHIQUE & LA DEONTOLOGIE",
  "DES RESULTATS EFFICACES & EFFICIENTS",
  "LE PROFESSIONALISME & COMPETENCE",
  "LE RESPECT DE NOTRE REPUTATION",
  "LA SATISFACTION DE NOS CLIENTS",
];

export default function ValuesTicker() {
  const [paused, setPaused] = useState(false);
  return <section className="values-ticker" aria-label="Les valeurs du groupe">
    <div className={`values-ticker-track ${paused ? "is-paused" : ""}`}>
      {[0, 1].map((copy) => <div className="values-ticker-items" key={copy} aria-hidden={copy === 1 ? true : undefined}>
        {phrases.map((phrase) => <span key={phrase}>{phrase}</span>)}
      </div>)}
    </div>
    <button type="button" className="values-ticker-toggle" onClick={() => setPaused(!paused)} aria-label={paused ? "Reprendre le défilement des valeurs" : "Mettre en pause le défilement des valeurs"}>{paused ? "Reprendre" : "Pause"}</button>
  </section>;
}
