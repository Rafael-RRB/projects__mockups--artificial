import './About.css';
import Banner from '../../components/Banner/Banner.jsx';

import bannerSmall from '../../assets/img/banner/banner__about--min.webp';
import bannerDefault from '../../assets/img/banner/banner__about--default.webp';
import bannerLarge from '../../assets/img/banner/banner__about--max.webp';

const bannerList = {
  bannerSmall,
  bannerDefault,
  bannerLarge
}

function About(props) {
  return(
    <main className="main">
      <Banner page={'about'} bannerList={bannerList} alt={'imagem vetorial de um robô lendo um livro.'}/>
    </main>
  );
}

export default About;