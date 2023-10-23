import './ForthExample.css';
import '../App.css';

function ForthExample() {
  return (
    <section className="BrooklynCake">
      <div className="Container">
        <div className="BrooklynCake-description-wrap">
          <div>
            <h2 className="Project-header">Brooklyn Cake Brand Design</h2>
            <p className="Project-description">
              The brand design was created for the Brooklyn Cake factory. The
              logo is on a blue background with the chocolate cake was
              illustrated. Also, was chosen the font for the company name. For
              the different flavors, I illustrated pictures and also created the
              home page for a company site.
            </p>
          </div>
          <img
            className="img-no-shadow"
            alt="brooklyn-cake example"
            src={require('../img/brooklyn-cake-logo.jpg')}
          ></img>
        </div>
        <div className="Img-lucky-web">
          <div className="Img-lucky-web-wrap">
            <img
              className="brooklyn-cake-img"
              alt="brooklyn-cake example"
              src={require('../img/brooklyn-cake-sitejpg.jpg')}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForthExample;
