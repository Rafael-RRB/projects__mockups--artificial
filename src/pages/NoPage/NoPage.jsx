import './NoPage.css';

function NoPage(props) {
  return (
    <main className="main">
      <section className='no-page-wrapper'>
        <img src='./public/static/pages/no-page/IMG-NOPAGE.webp' alt='Imagem IA distorcida de um robô triste.' className='no-page__image'/>
        <h1 className='no-page__title'>404 </h1>
        <h2 className='no-page__subtitle'>A página atual não existe</h2>
      </section>
    </main>
  );
}

export default NoPage;