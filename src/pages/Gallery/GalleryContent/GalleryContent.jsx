import './GalleryContent.css';

function GalleryContent(props) {
  const title = props.title;
  const currentImage = props.view;
  const downloadLink = props.source;
  const altText = props.alt;

  return (
    <article className='preview__content' >
      <h1 className='content__title'>{title}</h1>
      
      <figure className='content__figure' >
        <img className='figure__image' id='mainImage' src={`/src/assets/img/pages/gallery/view/${currentImage}.webp`} alt={altText} />

        <button className='figure__favorite'></button>
      </figure>
      
      <div className='preview__buttons' >
        <a href={`/src/assets/img/pages/gallery/source/${downloadLink}.png`} id='buttonDownload' download={true} className='preview__button preview__button--download'>download</a>
        <a href={`/src/assets/img/pages/gallery/source/${downloadLink}.png`} id='buttonNewTab' target='_blank' className='preview__button preview__button--newtab'>nova guia</a>
      </div>
    </article>
  )
}

export default GalleryContent;