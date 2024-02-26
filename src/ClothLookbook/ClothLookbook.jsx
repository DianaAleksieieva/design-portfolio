import './ClothLookbook.css';
import '../App.css';
import GoBackButton from "../GoBackButton/GoBackButton.jsx"

function ClothLookbook() {
  return (
    <section className="ClothLookbook">
      <div className="Container">
      <div className="GoBackButton-wrap">
        <GoBackButton/>
        </div>
        <h2 className="Project-header LookBookHeader">Clothes Lookbook - online interactive catalog design </h2>
        <div className='ClothLookbook-img-wrap'>
          <img
            className="ClothLookbook-img"
            alt="ClothLookbook example"
            src={require('../img/lookbook/lookbook-1.jpg')}
          ></img>
          <img
            className="ClothLookbook-img"
            alt="ClothLookbook example"
            src={require('../img/lookbook/lookbook-2.jpg')}
          ></img>
          <img
            className="ClothLookbook-img"
            alt="ClothLookbook example"
            src={require('../img/lookbook/lookbook-3.jpg')}
          ></img>
          <img
            className="ClothLookbook-img"
            alt="ClothLookbook example"
            src={require('../img/lookbook/lookbook-4.jpg')}
          ></img>
          <img
            className="ClothLookbook-img"
            alt="ClothLookbook example"
            src={require('../img/lookbook/lookbook-5.jpg')}
          ></img>
          <img
            className="ClothLookbook-img"
            alt="ClothLookbook example"
            src={require('../img/lookbook/lookbook-6.jpg')}
          ></img>
       </div>
      </div>
    </section>
  );
}

export default ClothLookbook;
