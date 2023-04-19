import './Home.css';
import Banner from '../../components/Banner/Banner.jsx';
import Introduction from './Introduction/Introduction.jsx';
import Slideshow from './Slideshow/Slideshow.jsx';

function Home(props) {
  return(
    <main className="main">
      <Banner page={'home'} alt={'imagem abstrata baseada na estátua "O pensador".'}/>
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