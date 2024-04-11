import './Londontown.css';
import '../App.css';
import GoBackButton from "../GoBackButton/GoBackButton.jsx"

function Londontown() {
  return (
    <section className="Londontown">
      <div className="Container">
      <div className="GoBackButton-wrap">
        <GoBackButton/>
        </div>
        <div className='Londontown-wrap'>
            <h2  className="Project-header">Londontown email marketing</h2>
            <p  >
            Engage with Londontown's loyal customers through captivating email designs that reflect the brand's luxurious aesthetic. 
            </p>
            </div>
          <img
          className="londontown-img-email"
            alt="Londontown-email"
            src={require('../img/Londontown-email.jpg')}
          ></img>
    
        <h2 align="center"  className="Project-header">Londontown nail polish pack design</h2>
        <p  >
        Indulge in a burst of vibrant hues and irresistible charm with our latest packaging design for Londontown nail polish. Inspired by the vivid colors of the bottels. 
            </p>
        <div className="Img-bc-web">
          <div className="Img-bc-web-wrap">
            <img
              className="londontown-img"
              alt="Londontown-pack-mock-up"
              src={require('../img/Londontown-pack-mock.jpg')}
            ></img>
            <img
              className="londontown-img"
              alt="brooklyn-cake example"
              src={require('../img/Londontown-pack.jpg')}
            ></img>
          </div>
        </div>

        <h2 align="center" className="Project-header">Londontown Photo Retouch</h2>
        <p  >
        I delicately refine the appearance of hands to create flawless and captivating images. By smoothing skin texture, eliminating blemishes, and enhancing natural contours, I achieve a polished and professional look.
        An image with a white background will be used for the company site. 
            </p>
        <div className="Img-bc-web">
          <div className="Img-bc-web-wrap">
            <div className='before-after-wrap'>
            <p className='img-capture-top'>Before</p>
            <img
              className="londontown-img"
              alt="Londontown-pack-mock-up"
              src={require('../img/Londontown-before.jpg')}
            ></img>
            </div>
            <div>
            <p className='img-capture-top'>After</p>
            <img
              className="londontown-img"
              alt="brooklyn-cake example"
              src={require('../img/Londontown-after.jpg')}
            ></img>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
}

export default Londontown;
