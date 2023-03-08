import { Image } from "../../index";

import './about-us.styles.scss';

export const AboutUs = ({ text, description, linkUrl, linkText }) => (
  <section className="about-us-card">
    <div className="about-us-image-container">
      <Image
        url={require('../../../assets/img/Rectangle570.png')}
        alt="leaf"
      />
    </div>

    <div className="about-us-content-container">
      <h3 className="about-us-header">{text}</h3>

      <p className="about-us-description text-regular">{description}</p>

      <a className="about-us-link text-link" href={linkUrl}>{linkText}</a>
    </div>
  </section>
);