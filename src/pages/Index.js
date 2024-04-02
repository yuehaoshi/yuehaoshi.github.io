import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Particles from "react-tsparticles";
import particlesOptions from "../particles.json";

const Index = () => (
  <Main
    description={"Yuehao Shi's personal website."}
  >
    <article className="post" id="index">
    <Particles options={particlesOptions}/>
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            Hello, welcome to my zone! I've been thinking about the missions of our generation, 
            and believe computer and data science as a revolutional productivity in our time. 
            I love making new friends as well, welcome to join me and let's digitalize the world together!
          </p>
        </div>
      </header>
      <p> Please feel free to explore my pages for: 
        <br></br>  
        <Link to="/about">About me</Link>, <br></br>
        <Link to="/resume">My resume</Link>, {' '} <br></br>
        <Link to="/projects">My projects</Link>, {' '} <br></br>
        <Link to="/games">My games</Link>.
      </p>
      <p> Website source code available <a href="https://github.com/yuehaoshi/yuehaoshi.github.io">here</a>. The idea of building this website is inspired by <a href="https://github.com/mldangelo/personal-site">Michael
            Mldangelo's personal website.</a></p>
      
    </article>
  </Main>
);

export default Index;