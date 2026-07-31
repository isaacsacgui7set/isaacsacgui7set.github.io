import { Terminal, Briefcase, GraduationCap, Calendar, ShieldCheck, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Blog.css';

const Blog = () => {
  const { t } = useTranslation();

  // We tell TypeScript that this is an array of experience objects
  const experiences = t('blog.experiences', { returnObjects: true }) as Array<{
    id: number,
    type: string,
    role: string,
    company: string,
    date: string,
    description: string,
    tech: string[]
  }>;

  const getIcon = (type: string) => {
    switch(type) {
      case 'work': return <Briefcase size={20} className="timeline-icon-svg text-gradient" />;
      case 'education': return <GraduationCap size={20} className="timeline-icon-svg text-gradient" />;
      case 'cert': return <ShieldCheck size={20} className="timeline-icon-svg text-gradient" />;
      default: return <Terminal size={20} className="timeline-icon-svg text-gradient" />;
    }
  };

  return (
    <div className="blog-container animate-fade-in">
      <header className="blog-header glass-panel">
        <h1><Terminal size={32} className="text-gradient" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}/> SYSTEM_LOGS // EXPERIENCE</h1>
        <p>Execution trace of professional roles, academic background, and certifications.</p>
      </header>

      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`timeline-item delay-${(index + 1) * 100}`}>
            <div className="timeline-icon glass-panel">
              {getIcon(exp.type)}
            </div>
            <div className="timeline-content glass-panel">
              <div className="timeline-header">
                <div className="timeline-title-area">
                  <h2><ChevronRight size={18} className="text-gradient"/> {exp.role}</h2>
                  <h3 className="company-name">{exp.company}</h3>
                </div>
                <div className="timeline-date">
                  <Calendar size={14} /> {exp.date}
                </div>
              </div>
              <div className="timeline-body">
                <p>{exp.description}</p>
                <div className="timeline-tags">
                  {exp.tech.map(tag => (
                    <span key={tag} className="tag">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
