import React from 'react';
import Experience from '../experience/Experience';
import Skills from '../skills/Skills';
import Education from '../education/Education';
import Contact from "../contact/Contact";
import Projects from "../projects/Projects";

const Main = () => {
    return <main>
        <Experience/>
        <Projects />
        <Skills/>
        <Education/>
        <Contact/>
    </main>
};

export default Main;