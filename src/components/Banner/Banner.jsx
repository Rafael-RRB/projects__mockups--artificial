import './Banner.css';

function Banner(props) {
  /* images */
  const bannerSmall = props.bannerList.bannerSmall;
  const bannerDefault = props.bannerList.bannerDefault;
  const bannerMaximum = props.bannerList.bannerLarge;
  /* page identifier */
  const page = props.page;
  /* alternative text */
  const alt = props.alt;

  return(
    <picture className={`main__banner main__banner--${page}`}>
      <source className='banner__image' media='(max-width: 280px)' srcSet={bannerSmall} />
      <source className='banner__image' media='(max-width: 540px)' srcSet={bannerDefault} />
      <img className='banner__image' src={bannerMaximum} alt={alt} />
    </picture>
  )
}


export default Banner;