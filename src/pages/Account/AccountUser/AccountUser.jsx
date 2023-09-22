import './AccountUser.css';

function AccountUser(props) {
  let userList = props.userInfo[0];
  let currentUser = userList[props.userInfo[1]];
  let userPhoto = currentUser.imgBase64;
  let banner = currentUser.bannerImage64;
  let userEmail = currentUser.user;
  let userName = currentUser.username;

  console.log(currentUser);
  

  
  return(
    <section className='main__account-user'>
      <section className='account-user__banner' style={{backgroundImage: banner !== undefined ? banner : 'linear-gradient(to bottom, var(--color-banner-home), var(--color-banner-home))'}}>
        <img src={userPhoto} alt='Sua foto de perfil' className='banner__profile-photo'/>
        <button className='account__edit account__edit--banner' id='editBanner'></button>
        <button className='account__edit account__edit--photo' id='editPhoto'></button>
      </section>
      
      <section className='account-user__text'>
        <button className='account__edit account__edit--info' id='editInfo'></button>
        <h1 className='text__user-name'>{userName}</h1>
        <h2 className='text__user-email'>{userEmail}</h2>
      </section>
    </section>
  );
}

export default AccountUser;