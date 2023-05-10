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
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('gallery') !== null) {
      setImageList(JSON.parse(localStorage.getItem('gallery')));
      console.log('Gallery successfully loaded from localStorage.')
    } else {
      (async () => {
        const gallery = await fetch('./gallery.json');
        const galleryConvertion = await gallery.json();
        setImageList(galleryConvertion);
        localStorage.setItem('gallery', JSON.stringify(galleryConvertion));
        console.log('Gallery not found in localStorage. Fetched JSON and created localStorage copy.');
      })();
    }
  }, []);

  return(
    <main className="main">
      <Banner page={'gallery'} bannerList={bannerList} alt={'desenho anime de uma jovem em um museu de arte.'}/>
      <GalleryPreview data={imageList.categories} />
    </main>
  );
}

export default Gallery;