import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';
import Particles from "react-tsparticles";
import particlesOptions from "../particles.json";
const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Yuehao Shi's projects."
  >
    <article className="post" id="projects">
    <Particles options={particlesOptions}/>
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>Welcome to my Projects!</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
      
    </article>
    
  </Main>
  
);



export default Projects;