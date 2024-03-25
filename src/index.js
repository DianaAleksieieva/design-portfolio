import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Hero from './Hero/Hero.jsx';
import Shopify from './Shopify/Shopify.jsx';
import Cosmetiques from './Cosmetiques/Cosmetiques.jsx';
import Lucky from './Lucky/Lucky.jsx';
import BrooklynCake from './BrooklynCake/BrooklynCake.jsx';
import KittensForSale from './KittensForSale/KittensForSale.jsx';
import ClothLookbook from './ClothLookbook/ClothLookbook.jsx';
import RetouchPromo from './RetouchPromo/RetouchPromo.jsx';
import Calendar from './Calendar/Calendar.jsx';
import SockHub from './SockHub/SockHub.jsx';
import Twizzlers from './Twizzlers/Twizzlers.jsx';
import Projects from './Projects/Projects.jsx';
import BlogPage from './BlogPage/BlogPage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="hero" index element={<App />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="/shopify" element={<Shopify />} />
          <Route path="/brooklynCake" element={<BrooklynCake />} />
          <Route path="/kittensForSale" element={<KittensForSale />} />
          <Route path="/cosmetiques" element={<Cosmetiques />} />
          <Route path="/lucky" element={<Lucky />} />
          <Route path="/clothLookbook" element={<ClothLookbook />} />
          <Route path="/retouchPromo" element={<RetouchPromo />}/>
          <Route path="/sockHub" element={<SockHub/>} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/twizzlers" element={<Twizzlers />} />
        </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);

