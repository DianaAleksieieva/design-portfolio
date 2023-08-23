import './Footer.css';
import '../App.css';

function Footer() {
  return (
    <section className="Footer">
      <div className="Container">

        <h3 className='Footer-header'>Contact</h3>
        <p className='location'><span className='Location-bold'>Location:</span> New York City</p>
        <div className='contact-info'>
            <a className='contact-info-text' href='mailto:aleksodiana@gmail.com'>aleksodiana@gmail.com</a>
            <a className='contact-info-text' href='https://www.linkedin.com/in/diana-aleksieieva-0687921b2/'>LinkedIn</a>
        </div>

      </div>
    </section>
  );
}

export default Footer;
