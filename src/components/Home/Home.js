import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import LogoTitle from '../../assets/images/letter-k.png';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Loader from 'react-loaders';



const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = 'ostas'.split('');
  const jobArray = 'iOS Developer'.split('');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br />
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span>

        <img className="logo-spin" src={LogoTitle} alt="developer" />
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        index={15} />
        <br />
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray}
        index={17} />
        </h1>
        <h2>Tech Stack</h2>
        <div className="img-badges">
          <img src="https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white" alt="swift"/>
          <img src="https://img.shields.io/badge/SwiftUI-FF5A05?style=for-the-badge&logo=swift&logoColor=white" alt="swiftui"/>



          <img src="https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white" alt='ios'/>
          <img src="https://img.shields.io/badge/Xcode-007ACC?style=for-the-badge&logo=xcode&logoColor=white" alt="xcode"/>
          <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt='react'/>
          <img src="https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="react native"/>
          <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt='javascript'/>
          <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="next.js"/>
          <img src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" alt='firebase'/>

          <img src="https://img.shields.io/badge/Kotlin-0095D5?style=for-the-badge&logo=kotlin&logoColor=white" alt="kotlin"/>


          <img src="https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&logo=ruby-on-rails&logoColor=white" alt='rails'/>
          <img src="https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white" alt='ruby'/>
          <img src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white" alt='heroku'/>



        </div>
        <Link to="/contact" className="flat-button">Contact Me</Link>
      </div>
    </div>
    <div className="blank"></div>
    <Loader type="pacman" />
    </>
  )
}

export default Home;
