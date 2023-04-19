import './Banner.css';
import global from '../../constants.js';

function Banner(props) {
  /* page identifier */
  const page = props.page;
  /* alternative text */
  const alt = props.alt;

  return(
    <picture className={`main__banner main__banner--${page}`}>
      <source className='banner__image' media='(max-width: 280px)' srcSet={`./img/banner/banner__${page}--min.webp?v=${global.currentVersion}`} />
      <source className='banner__image' media='(max-width: 540px)' srcSet={`./img/banner/banner__${page}--default.webp?v=${global.currentVersion}`} />
      <img className='banner__image' src={`./img/banner/banner__${page}--max.webp?v=${global.currentVersion}`} alt={alt} />
    </ picture>
  )
}

export default Banner;