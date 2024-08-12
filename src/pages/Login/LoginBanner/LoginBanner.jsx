import './LoginBanner.css';

function LoginBanner(props) {
  /* images */
  const bannerMin = props.bannerList.bannerMin;
  const bannerSmall = props.bannerList.bannerSmall;
  const bannerDefault = props.bannerList.bannerDefault;
  const bannerMaximum = props.bannerList.bannerLarge;
  /* page identifier */
  const page = props.page;
  /* alternative text */
  const alt = props.alt;

  return (
    <picture className={`main__banner main__banner--${page}`}>
      <source media='(max-width: 280px)' srcSet={bannerMin} />
      <source media='(max-width: 576px)' srcSet={bannerSmall} />
      <source media='(max-width: 1200px)' srcSet={bannerDefault} />
      <img className='banner__image' width='1920' height='540' src={bannerMaximum} alt={alt} loading='eager' />
    </picture>
  )
}

export default LoginBanner;