import { Terminal, Activity, Database, Server, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import './Home.css';

const stackTechs = [
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Proxmox", icon: "https://avatars.githubusercontent.com/u/2678585?s=200&v=4" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
  { name: "Atlassian", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
  { name: "PowerShell", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg" },
  { name: "Claude (AI)", icon: "https://cdn.simpleicons.org/claude/D97757" },
  { name: "Packet Tracer", icon: "https://cdn.simpleicons.org/cisco/00E5FF" },
  { name: "Backstage", icon: "https://cdn.simpleicons.org/backstage/00E5FF" },
  { name: "Odoo", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXkFb9dGHNKQGfERHIka9_6LN7F57W_s9whLgQCkbv0EeBK6Gg_Hx2si_c&s=10" },
  { name: "Jamf (MDM)", icon: "https://api.iconify.design/mdi:devices.svg?color=%23ffffff" },
  { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { name: "Tailscale", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiJvs8qAlpoVk-R4Veb_diERhSDWyyAeOv66JbcY6o7ibAlXCc_XsrrAt&s=10" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg" },
  { name: "Debian", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-plain.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "GitHub Actions", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg", level: 60, exp: "CI/CD Pipeline automation." },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: 90, exp: "Daily driver IDE." },
  { name: "Red Hat (RHCSA)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg", level: 70, exp: "System administration, SELinux, LVM, and user management." },
  { name: "Kali Linux", icon: "https://cdn.simpleicons.org/kalilinux/00E5FF", level: 85, exp: "Penetration testing and ethical hacking operations." }
];

const Home = () => {
  const { t } = useTranslation();
  const [cpuUsage, setCpuUsage] = useState(12);
  const [ramUsage, setRamUsage] = useState(45);
  const [uptime, setUptime] = useState("");
  const [procStats, setProcStats] = useState([
    { cpu: 4.8, mem: 2.2 },
    { cpu: 2.4, mem: 1.3 },
    { cpu: 1.5, mem: 0.8 },
    { cpu: 0.6, mem: 0.4 },
    { cpu: 1.8, mem: 13.5 },
    { cpu: 1.2, mem: 0.9 }
  ]);
  const [selectedSkill, setSelectedSkill] = useState<{ name: string, icon: string, level?: number, exp?: string } | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const newCpu = Math.floor(Math.random() * 20) + 10;
      const newRam = Math.floor(Math.random() * 10) + 40;

      setCpuUsage(newCpu);
      setRamUsage(newRam);

      setProcStats([
        { cpu: newCpu * 0.3, mem: newRam * 0.05 },
        { cpu: newCpu * 0.2, mem: newRam * 0.1 },
        { cpu: newCpu * 0.1, mem: newRam * 0.02 },
        { cpu: newCpu * 0.15, mem: newRam * 0.05 },
        { cpu: newCpu * 0.05, mem: newRam * 0.01 },
        { cpu: newCpu * 0.1, mem: newRam * 0.2 }
      ]);
    }, 2000);

    const birthDate = new Date('2007-10-07T23:00:00');
    const updateUptime = () => {
      const now = new Date();
      let diff = now.getTime() - birthDate.getTime();
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      diff -= years * (1000 * 60 * 60 * 24 * 365.25);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);
      const minutes = Math.floor(diff / (1000 * 60));

      setUptime(`${years} years, ${days} days, ${hours} hours, ${minutes} mins`);
    };
    updateUptime();
    const upInterval = setInterval(updateUptime, 60000);

    return () => {
      clearInterval(interval);
      clearInterval(upInterval);
    };
  }, []);

  return (
    <>
      <div className="home-container animate-fade-in">

        <header className="sys-header glass-panel">
          <div className="sys-title">
            <Terminal size={28} className="text-gradient" />
            <h1>{t('home.sys_admin') || 'SYS_ADMIN'} // ISAAC_GUISSET</h1>
          </div>
          <div className="sys-status">
            <span className="blinker"></span> {t('home.sys_online') || 'SYSTEM ONLINE'}
          </div>
        </header>

        <div className="dashboard-grid">

          {/* SYS INFO PANEL */}
          <section className="dash-panel glass-panel delay-100">
            <h2 className="panel-title"><Activity size={20} /> {t('home.metrics') || 'METRICS'}</h2>
            <div className="metrics">
              <div className="metric">
                <span>CPU</span>
                <div className="bar-bg"><div className="bar-fill" style={{ width: `${cpuUsage}%` }}></div></div>
                <span>{cpuUsage}%</span>
              </div>
              <div className="metric">
                <span>RAM</span>
                <div className="bar-bg"><div className="bar-fill" style={{ width: `${ramUsage}%` }}></div></div>
                <span>{ramUsage}%</span>
              </div>
              <div className="metric">
                <span>NET</span>
                <div className="bar-bg"><div className="bar-fill" style={{ width: '85%' }}></div></div>
                <span>85%</span>
              </div>
            </div>
          </section>

          {/* PROFILE PANEL (NEOFETCH) */}
          <section className="dash-panel glass-panel delay-200" style={{ gridColumn: 'span 2' }}>
            <h2 className="panel-title"><Server size={20} /> PROFILE_DATA // neofetch</h2>
            <div className="neofetch-container">
              <div className="neofetch-img-wrapper">
                <img src="/imatges/varies/marenostrum.png" alt="Isaac" className="neofetch-img" />
              </div>
              <div className="neofetch-info">
                <div className="neofetch-title"><span className="neo-user">isaac</span>@<span className="neo-host">datacenter</span></div>
                <div className="neofetch-separator">-----------------</div>
                <div className="neofetch-line"><span className="neo-key">OS</span>: Human_OS v1.0</div>
                <div className="neofetch-line"><span className="neo-key">Host</span>: Isaac Guisset</div>
                <div className="neofetch-line"><span className="neo-key">Kernel</span>: IT_SysAdmin_Module</div>
                <div className="neofetch-line"><span className="neo-key">Uptime</span>: {uptime}</div>
                <div className="neofetch-line"><span className="neo-key">Packages</span>: 24 (skills)</div>
                <div className="neofetch-line"><span className="neo-key">Shell</span>: bash/zsh (Fluent)</div>
                <div className="neofetch-line"><span className="neo-key">Resolution</span>: 1920x1080 (Focus)</div>
                <div className="neofetch-line"><span className="neo-key">CPU</span>: Brain_i9 @ HighFreq</div>
                <div className="neofetch-line"><span className="neo-key">Memory</span>: Infinite (Learning)</div>

                <div className="neofetch-colors">
                  <span className="c-black"></span><span className="c-red"></span><span className="c-green"></span>
                  <span className="c-yellow"></span><span className="c-blue"></span><span className="c-magenta"></span>
                  <span className="c-cyan"></span><span className="c-white"></span>
                </div>
              </div>
            </div>
            <div className="hero-buttons" style={{ marginTop: '1.5rem' }}>
              <Link to="/projects" className="btn-primary">{t('home.btn_init_projects') || 'INIT PROJECTS'}</Link>
              <Link to="/blog" className="btn-secondary">{t('home.btn_read_logs') || 'READ LOGS'}</Link>
            </div>
          </section>

          {/* ACTIVE PROCESSES (HTOP) */}
          <section className="dash-panel glass-panel delay-200" style={{ gridColumn: 'span 3', padding: '0' }}>
            <div style={{ padding: '1.5rem 1.5rem 0.5rem 1.5rem' }}>
              <h2 className="panel-title" style={{ margin: 0, borderBottom: 'none' }}>
                <Terminal size={20} /> ACTIVE_PROCESSES // htop
              </h2>
            </div>
            <div className="htop-wrapper" style={{ overflowX: 'auto' }}>
              <table className="htop-table">
                <thead>
                  <tr>
                    <th>PID</th>
                    <th>USER</th>
                    <th>PRI</th>
                    <th>NI</th>
                    <th>VIRT</th>
                    <th>RES</th>
                    <th>S</th>
                    <th>CPU%</th>
                    <th>MEM%</th>
                    <th>TIME+</th>
                    <th>Command</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1403</td><td>isaac</td><td>20</td><td>0</td><td>2.4G</td><td>800M</td><td>R</td><td className="htop-cpu">{procStats[0].cpu.toFixed(1)}</td><td>{procStats[0].mem.toFixed(1)}</td><td>32:15.01</td>
                    <td className="htop-cmd">/usr/cendrassos/daw --module=backend</td>
                  </tr>
                  <tr>
                    <td>1990</td><td>isaac</td><td>20</td><td>0</td><td>4.2G</td><td>1.5G</td><td>S</td><td>{procStats[1].cpu.toFixed(1)}</td><td>{procStats[1].mem.toFixed(1)}</td><td>14:12.33</td>
                    <td className="htop-cmd">/opt/spotlio/devops-intern --mode=production</td>
                  </tr>
                  <tr>
                    <td>2045</td><td>root</td><td>20</td><td>0</td><td>1.2G</td><td>500M</td><td>S</td><td>{procStats[2].cpu.toFixed(1)}</td><td>{procStats[2].mem.toFixed(1)}</td><td>04:10.02</td>
                    <td className="htop-cmd">/bin/study --cert=CCNA --module=routing</td>
                  </tr>
                  <tr>
                    <td>2105</td><td>isaac</td><td>20</td><td>0</td><td>1.0G</td><td>400M</td><td>R</td><td className="htop-cpu">{procStats[3].cpu.toFixed(1)}</td><td>{procStats[3].mem.toFixed(1)}</td><td>11:45.10</td>
                    <td className="htop-cmd">/opt/rhcsa/practice-labs --mode=selinux</td>
                  </tr>
                  <tr>
                    <td>2301</td><td>root</td><td>-20</td><td>0</td><td>8.4G</td><td>4.2G</td><td>S</td><td>{procStats[4].cpu.toFixed(1)}</td><td className="htop-mem">{procStats[4].mem.toFixed(1)}</td><td>89:22.01</td>
                    <td className="htop-cmd">/usr/bin/proxmox-cluster --sync=active</td>
                  </tr>
                  <tr>
                    <td>3402</td><td>isaac</td><td>20</td><td>0</td><td>500M</td><td>100M</td><td>S</td><td>{procStats[5].cpu.toFixed(1)}</td><td>{procStats[5].mem.toFixed(1)}</td><td>45:10.02</td>
                    <td className="htop-cmd">/usr/bin/driver-license --status=in-progress</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* STACK PANEL */}
          <section className="dash-panel glass-panel delay-300" style={{ gridColumn: 'span 3' }}>
            <div style={{ borderBottom: '1px solid rgba(0, 229, 255, 0.1)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
              <h2 className="panel-title" style={{ margin: 0, border: 'none', padding: 0 }}>
                <Database size={20} /> {t('home.tech_stack') || 'TECH_STACK'}
              </h2>
            </div>
            <div className="stack-grid" style={{ position: 'relative' }}>
              <div className="fake-click-ping"></div>
              <div className="fake-cursor">
                <MousePointer2 size={28} fill="white" color="black" />
              </div>
              {stackTechs.map((tech, i) => (
                <div key={i} className="tech-node icon-only clickable-node" title={tech.name} onClick={() => setSelectedSkill(tech)}>
                  <img src={tech.icon} alt={tech.name} style={{ width: '32px', height: '32px' }} onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.innerText = tech.name; }} />
                </div>
              ))}
            </div>
          </section>

          {/* PERSONAL GALLERY PANEL */}
          <section className="dash-panel glass-panel delay-300" style={{ gridColumn: 'span 3', marginTop: '1.5rem' }}>
            <h2 className="panel-title"><Terminal size={20} /> PERSONAL_ARCHIVE</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', padding: '1.5rem' }}>
              {[12, 16, 17, 20].map(num => (
                <div key={num} style={{ borderRadius: '8px', overflow: 'hidden', height: '200px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <img src={`/imatges/personal/isaac_${num}.jpeg`} alt={`Isaac Photo ${num}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.currentTarget.parentElement!.style.display = 'none'; }} />
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* SKILL MODAL */}
      {selectedSkill && (
        <div className="skill-modal-overlay" onClick={() => setSelectedSkill(null)}>
          <div className="skill-modal glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setSelectedSkill(null)}>
              <X size={24} />
            </button>
            <div className="skill-modal-header">
              <img src={selectedSkill.icon} alt={selectedSkill.name} />
              <h2>{selectedSkill.name}</h2>
            </div>
            <div className="skill-modal-body">
              <div className="skill-metric">
                <span style={{ color: 'var(--accent-cyan)' }}>PROFICIENCY_LEVEL</span>
                <div className="bar-bg" style={{ marginTop: '0.5rem', height: '8px' }}>
                  <div className="bar-fill" style={{ width: `${selectedSkill.level || 70}%`, background: 'var(--accent-cyan)' }}></div>
                </div>
                <div style={{ textAlign: 'right', fontSize: '0.8rem', marginTop: '0.2rem' }}>{selectedSkill.level || 70}%</div>
              </div>
              <div className="skill-logs" style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>SYSTEM_LOGS // EXPERIENCE</h3>
                <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>
                  {selectedSkill.exp || "Implemented and maintained solutions using this technology across various academic and homelab environments."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default Home;
