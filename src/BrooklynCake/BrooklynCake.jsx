import './BrooklynCake.css';
import '../App.css';

function BrooklynCake() {
  return (
    <section className="BrooklynCake">
      <div className="Container">
        <div className="BrooklynCake-description-wrap">
          <div>
            <h2 className="Project-header">Brooklyn Cake Brand Design</h2>
            <p className="Brooklyn-project-description">
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
        <div className="Img-bc-web">
          <div className="Img-bc-web-wrap">
            <img
              className="brooklyn-cake-img"
              alt="brooklyn-cake example"
              src={require('../img/brooklyn-cake-sitejpg.jpg')}
            ></img>
            <img
              className="brooklyn-cake-img"
              alt="brooklyn-cake example"
              src={require('../img/modal-bc.jpg')}
            ></img>
          </div>
        </div>
      
      </div>
    </section>
  );
}

export default BrooklynCake;
