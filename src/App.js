

import './App.css';
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner'
import { Skills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './components/Projects';
import { ProjectCard } from './components/ProjectCard';
import { Contact } from './components/Contact';
import { MailchimpForm } from './components/MailChimpForm';
import React, { useRef } from 'react';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <ProjectCard/>
      <Contact/>
      <MailchimpForm/>

    </div>
  );
}

export default App;
