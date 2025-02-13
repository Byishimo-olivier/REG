import React from 'react';
import lightbulb from '../Components/images/light-bulb.jpg';
import './Style.css';
import { useNavigate } from 'react-router-dom';

const LightningIcon = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/login');
  };

  return (
    <svg 
      viewBox="0 0 24 24" 
      width="24" 
      height="24"
      onClick={handleLogoClick}
      style={{ cursor: 'pointer' }}
    >
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
};

const WebsiteSections = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <div>
          <div>
            <LightningIcon />
            <span>DistribuSmart</span>
          </div>
          <div>
            <a href="#about">about us</a>
            <a href="#contact">contact us</a>
            <div className="header-controls">
              <button>
                REG Rwanda
              </button>
              <div onClick={() => navigate('/login')} style={{ cursor: 'pointer' }}>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="hero-section">
        <p>
          We're stewards of nature's most incredible pollinators
        </p>
        <h1>
          Welcome To DistribuSmart.
        </h1>
        <p>
          Nestled in the heart of pristine landscapes, our apiary is a haven for honeybees,
          where they thrive, pollinate, and produce the finest honey you'll ever taste.
        </p>
        <img 
          src={lightbulb} 
          alt="Glowing Lightbulb"
        />
      </div>

      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <span className="section-label">About Us</span>
            <h2>Known More About Us</h2>
            <p className="about-description">
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the industry's <br />
              standard dummy text ever since the 1500s, when an unknown <br />
              printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            
            <div className="features-grid">
              <div className="feature-item">
                <span className="check-icon">✓</span>
                <div className="feature-content">
                  <h3>Business Quality</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
                </div>
              </div>

              <div className="feature-item">
                <span className="check-icon">✓</span>
                <div className="feature-content">
                  <h3>Business Quality</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
                </div>
              </div>

              <div className="feature-item">
                <span className="check-icon">✓</span>
                <div className="feature-content">
                  <h3>Business Quality</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
                </div>
              </div>

              <div className="feature-item">
                <span className="check-icon">✓</span>
                <div className="feature-content">
                  <h3>Business Quality</h3>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesettin</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img src={lightbulb} alt="Innovative lightbulb" />
          </div>
        </div>
      </section>

            {/* Contact Section */}
            <div className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>
              "We love powering connections with energy enthusiasts."
            </h3>
            <p>
              Located at the core of unspoiled environments, our energy hub is a sanctuary 
              for innovation, where ideas spark, flow, and generate the most powerful 
              solutions you'll ever experience.
            </p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <span>🏠</span>
                <span>Kigali city,Rwanda</span>
              </div>
              <div className="contact-detail-item">
                <span>📞</span>
                <span>+250783227490</span>
              </div>
              <div className="contact-detail-item">
                <span>✉️</span>
                <span>christian@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <input
                type="text"
                placeholder="Your name"
              />
              <input
                type="email"
                placeholder="Your email"
              />
              <textarea
                placeholder="Your text"
                rows={6}
              />
              <button>
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
      

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          
        <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
  
          <div className="footer-contact">
            <h4>Have questions or just want to say hi?</h4>
            <form className="footer-form">
              <input 
                type="email" 
                placeholder="Your email"
              />
              <button type="submit">send</button>
            </form>
          </div>
        </div>
        <div className="footer-copyright">
          CopyRight @ 2024
        </div>
      </footer>
    </div>
  );
};

export default WebsiteSections;