import './Home.css';
import { list } from './Slideshow/SlideshowImport.jsx';

import Banner from '../../components/Banner/Banner.jsx';
import Introduction from './Introduction/Introduction.jsx';
import Slideshow from './Slideshow/Slideshow.jsx';

import bannerSmall from '../../assets/img/banner/banner__home--min.webp';
import bannerDefault from '../../assets/img/banner/banner__home--default.webp';
import bannerLarge from '../../assets/img/banner/banner__home--max.webp';

const bannerList = {
  bannerSmall,
  bannerDefault,
  bannerLarge
}

function Home(props) {
  const galleryChara = [list.viewList[0], list.thumbList[0], list.altList[0]];
  const galleryAnimal = [list.viewList[1], list.thumbList[1], list.altList[1]];
  const galleryPlaces = [list.viewList[2], list.thumbList[2], list.altList[2]];
  const galleryFood = [list.viewList[3], list.thumbList[3], list.altList[3]];
  const galleryPeople = [list.viewList[4], list.thumbList[4], list.altList[4]];

  return(
    <main className="main">
      <Banner page={'home'} bannerList={bannerList} alt={'imagem abstrata baseada na estátua "O pensador".'}/>
      <Introduction />
      
      <section className="slides">
        <Slideshow imageList={galleryChara} category='character' title='personagens'/>
        <Slideshow imageList={galleryAnimal} category='animal' title='animais'/>
        <Slideshow imageList={galleryPlaces} category='places' title='paisagens'/>
        <Slideshow imageList={galleryFood} category='food' title='comidas'/>
        <Slideshow imageList={galleryPeople} category='people' title='retratos'/>
      </section>
    </main>
  );
}

export default Home;