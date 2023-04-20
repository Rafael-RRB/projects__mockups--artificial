import './Contact.css';
import Banner from '../../components/Banner/Banner.jsx';

import bannerSmall from '../../assets/img/banner/banner__contact--min.webp';
import bannerDefault from '../../assets/img/banner/banner__contact--default.webp';
import bannerLarge from '../../assets/img/banner/banner__contact--max.webp';

const bannerList = {
  bannerSmall,
  bannerDefault,
  bannerLarge
}

function Contact(props) {
  return(
    <main className="main">
      <Banner page={'contact'} bannerList={bannerList} alt={'imagem de um jovem com fone de ouvido utilizando um computador, visto de trás.'}/>
    </main>
  );
}

export default Contact;