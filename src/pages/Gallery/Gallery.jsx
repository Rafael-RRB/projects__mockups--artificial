import './Gallery.css';
import Banner from '../../components/Banner/Banner.jsx';

import bannerSmall from '../../assets/img/banner/banner__gallery--min.webp';
import bannerDefault from '../../assets/img/banner/banner__gallery--default.webp';
import bannerLarge from '../../assets/img/banner/banner__gallery--max.webp';

const bannerList = {
  bannerSmall,
  bannerDefault,
  bannerLarge
}

function Gallery(props) {
  return(
    <main className="main">
      <Banner page={'gallery'} bannerList={bannerList} alt={'desenho anime de uma jovem em um museu de arte.'}/>
    </main>
  );
}

export default Gallery;