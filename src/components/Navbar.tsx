import { Link, useLocation } from 'react-router-dom';
import { Home, Server, Code, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="glass-panel navbar">
      <div className="nav-brand">
        <Link to="/" className="text-gradient" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
          <span className="blinker"></span>
          <h2>Isaac Guisset</h2>
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
          <Home size={18} /> {t('nav.sys_dash') || 'SYS_DASH'}
        </Link>
        <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
          <Code size={18} /> {t('nav.projects') || 'PROJECTS'}
        </Link>
        <Link to="/homelab" className={`nav-link ${location.pathname === '/homelab' ? 'active' : ''}`}>
          <Server size={18} /> {t('nav.homelab') || 'HOMELAB'}
        </Link>
        <Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`}>
          <FileText size={18} /> {t('nav.blog') || 'EXPERIENCE'}
        </Link>
        <a href="https://isaacguisset.com/arxius/Isaac_Guisset-CV-Cat.pdf" target="_blank" rel="noreferrer" className="nav-link" style={{border: '1px solid var(--accent-cyan)', color: 'var(--accent-cyan)'}}>
          cv.sh
        </a>
      </div>
      <div className="nav-lang">
        <button onClick={() => changeLanguage('en')} className={i18n.language.startsWith('en') ? 'active-lang' : ''}>EN</button>
        <button onClick={() => changeLanguage('ca')} className={i18n.language.startsWith('ca') ? 'active-lang' : ''}>CA</button>
        <button onClick={() => changeLanguage('es')} className={i18n.language.startsWith('es') ? 'active-lang' : ''}>ES</button>
      </div>
    </nav>
  );
};

export default Navbar;
