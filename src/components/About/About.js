import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCode, faCogs } from '@fortawesome/free-solid-svg-icons';
import { faAws, faGoogle, faDocker } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

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
            Hello! I'm Kostas, a motivated Cloud Engineer with a solid foundation in iOS and front-end development. I have recently transitioned to the field of cloud computing, bringing my expertise in mobile application development to the dynamic world of cloud engineering.
          </p>
          <p>
            Previously, I worked as a Front End Developer Intern at Flashy Cash, where I specialized in developing responsive web interfaces and enhancing app interactivity through API integration. This experience honed my technical skills and problem-solving abilities, which I now apply to designing and managing scalable cloud solutions.
          </p>
          <p>
            Currently, I am focusing on cloud engineering and have earned the <strong>Microsoft Certified: Azure Solutions Architect Expert</strong> certification. I am proficient in leveraging Microsoft Azure to create robust and efficient cloud infrastructures, and I am expanding my knowledge of other cloud platforms such as AWS and Google Cloud.
          </p>
          <p>
            My technical expertise includes Azure services, Infrastructure as Code (IaC) with Terraform and ARM templates, and automation using CI/CD pipelines. I am passionate about continuous learning and am pursuing a Bachelor of Computer Science to further deepen my understanding of cloud technologies.
          </p>
          <p>
            I am excited about the challenges and opportunities in cloud engineering and am eager to contribute my skills to innovative projects that harness the power of cloud computing. Explore my portfolio to see how I leverage cloud technologies to drive innovation and efficiency.
          </p>
        </div>
        <div className="cube-container">
          <div className="stage-cube-cont">
            <div className='cubespinner'>
              <div className="face1">
                <FontAwesomeIcon icon={faCloud} color="#0078D4" /> {/* Azure cloud icon */}
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faAws} color="#FF9900" /> {/* AWS icon */}
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faGoogle} color="#4285F4" /> {/* Google Cloud icon */}
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faCode} color="#623CE4" /> {/* Terraform icon */}
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faDocker} color="#2496ED" /> {/* Docker icon */}
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faCogs} color="#2088FF" /> {/* CI/CD, generic tools icon */}
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
