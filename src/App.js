import './App.css';
import Hero from "./Hero/Hero.jsx"
import FirstExample from "./FirstExample/FirstExample.jsx"
import SecondExample from "./SecondExample/SecondExample.jsx"
import ThirdExample from "./ThirdExample/ThirdExample.jsx"
import ForthExample from "./ForthExample/ForthExample.jsx"
import Footer from "./Footer/Footer.jsx"


function App() {
  return (
    <div className="Aleksa-portfolio">
      <Hero ></Hero>
      <div id="Shopify" >
      <FirstExample ></FirstExample>
      </div>
      <div id="Cosmetic" ><ForthExample   ></ForthExample></div>
      <div id="Cosmetic" ><SecondExample   ></SecondExample></div>
      <div id="Cosmetic" ><ThirdExample   ></ThirdExample></div>
      <div id="Contacts" ><Footer id="Contact"></Footer></div>
      
      
    </div>
  );
}

export default App;
