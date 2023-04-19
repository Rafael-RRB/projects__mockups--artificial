import './Header.css';
import { Outlet, Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">      
      <Link to='/' className="header__logo">
        <span className="a11y-hidden">Home</span>
      </Link>

      <section className="header__menu">
        <a href="" className="menu__account">
          
        </a>

        <button className="menu__submenu">
          <span className="a11y-hidden">Menu Hamburger</span>
        </button>
      </section>

      <nav className="submenu__options">
        <button className="options__option option__close">
          <span className="link__text">Fechar...</span>
        </button>

        <Link to='/' className="options__option option__link link__home">
          <span className="link__text">Página Inicial</span>
        </Link>

        <Link to='galeria' className="options__option option__link link__gallery">
          <span className="link__text">Galeria</span>
        </Link>

        <Link to='ferramentas' className="options__option option__link link__tools">
          <span className="link__text">Ferramentas</span>
        </Link>

        <Link to='contato' className="options__option option__link link__contact">
          <span className="link__text">Contato</span>
        </Link>

        <Link to='sobre' className="options__option option__link link__about">
          <span className="link__text">Sobre nós</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;