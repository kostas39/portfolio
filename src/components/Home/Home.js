import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import LogoTitle from '../../assets/images/letter-k.png';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Loader from 'react-loaders';



const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = 'ostas'.split('');
  const jobArray = 'Cloud Engineer'.split('');

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
        <img src="https://img.shields.io/badge/Microsoft%20Azure-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white" alt="azure"/>
          <img src="https://img.shields.io/badge/Amazon%20AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="aws"/>
          <img src="https://img.shields.io/badge/Google%20Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" alt="google cloud"/>


          <img src="https://img.shields.io/badge/Terraform-623CE4?style=for-the-badge&logo=terraform&logoColor=white" alt="terraform"/>
          <img src="https://img.shields.io/badge/CloudFormation-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white" alt="cloudformation"/>
          <img src="https://img.shields.io/badge/ARM%20Templates-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white" alt="arm templates"/>


          <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="docker"/>
          <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="kubernetes"/>


          <img src="https://img.shields.io/badge/Azure%20DevOps-0078D7?style=for-the-badge&logo=azure-devops&logoColor=white" alt="azure devops"/>
          <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="github actions"/>
          <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white" alt="jenkins"/>


          <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="python"/>
          <img src="https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="bash"/>
          <img src="https://img.shields.io/badge/PowerShell-5391FE?style=for-the-badge&logo=powershell&logoColor=white" alt="powershell"/>



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
