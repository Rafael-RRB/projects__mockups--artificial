import { useState, useEffect } from 'react';
import './Gallery.css';
import Banner from '../../components/Banner/Banner.jsx';
import bannerSmall from '../../assets/img/banner/banner__gallery--min.webp';
import bannerDefault from '../../assets/img/banner/banner__gallery--default.webp';
import bannerLarge from '../../assets/img/banner/banner__gallery--max.webp';
import GalleryPreview from "./GalleryPreview/GalleryPreview.jsx";
const bannerList = {
  bannerSmall,
  bannerDefault,
  bannerLarge
}

function Gallery(props) {
  // Gallery related functions
  const [galleryJSON, setGalleryJSON] = useState(null);
    
  // function to fetch the gallery and update state
  async function fetchGallery() {
    let parsedJSON;
    if(localStorage.getItem('gallery') !== null) {
      console.log('Gallery exists in localStorage. Retrieving data...');
      parsedJSON = JSON.parse(localStorage.getItem('gallery'));
      setGalleryJSON(parsedJSON);
    } else {
      const gallery = await fetch('./gallery.json');
      const galleryConvertion = await gallery.json();
      localStorage.setItem('gallery', JSON.stringify(galleryConvertion));
      parsedJSON = galleryConvertion;
      setGalleryJSON(galleryConvertion);
    }

    // Which image should appear when the Gallery page is opened.
    if(localStorage.lastViewed === undefined && localStorage.gallery !== undefined) {
      localStorage.setItem('lastViewed', JSON.stringify({
        source: parsedJSON.categories.animal[0].source,
        view: parsedJSON.categories.animal[0].view,
        alt: parsedJSON.categories.animal[0].alt
      }));
    }
  }  

  // Runs once, when APP is mounted
  useEffect(() => {
    fetchGallery();
  }, []);
  
  return(
    <main className="main">
      {(() => {
        if(galleryJSON !== null) {
          return (<Banner page={'gallery'} bannerList={bannerList} alt={'desenho anime de uma jovem em um museu de arte.'}/>,
          <GalleryPreview data={galleryJSON.categories} />)
        }
      })()}
      
    </main>
  );
}

export default Gallery;