import React from 'react';

import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Technologies from '../components/Technologies';

const Home = () => {
    return (
        <div id='home'>
            <Hero />
            <About />
            <Projects />
            <Technologies />
            <Contact />
        </div>
    );
};

export default Home;