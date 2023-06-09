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
        <img className='figure__image' id='mainImage' src={`/static/pages/gallery/view/${currentImage}.webp`} alt={altText} />
        <button className='figure__favorite'>O</button>
      </figure>
      
      <div className='preview__buttons' >
        <a href={`/static/pages/gallery/source/${downloadLink}.png`} id='buttonDownload' download={true} className='preview__button preview__button--download'>Download</a>
        <a href={`/static/pages/gallery/source/${downloadLink}.png`} id='buttonNewTab' target='_blank' className='preview__button preview__button--newtab'>Nova guia</a>
      </div>
    </article>
  )
}

export default GalleryContent;