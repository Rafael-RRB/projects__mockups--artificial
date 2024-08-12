import './Footer.css';
import { socialLinks } from '../../../public/config.js';

function Footer(props) {
  function policyMessage(event) {
    alert('Infelizmente, fora do escopo do projeto...');
  }

  return (
    <footer className="footer">
      <div className='footer--wrapper'>
        <section className='footer__about'>
          <section className='footer__about__wrapper'>
            <h2 className="about__title"><span className='about__title__decoration'>A</span>rt<span className='about__title__decoration'>I</span>ficial</h2>
            <p className="about__description">Site desenvolvido por <span className='span__no-wrap'>Rafael R. B.,</span> utilizando Crayion, <span className='span__no-wrap'>DALL-E 2</span> e Simplified para inspiração e geração das imagens. Inpainting feito através do site getimg.ai, e outpainting feito através do site Neural.love.</p>
          </section>          
        </section>

        <section className='footer__other'>
          <nav className="other__social">
            <a href={socialLinks.linkedin} id='linkedin' className="social__link link-linkedin">
              Linkedin
            </a>

            <a href={socialLinks.github} id='github' className="social__link link-github">
              GitHub
            </a>

            <a href={socialLinks.alura} id='alura' className="social__link link-alura">
              Alura
            </a>

            <a href={socialLinks.whatsapp} id='whatsapp' className="social__link link-whatsapp">
              WhatsApp
            </a>

            <a href={socialLinks.telegram} id='telegram' className="social__link link-telegram">
              Telegram
            </a>
          </nav>
        </section>
      </div>

      <section className='footer__copyright'>
        <section className='footer__copyright__wrapper'>
          <button type='button' onClick={event => policyMessage(event)} className='copyright__link'>
            <span className='copyright__link__text'>Termos de uso</span>
          </button>

          <button type='button' onClick={event => policyMessage(event)} className='copyright__link'>
            <span className='copyright__link__text'>Política de privacidade</span>
          </button>

          <button type='button' onClick={event => policyMessage(event)} className='copyright__link'>
            <span className='copyright__link__text'>Política de cookies</span>
          </button>
          
          <p className="copyright__text"><span className='hide__768p'>Copyright </span>© 2023.<span className='span__no-wrap'> Rafael R. B.</span>.</p>
        </section>
      </section>      
    </footer>
  );
}

export default Footer;