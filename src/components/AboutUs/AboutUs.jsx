import React from 'react';
import './AboutUs.css';
import SampleImage from './../../assets/Gallery/Blood_camp.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* About Us Text Section */}
      <section className="about-us-header">
        <h1>About Us</h1>
        <p>
          Welcome to Versatales! We're a team dedicated to empowering individuals through storytelling,
          skill development, and collaboration. Our platform helps passionate creators find the perfect
          roles to contribute their talents and grow.
        </p>
      </section>

      {/* Two Card Layout */}
      <section className="two-card-layout">
        <div className="card left-card">
          <img src={SampleImage} alt="Versatales Visual" className="card-image" />
        </div>
        <div className="card right-card">
          <h2>Discover Your Role</h2>
          <p>
            Submit your role registration to get started. We’ll help you align your interests
            and skills with the most meaningful contributions to our community.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
