import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faAndroid, faHtml5, faReact, faSwift} from '@fortawesome/free-brands-svg-icons';
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
            Hello! I'm Kostas, a passionate front-end developer with over a year of experience working with cutting-edge technologies like React and Next.js. Currently, I'm pursuing a degree in Computer Science at the University of West London, enriching my knowledge and skills in the ever-evolving field of technology.
          </p>
          <p>
            My journey into software development began with a background in management. As a former Restaurant Manager with over 22 years of experience, I bring a unique blend of creativity and problem-solving skills to my work. My ability to learn new languages and master skills under high-pressure environments has translated seamlessly into the world of programming.
          </p>
          <p>
            I specialize in front-end technologies such as React and Next.js, where I have successfully contributed to the development of dynamic and user-friendly web applications. My love for problem-solving and finding innovative solutions has been a driving force in my coding journey.
          </p>
          <p>
            Continuous learning is at the core of my professional values, and I am dedicated to staying abreast of the latest technologies and trends. Currently, I am expanding my horizons by exploring Kotlin and Swift for mobile development, aiming to become a well-rounded developer.
          </p>
          <p>
            When I'm not crafting beautiful and responsive user interfaces, you'll likely find me staying active and maintaining a healthy lifestyle. CrossFit is a crucial part of my routine, keeping me energized and focused. I thrive on challenges, whether it's solving coding puzzles or engaging in a rigorous CrossFit workout.
          </p>
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
              <FontAwesomeIcon icon={faSwift} color="#F05138" />
            </div>
            <div className="face6">
            <FontAwesomeIcon icon={faAndroid} color="#3DDC84" />
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
