//import logo from './logo.svg';
//import './App.css';
import React, { Suspense, lazy } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const About = lazy(() => import('./pages/About'));
const Games = lazy(() => import('./pages/Games'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Main />}>
      <Routes>
      <Route exact path="/" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/index" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/games" element={<Games />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route component={NotFound} status={404} />       
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;