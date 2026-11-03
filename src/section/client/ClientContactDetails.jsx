import { useState } from 'react';
import '../../assets/css/experto-contact.css';

const contactEmail = 'manager@experto-syllams.com';

const socialNetworks = [
  ['Facebook', 'fa-facebook-f'],
  ['LinkedIn', 'fa-linkedin-in'],
];

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };

export default function ClientContactDetails() {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(formData.subject.trim() || 'Demande de contact');
    const lines = [
      `Nom et prénom(s) : ${formData.name.trim()}`,
      `E-mail : ${formData.email.trim()}`,
      formData.phone.trim() ? `Téléphone : ${formData.phone.trim()}` : '',
      '',
      formData.message.trim(),
    ];
    const body = encodeURIComponent(lines.filter((line, index) => line || index === 3).join('\n'));
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return <section className="client-contact-details" aria-labelledby="client-contact-details-title">
    <div className="container">
      <div className="client-contact-details-inner">
        <div className="client-contact-details-info">
          <p className="client-contact-details-label">Contactez-nous</p>
          <h2 id="client-contact-details-title">Coordonnées</h2>
          <ul className="client-contact-details-list">
            <li>
              <span className="client-contact-details-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z" /><circle cx="12" cy="10" r="2.6" /></svg>
              </span>
              <address className="client-contact-details-text">
                4ème étage, Immeuble Archevêché<br />
                – Almamya / Kaloum<br />
                Conakry, Rép. de Guinée
              </address>
            </li>
            <li>
              <span className="client-contact-details-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3h3l1.6 4-2.1 1.4a11.6 11.6 0 0 0 6.1 6.1L17 12.4 21 14v3a2.6 2.6 0 0 1-2.9 2.6C11.3 18.9 5.1 12.7 4.4 5.9A2.6 2.6 0 0 1 7 3Z" /></svg>
              </span>
              <div className="client-contact-details-text">
                <a href="tel:+224628216975">+224 628 21 69 75</a>
                <a href="tel:+2290197590310">+229 01 97 59 03 10</a>
              </div>
            </li>
            <li>
              <span className="client-contact-details-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="m21 3-9.4 18-2-7.6L3 11.4 21 3Z" /><path d="M21 3 9.6 13.4" /></svg>
              </span>
              <div className="client-contact-details-text">
                <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
              </div>
            </li>
          </ul>
          <div className="client-contact-details-socials">
            <p>Suivez-nous :</p>
            <ul aria-label="Réseaux sociaux — liens à venir">
              {socialNetworks.map(([name, icon]) => <li key={name}>
                <span role="img" aria-label={`${name} : lien à venir`} title={`${name} — lien à venir`}>
                  <i className={`fa-brands ${icon}`} aria-hidden="true" />
                </span>
              </li>)}
            </ul>
          </div>
        </div>
        <div className="client-contact-details-panel">
          <h3>Écrivez-nous</h3>
          <p className="client-contact-details-note">Les champs obligatoires sont marqués d’un *.</p>
          <form className="client-contact-details-form" onSubmit={handleSubmit}>
            <div className="client-contact-details-grid">
              <div className="client-contact-details-field">
                <label className="sr-only" htmlFor="contact-details-name">Votre nom et prénom(s)</label>
                <input id="contact-details-name" name="name" type="text" placeholder="Votre nom et prénom(s) *" value={formData.name} onChange={handleChange} autoComplete="name" required />
              </div>
              <div className="client-contact-details-field">
                <label className="sr-only" htmlFor="contact-details-email">Votre e-mail</label>
                <input id="contact-details-email" name="email" type="email" placeholder="Votre e-mail *" value={formData.email} onChange={handleChange} autoComplete="email" required />
              </div>
              <div className="client-contact-details-field">
                <label className="sr-only" htmlFor="contact-details-phone">Votre téléphone</label>
                <input id="contact-details-phone" name="phone" type="tel" placeholder="Votre téléphone" value={formData.phone} onChange={handleChange} autoComplete="tel" />
              </div>
              <div className="client-contact-details-field">
                <label className="sr-only" htmlFor="contact-details-subject">Objet</label>
                <input id="contact-details-subject" name="subject" type="text" placeholder="Objet *" value={formData.subject} onChange={handleChange} required />
              </div>
              <div className="client-contact-details-field client-contact-details-field-full">
                <label className="sr-only" htmlFor="contact-details-message">Votre message</label>
                <textarea id="contact-details-message" name="message" placeholder="Votre message…" value={formData.message} onChange={handleChange} autoComplete="off" />
              </div>
            </div>
            <button type="submit" className="client-contact-details-submit">Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  </section>;
}
