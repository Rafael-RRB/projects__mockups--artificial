import './Banner.css';

function Banner(props) {
  /* page identifier */
  const page = props.page;
  /* alternative text */
  const alt = props.alt;

  return(
    <picture className={`main__banner banner__${page}`}>
      <source className='banner__image' media='(max-width: 280px)' srcSet={`./img/banner/banner__${page}--min.webp`} />
      <source className='banner__image' media='(max-width: 540px)' srcSet={`./img/banner/banner__${page}--default.webp`} />
      <img className='banner__image' src={`./img/banner/banner__${page}--max.webp`} alt={alt} />
    </ picture>
  )
}

export default Banner;