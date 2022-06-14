import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = ( {projects}) => {
    return (
        <>
        <Header/>
        <About />
        <Projects projects={projects}/>
        <Contact />
        <Footer />
        </>
    );
}

export default Home;
