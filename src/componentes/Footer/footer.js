import './footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Logo + Nome */}
        <div className="footer-brand">
          <img
            src="/images/logo.png"
            alt="Fennec Consultoria"
            className="footer-logo"
          />
          <h3>Fennec Consultoria Empresarial</h3>
          <p>Soluções estratégicas para crescimento sustentável</p>
        </div>

        {/* Redes */}
        <div className="footer-social">
          <a
            href="https://github.com/GabrielSimioni12"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/gabrielsimioni22/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:gabrielsimioniwo@email.com">
            <FaEnvelope />
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Fennec • Desenvolvido por Gabriel Simioni
      </div>
    </footer>
  );
};

export default Footer;
