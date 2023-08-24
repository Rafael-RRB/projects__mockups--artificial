import './Home.css';

// This was used before I created the JSON gallery... I think.
// import { list } from './Slideshow/SlideshowImport.jsx';

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
  const homeGallery = props.gallery !== null ? props.gallery.categories : null;
  const viewList = [[], [], [], [], []];
  const thumbList = [[], [], [], [], []];
  const altList = [[], [], [], [], []];

  
  if(homeGallery !== null) {
    const categories = ['animal', 'chara', 'food', 'people', 'places'];
    for(let i = 0; i < Object.keys(homeGallery).length; i++) {
      // Looks a bit messy, but... it works.
      randomFromArray(homeGallery[categories[i]], 8).forEach(image => {
        viewList[i].push(`/static/pages/gallery/view/${image.view}.webp`);
        thumbList[i].push(`/static/pages/gallery/thumbnail/${image.thumbnail}.webp`);
        altList[i].push(`${image.alt}`);
      });
    }
  }

  function randomFromArray(array, quantity) {
    // Prevents having a quantity larger than the array itself.
    const realQuantity = quantity > array.length ? array.length : quantity;
    const indexes = [];
    const chosenIndexes = [];
    
    // ChatGPT recommended something called the "Fisher-Yates algorithm". I'd rather learn more about it before actually using it...
    // ...as CTRL + C, CTRL + V feels like cheating.
    for(let i = 0; i < array.length; i++) {
        indexes.push(i);
    }

    // Selects a random index from indexes, adding it to "chosenIndexes", the removes it from indexes (to prevent duplicates).
    for(let i = 1; i <= realQuantity; i++) {
        const randomIndex = Math.floor(Math.random() * (indexes.length));
        chosenIndexes.push(indexes[randomIndex]);
        indexes.splice(randomIndex, 1);
    }
    return chosenIndexes.map(e => array[e]);
  }

  // Here are the consts, to be used for the Slideshows. I think this is better than simply passing a direct object.
  const galleryChara = [viewList[1], thumbList[1], altList[1]];
  const galleryAnimal = [viewList[0], thumbList[0], altList[0]];
  const galleryPlaces = [viewList[4], thumbList[4], altList[4]];
  const galleryFood = [viewList[2], thumbList[2], altList[2]];
  const galleryPeople = [viewList[3], thumbList[3], altList[3]];

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