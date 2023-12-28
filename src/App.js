import './App.css';
import Hero from "./Hero/Hero.jsx"
import Shopify from "./Shopify/Shopify.jsx"
import Cosmetiques from "./Cosmetiques/Cosmetiques.jsx"
import Lucky from "./Lucky/Lucky.jsx"
import BrooklynCake from "./BrooklynCake/BrooklynCake.jsx"
import KittensForSale from "./KittensForSale/KittensForSale.jsx"
import ClothLookbook from "./ClothLookbook/ClothLookbook.jsx"
import RetouchPromo from "./RetouchPromo/RetouchPromo.jsx"
import Calendar from "./Calendar/Calendar.jsx"
import SockHub from "./SockHub/SockHub.jsx"
import Footer from "./Footer/Footer.jsx"


function App() {
  return (
    <div className="Aleksa-portfolio">
      <Hero ></Hero>
      <div id="Shopify" >
      <Shopify ></Shopify>
      </div>
      <div id="Cosmetic" ><BrooklynCake   ></BrooklynCake></div>
      <div id="Cosmetic" ><KittensForSale   ></KittensForSale></div>
      <div id="Cosmetic" ><Cosmetiques   ></Cosmetiques></div>
      <div id="Cosmetic" ><Lucky   ></Lucky></div>
      <div id="Cosmetic" ><ClothLookbook   ></ClothLookbook></div>
      <div id="Cosmetic" ><RetouchPromo   ></RetouchPromo></div>
      <div id="Cosmetic" ><Calendar   ></Calendar></div>
      <div id="Cosmetic" ><SockHub   ></SockHub></div>
      <div id="Contacts" ><Footer id="Contact"></Footer></div>
      
      
    </div>
  );
}

export default App;
