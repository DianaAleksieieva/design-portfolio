import './App.css';
import Hero from "./Hero/Hero.jsx"
import FirstExample from "./FirstExample/FirstExample.jsx"
import SecondExample from "./SecondExample/SecondExample.jsx"
import ThirdExample from "./ThirdExample/ThirdExample.jsx"
import BrooklynCake from "./BrooklynCake/BrooklynCake.jsx"
import KittensForSale from "./KittensForSale/KittensForSale.jsx"
import Footer from "./Footer/Footer.jsx"


function App() {
  return (
    <div className="Aleksa-portfolio">
      <Hero ></Hero>
      <div id="Shopify" >
      <FirstExample ></FirstExample>
      </div>
      <div id="Cosmetic" ><BrooklynCake   ></BrooklynCake></div>
      <div id="Cosmetic" ><KittensForSale   ></KittensForSale></div>
      <div id="Cosmetic" ><SecondExample   ></SecondExample></div>
      <div id="Cosmetic" ><ThirdExample   ></ThirdExample></div>
      <div id="Contacts" ><Footer id="Contact"></Footer></div>
      
      
    </div>
  );
}

export default App;
