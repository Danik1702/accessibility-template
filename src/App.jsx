import { useState } from 'react';
import {
  Header,
  Footer,
  RegularButton,
  Image,
  AboutUs,
  ContactUsCard,
  ContactUsForm
} from './components';

import './App.scss';

const  App = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  const buttonClickHandler = () => {
    setButtonClicked(!buttonClicked);
  };

  const formSubmitHandler = (formData) => {
    alert('Form Submitted, check form data in console');
    console.log('formData', formData);
  };

  return (
    <div className="App">
      <Header />
      <main className="app-body">
        <section id="home">
          <div className="home-wrapper section">
            <div className="home-info">
              <h2 className="home-header text-main-header">Lorem ipsum dolor sit amet</h2>

              <div className="home-content">
                <h3 className="home-content-header">Lorem ipsum dolor sit amet</h3>
                <p className="text-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu risus cursus. Senectus sed maecenas viverra tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna hendrerit morbi sed gravida. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <RegularButton text="Buy Now" onClick={buttonClickHandler} />
            </div>
            <div className="home-image-wrapper">
              <Image 
                urls={[
                  require('./assets/img/unsplash_W5XTTLpk1-I.png'),
                  require('./assets/img/unsplash_W5XTTLpk1-I@2x.png'),
                  require('./assets/img/unsplash_W5XTTLpk1-I@3x.png')
                ]} 
                alt="plant"
                isFirstImage={true} 
              />
            </div>
          </div>
        </section>

        <section id="about-us" className="section">
          <div className="about-us-container">
            <AboutUs
              text="About Us"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu risus cursus. Senectus sed maecenas viverra tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna hendrerit morbi sed gravida. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu risus cursus."
              linkUrl="#about-us"
              linkText="Learn more about →"
            />
          </div>

          <div className="about-us-container">
            <AboutUs
              text="About Us 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu risus cursus. Senectus sed maecenas viverra tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna hendrerit morbi sed gravida. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu risus cursus."
              linkUrl="#about-us"
              linkText="Learn more about →"
            />
          </div>
        </section>

        <section id="contact-us">
          <div className="section">
            <div className="contact-us-container">
              <div className="contact-us-card-container">
                <ContactUsCard />
              </div>

              <div className="contact-us-form-wrapper">
                <ContactUsForm onSubmit={formSubmitHandler} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
