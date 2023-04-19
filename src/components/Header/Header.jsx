import './Header.css';
import { Outlet, Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">      
      <Link to='/' className="header__logo">
        <span className="a11y-hidden">Home</span>
      </Link>

      <nav className="header__links">
        <a href="" className="links__account">
          
        </a>

        <button className="links__menu">
          
        </button>
      </nav>

    </header>
  );
}

export default Header;