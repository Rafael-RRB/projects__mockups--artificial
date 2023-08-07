import './GalleryPreview.css';
import GalleryThumbnail from '../GalleryThumbnail/GalleryThumbnail.jsx';
import GalleryContent from '../GalleryContent/GalleryContent.jsx';
import { useState } from 'react';

function GalleryPreview(props) {
  // Array with correct paths
  const dataViews = [];
  const dataThumbs = [];
  const dataSources = [];
  const dataAlts = [];

  if(props.data !== undefined) {
    Object.entries(props.data).forEach((category, index) => {
      // Creates a 'category' array for each category (currently five).
      [dataViews, dataThumbs, dataSources, dataAlts].forEach(array => array.push([]));
      // Populates each category array with the respective paths.
      category[1].forEach(item => {
        dataViews[index].push(item.view);
        dataThumbs[index].push(item.thumbnail);
        dataSources[index].push(item.source);
        dataAlts[index].push(item.alt);
      });
    });
  }

  // I feel extremely embarrassed to do this, but the only alternative would require some major code rewrites...
  // ...thus, I believe it is a lot more productive to create a working version of this project, then learn more about React...
  // ...so I can prevent this problem from occurring again in the future.
  const [updateCount, setUpdateCount] = useState(0);
  function galleryUpdate() {
    const newCount = updateCount + 1;
    setUpdateCount(newCount);
  }

  return (
    <section className='main__preview'>
      <GalleryContent update={galleryUpdate} title='Galeria' source={dataSources.length > 0 ? dataSources[0][0] : ''} alt={dataAlts.length > 0 ? dataAlts[0][0] : ''} />
      <GalleryThumbnail update={galleryUpdate} viewList={dataViews} thumbList={props.data === undefined ? undefined : dataThumbs} sourceList={dataSources} altList={dataAlts} />
    </section>
  );
}

//

export default GalleryPreview;