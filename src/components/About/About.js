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
              Hello, I'm Kostas — a Platform Engineer with hands-on experience designing and operating cloud infrastructure, CI/CD pipelines, and Kubernetes-based platforms.
            </p>
            <p>
              Currently working as a DevOps Engineer at EY, I focus on building scalable and reliable systems using Infrastructure as Code (Terraform), container orchestration (Kubernetes), and automated deployment pipelines across cloud environments.
            </p>
            <p>
              My background spans AWS (Solutions Architect Associate certified), Azure, and increasingly GCP, giving me a multi-cloud perspective when designing platforms. I specialize in translating business requirements into resilient, production-ready architectures with a strong emphasis on automation, scalability, and maintainability.
            </p>
            <p>
              I have practical experience working with real-world environments, improving deployment workflows, troubleshooting distributed systems, and collaborating across teams to deliver stable and efficient platforms.
            </p>
            <p>
              I am currently expanding my platform engineering expertise into Google Cloud Platform (GCP), focusing on designing scalable, production-ready architectures and preparing for the Professional Cloud Architect certification.
            </p>
            <p>
              I am currently focused on advancing my expertise in platform engineering, cloud architecture, and Kubernetes ecosystems, with the goal of building high-performance, developer-friendly platforms at scale.
            </p>
            <p>
              Currently open to Platform Engineering opportunities in London, focusing on cloud-native infrastructure and scalable system design.
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
