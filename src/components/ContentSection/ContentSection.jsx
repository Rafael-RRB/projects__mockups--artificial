import "./ContentSection.css";

function ContentSection(props) {
  const HeadingLevel = `h${props.object.headingLevel}`;
  const identifier = props.object.identifier;
  const title = props.object.title;
  const text = props.object.text;
  const src = props.object.src;
  const alt = props.object.alt;
  let pictureArray = [];

  if(src !== undefined) {
    src.forEach((currentSource, index) => pictureArray.push(
      (
        <picture className="content__image" key={`picture-${identifier}-${index}`}>
          <source className='image__decoration' media='(max-width: 280px)' srcSet={`${currentSource}--min.webp`} />
          <source className='image__decoration' media='(max-width: 540px)' srcSet={`${currentSource}--min.webp`} />
          <img className='image__decoration' src={`${currentSource}--min.webp`} alt={`${alt}`} />
        </picture>
      )
    ));
  }

  return(
    <article className="articles__content">
      {pictureArray}
      
      <HeadingLevel className='content__heading' >{title}</HeadingLevel>

      <p className="content__text">{text}</p>
    </article>
  );
}

export default ContentSection;