import React from 'react';
import './Home.css';
import Footer from './Footer.jsx'
import Hero from '../components/Hero/Hero.jsx';
import AboutUs from '../components/AboutUs/AboutUs.jsx';
import WingGallery from '../components/WingGallery/WingGallery.jsx';
// import PhotoGallery from '../components/PhotoGallery/PhotoGallery.jsx';
// import TeamGallery from '../components/TeamGallery/TeamGallery.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <WingGallery />
      <Footer/>
      {/* <PhotoGallery /> */}
      {/* <TeamGallery /> */}
    </>
  );
};

export default Home;
