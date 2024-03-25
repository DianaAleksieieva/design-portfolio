import { Link } from 'react-router-dom';
import './Projects.css';
import '../App.css';
import Header from '../Header/Header.jsx';
import ShopifyIMG from "../img/projects/ShopifyIMG.jpg"
import BrooklynCakeIMG from "../img/projects/BrooklynCakeIMG.jpg"
import ClothLookbookIMG from "../img/projects/LookBookIMG.jpg"
import KittensForSaleIMG from "../img/projects/KittensIMG.jpg"
import RetouchPromoIMG from "../img/projects/RetouchIMG.jpg"
import CalendarIMG from "../img/projects/CalendarIMG.jpg"
import CosmetiquesIMG from "../img/projects/CosmeticEmaiLIMG.jpg"
import LuckyIMG from "../img/projects/LuckyIMG.jpg"
import SockHubIMG from "../img/projects/SockHubIMG.jpg"
import TwizzlersIMG from "../img/projects/TwizzlersIMG.jpg"

function Projects() {
  return (
    <div className='Projects-section'>
      <Header></Header>
    <div className="Container">
<h2 className='second-caption'>MY PROJECTS</h2>
<ul className='Project-example-list'>
<li className='Project-example-item'>
<Link className='Project-example-card' smooth to="/Shopify">
  <img src={ShopifyIMG} alt="Project-1"/> 
  <h3 className="Project-example-caption">Shopify Cloth App</h3>
  </Link>
</li>
<li className='Project-example-item'>
<Link className='Project-example-card' smooth to="/Twizzlers">
  <img src={TwizzlersIMG} alt="Project-1"/> 
  <h3 className="Project-example-caption">Twizzlers Redesign</h3>
  </Link>
  
</li>
<li className='Project-example-item'>
<Link className='Project-example-card' smooth to="/BrooklynCake">
  <img src={BrooklynCakeIMG} alt="Project-2"/> 
  <h3 className="Project-example-caption">Brooklyn Cake</h3>
  </Link>
</li>
<li className='Project-example-item'>
<Link className='Project-example-card' smooth to="/KittensForSale">
  <img src={KittensForSaleIMG} alt="Project-4"/> 
  <h3 className="Project-example-caption">Kittens For Sale Flyers</h3>
  </Link>
</li>
<li className='Project-example-item'>
<Link className='Project-example-card' smooth to="/ClothLookbook">
  <img src={ClothLookbookIMG} alt="Project-3"/> 
  <h3 className="Project-example-caption">Moka Lookbook</h3>
  </Link>
</li>
<li className='Project-example-item'>
<Link className='Project-example-card' smooth to="/RetouchPromo">
  <img src={RetouchPromoIMG} alt="Project-5"/> 
  <h3 className="Project-example-caption">Retouch Promo Banner</h3>
  </Link>
</li>
{/* <li className='Project-example-item'>
<Link className='Project-example-card' smooth to="/Calendar">
  <img src={CalendarIMG} alt="Project-6"/> 
  <h3 className="Project-example-caption">Calendar for Printing</h3>
  </Link>
</li> */}

<li className='Project-example-item'>
<Link className='Project-example-card' smooth to="/Lucky">
  <img src={LuckyIMG} alt="Project-8"/> 
  <h3 className="Project-example-caption">Lucky Gift Web</h3>
  </Link>
</li>
<li className='Project-example-item'>
<Link className='Project-example-card' smooth to="/Cosmetiques">
  <img src={CosmetiquesIMG} alt="Project-7"/> 
  <h3 className="Project-example-caption">Cosmetiques emails</h3>
  </Link>
</li>
<li className='Project-example-item'>
<Link className='Project-example-card' smooth to="/SockHub">
  <img src={SockHubIMG} alt="Project-9"/> 
  <h3 className="Project-example-caption">SockHub Lables</h3>
  </Link>
</li>


</ul>

  </div>
  </div>
  );
}

export default Projects;
