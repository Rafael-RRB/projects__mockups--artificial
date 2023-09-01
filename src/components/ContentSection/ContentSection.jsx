import "./ContentSection.css";

function ContentSection(props) {
  const HeadingLevel = `h${props.object.headingLevel}`;
  const identifier = props.object.identifier;
  const modifier = props.object.modifier === undefined ? '' : `--${props.object.modifier}`;
  const title = props.object.title;
  const text = props.object.text;
  const src = props.object.src;
  const alt = props.object.alt;
  
  let pictureArray = [];

  // "ContentSection" wasn't as reusable as I thought, when I started adding Desktop CSS...
  const classes = {
    sec: `content__images${modifier !== undefined ? ` content__images${modifier}` : ''}`,
    secPic: `content__image${modifier !== undefined ? ` content__image${modifier}` : ''}`,
    secPicSrc: `image__decoration${modifier !== undefined ? ` image__decoration${modifier}` : ''}`,
    secPicImg: `image__decoration${modifier !== undefined ? ` image__decoration${modifier}` : ''}`,
    art: `articles__content${modifier !== undefined ? ` articles__content${modifier}` : ''}`,
    artSec: `content__text${modifier !== undefined ? ` content__text${modifier}` : ''}`,
    artHdg: `text__heading${modifier !== undefined ? ` text__heading${modifier}` : ''}`,
    artTxt: `text__paragraph${modifier !== undefined ? ` text__paragraph${modifier}` : ''}`,
  }

  if(src !== undefined) {
    src.forEach((currentSource, index) => pictureArray.push(
      (
        <picture className={`${classes.secPic}`} key={`picture-${identifier}-${index}`}>
          <source media='(max-width: 280px)' srcSet={`${currentSource}--min.webp`} />
          <source media='(max-width: 540px)' srcSet={`${currentSource}--min.webp`} />
          <img className={`${classes.secPicImg}`} src={`${currentSource}--min.webp`} alt={`${alt}`} />
        </picture>
      )
    ));
  }

  console.log('pictureArray length ? ' + pictureArray.length);

  return(
    <article className={`${classes.art}`}>
      {pictureArray.length > 1 ? <section className={`${classes.sec}`}>{pictureArray}</section> : pictureArray}
      
      <section className={`${classes.artSec}`}>
        <HeadingLevel className={`${classes.artHdg}`} >{title}</HeadingLevel>
        <p className={`${classes.artTxt}`} >{text}</p>
      </section>
    </article>
  );
}

export default ContentSection;