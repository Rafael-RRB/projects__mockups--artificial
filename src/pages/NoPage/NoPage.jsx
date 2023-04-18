import './NoPage.css';
import Banner from '../../components/Banner/Banner.jsx';

function NoPage(props) {
  return (
    <main className="main">
      <Banner page={''} alt={''}/>
    </main>
  );
}

export default NoPage;