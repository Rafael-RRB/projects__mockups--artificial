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
  const galleryJSON = props.gallery;

  return(
    <main className="main">
      <Banner page={'gallery'} bannerList={bannerList} alt={'desenho anime de uma jovem em um museu de arte.'}/>
      {(() => {
        if(galleryJSON !== null) {
          return (
            <GalleryPreview data={galleryJSON.categories} refresh={props.refresh} />
          )
        }
      })()}
      
    </main>
  );
}

export default Gallery;