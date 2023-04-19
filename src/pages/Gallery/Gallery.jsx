import './Gallery.css';
import Banner from '../../components/Banner/Banner.jsx';

function Gallery(props) {
  return(
    <main className="main">
      <Banner page={'gallery'} alt={'desenho anime de uma jovem em um museu de arte.'}/>
    </main>
  );
}

export default Gallery;