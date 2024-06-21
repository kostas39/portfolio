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
              Hello! I'm Kostas, a motivated Cloud Engineer with a robust background in iOS and front-end development. Recently, I’ve transitioned to cloud computing, leveraging my expertise in mobile and web application development to excel in the dynamic realm of cloud engineering.
            </p>
            <p>
              My career began as a Front-End Developer Intern at Flashy Cash, where I honed my skills in developing responsive web interfaces and enhancing app interactivity through API integration. This experience solidified my technical acumen and problem-solving abilities, which I now apply to designing and managing scalable cloud solutions.
            </p>
            <p>
              Currently, I am expanding my focus to encompass AWS cloud engineering and am working towards earning the <strong>AWS Solutions Architect Associate</strong> certification. I have a strong foundation in creating robust cloud infrastructures using various cloud services, Infrastructure as Code (IaC) with Terraform and ARM templates, and automation through CI/CD pipelines. I am also exploring other cloud platforms like Microsoft Azure and Google Cloud to broaden my expertise.
            </p>
            <p>
              My technical expertise includes cloud service management, IaC, and cloud automation. I am committed to continuous learning and am pursuing a Bachelor of Computer Science to deepen my understanding of cloud technologies further.
            </p>
            <p>
              I am enthusiastic about the opportunities in cloud engineering and am eager to contribute my skills to innovative projects that harness the power of cloud computing. Explore my portfolio to see how I leverage cloud technologies to drive innovation and efficiency.
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
