import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

const Home = ( {projects}) => {
    return (
        <>
        <Header/>
        <About />
        <Projects projects={projects}/>
        </>
    );
}

export default Home;
