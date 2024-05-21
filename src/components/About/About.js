import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faApple, faHtml5, faReact } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
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
            Hello! I'm Kostas, a dedicated iOS Engineer with expertise in front-end technologies and a passion for mobile application development. Previously, I worked as a Front End Developer Intern at Flashy Cash, where I specialized in developing responsive web interfaces and enhancing app interactivity through API integration.
          </p>
          <p>
            Currently, I'm focusing on iOS development, leveraging my skills in Swift, SwiftUI, and Core Data to create user-centric mobile applications. My analytical abilities and process-driven mindset enable me to thrive in dynamic and collaborative environments, consistently delivering high-quality digital solutions.
          </p>
          <p>
            As part of my commitment to continuous learning, I am pursuing a Bachelor of Computer Science and have completed a Full-Stack Web Development & Computer Programming course at Le Wagon. I am enthusiastic about the challenges and opportunities in mobile development and look forward to contributing my expertise to innovative projects in this space.
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
            <FontAwesomeIcon icon={faApple} color="#000000" /> {/* Apple icon, symbolizing Xcode/Apple ecosystem */}

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
              <FontAwesomeIcon icon={faMobileAlt} color="#3776AB" /> {/* Generic mobile development icon, could symbolize Swift */}
            </div>
            <div className="face6">
              <img src={Ruby} alt="Ruby" />
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
