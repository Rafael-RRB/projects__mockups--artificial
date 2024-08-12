import './AccountUploadIcon.css';
import { useState } from 'react';

/*

Not used anymore.

*/

function AccountUploadIcon(props) {
  const loginList = props.userInfo[0];
  const userIndex = props.userInfo[1];
  const [uploadedImages, setUploadedImages] = useState([]);

  // This function handles the uploaded profile picture, and makes it squared (if it isn't)
  function uploadImage(event) {
    // This means that only the last uploaded file will be used
    const currentFile = event.target.files[event.target.files.length - 1];
    // Prevents uploading a massive file (localStorage usually has a limit of around 5mb or LESS)
    if(currentFile.size > 200000) {
      alert('Sua imagem é maior que 200kb. Por favor, faça upload de uma imagem menor.');
      return;
    }

    // I have almost zero experience with this, and I assume Base64 is rarely used, but...
    if(currentFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const currentFileBase64 = reader.result;

        // Creates canvas & its "brush"
        const canvas = document.createElement('canvas');
        const brush = canvas.getContext('2d');

        // Creates an Image object, and assigns a source to it using the uploaded image file's base64
        const uploadedImage = new Image();
        uploadedImage.src = currentFileBase64;

        uploadedImage.onload = () => {
          // This gets the image's width and height...
          const imageX = uploadedImage.naturalWidth;
          const imageY = uploadedImage.naturalHeight;

          // ...then assigns the largest value of the two, since the goal is to create a squared picture
          const imageXY = imageX > imageY ? imageX : imageY;

          // Makes the canvas use the image's largest dimension
          canvas.width = imageXY;
          canvas.height = imageXY;

          // Finally, draws the image on it
          brush.drawImage(uploadedImage, (imageXY - imageX) / 2, (imageXY - imageY) / 2, imageX, imageY);

          /* Test to see if this actually results in a squared image. Will add a div with the canvas inside the page's "main" element.

          const div = document.createElement('div');
          div.appendChild(canvas);
          document.querySelector('main').appendChild(div);
          
          */
          
          // Finally, converts canvas to webp (lower size) and changes localStorage.
          const canvasToBase64 = canvas.toDataURL("image/webp");

          // Checks if both old and new images have the same Base64. Not really necessary, but... quality
          if(loginList[userIndex].imgBase64 === canvasToBase64) {
            alert('Sua imagem já é utilizada como sua imagem de perfil... por favor, faça upload de outra imagem.');
            return;
          } else {
            setUploadedImages(oldArray => [...oldArray, canvasToBase64]);
          }
        }
      }  

      reader.readAsDataURL(currentFile);
    }
  }

  // This handles actually changing the profile picture, including changing localStorage
  function changeProfilePicture() {
    // This means that only the last uploaded file will be used
    loginList[userIndex].imgBase64 = uploadedImages[uploadedImages.length - 1];
    localStorage.setItem('loginList', JSON.stringify(loginList));
    setUploadedImages([]);
    props.refresh();
  }

  return (
    <section className='main__account-image'>
      <h2 className='account-image__title'>Imagem de Perfil</h2>
      <p className='account-image__description'>(Obs.: Tamanho máximo de 200kb)</p>

      <div className='account-image__comparison'>
        <img src={loginList[userIndex].imgBase64} alt='Imagem do perfil antiga' className='comparison__image comparison__image--old' />
        {uploadedImages.length === 0 ? '' : <img src={uploadedImages[uploadedImages.length - 1]} alt='Imagem do perfil nova' className='comparison__image comparison__image--new' />}
      </div>
      
      <label htmlFor='imageInput' onKeyDown={event => event.key === 'Enter' ? document.getElementById('imageInput').click() : ''} tabIndex="0" className={`account-image__upload${uploadedImages.length > 0 ? ' js__hidden' : ''}`}>
        <h2 className='upload__title'>Upload de foto</h2> 
        <input type="file" id="imageInput" onChange={event => uploadImage(event)} accept="image/*" className='js__hidden' />
      </label>
      
      
      <div className='account-image__decisions'>
        {uploadedImages.length === 0 ? '' : <button id='accountBtnNewImg' className='decisions__button' onClick={() => changeProfilePicture()}>Aceitar</button>}
        {uploadedImages.length === 0 ? '' : <button id='accountBtnNewImg' className='decisions__button' onClick={() => setUploadedImages([])}>Cancelar</button>}
      </div>
      
    </section>
  );
}

export default AccountUploadIcon;