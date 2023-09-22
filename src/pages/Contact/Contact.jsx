import './Contact.css';
import { socialLinks } from '../../../public/config.js';
import { useEffect } from 'react';
import Banner from '../../components/Banner/Banner.jsx';
import bannerSmall from '../../assets/img/banner/banner__contact--min.webp';
import bannerDefault from '../../assets/img/banner/banner__contact--default.webp';
import bannerLarge from '../../assets/img/banner/banner__contact--max.webp';
import ContentSection from '../../components/ContentSection/ContentSection.jsx'
import ContactForm from './ContactForm/ContactForm.jsx';

const bannerList = {
  bannerSmall,
  bannerDefault,
  bannerLarge
}

const contactIntro = {
  headingLevel: '1',
  identifier: 'contactIntro',
  modifier: 'contact',
  title: 'Fale Conosco',
  text: 'Adoraríamos muito saber de você! Se tiver alguma dúvida, sugestão ou quiser experimentar nossos serviços, fique à vontade para entrar em contato. Temos várias maneiras de nos comunicar e prometemos responder rapidinho! Para agilizar ainda mais, nos conte tudo o que precisamos saber. Mal podemos esperar para falar com você!',
}

const inputList = [
  {
    labelTitle: 'nome',
    placeholder: 'Seu nome aqui...',
    element: 'input',
    type: 'text',
    value: '',
    pattern: '',
    minLength: '2',
    maxLength: '100',
  },
  {
    labelTitle: 'e-mail',
    placeholder: 'Seu e-mail aqui...',
    element: 'input',
    type: 'email',
    value: '',
    pattern: '',
    minLength: '3',
    maxLength: '100',
  },
  {
    labelTitle: 'assunto',
    placeholder: 'Assunto da mensagem...',
    element: 'input',
    type: 'text',
    value: '',
    pattern: '',
    minLength: '2',
    maxLength: '25',
  },
  {
    labelTitle: 'mensagem',
    placeholder: 'Sua mensagem aqui...',
    element: 'textarea',
    type: 'text',
    value: '',
    pattern: '',
    minLength: '50',
    maxLength: '1000',
  },
  {
    labelTitle: 'telefone (DDD)',
    placeholder: 'Seu telefone aqui...',
    element: 'input',
    type: 'tel',
    value: '',
    pattern: '',
    minLength: '10',
    maxLength: '11',
  }
];

function Contact(props) {
  return(
    <main className="main">
      <Banner page={'contact'} bannerList={bannerList} alt={'imagem de um jovem com fone de ouvido utilizando um computador, visto de trás.'}/>

      <section className="main__contact">
        <ContentSection object={contactIntro} />

        <ContactForm title='Sua mensagem:' inputs={inputList}/>

        <section className="contact__outro">
          <h2 className="outro__title">Outros meios</h2>
          <p className="outro__text">Você também pode entrar em contato direto conosco através do nosso <a href={socialLinks.whatsapp} className="text__inline-link">WhatsApp</a>, <a href={socialLinks.telegram} className="text__inline-link">Telegram</a> ou <a href={socialLinks.linkedin} className="text__inline-link">LinkedIn</a>.</p>
        </section>
      </section>

      <section className="main__faq">
        <h2 className="faq__title">Perguntas frequêntes</h2>

        <ul className="faq__question-list">
          <li className="question-list__question">
            <h3 className="question__title">1. O que é arte conceitual gerada por IA?</h3>
            <p className="question__answer">Arte conceitual gerada por IA é arte criada por algoritmos de inteligência artificial. Aqui, usamos modelos como DALL-E e Stable Diffusion para gerar as imagens. É um processo super legal!</p>
          </li>

          <li className="question-list__question">
            <h3 className="question__title">2. Que tipo de modelos de IA são usados para criar a arte deste site?</h3>
            <p className="question__answer">Nós usamos DALL-E e Stable Diffusion para gerar as imagens, DALL-E e/ou Neural.love para outpainting, e DALL-E e/ou getimg.ai para inpainting. Mas não se preocupe, você não precisa entender disso tudo para aproveitar a arte!</p>
          </li>

          <li className="question-list__question">
            <h3 className="question__title">3. Posso usar a arte deste site para fins comerciais?</h3>
            <p className="question__answer">Sim! Todas as imagens da galeria são CC0, o que significa que você pode baixá-las gratuitamente e usá-las como quiser. No entanto, imagens personalizadas são pagas.</p>
          </li>

          <li className="question-list__question">
            <h3 className="question__title">4. Como faço para comprar uma obra de arte?</h3>
            <p className="question__answer">Todas as imagens disponíveis neste site são gratuitas. Na galeria, você pode selecionar uma imagem e usar o botão de download, já que toda a galeria é CC0.</p>
          </li>

          <li className="question-list__question">
            <h3 className="question__title">5. Posso solicitar uma arte conceitual personalizada?</h3>
            <p className="question__answer">Claro! Use o formulário acima para enviar sua solicitação. Adoraríamos ajudá-lo a transformar sua ideia em realidade!</p>
          </li>

          <li className="question-list__question">
            <h3 className="question__title">6. As imagens deste site são exclusivas, ou podem ser encontradas em outros lugares?</h3>
            <p className="question__answer">Nossas imagens são feitas por nós, mas devido à licença CC0, elas podem ser encontradas em outros sites. Mas não se preocupe, você pode ter certeza de que o nosso site é o lugar mais legal para encontrá-las!</p>
          </li>

          <li className="question-list__question">
            <h3 className="question__title">7. Quanto tempo leva para receber uma obra de arte comprada?</h3>
            <p className="question__answer">O tempo depende do usuário, que escolhe a versão final. Quanto mais gerações, mais tempo leva, mas o resultado final sempre vale a pena. Com sorte, algumas imagens são feitas em menos de um minuto!</p>
          </li>

          <li className="question-list__question">
            <h3 className="question__title">8. As imagens deste site são isentas de direitos autorais?</h3>
            <p className="question__answer">Sim! como mencionado anteriormente, todas as imagens da galeria são CC0, então você pode usá-las sem nenhum problema. Mas ficaríamos muito felizes se você nos atribuísse crédito.</p>
          </li>

          <li className="question-list__question">
            <h3 className="question__title">9. Posso licenciar uma arte para uso específico?</h3>
            <p className="question__answer">Infelizmente, devido às leis de direitos autorais, todas as imagens geradas por IA são CC0. No entanto, você pode requisitar  uma imagem personalizada, e  solicitar que ela não seja disponibilizada publicamente em nossa galeria. Finalmente, se você editá-la manualmente, obterá todos os direitos autorais.</p>
          </li>

          <li className="question-list__question">
            <h3 className="question__title">10. Qual é a resolução das imagens neste site?</h3>
            <p className="question__answer">Todas as imagens têm resolução de 1024x1024, mas, se desejar, podemos usar ferramentas de IA, como waifu2x, para aumentar a resolução. Esperamos que você aproveite nossas imagens!</p>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Contact;