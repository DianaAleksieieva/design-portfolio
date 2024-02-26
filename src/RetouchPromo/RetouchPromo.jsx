import './RetouchPromo.css';
import '../App.css';
import GoBackButton from "../GoBackButton/GoBackButton.jsx"

function RetouchPromo() {
  return (
    <section className="RetouchPromo">
      <div className="Container">
      <div className="GoBackButton-wrap">
        <GoBackButton/>
        </div>
        <h2 className="RetouchPromo-header">Retouch promo materials design</h2>
           <div className='RetouchPromo-wrap'>
           <img
            className="RetouchPromo-img-2"
            alt="ClothLookbook example"
            src={require('../img/retouching_promo_2.jpg')}
          ></img>
          <img
            className="RetouchPromo-img"
            alt="ClothLookbook example"
            src={require('../img/retouching_promo_1.jpg')}
          ></img>
       </div>
      </div>
    </section>
  );
}

export default RetouchPromo;
