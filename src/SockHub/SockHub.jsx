import './SockHub.css';
import '../App.css';
import GoBackButton from "../GoBackButton/GoBackButton.jsx"

function SockHub() {
  return (
    <section className="SockHub">
      <div className="Container">
      <div className="GoBackButton-wrap">
        <GoBackButton/>
        </div>
        <h2 className="SockHub-header">Sock Hub - label for socks design</h2>
           <div className='RetouchPromo-wrap'>
          <img
            className="SockHub-img"
            alt="ClothLookbook example"
            src={require('../img/socks-lsble-1.jpg')}
          ></img>
          <img
            className="SockHub-img"
            alt="ClothLookbook example"
            src={require('../img/socks-lsble-2.jpg')}
          ></img>
       </div>
      </div>
    </section>
  );
}

export default SockHub;
