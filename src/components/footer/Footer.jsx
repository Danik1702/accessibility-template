import { PlantMeForm, Image } from "../index"

import './footer.styles.scss';

const footerNavLinks = [
  { id: 0, text: 'About Us', url: '#' },
  { id: 1, text: 'Contact Us', url: '#' },
  { id: 2, text: 'Blog', url: '#' },
  { id: 3, text: 'Site Map', url: '#' }
];

const footerRightLinks = [
  { id: 0, text: 'Privacy Policy', url: '#' },
  { id: 1, text: 'Terms of service', url: '#' },
  { id: 2, text: 'Language', url: '#' }
];

export const Footer = () => {
  const handleFormSubmit = (data) => {
    alert('plant me form submitted, check data in console!');
    console.log(data);
  };

  return (
    <footer id="footer">
      <div className="footer-container section">
        <section className="plant-me">
          <h2 className="text-main-header">PlantMe</h2>
          <p className="plant-me-description text-link">Subscribe and be the first to know about our news and promotions.</p>

          <PlantMeForm onSubmit={handleFormSubmit} />
        </section>

        <div className="links-and-contacts">
          <nav className="footer-nav-links">
            <ul className="footer-nav-list">
              {footerNavLinks.map(el => (
                <li key={el.id} className="footer-nav-item">
                  <a href={el.url} className="text-link">{el.text}</a>
                </li>
              ))}
            </ul>
          </nav>

          <section className="footer-contacts">
            <h4 className="footer-contacts-header text-link">Contacts</h4>
            <p className="contacts-phone-number text-link">+38 063 072 0121</p>
            <p className="contacts-email">plantme.store@gmail.com</p> 

            <div className="sponsors-container vertical-centralize-children">
              <div className="sponsor-visa-container">
                <Image urls={require('../../assets/img/visa.png')} alt="Visa" />
              </div>

              <div className="sponsor-mastercard-container">
                <Image urls={require('../../assets/img/mastercard.png')} alt="Mastercard" />
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="rights-info">
        <p className="rights-text">© 2022 PlantMe. All Rights Reserved</p>

        <ul className="rights-list">
          {footerRightLinks.map(el => (
            <li className="rights-item" key={el.id}>
              <a href={el.url} className="rights-item-text link-text">{el.text}</a>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
};