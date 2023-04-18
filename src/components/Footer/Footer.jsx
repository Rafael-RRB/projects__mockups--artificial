import './Footer.css';

function Footer(props) {
  return (
    <footer className="footer">
      <h2 className="footer__title">ArtIficial</h2>

      <p className="footer__description">Site desenvolvido por Rafael R. B., utilizando Crayion, DALL-E 2 e Simplified para inspiração e geração das imagens. Inpainting feito através do site getimg.ai, e Outpainting feito através do site neural.love.</p>

      <nav className="footer__social">
        <a href="" className="social__link link-linkedin">
        <span className="a11y-hidden">LinkedIn</span>
        </a>

        <a href="" className="social__link link-github">
          <span className="a11y-hidden">GitHub</span>
        </a>

        <a href="" className="social__link link-alura">
          <span className="a11y-hidden">Alura</span>
        </a>

        <a href="" className="social__link link-whatsapp">
          <span className="a11y-hidden">WhatsApp</span>
        </a>

        <a href="" className="social__link link-telegram">
          <span className="a11y-hidden">Telegram</span>
        </a>
      </nav>

      <p className="footer__copyright">© 2023 - Rafael R. B.. </p>
    </footer>
  );
}

export default Footer;