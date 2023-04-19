import './Banner.css';

function Banner(props) {
  /* images */
  const imageMinimum = props.imageMinimum;
  const imageDefault = props.imageDefault;
  const imageMaximum = props.imageMaximum;
  /* page identifier */
  const page = props.page;
  /* alternative text */
  const alt = props.alt;

  return(
    <picture className={`main__banner main__banner--${page}`}>
      <source className='banner__image' media='(max-width: 280px)' srcSet={imageMinimum} />
      <source className='banner__image' media='(max-width: 540px)' srcSet={imageDefault} />
      <img className='banner__image' src={imageMaximum} alt={alt} />
    </ picture>
  )
}


export default Banner;