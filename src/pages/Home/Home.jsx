import './Home.css';
import Banner from '../../components/Banner/Banner.jsx';

function Home(props) {
  return(
    <main className="main">
      <Banner page={'home'} alt={'imagem abstrata baseada na estátua "O pensador".'}/>
    </main>
  );
}

export default Home;