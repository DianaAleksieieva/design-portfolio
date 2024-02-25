import './Shopify.css';
import '../App.css';
import React from 'react';
import GoBackButton from "../GoBackButton/GoBackButton.jsx"

function Shopify() {

  return (
    <section className="Shopify">
      <div className="Container">
        <div className="GoBackButton-wrap">
        <GoBackButton/>
        </div>
        
        <h2 className="Project-header">Shopify.com</h2>
        <p className="Project-description">
          The mobile interface welcomes users with a captivating welcome page
          and guides them effortlessly through product categories. With a
          user-friendly cart that ensures easy navigation and a streamlined
          checkout process, "Shopify.com" empowers customers to indulge in a
          seamless shopping journey. Step into a world of fashion-forward
          possibilities, where mobile shopping becomes a pleasure.
        </p>
        <div className="Img-gallery">
          <img
            className="Project-img"
            width="320px"
            alt="Shopify example"
            src={require('../img/Shopify-1.png')}
          ></img>
          <img
            className="Project-img"
            width="320px"
            alt="Shopify example"
            src={require('../img/Shopify-2.png')}
          ></img>
          <img
            className="Project-img"
            width="320px"
            alt="Shopify example"
            src={require('../img/Shopify-3.png')}
          ></img>
          <img
            className="Project-img"
            width="320px"
            alt="Shopify example"
            src={require('../img/Shopify-4.png')}
          ></img>
        </div>
      </div>
    </section>
  );
}

export default Shopify;
