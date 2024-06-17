import React from 'react';

import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Tools from '../components/Tools';
import Portfolios from '../components/Portfolios';
import Samples from '../components/Samples';
import Demos from '../components/Demos';
import Showcases from '../components/Showcases';
import Examples from '../components/Examples';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';

const Home = () => {
  return (
    <div id='home'>
      <Hero />
      <About />
      <Tools />
      <Portfolios />
      <Samples />
      <Demos />
      <Showcases />
      <Examples />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
};

export default Home;
