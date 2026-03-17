import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';

const SocialStrip = () => {
    return (
        <div className="social-strip">
            <a href="mailto:ashish.jdh2020muk@email.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
            <a href="https://www.linkedin.com/in/ashish-bairwa20/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/ashishb20" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://leetcode.com/u/ashish_bairwa/" target="_blank" rel="noopener noreferrer"><FaCode /></a>
        </div>
    )
} 

export default SocialStrip;