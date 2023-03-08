import { FacebookIcon } from "../../../assets/icons";

import './contact-us.styles.scss';

const contactsList = [
  { id: 0, text: '+380 93 15 32 456', icon: <FacebookIcon /> },
  { id: 1, text: 'example@gmail.com', icon: <FacebookIcon /> },
  { id: 2, text: 'Pidmurma 5a, Lviv', icon: <FacebookIcon /> }
];

export const ContactUsCard = () => (
  <section className="contact-us-card">
    <div className="contact-us-content">
      <h2 className="text-main-header">Contact Us</h2>
      <p className="contact-us-description text-regular">Fill up the form and ur Team will get back to you within 24 hours. Happy to see your message!</p>
      
      <ul className="contact-us-contacts-list">
        {contactsList.map(el => (
          <li key={el.id} className="contact-us-contact-item vertical-centralize-children">
            <div className="contact-icon-container">
              {el.icon}
            </div>

            <p className="text-regular">{el.text}</p>
          </li>
        ))}
      </ul>
    </div>

    <div className="contact-us-social-media-container">
      <ul className="social-media-list vertical-centralize-children">
        {['', '', ''].map((_, index) => (
          <li key={index} className="social-media-item">
            <FacebookIcon size="28" />
          </li>
        ))}
      </ul>
    </div>
  </section>
);