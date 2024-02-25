import './Hero.css';
import '../App.css';
import { Link } from 'react-router-dom';
import HeroAnimation from "./HeroAnimation/HeroAnimation.jsx"
import aleksaLOGO from '../img/Aleksa-Diana.svg';
import myCV from '.././img/CV-Diana-Aleksieieva.pdf';

function Hero() {
  return (
    <section className="Hero-section">
      <div className="Container">
        <div className='Hero-content'>
          <div>
          <div className="descriprion-wrap">
            <img src={aleksaLOGO} className="Aleksa-logo"></img>
            <p className="Design-position">Graphic Designer </p>
          </div>
          <p className="Description">
            Highly creative graphic designer with 5 years of experience in Adobe
            Indesign, Illustrator, Photoshop, Figma, web and mobile design, and
            printing product design. From branding and marketing materials to
            user interfaces and print products, I possess a skill set that
            enables me to deliver creative solutions for a wide range of
            projects.
          </p>
        </div>

        <div className="Hero-buttons">
          <Link className="Primary-button" smooth to="/Projects">
            Projects
          </Link>
          <a
            href={myCV}
            target="_blank"
            download="AleksaDiana-CV.pdf"
            className="Secondary-button Secondary-button-right" 
          >
            Download CV
          </a>
          
        </div>
        </div>
        <HeroAnimation display="block"/>
      </div>
    </section>
  );
}

export default Hero;
