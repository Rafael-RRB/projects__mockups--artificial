import Banner from '../../components/Banner/Banner.jsx';
import bannerSmall from '../../assets/img/banner/banner__tools--min.webp';
import bannerDefault from '../../assets/img/banner/banner__tools--default.webp';
import bannerLarge from '../../assets/img/banner/banner__tools--max.webp';
import ContentSection from '../../components/ContentSection/ContentSection.jsx';
import './Tools.css';
// ../../assets/img/banner/banner__tools--min.webp

const page = 'tools';

const bannerList = {
  bannerSmall,
  bannerDefault,
  bannerLarge
}

/* ContentSection objects */
// Learned about React fragments (using '<></>')! Neat.
const toolsIntro = {
  headingLevel: '1',
  identifier: 'intro',
  modifier: page,
  title: 'Nossas ferramentas',
  text: <>Obrigado pelo seu interesse em como nós criamos nossas artes! Cada imagem foi cuidadosamente criada, utilizando quatro passos:</>,
}
const toolsConcept = {
  headingLevel: '2',
  identifier: 'concept',
  modifier: page,
  title: 'Inspirações',
  text: <>Nós usamos uma combinação de imagens da web, <span className='span__no-wrap--bold'>ChatGPT 3.5</span>, <span className='span__no-wrap--bold'>DALL-E Mini</span> e <span className='span__no-wrap--bold'>Craiyon</span> para desenvolver a nossa ideia inicial.</>,
  src: ['/static/pages/tools/tools__concept'],
  sizes: [1024, 1024],
  alt: 'Colagens de imagens de uma floresta. Um esboço de lápis, e doze imagens simples geradas baseadas no esboço.'
}
const toolsGeneration = {
  headingLevel: '2',
  identifier: 'generation',
  modifier: page,
  title: 'Geração',
  text: <>Nós usamos o <span className='span__no-wrap--bold'>DALL-E 2</span> e outros sites, como <span className='span__no-wrap--bold'>Simplified</span>. Alguns prompts necessitaram mais de cem gerações de imagem para obter resultados aceitáveis.</>,
  src: ['/static/pages/tools/tools__generation'],
  sizes: [1024, 1024],
  alt: 'Colagens de pinturas de imagem geradas pela IA, de uma floresta, no estilo realista.'
}
const toolsInpainting = {
  headingLevel: '2',
  identifier: 'inpainting',
  modifier: page,
  title: 'Inpainting',
  text: <>Em alguns casos, as imagens geradas possuíam boa qualidade, mas eram arruinadas por pequenos defeitos, principalmente em mãos e olhos. Para corrigir isso, utilizamos o site <span className='span__no-wrap--bold'>getimg.ai</span> para gerar novamente partes da imagem (áreas pretas, acima) para corrigir esses defeitos. Em apenas um caso, foi necessário corrigir o erro manualmente através do <span className='span__no-wrap--bold'>GIMP.</span></>,
  src: ['/static/pages/tools/tools__inpainting'],
  sizes: [1024, 1024],
  alt: 'Imagem de um robô. Certas áreas da imagem estão vazias, que serão preenchidas pelo método de inpainting.'
}
const toolsUncropping = {
  headingLevel: '2',
  identifier: 'uncropping',
  modifier: page,
  title: 'Uncropping',
  text: <>Similar ao problema de defeitos, algumas imagens foram geradas perto demais, afetando a composição da imagem ou removendo detalhes importantes. Para resolver esse problema, o site <span className='span__no-wrap--bold'>neural.love</span> foi utilizado, gerando as partes que faltavam na imagem original. Note na imagem acima o pequeno erro na geração: voltamos ao inpainting.</>,
  src: ['/static/pages/tools/tools__uncropping'],
  sizes: [1024, 1024],
  alt: 'Imagem de uma menina segurando um guarda chuva enquanto chove. A imagem contém pequenos erros, que são corrigidos pelo método inpainting.'
}
const toolsOutpainting = {
  headingLevel: '2',
  identifier: 'outpainting',
  modifier: page,
  title: 'Outpainting',
  text: <>Utilizado principalmente para geração dos banners de nossas páginas. A maioria das imagens geradas possuem resolução de 1024x1024 pixels, e para expandir-las horizontalmente, o <span className='span__no-wrap--bold'>DALL-E 2</span> ou o <span className='span__no-wrap--bold'>getimg.ai</span> foram utilizados. Posteriormente, algumas foram cortadas para atingir um Aspect Ratio de 16:9.</>,
  src: [
    '/static/pages/tools/tools__outpainting-A',
    '/static/pages/tools/tools__outpainting-B',
    '/static/pages/tools/tools__outpainting-C',
    '/static/pages/tools/tools__outpainting-D'
  ],
  sizes: [1024, 512],
  alt: 'Colagem de quatro versões diferentes da mesma imagem, que foi expandida aos lados. A imagem é de uma garota bruxa lendo um livro, sentada em corrimão de pedra, ao por do sol.'
}

function Tools(props) {
  return (
    <main className="main">
      <Banner page={page} bannerList={bannerList} alt={'desenho de cinco cachorros ciêntistas.'} />

      <section className={`articles articles--${page}`} >
        <ContentSection object={toolsIntro} />
        <ContentSection object={toolsConcept} />
        <ContentSection object={toolsGeneration} />
        <ContentSection object={toolsInpainting} />
        <ContentSection object={toolsUncropping} />
        <ContentSection object={toolsOutpainting} />
      </section>
    </main>
  );
}

export default Tools;