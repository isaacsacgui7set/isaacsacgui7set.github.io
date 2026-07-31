import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './ProjectSlider.css';

export const ProjectSlider = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const defaultProjects = [
    {
      id: 1,
      title: t('projects.slider1_title') || 'Matriculaciones.es',
      desc: t('projects.slider1_desc') || 'Plataforma nacional de estadísticas.',
      image: "/imatges/varies/matriculaciones_ai.png",
      tags: ["C#", ".NET", "Docker", "MySQL"],
      link: "https://matriculaciones.es"
    },
    {
      id: 2,
      title: t('projects.slider2_title'),
      desc: t('projects.slider2_desc'),
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80",
      tags: ["Web", "CMS", "Admin"],
      link: "https://rapsodiaveusliteraries.com"
    },
    {
      id: 3,
      title: t('projects.slider3_title'),
      desc: t('projects.slider3_desc'),
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      tags: ["Proxmox", "Ubuntu", "Docker", "Network"]
    }
  ];

  const nextSlide = () => setCurrent(prev => (prev === defaultProjects.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent(prev => (prev === 0 ? defaultProjects.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="slider-container glass-panel">
      
      <button className="slider-btn left" onClick={prevSlide}><ChevronLeft size={24} /></button>
      <button className="slider-btn right" onClick={nextSlide}><ChevronRight size={24} /></button>

      <div className="slider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {defaultProjects.map((p, index) => (
          <div key={p.id} className="slide" aria-hidden={current !== index}>
            <div className="slide-image-wrapper">
              <img src={p.image} alt={p.title} className="slide-image" />
              <div className="slide-overlay"></div>
            </div>
            
            <div className="slide-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="slide-tags">
                {p.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="btn-primary" style={{marginTop: '1rem'}}>
                  {t('projects.access_node') || 'ACCESS_NODE'} <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="slider-dots">
        {defaultProjects.map((_, i) => (
          <button 
            key={i} 
            className={`dot ${current === i ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

    </div>
  );
};
