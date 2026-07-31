import { useTranslation } from 'react-i18next';
import { Server, Cloud, Code } from 'lucide-react';
import { ProjectSlider } from '../components/ProjectSlider';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="projects-container animate-fade-in">
      <div className="projects-header">
        <h1 className="text-gradient"><Code size={32} style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}/> {t('projects.active_projects') || 'ACTIVE_PROJECTS'}</h1>
        <p className="terminal-text">{'>'} {t('projects.loaded') || 'LOADED'} {t('projects.subtitle')}</p>
      </div>

      {/* Featured Projects Slider */}
      <ProjectSlider />

      <h2 className="section-heading"><Server size={24} className="text-gradient" /> {t('projects.archived_systems') || 'ARCHIVED_SYSTEMS'}</h2>
      
      <div className="projects-grid">
        
        {/* Servidor */}
        <div className="project-card glass-panel">
          <div className="project-icon">
            <Server size={32} className="text-gradient" />
          </div>
          <div className="project-content">
            <h3>{t('projects.p3_title')}</h3>
            <p>{t('projects.p3_desc')}</p>
            <div className="project-tags">
              <span className="tag">Ubuntu Server</span>
              <span className="tag">Docker</span>
              <span className="tag">Apache</span>
            </div>
          </div>
        </div>

        {/* Odoo ERP */}
        <div className="project-card glass-panel">
          <div className="project-icon">
            <Cloud size={32} className="text-gradient" />
          </div>
          <div className="project-content">
            <h3>{t('projects.p4_title')}</h3>
            <p>{t('projects.p4_desc')}</p>
            <div className="project-tags">
              <span className="tag">Odoo v17</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">Linux</span>
            </div>
          </div>
        </div>

        {/* Nextcloud */}
        <div className="project-card glass-panel">
          <div className="project-icon">
            <Cloud size={32} className="text-gradient" />
          </div>
          <div className="project-content">
            <h3>{t('projects.p5_title')}</h3>
            <p>{t('projects.p5_desc')}</p>
            <div className="project-tags">
              <span className="tag">Nextcloud</span>
              <span className="tag">Backups</span>
            </div>
          </div>
        </div>

        {/* C# Consola */}
        <div className="project-card glass-panel">
          <div className="project-icon">
            <Code size={32} className="text-gradient" />
          </div>
          <div className="project-content">
            <h3>{t('projects.p6_title')}</h3>
            <p>{t('projects.p6_desc')}</p>
            <div className="project-tags">
              <span className="tag">C#</span>
              <span className="tag">Docker</span>
              <span className="tag">ttyd</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;
