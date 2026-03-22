import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className='hero'>
        <h1>Welcome to Our Global Mobility Platform</h1>
        <p>Empowering global journeys with seamless solutions.</p>
        <button>Get Started</button>
      </section>

      {/* Services Showcase */}
      <section className='services'>
        <h2>Our Services</h2>
        <div className='service-item'>
          <h3>Service 1</h3>
          <p>Description of Service 1.</p>
        </div>
        <div className='service-item'>
          <h3>Service 2</h3>
          <p>Description of Service 2.</p>
        </div>
        <div className='service-item'>
          <h3>Service 3</h3>
          <p>Description of Service 3.</p>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className='cta'>
        <h2>Ready to take the next step?</h2>
        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default HomePage;
