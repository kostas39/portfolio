import React, { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import './Portfolio.scss';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Kostas Portfolio'.split('')}
            index={15}
          />
        </h1>
        <div className="construction-container">
          <h2 className="construction-message">
            🚧 Portfolio Under Construction 🚧
          </h2>
          <p className="construction-details">
            Thank you for visiting! My portfolio is currently being updated with new content and exciting projects. Please check back soon to see the latest updates.
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
