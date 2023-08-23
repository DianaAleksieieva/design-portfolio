import './Header.css';
import { HashLink } from 'react-router-hash-link';


function Header() {
  return (
    <header className="Header-section">
      <nav className="Header-navigation">
        <a className='Portfolio' href="./">
        Portfolio
        </a>
        <div className="Header-navigation-right">
            <a className='Header-navigation-link-active' >info</a>
            <HashLink className='Header-navigation-link' smooth to="../App.js#Shopify">projects</HashLink>
            <HashLink className='Header-navigation-link' smooth to="../App.js#Contacts">contacts</HashLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
