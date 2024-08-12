import './GalleryThumbnail.css';
import { useState } from 'react';
 
function GalleryThumbnail(props) {
  const pages = props.pages;
  const [currentPage, setCurrentPage] = useState(parseInt(localStorage.galleryPage));

  // Function used when a thumbnail is clicked.
  function clickThumbnails(view, source, alt) {
    const mainImage = document.getElementById('mainImage');
    const favoriteButton = document.getElementById('favoriteButton');
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

    const currentImage = localStorage.lastViewed !== undefined ? JSON.parse(localStorage.lastViewed) : '';
    let loginUsername;
    let loginUserObject;
    let imageIsFavorite;
    if(JSON.parse(localStorage.loginStatus).status !== 'no-acc') {
      loginUsername = JSON.parse(localStorage.loginStatus).user;
      loginUserObject = JSON.parse(localStorage.loginList).findIndex(login => login.user === loginUsername);
      imageIsFavorite = (JSON.parse(localStorage.loginList)[loginUserObject].favorites.findIndex(images => images.source === currentImage.source));
    }
    
    // Only apply class if button exists
    if(favoriteButton !== null) {
      imageIsFavorite === -1 || undefined ? favoriteButton.setAttribute('class', 'figure__favorite figure__favorite--off') : favoriteButton.setAttribute('class', 'figure__favorite figure__favorite--on') ;
    }    
  }

  // Function used to render the categories and each thumbnail, for readability.
  function renderThumbnails(array) {    
    return pages[currentPage].map((element, index) => {
      const thumbnailBG = {
        backgroundColor: 'transparent',
        backgroundImage: `url(/static/pages/gallery/thumbnail/${element.thumbnail}.webp)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      };

      return (
        <button type='button' className='category__thumb' onClick={() => clickThumbnails(element.view, element.source, element.alt)} style={thumbnailBG} key={`image-thumbnail-${currentPage}-${index}}`}>
          <span className="a11y-hidden">{`Trocar imagem. Descrição: ${element.alt}`}</span>
        </button>
      );
    });
  }

  // Changes current page. Allows the user to go to the first, previous, next, and last pages.
  function pageChange(action, value) {
    switch(true) {
      case action === 'first':
        localStorage.setItem('galleryPage', `${0}`);
        setCurrentPage(0);
        break;
      case action === 'last':
        localStorage.setItem('galleryPage', `${pages.length - 1}`);
        setCurrentPage(pages.length - 1);
        break;
      case action === 'change':
        if(!(currentPage + value < 0 || currentPage + value > pages.length - 1)) {
          localStorage.setItem('galleryPage', `${currentPage + value}`);
          setCurrentPage(currentPage + value);
        }
        break;
      default:
        throw Error('action is not first, last, or change. Check the code.');
    }
  }

  return (
    // Creates a section for each category (from five).
    <section className='preview__thumbnails'>
      <section className='thumbnails__pages'>
        {renderThumbnails(pages)}
      </section>
      
      <section className='thumbnails__controls'>
        <section className='controls__buttons'>
          <button className='thumbnails__button thumbnails__button--first' disabled={currentPage === 0 ? true : false} onClick={event => pageChange('first')}></button>

          <button className='thumbnails__button thumbnails__button--previous' disabled={currentPage === 0 ? true : false} onClick={event => pageChange('change', -1)}></button>

          <div className='thumbnails__button thumbnails__button--page-number' disabled>{currentPage + 1}</div>

          <button className='thumbnails__button thumbnails__button--next' disabled={currentPage === pages.length - 1 ? true : false} onClick={event => pageChange('change', 1)}></button>

          <button className='thumbnails__button thumbnails__button--last' disabled={currentPage === pages.length - 1 ? true : false} onClick={event => pageChange('last')}></button>
        </section>

        <section className='controls__goto'>
          
        </section>
      </section>
      
    </section>
  );
}

export default GalleryThumbnail;