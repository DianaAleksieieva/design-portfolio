import './Lucky.css';
import '../App.css';

function Lucky() {
  return (
    <section className="LuckyGift">
      <div className="Container">
        <div className='Lucky-description-wrap'>
          <div>
            <h2 className="Project-header">Lucky Gift Web design</h2>
            <p className="Project-description">
              The Lucky Gift Online Shop project is a creative endeavor aimed at
              crafting an exceptional e-commerce platform dedicated to offering
              a wide array of heartfelt and meaningful gifts. This project
              encompasses several essential elements, including the website's
              structure, a distinctive logo, and two captivating banner
              variations.
            </p>
          </div>
          <img
            className="Lucky-Gift-mock"
            alt="Lucky-Gift mock"
            src={require('../img/Lucky-Gift-mock.png')}
          ></img>
        </div>
        <div className="Img-lucky-web">
          <div className="Img-lucky-web-wrap">
           
            <img
              className="LuckyGift-img-3"
              alt="Lucky-Gift example"
              src={require('../img/Lucky-Gift-2.jpg')}
            ></img>
          </div>
          <img
            className="LuckyGift-img-3"
            alt="Lucky-Gift example"
            src={require('../img/Lucky-Gift-3.jpg')}
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Lucky;
