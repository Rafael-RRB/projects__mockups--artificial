import './GalleryThumbnail.css';

function GalleryThumbnail(props) {
  const paths = props.thumbList;
  const viewList = props.viewList;
  const sourceList = props.sourceList;
  const altList = props.altList;

  // Function used when a thumbnail is clicked.
  function clickThumbnails(view, source, alt) {

    const mainImage = document.getElementById('mainImage');
    const buttonDownload = document.getElementById('buttonDownload');
    const buttonNewTab = document.getElementById('buttonNewTab');

    mainImage.setAttribute('src', `/static/pages/gallery/view/${view}.webp`);
    mainImage.setAttribute('alt', alt);
    [buttonDownload, buttonNewTab].forEach(button => button.setAttribute('href', `/static/pages/gallery/source/${source}.png`));
   
    localStorage.setItem('lastViewed', JSON.stringify({
      source: source,
      view: view,
      alt: alt
    }));

    props.update();
  }

  // Function used to render the categories and each thumbnail, for readability.
  function renderThumbnails(array) {
    return array.map((category, categoryIndex) => (
      <section className='thumbnails__category' key={`image-category-${categoryIndex}`}>
        {
          category.map((thumbnail, thumbnailIndex) => {
            const thumbnailBG = {
              backgroundColor: 'transparent',
              backgroundImage: `url(/static/pages/gallery/thumbnail/${thumbnail}.webp)`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            };
            // Creates a thumbnail inside the specific category.
            return (
              <button className='category__thumb' onClick={() => clickThumbnails(viewList[categoryIndex][thumbnailIndex], sourceList[categoryIndex][thumbnailIndex], altList[categoryIndex][thumbnailIndex])} style={thumbnailBG} key={`image-thumbnail-${categoryIndex}-${thumbnailIndex}}`}></button>
            )
          })
        }
      </section>
    ))
  }

  return (
    // Creates a section for each category (from five).
    <section className='preview__thumbnails'>
      { paths !== undefined ? renderThumbnails(paths) : undefined }
    </section>
  );
}

export default GalleryThumbnail;