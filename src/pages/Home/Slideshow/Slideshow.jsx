import './Slideshow.css';
import { Link } from 'react-router-dom';


function Slideshow(props) {
  const category = props.category;
  const title = props.title;
  const imageList = props.imageList;

  /* scrolls to the heading (with offset) and scrolls to the correct image */
  function scrollThumbnail(targetID) {
    const imageTarget = document.getElementById(targetID);
    const horizontalScroll = imageTarget.offsetLeft;

    // This is supposed to scroll up, to the heading, but maybe it isn't good for UX..? It didn't feel good on a phone, using landscape mode.
    // window.scrollTo(0, heightValue);

    imageTarget.parentElement.scrollTo({
      left: horizontalScroll - (imageTarget.offsetWidth / 2),
      top: 0,
      behavior: 'smooth'
    });
  }

  /* scrolls to the left or to the right */
  function scrollCarousel(targetID, direction) {
    const carouselTarget = document.getElementById(targetID);
    const currentScroll = carouselTarget.scrollLeft;
    const scrollAmount = direction === 'backward' ? -256 : 256;

    carouselTarget.scrollTo({
      left: currentScroll + scrollAmount,
      top: 0,
      behavior: 'smooth'
    });
  }

  /* when the user goes to another page, quickly scroll to top */
  function pageScroll() {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }, 10)
  }

  return(
    <article className={`slides__slideshow slides__slideshow--${category}`}>
      <header className={`slideshow__header header__${category}`} id={`slideshow-header-${category}`}>
        <Link onClick={pageScroll} to="galeria" className="slideshow__header__link">
          <span onClick={scrollTo({top: 0, left: 0, behavior: 'smooth'})} className="a11y-hidden">Link para Galeria</span>
        </Link>

        <h2 className="slideshow__header__title">{title}</h2>
      </header>

      <main className="slideshow__main" id={`slideshow-main-${category}`}>
        {imageList[0].map((url, index) => (
          <img src={url} alt={imageList[2][index]} id={`${category}${index}`} key={`image-${index}`} loading={category !== 'character' ? 'lazy' : 'eager'} className="slideshow__main__image" />
        ))}
      </main>

      {/* I could have used sticky, instead of absolute, but the former has slightly less support... but maybe I shouldn't bother with Internet Explorer? */}
      <button className='slideshow__button slideshow__button--previous' onClick={event => scrollCarousel(`slideshow-main-${category}`, 'backward')}>
        <span className="a11y-hidden">Imagem anterior</span>
      </button>

      <button className='slideshow__button slideshow__button--next' onClick={event => scrollCarousel(`slideshow-main-${category}`, 'forward')}>
        <span className="a11y-hidden">Imagem posterior</span>
      </button>

      <footer className="slideshow__footer">
        {imageList[1].map((url, index) => (
          <button onClick={event => scrollThumbnail(`${category}${index}`)} style={{backgroundImage: `url(${imageList[1][index]})`}} key={`thumb-${index}`} className="slideshow__footer__thumbnails">
            <span className="a11y-hidden">{imageList[2][index]}</span>
          </button>
        ))}
      </footer>
    </article>
  );
}

export default Slideshow;