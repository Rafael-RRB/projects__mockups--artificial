import './Home.css';
import Banner from '../../components/Banner/Banner.jsx';

function Home(props) {
  return(
    <main className="main">
      <Banner page={'home'} alt={''}/>
    </main>
  );
}

export default Home;