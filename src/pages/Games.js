import React from 'react';
import { Link } from 'react-router-dom';
import MouseParticles from "react-mouse-particles";

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/games';
import Particles from "react-tsparticles";
import particlesOptions from "../particles.json";

const Games = () => (
  
  <Main
    title="Games"
    description="Hi, welcome to try my games!"
  >
    <article className="post" id="games">
    <Particles options={particlesOptions}/>
    <div>
        <MouseParticles
          g={2.3}
          num={1}
          radius={8}
          life={0.8}
          v={1.2}
          color="random"
          alpha={0.16}
          level={6}
        />
      </div>
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/games">Games</Link></h2>
        </div>
      </header>
      {data.map((game) => (
        <Cell
          data={game}
          key={game.title}
        />
      ))}
    </article>
  </Main>
);

export default Games;