import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="footer glass-panel">
      <div className="footer-content">
        <p className="terminal-text">{t('footer.text') || 'Isaac Guisset © 2026. System operational.'}</p>
      </div>
    </footer>
  );
};

export default Footer;
