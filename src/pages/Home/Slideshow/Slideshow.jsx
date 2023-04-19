import './Slideshow.css';
import { Link } from 'react-router-dom';

function Slideshow(props) {
  const category = props.category;


  return(
    <article className="slideshow">
      <header className="slideshow__header">
        <Link to="galeria" className="slideshow__header__link">
          <span className="a11y-hidden">Link para Galeria</span>
        </Link>

        <h2 className="slideshow__header__title">{category}</h2>
      </header>

      <main className="slideshow__main">
        
      </main>

      <footer className="slideshow__footer">
        <a href="#" className="slideshow__footer__thumbnails"></a>
        <a href="#" className="slideshow__footer__thumbnails"></a>
        <a href="#" className="slideshow__footer__thumbnails"></a>
        <a href="#" className="slideshow__footer__thumbnails"></a>
        <a href="#" className="slideshow__footer__thumbnails"></a>
        <a href="#" className="slideshow__footer__thumbnails"></a>
        <a href="#" className="slideshow__footer__thumbnails"></a>
        <a href="#" className="slideshow__footer__thumbnails"></a>
      </footer>
    </article>
  );
}

export default Slideshow;