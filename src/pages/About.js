import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

import Particles from "react-tsparticles";
import particlesOptions from "../particles.json";

import Mapp from '../components/Map/Map';
// uses babel to load contents of file
const markdown = raw('../data/about.md');

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => (
  <Main
    title="About"
    description="Learn about Yuehao Shi"
  >
    <article className="post markdown" id="about">
    <Particles options={particlesOptions}/>
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">About Me</Link></h2>
          <p>(In about {count} words)</p>
        </div>
      </header>
      <ReactMarkdown
        children={markdown}
        components={{
          Link: LinkRenderer,
        }}
      />
      <div>
          <Mapp/>
          
      </div>
    </article>
  </Main>
);

export default About;