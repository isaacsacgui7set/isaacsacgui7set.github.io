import { Network, History, Laptop, Server, HardDrive, Terminal, Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';
import './Homelab.css';

const Homelab = () => {
  const { t } = useTranslation();
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      securityLevel: 'loose',
      fontFamily: 'Inter',
    });
    
    if (diagramRef.current) {
      mermaid.contentLoaded();
    }
  }, []);

  return (
    <div className="homelab-container animate-fade-in">
      <div className="homelab-header">
        <h1 className="text-gradient"><Server size={32} style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '10px'}}/> {t('homelab.title') || 'HOMELAB_DATACENTER'}</h1>
        <p className="terminal-text">{'>'} {t('homelab.subtitle') || 'MI INFRAESTRUCTURA Y SERVIDORES AUTOHOSPEDADOS'}</p>
      </div>

      {/* HISTORIAL / EVOLUCIÓN */}
      <section className="glass-panel delay-100" style={{marginBottom: '3rem'}}>
        <div style={{padding: '1.5rem', borderBottom: '1px dashed var(--accent-cyan)'}}>
          <h2 style={{display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0, color: 'var(--accent-cyan)'}}>
            <History size={24} /> {t('homelab.history_title')}
          </h2>
        </div>
        
        <div className="evolution-timeline">
          
          <div className="evo-item">
            <div className="evo-icon"><Laptop size={20} /></div>
            <div className="evo-content">
              <h3>{t('homelab.hist_v1_title')}</h3>
              <p dangerouslySetInnerHTML={{ __html: t('homelab.hist_v1_desc') }}></p>
            </div>
          </div>

          <div className="evo-item">
            <div className="evo-icon"><Cpu size={20} /></div>
            <div className="evo-content">
              <h3>{t('homelab.hist_v2_title')}</h3>
              <p dangerouslySetInnerHTML={{ __html: t('homelab.hist_v2_desc') }}></p>
              <img src="/imatges/servidor/MSI_GT72VR_7RE_433_Innereien.jpg" alt="MSI GT72VR" style={{width: '100%', maxWidth: '400px', marginTop: '1rem', borderRadius: '4px', border: '1px solid var(--glass-border)'}} onError={(e) => e.currentTarget.style.display='none'} />
            </div>
          </div>

          <div className="evo-item">
            <div className="evo-icon"><Terminal size={20} /></div>
            <div className="evo-content">
              <h3>{t('homelab.hist_v3_title')}</h3>
              <p dangerouslySetInnerHTML={{ __html: t('homelab.hist_v3_desc') }}></p>
              <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                <img src="/imatges/servidor/WhatsApp Image 2025-08-16 at 5.35.37 PM.jpeg" alt="Server Photo" style={{width: '100%', maxWidth: '250px', borderRadius: '4px', border: '1px solid var(--glass-border)', objectFit: 'cover'}} onError={(e) => e.currentTarget.style.display='none'} />
                <img src="/imatges/servidor/asaos.jpeg" alt="Server Photo" style={{width: '100%', maxWidth: '250px', borderRadius: '4px', border: '1px solid var(--glass-border)', objectFit: 'cover'}} onError={(e) => e.currentTarget.style.display='none'} />
              </div>
            </div>
          </div>

          <div className="evo-item">
            <div className="evo-icon"><Network size={20} /></div>
            <div className="evo-content">
              <h3>{t('homelab.hist_v4_title')}</h3>
              <p dangerouslySetInnerHTML={{ __html: t('homelab.hist_v4_desc') }}></p>
              <img src="https://cdn.cs.1worldsync.com/a5/34/a5344b25-3db7-41cb-b5ca-cb72f99c5326.jpg" alt="Wyse 5070" style={{width: '100%', maxWidth: '250px', marginTop: '1rem', borderRadius: '4px', border: '1px solid var(--glass-border)'}} />
            </div>
          </div>

          <div className="evo-item">
            <div className="evo-icon"><HardDrive size={20} /></div>
            <div className="evo-content">
              <h3>{t('homelab.hist_v5_title')}</h3>
              <p dangerouslySetInnerHTML={{ __html: t('homelab.hist_v5_desc') }}></p>
              <img src="https://m.media-amazon.com/images/I/61RGcswfviL._AC_UF894,1000_QL80_.jpg" alt="Dell T320" style={{width: '100%', maxWidth: '250px', marginTop: '1rem', borderRadius: '4px', border: '1px solid var(--glass-border)'}} />
            </div>
          </div>

        </div>
      </section>

      <section className="server-list delay-200">
        <h2 className="section-heading"><Server size={24} className="text-gradient" /> CURRENT_NODES</h2>
        
        {/* Dell 5820 */}
        <div className="server-row glass-panel">
          <div className="server-img-container">
            <img src="/imatges/servidor/servidor.jpeg" alt="Main Server" onError={(e) => { e.currentTarget.style.display='none' }} />
            <img src="/imatges/servidor/High-Quality-DELL-Precision-5820-Tower-Workstation.avif" alt="Dell 5820" onError={(e) => { e.currentTarget.style.display='none' }} />
          </div>
          <div className="server-info">
            <h3>{t('homelab.server1_title') || 'NODE-01: Dell Precision 5820'}</h3>
            <p>{t('homelab.server1_desc') || 'Servidor principal de virtualización y aplicaciones (Docker/LXC).'}</p>
            <div className="tech-tags" style={{marginBottom: '1rem'}}>
              <span className="tag">LXC</span>
              <span className="tag">Docker</span>
              <span className="tag">libvirt</span>
              <span className="tag">Tailscale</span>
            </div>
            <div className="diagram-container glass-panel" ref={diagramRef} style={{marginTop: '1.5rem', background: 'var(--bg-secondary)', border: '1px solid var(--glass-border)'}}>
              <div className="mermaid">
                {`graph TD
                  A[Jellyseerr] --> B(Radarr / Sonarr)
                  B --> C[Prowlarr]
                  B --> D[qBittorrent]
                  D --> E[(NAS Storage)]
                  B --> E
                  F[Jellyfin] --> E
                  A -.-> F`}
              </div>
            </div>
          </div>
        </div>

        {/* Dell T320 */}
        <div className="server-row glass-panel">
          <div className="server-img-container">
            <img src="https://m.media-amazon.com/images/I/61RGcswfviL._AC_UF894,1000_QL80_.jpg" alt="Dell T320" />
          </div>
          <div className="server-info">
            <h3>{t('homelab.server2_title') || 'NODE-02: Dell T320 (NAS)'}</h3>
            <p>{t('homelab.server2_desc') || 'Servidor principal de almacenamiento, Proxmox y copias de seguridad.'}</p>
            <div className="tech-tags">
              <span className="tag">Proxmox</span>
              <span className="tag">NAS</span>
              <span className="tag">Backups</span>
            </div>
          </div>
        </div>

        {/* Wyse 5070 */}
        <div className="server-row glass-panel">
          <div className="server-img-container" style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
            <img src="https://cdn.cs.1worldsync.com/a5/34/a5344b25-3db7-41cb-b5ca-cb72f99c5326.jpg" alt="Dell Wyse 5070" />
          </div>
          <div className="server-info">
            <h3>{t('homelab.server3_title') || 'NODE-03: Dell Wyse 5070'}</h3>
            <p>{t('homelab.server3_desc') || 'Microservidor dedicado a los servicios de red core.'}</p>
            <div className="tech-tags">
              <span className="tag">Nginx Proxy Manager</span>
              <span className="tag">Pi-hole</span>
            </div>
          </div>
        </div>

      </section>

      <section className="glass-panel info-section delay-300" style={{marginTop: '3rem', textAlign: 'left', borderLeft: '4px solid #ef4444'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
          <Network size={32} color="#ef4444" />
          <h2 style={{margin: 0, color: '#ef4444'}}>{t('homelab.network_title') || 'NETWORK TOPOLOGY'}</h2>
        </div>
        <p>{t('homelab.network_desc') || 'Descripción general de la topología de red y segmentación.'}</p>
      </section>
      
      {/* HARDWARE ARCHIVE / SERVER GALLERY */}
      <section className="glass-panel delay-300" style={{marginTop: '3rem', padding: '1.5rem'}}>
        <div style={{borderBottom: '1px dashed var(--accent-cyan)', marginBottom: '1.5rem', paddingBottom: '0.5rem'}}>
          <h2 style={{display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0, color: 'var(--accent-cyan)', fontSize: '1.2rem'}}>
            <HardDrive size={20} /> HARDWARE_ARCHIVE // DATA_LOGS
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {[2, 3, 9, 10].map(num => (
            <div key={num} style={{ borderRadius: '8px', overflow: 'hidden', height: '200px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <img src={`/imatges/personal/isaac_${num}.jpeg`} alt={`Hardware Photo ${num}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.currentTarget.parentElement!.style.display = 'none'; }} />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Homelab;
