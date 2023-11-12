import './KittensForSale.css';
import '../App.css';

function KittensForSale() {
  return (
    <section className="KittensForSale">
      <div className="Container">
        <div className="KittensForSale-description-wrap">
          <img
            className="kittens-logo"
            alt="KittensForSale logo"
            src={require('../img/kittens-logo.png')}
          ></img>
          <div className='Kittens-project-description-text'>
            <h2 className="kittens-project-header">www.kittensup4sale.com</h2>
            <p className="Project-description-text">
              For this project was created print promo materials for a kitten
              store in Miami. The promos were prepared for print and were used
              as advertisements for cat exhibition.
            </p>
          </div>
        </div>
        <div className="kittens-promo">
          <img
            className="kittens-promo-img"
            alt="kittens-promos images"
            src={require('../img/kittens-up-promos.jpg')}
          ></img>
        </div>
      </div>
    </section>
  );
}

export default KittensForSale;
