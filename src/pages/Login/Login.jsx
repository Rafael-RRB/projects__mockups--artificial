import './Login.css';
import Banner from '../../components/Banner/Banner.jsx';
import bannerMin from '../../assets/img/banner/banner__login--min.webp';
import bannerSmall from '../../assets/img/banner/banner__login--small.webp';
import bannerDefault from '../../assets/img/banner/banner__login--default.webp';
import bannerLarge from '../../assets/img/banner/banner__login--max.webp';
import LoginBanner from './LoginBanner/LoginBanner.jsx';
import LoginForm from './LoginForm/LoginForm.jsx';

const bannerList = {
  bannerMin,
  bannerSmall,
  bannerDefault,
  bannerLarge
}

function Login(props) {
  let loginData = props.loginData;
  // If loginList doesn't exist or there's only one credential (admin), assume user wants to signup; Else, assume user wants to login.
  const initialForm = (() => {
    if(JSON.parse(localStorage.getItem('loginList')) === null) {
      return false;
    } else if (JSON.parse(localStorage.getItem('loginList')).length > 1) {
      return true;
    } else {
      return false;
    }
  })();

  // If user already logged in, redirect to homepage.
  if(JSON.parse(localStorage.getItem('loginStatus')) !== null) {
    JSON.parse(localStorage.getItem('loginStatus')).status === 'logged' ? window.location.href = './' : '';
  }

  return(
    <main className="main main--login">
      <section className='main__wrapper--login'>
        <LoginBanner page={'login'} bannerList={bannerList} alt={'imagem abstrata baseada na estátua "O pensador".'} />
        <LoginForm isLogin={initialForm} loginData={loginData}/>
      </section>
    </main>
  );
}

export default Login;