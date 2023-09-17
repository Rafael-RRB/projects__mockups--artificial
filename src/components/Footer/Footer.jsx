import './Footer.css';
import { socialLinks } from '../../../public/config.js';

function Footer(props) {
  return (
    <footer className="footer">
      <section className='footer__about'>
        <h2 className="about__title">ArtIficial</h2>
        <p className="about__description">Site desenvolvido por <span className='span__no-wrap'>Rafael R. B.,</span> utilizando Crayion, DALL-E 2 e Simplified para inspiração e geração das imagens. Inpainting feito através do site getimg.ai, e outpainting feito através do site Neural.love.</p>
      </section>

      <section className='footer__other'>
        <nav className="other__social">
          <a href={socialLinks.linkedin} className="social__link link-linkedin">
            <span className="a11y-hidden">LinkedIn</span>
          </a>

          <a href={socialLinks.github} className="social__link link-github">
            <span className="a11y-hidden">GitHub</span>
          </a>

          <a href={socialLinks.alura} className="social__link link-alura">
            <span className="a11y-hidden">Alura</span>
          </a>

          <a href={socialLinks.whatsapp} className="social__link link-whatsapp">
            <span className="a11y-hidden">WhatsApp</span>
          </a>

          <a href={socialLinks.telegram} className="social__link link-telegram">
            <span className="a11y-hidden">Telegram</span>
          </a>
        </nav>

        <p className="other__copyright">© 2023. <span className='span__no-wrap'>Rafael R. B.</span>.</p>
      </section>      
    </footer>
  );
}

export default Footer;