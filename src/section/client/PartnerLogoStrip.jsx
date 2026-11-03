import { useState } from "react";
import references from "./clientReferences.json";

export default function PartnerLogoStrip() {
  const [pressed, setPressed] = useState(false);

  return <div className="partner-strip" tabIndex={0} aria-label="Logos de nos clients et partenaires"
    onTouchStart={() => setPressed(true)} onTouchEnd={() => setPressed(false)} onTouchCancel={() => setPressed(false)}>
    <div className="partner-track" style={{ "--partner-scroll-duration": `${references.length * 7}s`, animationPlayState: pressed ? "paused" : undefined }}>
      {[0, 1].map(copy => <div className="partner-items" key={copy} aria-hidden={copy === 1 ? true : undefined}>
        {references.map(reference => <div className="partner-logo-card" key={reference.id}>
          <div className="partner-logo-slot">
            {reference.viewBox ? <svg viewBox={reference.viewBox} width="210" height="110" role="img" aria-label={reference.name} overflow="hidden">
              <svg width={reference.sourceWidth} height={reference.cropHeight} overflow="hidden">
              <image href={`${import.meta.env.BASE_URL}images/references/${reference.logo}`} width={reference.sourceWidth} height={reference.sourceHeight} />
              </svg>
            </svg> : <img src={`${import.meta.env.BASE_URL}images/references/${reference.logo}`} alt={reference.name} width="210" height="110" loading="lazy" decoding="async" />}
          </div>
        </div>)}
      </div>)}
    </div>
  </div>;
}
