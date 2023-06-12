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
        <p>I am a Software Developer who recently graduated from Le Wagon coding Bootcamp in December 2022. With a background in management and a passion for programming, I bring a unique blend of creativity and problem-solving skills to my work.</p>
        <p>As a developer, I love to problem-solve and find innovative solutions. My training as a Restaurant Manager has honed my ability to learn new languages, master skills, and thrive in high-pressure environments. I bring a clear and focused approach to programming, leveraging my experience in hospitality industry for the past 22 years.</p>
        <p>Continuous learning is of utmost importance to me, and I am dedicated to staying updated with the latest technologies and trends. Currently, I am expanding my knowledge by exploring Kotlin and Swift for mobile development, aiming to become a well-rounded developer.
           Aside from coding, I enjoy staying active and maintaining a healthy lifestyle. Crossfit has become a part of my routine, keeping me energized and focused. When I'm not at a computer, you'll likely find me engaged in a challenging Crossfit workout.</p>
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
