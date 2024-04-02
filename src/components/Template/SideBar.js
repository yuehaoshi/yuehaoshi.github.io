import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
import meimage from './me.jpg';
//const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/resume" className="logo">
      <img
        src={meimage} alt="Hello!"
      ></img>
      </Link>
      <header>
        <h2><span>Yuehao Shi</span></h2>
        {/* <p><a href="mailto:yuehaos2@illinois.edu">yuehaos2@illinois.edu</a></p> */}
        <p><a href="mailto:yuehaoshi@outlook.com">yuehaoshi@outlook.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Yuehao, I am a programmer graduated from University of Illinois at Urbana-Champaign. My dream is to <b>help others</b> in exchange <b>some money</b>. If you also think big, welcome to contact me and let's dream together! ^_^
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Yuehao Shi 2024.</p>
    </section>
  </section>
);

export default SideBar;