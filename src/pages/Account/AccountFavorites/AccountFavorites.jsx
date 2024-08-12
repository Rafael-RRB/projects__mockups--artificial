import './AccountFavorites.css';
import { GalleryContentFunction } from '../../Gallery/GalleryPreview/GalleryContent/GalleryContent.jsx';
import { useState } from 'react';

/*

Not used anymore.

*/

function AccountFavorites(props) {
  const [imageArray, setImageArray] = useState(props.object);
  const imageStyles = imageArray.map(image => ({
    backgroundImage: `url(/static/pages/gallery/view/${image.view}.webp)`,
    backgroundSize: 'cover',    
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }));

  // Not the best way to do this, but... let's just assume it's for better UX (user accidentaly removes a favorite, goes to gallery, sees the removed favorite image first)
  // Otherwise, I'll need to save the previous favorite, remove the image, then re-apply the old favorite.
  function setLastViewed(favorites, index) {
    localStorage.setItem('lastViewed', JSON.stringify({
      source: favorites[index].source,
      view: favorites[index].view,
      alt: favorites[index].alt
    }));
  }

  return (
    imageArray.length !== 0 ? (
    <section className='main__favorites'>
      <h1 className='favorites__title'>Favoritos</h1>

      <div className='favorites__gallery'>
        {imageArray.map((favorite, index) => (
          <article className='gallery__favorite-image' key={`personalFavorite__${index}`} style={imageStyles[index]}>
            <button className='image__remove' onClick={event => {
              /* Obs.: Added (but commented out) functionality to restore previous clicked image, due to a quirk in the code */  
              //const previousLastViewed = JSON.parse(localStorage.lastViewed);
              const previousImageArray = [...imageArray];
              previousImageArray.splice(index, 1);
              setLastViewed(imageArray, index);
              GalleryContentFunction.favoriteOnClick(event);
              setImageArray(previousImageArray);
              //localStorage.setItem('lastViewed', JSON.stringify(previousLastViewed));
              
            }}>X</button>
            <a href={`/static/pages/gallery/source/${favorite.source}.png`} className='image__download' download={true}>
              download
            </a>
          </article>
        ))}
      </div>
    </section>
  ) : '');
}

export default AccountFavorites;