import './GalleryPreview.css';
import GalleryThumbnail from './GalleryThumbnail/GalleryThumbnail.jsx';
import GalleryContent from './GalleryContent/GalleryContent.jsx';
import { useState } from 'react';

function GalleryPreview(props) {
  // Array with individual objects;
  const allImages = [];

  // Array with correct paths
  const dataViews = [];
  const dataThumbs = [];
  const dataSources = [];
  const dataAlts = [];

  if(props.data !== undefined) {
    Object.entries(props.data).forEach((category, index) => {
      // Array with every single item;
      allImages.push(...category[1]);
      // Creates a 'category' array for each category (currently five).
      [dataViews, dataThumbs, dataSources, dataAlts].forEach(array => array.push([]));
      // Populates each category array with the respective paths.
      // Reminder: category[0] is the category's name, category[1] are the objects.
      category[1].forEach(item => {
        dataViews[index].push(item.view);
        dataThumbs[index].push(item.thumbnail);
        dataSources[index].push(item.source);
        dataAlts[index].push(item.alt);
      });
    });
  }

  if(localStorage.galleryPage === undefined) {
    localStorage.setItem('galleryPage', '0');
  }
  // How many thumbnails I want per page
  const imagesPerPage = 20;
  // How many pages that'll be, rounded up, considering the total amount of images
  const totalPages = Math.ceil(allImages.length / imagesPerPage);
  const pages = [];

  for(let i = 0; i < totalPages; i++) {
    const firstImage = 0 + i * imagesPerPage;
    pages.push([]);
    for(let i2 = firstImage; i2 < firstImage + imagesPerPage && i2 < allImages.length; i2++) {
      pages[i].push(allImages[i2]);
    }
  }

  // I feel extremely embarrassed to do this, but the only alternative would require some major code rewrites...
  // ...thus, I believe it is a lot more productive to create a working version of this project, *then* learn more about React...
  // ...so I can prevent this problem from occurring again in the future.
  const [updateCount, setUpdateCount] = useState(0);
  function galleryUpdate() {
    const newCount = updateCount + 1;
    setUpdateCount(newCount);
  }
  
  return (
    <section className='main__preview'>
      <GalleryContent update={galleryUpdate} refresh={props.refresh} title='Galeria' alt={dataAlts.length > 0 ? dataAlts[0][0] : ''} />
      <GalleryThumbnail pages={pages} />
    </section>
  );
}

//

export default GalleryPreview;