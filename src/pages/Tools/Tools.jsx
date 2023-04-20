import './Tools.css';
import Banner from '../../components/Banner/Banner.jsx';

import bannerSmall from '../../assets/img/banner/banner__tools--min.webp';
import bannerDefault from '../../assets/img/banner/banner__tools--default.webp';
import bannerLarge from '../../assets/img/banner/banner__tools--max.webp';

const bannerList = {
  bannerSmall,
  bannerDefault,
  bannerLarge
}

function Tools(props) {
  return (
    <main className="main">
      <Banner page={'tools'} bannerList={bannerList} alt={'desenho de cinco cachorros ciêntistas.'}/>
    </main>
  );
}

export default Tools;