import './Cosmetiques.css';
import '../App.css';
import GoBackButton from '../GoBackButton/GoBackButton.jsx';

function Cosmetiques() {
  return (
    <section className="Cosmetic">
      <div className="Container">
        <div className="GoBackButton-wrap">
          <GoBackButton />
        </div>
        <div className="Cosmetic-content">
          <div>
            <h2 className="Project-header">Lumière Cosmetiques email</h2>
            <p className="Project2-description">
              Lumière Cosmetiques' email marketing design captivates with its
              allure and elegance. A harmonious blend of stunning visuals and
              engaging content draws subscribers into the world of luxurious
              skincare and makeup. With exclusive offers, each email delivers a
              personalized and enchanting experience.
            </p>
            <div className="Promo-images-wrap">
            <img
                className="Cosmetic-img"
                alt="Cosmetic email example"
                src={require('../img/cosmetic-email.jpg')}
              ></img>
              <img
                className="Cosmetic-img"
                alt="Cosmetic promo example"
                src={require('../img/promo-1.jpg')}
              ></img>
              <img
                className="Cosmetic-img"
                alt="Cosmetic promo example"
                src={require('../img/promo-2.jpg')}
              ></img>

             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cosmetiques;
