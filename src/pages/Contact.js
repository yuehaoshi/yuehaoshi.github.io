import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from '../components/Contact/ContactIcons';
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
          <h2 data-testid="heading"><Link to="/">Contact</Link></h2>
        </div>
      </header>
      <p>
            Thanks for taking time viewing my page, if you have any questions or have fun here, welcome to contact me with anything! I am always happy to meet new friends and grow together with you~
        </p>
      <p> I can be contacted with:</p>
        <ContactIcons />
      
    </article>
  </Main>
);

export default Index;