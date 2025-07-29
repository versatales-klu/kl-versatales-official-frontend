import { useEffect, useState } from 'react';
import './Hero.css';

import OurTeam from '/src/assets/Gallery/OurTeam.jpg';
import Team_discussion from '/src/assets/Gallery/Team_discussion.jpg';
import club_Event from '/src/assets/Gallery/club_Event.jpg';

const images = [OurTeam, Team_discussion, club_Event];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000); // 3 seconds per image (1s fade + 2s display)

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-bg ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>VERSATALES</h1>
        <p>Igniting Creativity Through Script & Drama</p>
      </div>
    </section>
  );
};

export default Hero;
