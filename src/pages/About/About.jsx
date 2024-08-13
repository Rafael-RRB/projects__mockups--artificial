import './About.css';
import { useState } from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import bannerSmall from '../../assets/img/banner/banner__about--min.webp';
import bannerDefault from '../../assets/img/banner/banner__about--default.webp';
import bannerLarge from '../../assets/img/banner/banner__about--max.webp';
import ContentSection from '../../components/ContentSection/ContentSection.jsx';

const page = 'about';

const bannerList = {
  bannerSmall,
  bannerDefault,
  bannerLarge
}

/* ContentSection objects */
const aboutIntro = {
  headingLevel: '1',
  identifier: 'intro',
  modifier: page,
  title: 'Sobre nós',
  text: 'Aqui na ArtIficial, acreditamos no poder incrível das novas tecnologias de inteligência artificial. Sabemos que muitas pessoas têm dificuldade em expressar suas ideias criativas por meio da arte, mas isso não é mais um problema! Com nosso foco em artes conceituais geradas por IAs, mostramos que todos podem trazer suas ideias à vida, basta usar a imaginação. Então, venha criar conosco e desbloqueie todo o seu potencial criativo!',
}
const aboutCreation = {
  headingLevel: '2',
  identifier: 'creation',
  modifier: page,
  title: 'Criação do site',
  text: 'O ArtIficial foi criado em 2023 pelo Rafael R. B.. A gente teve a ideia de criar um site sobre artes conceituais feitas por IAs quando o nosso fundador percebeu o quanto essas tecnologias estão ficando incríveis e como era fácil corrigir os erros comuns que elas cometiam.',
  src: ['/static/pages/about/about__creator'],
  sizes: [1024, 1024],
  alt: 'Arte vetorial do criador do site, Rafael R.B..'
}
const aboutChallenges = {
  headingLevel: '2',
  identifier: 'challenges',
  modifier: page,
  title: 'Desafios',
  text: 'A gente enfrentou muitos desafios pra encontrar um estilo de arte que escondesse os erros de geração e fizesse parecer que foi um artista que fez (tipo manchas de tinta ou pinceladas aleatórias). Depois disso... foi só ter muita paciência! Algumas imagens precisaram ser geradas mais de cem vezes, e o processo todo levou cerca de um mês pra criar as 200 imagens superlegais que a gente tem no site hoje.',
  src: ['/static/pages/about/about__challenges'],
  sizes: [1024, 1024],
  alt: 'Arte vetorial de um braço robô manipulador pintando um quadro.'
}
const aboutClients = {
  headingLevel: '2',
  identifier: 'clients',
  modifier: page,
  title: 'Nossos clientes',
  text: 'Veja o que alguns de nossos clientes disseram sobre nós!',
  src: ['/static/pages/about/about__clients'],
  sizes: [1024, 1024],
  alt: 'Arte vetorial de dois homens e uma mulher observando pinturas em um museu.'
}
const aboutClientA = {
  headingLevel: '2',
  identifier: 'clientA',
  modifier: page,
  title: 'Bruno, game dev',
  text: <><span className='span__italic'>"As artes conceituais geradas por inteligência artificial neste site são incríveis! Elas têm sido uma ótima fonte de inspiração para mim e minha equipe quando estamos criando ideias para nossos jogos. Encontramos designs realmente únicos e interessantes que provavelmente nunca teríamos pensado por conta própria. Apesar de não utilizarmos diretamente a arte, ela nos ajudou a desenvolver conceitos muito legais para trabalharmos. Eu recomendo muito este site para qualquer desenvolvedor de jogos que queira ampliar seus horizontes criativos!"</span></>,
  src: ['/static/pages/about/about__client-a'],
  sizes: [1024, 1024],
  alt: 'Arte vetorial de um dos clientes fantasia, um desenvolvedor de jogos, usando um fone de ouvido.'
}
const aboutClientB = {
  headingLevel: '2',
  identifier: 'clientB',
  modifier: page,
  title: 'Ana, designer gráfica:',
  text: <><span className='span__italic'>"Fiquei extremamente impressionada com as artes conceituais deste site! Como designer gráfica, estou sempre em busca de ideias novas e interessantes para inspirar meu trabalho, e este site definitivamente entrega isso. A arte é extremamente criativa e única, e tem sido um ponto de partida fantástico para alguns dos meus projetos recentes. Eu admiro profundamente como posso usá-la para desenvolver minhas próprias ideias e levar meu trabalho a um nível ainda mais elevado. Eu recomendo fortemente este site para qualquer designer que esteja procurando por inspiração de alta qualidade!"</span></>,
  src: ['/static/pages/about/about__client-b'],
  sizes: [1024, 1024],
  alt: 'Arte vetorial de uma das clientes fantasia, uma designer gráfica.'
}
const aboutClientC = {
  headingLevel: '2',
  identifier: 'clientC',
  modifier: page,
  title: 'Maria, entusiasta:',
  text: <><span className='span__italic'>"Este site é simplesmente incrível para qualquer pessoa que ame arte! Eu passei horas explorando as artes conceituais, principalmente os retratos, e acabei descobrindo novos estilos que eu nunca teria encontrado de outra forma. Eu adoro usar a arte como ponto de partida para meus próprios esboços e pinturas, e é incrível como a inteligência artificial pode criar ideias tão imaginativas e originais. Este site é, sem dúvida, uma visita obrigatória para quem quer ampliar seus horizontes criativos e se divertir muito no processo!"</span></>,
  src: ['/static/pages/about/about__client-c'],
  sizes: [1024, 1024],
  alt: 'Arte vetorial de uma das clientes fantasia, uma artista.'
}

function About(props) {
  return(
    <main className="main">
      <Banner page={'about'} bannerList={bannerList} alt={'imagem vetorial de um robô lendo um livro.'}/>

      <section className={`articles articles--${page}`}>
        <ContentSection object={aboutIntro} />
        <ContentSection object={aboutCreation} />
        <ContentSection object={aboutChallenges} />
        
        <section className='articles__client-list'>
          <ContentSection object={aboutClients} />
          <ContentSection object={aboutClientA} />
          <ContentSection object={aboutClientB} />
          <ContentSection object={aboutClientC} />
        </section>
      </section>
    </main>
  );
}

export default About;