import './Header.css';

function Header(props) {
  return (
    <header className="header">
      <a href="" className="header__logo">
        <span className="a11y-hidden">Home</span>
      </a>

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