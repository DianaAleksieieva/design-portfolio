import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="Header-section">
      <div className='Container'>
      <nav className="Header-navigation">
        <a className='Portfolio' href="./">
        Portfolio
        </a>
        <div className="Header-navigation-right">
            <Link className="Header-navigation-link" smooth to="/Hero">
            info</Link>
            <Link className="Header-navigation-link" smooth to="/Projects">
            Projects</Link>
            {/* <Link className="Header-navigation-link" smooth to="/Blog">
            Blog</Link> */}
        </div>
      </nav>
      </div>
    </header>
  );
}

export default Header;
