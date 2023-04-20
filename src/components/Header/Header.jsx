import './Header.css';
import { Link } from "react-router-dom";

function Header(props) {
  /* handles opening the hamburger menu */
  function openSubmenu() {
    /* declaring consts */
    const submenu = document.getElementById('submenu');
    const menuOpen = document.getElementById('menuOpen');
    const menuClose = document.getElementById('menuClose');

    /* prevents double clicks */
    menuOpen.setAttribute('disabled', '');

    /* animation */
    submenu.style.display = 'flex';
    setTimeout(() => {
      submenu.style.right = '0rem';
    }, 10);
    setTimeout(() => {
      menuClose.removeAttribute('disabled');
    }, 210);
  }

  /* handles closing the submenu */
  function closeSubmenu() {
    /* declaring consts */
    const submenu = document.getElementById('submenu');
    const menuOpen = document.getElementById('menuOpen');
    const menuClose = document.getElementById('menuClose');

    /* prevents double clicks */
    menuClose.setAttribute('disabled', '');

    /* animation */
    submenu.style.right = '-21rem';
    setTimeout(() => {
      submenu.style.display = 'none';
      /* reenables the hamburger-menu button */
      menuOpen.removeAttribute('disabled');
    }, 210);
  }

  return (
    <header className="header">      
      <Link to='/' className="header__logo">
        <span className="a11y-hidden">Home</span>
      </Link>

      <section className="header__menu">
        <a href="" className="menu__account">
          
        </a>

        <button className="menu__submenu" id='menuOpen' onClick={openSubmenu}>
          <span className="a11y-hidden">Menu Hamburger</span>
        </button>
      </section>

      <nav className="submenu__options" id='submenu'>
        <button className="options__option option__close" id='menuClose' onClick={closeSubmenu}>
          <span className="link__text">Fechar...</span>
        </button>

        <Link to='/' className="options__option option__link link__home" onClick={closeSubmenu}>
          <span className="link__text">Página Inicial</span>
        </Link>

        <Link to='galeria' className="options__option option__link link__gallery" onClick={closeSubmenu}>
          <span className="link__text">Galeria</span>
        </Link>

        <Link to='ferramentas' className="options__option option__link link__tools" onClick={closeSubmenu}>
          <span className="link__text">Ferramentas</span>
        </Link>

        <Link to='contato' className="options__option option__link link__contact" onClick={closeSubmenu}>
          <span className="link__text">Contato</span>
        </Link>

        <Link to='sobre' className="options__option option__link link__about" onClick={closeSubmenu}>
          <span className="link__text">Sobre nós</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;