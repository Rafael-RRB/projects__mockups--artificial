import './Introduction.css';

function Introduction(props) {
  return(
    <section className="main__introduction">
      <h1 className="introduction__title">
        <span className="title__decoration">a</span>rt<span className="title__decoration">i</span>ficial
      </h1>

      <p className="introduction__paragraph">
      Bem-vindo à nossa galeria de arte conceitual cuidadosamente selecionada, gerada por inteligência artificial! Nossa galeria apresenta trabalhos deslumbrantes e únicos em uma ampla gama de categorias para agradar a todos os gostos. De personagens imaginativos e animais majestosos a paisagens de tirar o fôlego, temos tudo isso e mais.
      </p>
      
      <p className="introduction__paragraph">
      Seja você é um entusiasta dessa nova tecnologia, ou simplesmente alguém em busca de inspiração, nossa galeria é o lugar perfeito para explorar e descobrir. Temos certeza de que você encontrará algo que chamará sua atenção e inspirará sua imaginação. Obrigado por nos visitar e esperamos que goste da sua experiência!
      </p>
    </section>
    
  );
}

export default Introduction;