import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faPython, faHtml5, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import Loader from 'react-loaders';
import Ruby from '../../assets/images/rails-logo.png'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
      <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            index={15}
          />
        </h1>
          <p>
            Hello! I'm Kostas, a dedicated front-end developer with over a year of experience in cutting-edge technologies like React and Next.js. Previously, I contributed my skills as a front-end developer at Flashy Cash, specializing in creating dynamic and user-friendly web applications.
          </p>
          <p>
            Currently, I'm in the exciting process of transitioning to mobile development, focusing on  iOS development. My passion for problem-solving and finding creative solutions continues to drive my coding journey. I have a proven track record of thriving in dynamic and collaborative environments, consistently delivering high-quality work.
          </p>
          <p>
            As part of my commitment to continuous learning, I am expanding my horizons by delving into Kotlin and React Native for mobile development, aiming to broaden my skill set. I am enthusiastic about the challenges and opportunities that come with mobile development and look forward to contributing my expertise to innovative projects in this space.
          </p>
          {/* <p>
            Problem-solving and finding creative solutions are at the core of my coding journey. I thrive in dynamic and collaborative environments, consistently delivering high-quality work.
          </p>
          <p>
            Continuous learning is a key aspect of my professional growth, and I am dedicated to staying abreast of the latest technologies and trends. Currently, I'm expanding my horizons by exploring Kotlin and Swift for mobile development, aiming to broaden my skill set.
          </p> */}
          {/* <p>
            When I'm not crafting beautiful and responsive user interfaces, you'll likely find me staying active and maintaining a healthy lifestyle. CrossFit is a crucial part of my routine, keeping me energized and focused. I thrive on challenges, whether it's solving coding puzzles or engaging in a rigorous CrossFit workout.
          </p> */}
        </div>
      <div className="cube-container">
        <div className="stage-cube-cont">
          <div className='cubespinner'>
          <div className="face1">
              <img src={Ruby} alt="Ruby" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
            <FontAwesomeIcon icon={faJs} color="#EFd81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPython} color="#3776AB" /> {/* Python icon */}
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faDatabase} color="#E44D26" /> {/* Database/SQL icon */}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default About;
