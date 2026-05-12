import React from 'react';
import Hero from '../Hero';
import { ThemeContext } from '../../context/ThemeContext';
import NavContainer from '../NavContainer';

const IndexLeft = () => {
  const heroData = {
    title1: 'Hi, I am',
    title2: 'Sriram',
    body: (
      <span>
        I'm a Fullstack Software Engineer currently working as an SDE-III at
        GoHighLevel, where I build large-scale SaaS features across the Funnels
        &amp; Websites platform — from Ecommerce and AI-powered page builders to
        SEO tooling. I work across the stack with Vue.js, Nuxt.js, Node.js, and
        NestJS, and I care deeply about product quality, engineering ownership,
        and building things that actually move the needle.
      </span>
    ),
  };
  const links = [
    {
      name: 'WORK EXPERIENCE',
      link: '#experience',
    },
    {
      name: 'PROJECTS',
      link: '#projects',
    },
    {
      name: 'SKILLS',
      link: '#skills',
    },
    {
      name: 'CONTACT',
      link: '#contact',
    },
  ];
  return (
    <ThemeContext.Consumer>
      {({ darkMode }) => (
        <>
          <Hero data={heroData} darkMode={darkMode} />
          <NavContainer links={links} darkMode={darkMode} />
        </>
      )}
    </ThemeContext.Consumer>
  );
};

export default IndexLeft;
