import './Hero.css';
import '../App.css';
import Header from '../Header/Header.jsx';
import aleksaLOGO from '../img/Aleksa-Diana.svg';
import { HashLink } from 'react-router-hash-link';

function Hero() {
  return (
    <section className="Hero-section">
      <div className="Container">
        <Header></Header>

        <div>
          <img width={738} src={aleksaLOGO} className="Aleksa-logo"></img>
          <p className="Design-possition">Graphic Designer </p>
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
          <div className='Hero-buttons-left'>
          <HashLink className='Hero-first-button' smooth to="../App.js#Shopify">Projects</HashLink>
            <a href="../img/CV-Diana-Aleksieieva.pdf" download="AleksaDiana-CV" className='Hero-second-button'>Download CV</a>
          </div>
          <HashLink className='Hero-button-right' smooth to="../App.js#Cosmetic">Projects</HashLink>
        </div>
      </div>
    </section>
  );
}

export default Hero;
