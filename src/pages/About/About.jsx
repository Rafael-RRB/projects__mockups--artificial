import './About.css';
import Banner from '../../components/Banner/Banner.jsx';

function About(props) {
  return(
    <main className="main">
      <Banner page={'about'} alt={'imagem vetorial de um robô lendo um livro.'}/>
    </main>
  );
}

export default About;