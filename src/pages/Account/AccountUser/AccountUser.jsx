import './AccountUser.css';
import { useState } from 'react';

function AccountUser(props) {
  let userList = props.userInfo[0];
  let currentUser = userList[props.userInfo[1]];
  let currentUserIndex = userList.findIndex(object => object.user === currentUser.user);
  
  let userPhoto = currentUser.imgBase64;
  
  const [banner, setBanner] = useState(currentUser.bannerBase64);
  const [profile, setProfile] = useState(currentUser.imgBase64);
  const [favoriteList, setFavoriteList] = useState(currentUser.favorites);

  // Handles exiting account
  function exitAccount(event) {
    if(confirm('Sair da conta?')) {
      const currentLoginStatus = JSON.parse(localStorage.loginStatus);
      currentLoginStatus.user = 'anonymous';
      currentLoginStatus.status = 'no-acc';
      localStorage.setItem('loginStatus', JSON.stringify(currentLoginStatus));
      window.location.reload();
    }
  }

  // Handles banner
  function uploadBanner(event) {
    const currentFile = event.target.files[0];

    if(currentFile.size > 200000) {
      alert('Sua imagem é maior que 200kb. Por favor, faça upload de uma imagem menor.');
      return;
    }

    if(currentFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const currentFileBase64 = reader.result;

        const canvas = document.createElement('canvas');
        const brush = canvas.getContext('2d');

        const uploadedImage = new Image();
        uploadedImage.src = currentFileBase64;

        uploadedImage.onload = () => {
          const imageX = uploadedImage.naturalWidth;
          const imageY = uploadedImage.naturalHeight;

          const imageLargestDimension = imageX > imageY ? imageX : imageY;

          // 16:9 Aspect Ratio
          canvas.width = imageLargestDimension;
          canvas.height = parseInt(imageLargestDimension * 0.5625);

          // Top-left aligned
          brush.drawImage(uploadedImage, 0, 0, imageX, imageY);

          const canvasBase64 = canvas.toDataURL('image/webp');
          changeUserBanner(canvasBase64);
        }
      }
      reader.readAsDataURL(currentFile);
    }
  }

  // Handles profile
  function uploadProfile(event) {
    const currentFile = event.target.files[0];

    if(currentFile.size > 200000) {
      alert('Sua imagem é maior que 200kb. Por favor, faça upload de uma imagem menor.');
      return;
    }

    if(currentFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const currentFileBase64 = reader.result;

        const canvas = document.createElement('canvas');
        const brush = canvas.getContext('2d');

        const uploadedImage = new Image();
        uploadedImage.src = currentFileBase64;

        uploadedImage.onload = () => {
          const imageX = uploadedImage.naturalWidth;
          const imageY = uploadedImage.naturalHeight;

          canvas.width = imageX;
          canvas.height = imageY;

          // Center aligned
          brush.drawImage(uploadedImage, 0, 0, imageX, imageY);

          const canvasBase64 = canvas.toDataURL('image/webp');
          changeUserProfile(canvasBase64);
        }
      }
      reader.readAsDataURL(currentFile);

      console.log(userList);
    }
  }

  // Updates localStorage's userList
  function updateUserList() {
    userList[currentUserIndex] = currentUser;
    localStorage.setItem('loginList', JSON.stringify(userList));
  }

  // changes the current user's banner
  function changeUserBanner(data) {
    currentUser.bannerBase64 = data;
    setBanner(data);
    updateUserList();
  }

  // changes the current user's profile picture
  function changeUserProfile(data) {
    currentUser.imgBase64 = data;
    setProfile(data);
    updateUserList();
    // Header doesn't update without this
    props.refresh();
  }

  // Removes an image from the user's favorite list
  function deleteFavorite(event, index) {
    if(confirm("Você tem certeza que quer remover dos favoritos?")) {
      const oldFavoriteArray = [...favoriteList];
      oldFavoriteArray.splice(index, 1);
      setFavoriteList(oldFavoriteArray);
      currentUser.favorites = oldFavoriteArray;
      updateUserList();
    } else {
      // Do Nothing
    }
  }

  return(
    <section className='main__account-user'>
      <section className='account-user__banner' style={{backgroundImage: banner !== undefined ? `url(${banner})` : 'linear-gradient(to bottom, var(--color-banner-home), var(--color-banner-home))'}}>
        <img src={userPhoto} alt='Sua foto de perfil' className='banner__profile-photo'/>

        <button className='account__edit account__edit--exit' onClick={event => exitAccount(event)} id='exitAccount'></button>
        
        <label tabIndex='0' htmlFor='editBanner' className='account__edit account__edit--banner'>
          <input type='file' accept='image/*' className='account__edit__input' onChange={event => uploadBanner(event)} id='editBanner'></input>
        </label>
        
        <label tabIndex='0' htmlFor='editProfile' className='account__edit account__edit--profile'>
          <input type='file' accept='image/*' className='account__edit__input' onChange={event => uploadProfile(event)} id='editProfile' />
        </label>
      </section>
      
      <section className='account-user__favorites'>
        {favoriteList.length === 0 &&
          <div key={`1`} className='favorites__wrapper'>
            <img src={`/static/pages/account/IMG__NO-FAVORITES.webp`} alt='' className='favorites__image'/>
            <h1 className='favorites__title'>Nenhuma imagem favorita...</h1>
          </div>
        }

        {favoriteList.length !== 0 && favoriteList.map((image, index, array) => 
          <div key={`favorites#${index}`} className='favorites__wrapper'>
            <img src={`/static/pages/gallery/view/${image.view}.webp`} alt={image.alt} className='favorites__image'/>

            <div className='buttons__wrapper'>
              <a href={`/static/pages/gallery/source/${image.source}.png`} download={true} className='favorites__button favorites__button--download'>
                <span className='button__text'>Download</span>
              </a>

              <button className='favorites__button favorites__button--remove' onClick={(event) => deleteFavorite(event, index)}>
                <span className='button__text'>Remover</span>
              </button>
            </div>
          </div>
        )}
      </section>
    </section>
  );
}

//<a href={`/static/pages/gallery/source/${downloadLink}.png`} id='buttonDownload' download={true} className='preview__button preview__button--download'>Download</a>

export default AccountUser;