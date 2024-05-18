import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { db } from '../../Firebase';
import './Portfolio.scss';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    const fetchPortfolio = async () => {
      try {
        const portfolioCollection = collection(db, 'portfolio'); // ensure collection name matches in Firestore
        const portfolioSnapshot = await getDocs(portfolioCollection);
        const portfolioList = portfolioSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log('Fetched portfolio:', portfolioList); // Log fetched data
        setPortfolio(portfolioList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching portfolio data: ", error);
      }
    };

    fetchPortfolio();
  }, []);

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => (
          <div key={idx} className="project-card">
            <h2 className="project-title">{port.name}</h2>
            <p className="project-description">{port.description}</p>
            <img src={port.image} alt={port.name} className="project-image" />
            <button className="button" onClick={() => window.open(port.url)}>
              View Project
            </button>
          </div>
        ))}
      </div>
    );
  };

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
        {loading ? <Loader type="pacman" /> : <div>{renderPortfolio(portfolio)}</div>}
      </div>
    </>
  );
};

export default Portfolio;
