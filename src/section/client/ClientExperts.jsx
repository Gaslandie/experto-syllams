import { useState } from 'react';
import photos from './expertPhotos.json';
import '../../assets/css/experto-experts.css';

// Client layout: automatic photos, pause on hover or click, then figures.
const figures = [
  ['11', 'YEARS OF EXISTENCE'],
  ['15', 'EMPLOYEES'],
  ['+175', 'CLIENTS'],
  ['6', 'BUSINESS UNITS'],
];

export default function ClientExperts() {
  const [paused, setPaused] = useState(false);

  return <>
    <section className="client-experts" aria-labelledby="client-experts-title">
      <div className="client-experts-heading">
        <h2 id="client-experts-title">Nos Experts</h2>

      </div>
      <div className="client-experts-strip" data-paused={paused} tabIndex={0} role="region" aria-label="Photos de nos experts — cliquer ou appuyer sur Entrée pour arrêter ou reprendre le défilement"
        onClick={() => setPaused(value => !value)}
        onKeyDown={event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault(); setPaused(value => !value);
          }
        }}>
        <div className="client-experts-track" style={{ '--experts-scroll-duration': `${photos.length * 7}s` }}>
          {[0, 1].map(copy => <div className="client-experts-items" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {/* Load the full moving strip upfront: lazy loading can miss transformed offscreen images. */}
            {photos.map((photo, index) => <figure key={photo.file}>
              <img src={`${import.meta.env.BASE_URL}images/experts/${photo.file}`}
                alt={copy === 1 ? '' : `Nos Experts — photo ${index + 1} sur ${photos.length}`}
                width={photo.width} height={photo.height} loading="eager" decoding="async" draggable="false" />
            </figure>)}
          </div>)}
        </div>
      </div>
    </section>
    <div className="client-about-figures" aria-label="Le groupe en chiffres">
      {figures.map(([value, label]) => <div className="client-about-figure" key={label}>
        <span className="client-about-figure-value">{value}</span>
        <span className="client-about-figure-label">{label}</span>
      </div>)}
    </div>
  </>;
}
