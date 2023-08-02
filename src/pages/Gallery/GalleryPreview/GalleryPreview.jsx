import './GalleryPreview.css';
import GalleryThumbnail from '../GalleryThumbnail/GalleryThumbnail.jsx';
import GalleryContent from '../GalleryContent/GalleryContent.jsx';

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

  return (
    <section className='main__preview'>
      <GalleryContent title='Galeria' source={dataSources.length > 0 ? dataSources[0][0] : ''} alt={dataAlts.length > 0 ? dataAlts[0][0] : ''} />
      <GalleryThumbnail viewList={dataViews} thumbList={props.data === undefined ? undefined : dataThumbs} sourceList={dataSources} altList={dataAlts} />
    </section>
  );
}

//

export default GalleryPreview;