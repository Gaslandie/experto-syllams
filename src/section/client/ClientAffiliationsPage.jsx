import { useEffect, useRef, useState } from "react";
import Layout from "../../layouts/Layout";
import affiliations from "./affiliations.json";
import "../../assets/css/experto-affiliations.css";

function AutoScroller({ id, label, list = false, speed = 18, className = "", onPauseChange, children }) {
  const viewportRef = useRef(null);
  const groupRef = useRef(null);
  const pointerTypeRef = useRef("");
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const paused = userPaused || hovered || focused || pressed;

  useEffect(() => {
    onPauseChange?.(paused);
  }, [paused, onPauseChange]);

  useEffect(() => {
    if (paused) return;
    const viewport = viewportRef.current;
    const group = groupRef.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame;
    let previousTime;
    let offset = viewport.scrollLeft;

    function advance(time) {
      if (previousTime !== undefined) {
        const loopWidth = group.getBoundingClientRect().width;
        offset += Math.min(time - previousTime, 64) * speed / 1000;
        if (loopWidth > 0) offset %= loopWidth;
        viewport.scrollLeft = offset;
      }
      previousTime = time;
      frame = window.requestAnimationFrame(advance);
    }

    function updateMotion() {
      window.cancelAnimationFrame(frame);
      previousTime = undefined;
      offset = viewport.scrollLeft;
      if (!preference.matches) frame = window.requestAnimationFrame(advance);
    }

    updateMotion();
    preference.addEventListener("change", updateMotion);
    return () => {
      window.cancelAnimationFrame(frame);
      preference.removeEventListener("change", updateMotion);
    };
  }, [paused, speed]);

  const Group = list ? "ul" : "div";
  return <div id={id} className={`affiliations-scroll-viewport ${className}`} ref={viewportRef}
    role="region" aria-label={label} tabIndex={0} aria-live="off" data-paused={paused}
    aria-description="Sur ordinateur, survoler pour arrêter le défilement. Sur mobile, toucher pour arrêter ou reprendre. Au clavier, utiliser les flèches pour parcourir les éléments."
    onPointerEnter={event => { if (event.pointerType === "mouse") setHovered(true); }}
    onPointerLeave={event => { if (event.pointerType === "mouse") setHovered(false); }}
    onPointerDown={event => { pointerTypeRef.current = event.pointerType; }}
    onClick={event => {
      if (pointerTypeRef.current === "touch" && !event.target.closest("a")) {
        setUserPaused(value => !value);
        setFocused(false);
      }
    }}
    onFocusCapture={event => setFocused(event.target.matches(":focus-visible"))}
    onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
    onTouchStart={() => setPressed(true)} onTouchEnd={() => setPressed(false)} onTouchCancel={() => setPressed(false)}
    onKeyDown={event => {
      if (event.target !== event.currentTarget) return;
      const viewport = event.currentTarget;
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        event.preventDefault();
        viewport.scrollBy({ left: viewport.clientWidth * (event.key === "ArrowRight" ? .8 : -.8), behavior: "instant" });
      } else if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        viewport.scrollTo({ left: event.key === "Home" ? 0 : groupRef.current.offsetWidth - viewport.clientWidth, behavior: "instant" });
      }
    }}>
    <div className="affiliations-scroll-track">
      {[0, 1].map(copy => <Group className="affiliations-scroll-group" key={copy}
        ref={copy === 0 ? groupRef : undefined} aria-hidden={copy === 1 ? true : undefined}>
        {children(copy)}
      </Group>)}
    </div>
  </div>;
}

function AffiliationCard({ item, hidden }) {
  return <li className="affiliation-card">
    <figure className="affiliation-logo">
      <img src={`${import.meta.env.BASE_URL}${item.logo}`} alt={hidden ? "" : `Logo ${item.name}`}
        width={item.width} height={item.height} loading="eager" decoding="async" />
    </figure>
    <div className="affiliation-copy">
      {item.paragraphs.map((parts, index) => <p key={index}>
        {parts.map(({ text, bold, italic }, partIndex) => {
          const content = italic ? <em>{text}</em> : text;
          return bold ? <strong key={partIndex}>{content}</strong> : <span key={partIndex}>{content}</span>;
        })}
      </p>)}
      {item.url && <a className="affiliation-website" href={item.url} target="_blank" rel="noopener noreferrer" tabIndex={hidden ? -1 : undefined}>{item.url}</a>}
    </div>
  </li>;
}

function AffiliationRow({ id, title, items }) {
  const [paused, setPaused] = useState(false);
  return <section className="affiliations-row" aria-label={title || "Nationaux"}>
    {title && <h2 className="affiliations-row-title affiliations-blink" style={{ animationPlayState: paused ? "paused" : "running" }}>{title}</h2>}
    <AutoScroller id={id} label={title || "Organismes nationaux"} onPauseChange={setPaused} list>
      {copy => items.map(item => <AffiliationCard key={item.id} item={item} hidden={copy === 1} />)}
    </AutoScroller>
  </section>;
}

export default function ClientAffiliationsPage({ category }) {
  const international = category === "internationales";
  const title = international ? "Internationales" : "Nationaux";
  const rows = international ? affiliations.internationales : [{ id: "nationaux", items: affiliations.nationales }];

  return <div className="page-wrapper"><Layout>
    <main className="client-affiliations-page experto-home-content">
      <div className="container">
        <div className="affiliations-page-heading">
          <h1>{title}</h1>
        </div>
        {international && <AutoScroller id="affiliations-motto" label={affiliations.tagline} speed={30} className="affiliations-motto">
          {() => <span>{affiliations.tagline}</span>}
        </AutoScroller>}
        {rows.map(row => <AffiliationRow key={row.id} {...row} />)}
      </div>
    </main>
  </Layout></div>;
}
