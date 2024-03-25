import './Twizzlers.css';
import '../App.css';
import React from 'react';
import GoBackButton from "../GoBackButton/GoBackButton.jsx"

function Twizzlers() {

  return (
    <section className="Twizzlers">
      <div className="Container">
        <div className="GoBackButton-wrap">
        <GoBackButton/>
        </div>
        
        <h2 className="Project-header">Twizzlers package redesign</h2>
        <p className="Project-description">
        The main idea of this work is to redesign the package for well-known candies "Twizzlers". The old package becomes old-fashioned with a lot of different fonts and effects on the. The main advantages of the new pack are the harmony between elements, new graphics design, and modern fonts (primary and secondary). The juicy cherries were added to relate sweets to their flavor. In additional the advertisement poster was created. 
        </p>
          <img className='full-width-img'
          width="100%"
            alt="Twizzlers new package"
            src={require('../img/Twizzlers-pack-1.jpg')}
          ></img>
           <img
           className='full-width-img-no-padding'
          width="100%"
            alt="Twizzlers new package"
            src={require('../img/Twizzlers-pack-2.jpg')}
          ></img>
           <img
           className='full-width-img'
          width="100%"
            alt="Twizzlers new package"
            src={require('../img/Twizzlers-pack-3.jpg')}
          ></img>
           <img
           className='full-width-img'
          width="100%"
            alt="Twizzlers new package"
            src={require('../img/Twizzlers-pack-4.jpg')}
          ></img>
      </div>
    </section>
  );
}

export default Twizzlers;
