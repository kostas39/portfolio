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
            Hi there! I'm Kostas, a results-driven front-end developer with a solid background in cutting-edge technologies like React and Next.js. Over the past year, I've been contributing my skills as a front-end developer at Flashy Cash, specializing in creating dynamic and user-friendly web applications.
          </p>
          <p>
            As I evolve in my coding journey, I'm excited to share that my focus is shifting towards data engineering. I am passionate about leveraging technology to extract meaningful insights from data, and I'm actively upskilling in languages like Python and SQL to make this transition seamless. My problem-solving mindset and commitment to delivering high-quality work remain unwavering, and I'm ready to bring these skills to the dynamic field of data engineering.
          </p>
          <p>
            Collaborative environments fuel my enthusiasm, and I'm eager to apply my expertise to design robust data-driven solutions. Continuous learning has been a cornerstone of my professional growth, and I'm thrilled to embark on this journey towards becoming a proficient data engineer. Stay tuned for exciting developments as I expand my horizons in the ever-evolving tech landscape!
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
