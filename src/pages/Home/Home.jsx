import './Home.css';
import Banner from '../../components/Banner/Banner.jsx';
import Introduction from './Introduction/Introduction.jsx';
import Slideshow from './Slideshow/Slideshow.jsx';

import imageMinimum from '../../assets/img/banner/banner__home--min.webp';
import imageDefault from '../../assets/img/banner/banner__home--default.webp';
import imageMaximum from '../../assets/img/banner/banner__home--max.webp';

function Home(props) {
  return(
    <main className="main">
      <Banner page={'home'} imageMinimum={imageMinimum} imageDefault={imageDefault} imageMaximum={imageMaximum} alt={'imagem abstrata baseada na estátua "O pensador".'}/>
      <Introduction />
      
      <Slideshow />
      <Slideshow />
      <Slideshow />
      <Slideshow />
      <Slideshow />

    </main>
  );
}

export default Home;