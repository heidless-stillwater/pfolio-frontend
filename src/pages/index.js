import React from 'react';

import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Showcases from '../components/Showcases';
import Projects from '../components/Projects';
import Examples from '../components/Examples';
import Technologies from '../components/Technologies';

const Home = () => {
  return (
    <div id='home'>
      <Hero />
      <About />
      <Showcases />
      <Examples />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
};

export default Home;
