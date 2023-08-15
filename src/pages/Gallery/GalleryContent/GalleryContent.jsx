import './GalleryContent.css';
import { useState } from 'react';


// Adds and removes a favorite
function favoriteOnClick(event) {
  const loginList = JSON.parse(localStorage.loginList);
  const userTarget = JSON.parse(localStorage.loginStatus).user;
  const userAlter = JSON.parse(localStorage.loginList).find(object => object.user === userTarget);
  const userFavoriteList = userAlter.favorites.map(object => object.source);
  const userIndex = loginList.findIndex(user => user.user === userTarget);
  const lastViewed = JSON.parse(localStorage.lastViewed);

  // Prevents problems
  if(userAlter !== undefined) {
    if(userFavoriteList.includes(lastViewed.source)) {
      // Unfavorites current image
      userAlter.favorites.splice(userFavoriteList.indexOf(lastViewed.source), 1);
    } else {
      // Favorites current image
      userAlter.favorites.push(lastViewed);
    }
    loginList[userIndex] = userAlter;
    localStorage.setItem('loginList', JSON.stringify(loginList));
  } else {
    // Throws an error for a specific scenario
    throw Error('Mismatch: user is logged in, but userList does not include user');
  }
}

function GalleryContent(props) {
  const title = props.title;
  const currentImage = localStorage.lastViewed !== undefined ? JSON.parse(localStorage.lastViewed) : '';
  const downloadLink = JSON.parse(localStorage.lastViewed).source;
  const altText = props.alt;

  // Only checks if image is in favorites if there is localStorage data
  let loginUsername;
  let loginUserObject;
  let imageIsFavorite;
  if(localStorage.loginStatus !== undefined && localStorage.loginList !== undefined) {
    // Additionally, checks if user is logged in or not
    if(JSON.parse(localStorage.loginStatus).status !== 'no-acc') {
      loginUsername = JSON.parse(localStorage.loginStatus).user;
      loginUserObject = JSON.parse(localStorage.loginList).findIndex(login => login.user === loginUsername);
      imageIsFavorite = (JSON.parse(localStorage.loginList)[loginUserObject].favorites.findIndex(images => images.source === currentImage.source));
    }    
  }

  return (
    <article className='preview__content' >
      <h1 className='content__title'>{title}</h1>
      
      <figure className='content__figure' >
        <img className='figure__image' id='mainImage' src={`/static/pages/gallery/view/${currentImage !== '' ? currentImage.view : ''}.webp`} alt={altText} />
        {(() => {
            if(localStorage.loginStatus !== undefined) {
              if(JSON.parse(localStorage.loginStatus).status === 'logged') {
                return (
                  <button className={`figure__favorite figure__favorite--${(() => { if(imageIsFavorite === -1 || imageIsFavorite === undefined) {
                    return 'off';
                  } else {
                    return 'on';
                  }})()}`} onClick={event => {
                    props.update();
                    favoriteOnClick(event);
                  }}></button>
                );
              } else {
                return '';
              }
            } else {
              return '';
            }
        })()}
      </figure>
      
      <div className='preview__buttons' >
        <a href={`/static/pages/gallery/source/${downloadLink}.png`} id='buttonDownload' download={true} className='preview__button preview__button--download'>Download</a>
        <a href={`/static/pages/gallery/source/${downloadLink}.png`} id='buttonNewTab' target='_blank' className='preview__button preview__button--newtab'>Nova guia</a>
      </div>
    </article>
  )
}

export const GalleryContentFunction = { favoriteOnClick };
export default GalleryContent;