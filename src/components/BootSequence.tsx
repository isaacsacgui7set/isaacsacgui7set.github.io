import { useState, useEffect } from 'react';
import './BootSequence.css';

interface BootSequenceProps {
  onComplete: () => void;
}

const bootLogs = [
  "Booting SMP TI Davinci...",
  "[  OK  ] Started Show Plymouth Boot Screen.",
  "[  OK  ] Reached target Paths.",
  "[  OK  ] Reached target Basic System.",
  "[  OK  ] Found device /dev/mapper/sys-root.",
  "[  OK  ] Started File System Check on /dev/mapper/sys-root.",
  "[  OK  ] Mounted /sysroot.",
  "[  OK  ] Reached target Initrd Root File System.",
  "[  OK  ] Started Initialize hardware data variables.",
  "[  OK  ] Started Network Manager.",
  "[  OK  ] Reached target Network.",
  "[  OK  ] Started OpenSSH server daemon.",
  "[  OK  ] Started Docker Application Container Engine.",
  "[  OK  ] Started Proxmox VE Cluster Node Logger.",
  "[  OK  ] Reached target Multi-User System.",
  "Starting Web Server... Done."
];

const BootSequence = ({ onComplete }: BootSequenceProps) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [showLogin, setShowLogin] = useState(false);
  const [loginStep, setLoginStep] = useState(0); 
  // 0 = wait, 1 = typing user, 2 = wait pass, 3 = typing pass, 4 = logged in
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    let currentLog = 0;
    const logInterval = setInterval(() => {
      if (currentLog < bootLogs.length) {
        setLogs(prev => [...prev, bootLogs[currentLog]]);
        currentLog++;
      } else {
        clearInterval(logInterval);
        setTimeout(() => setShowLogin(true), 500);
      }
    }, 150); // fast boot

    return () => clearInterval(logInterval);
  }, []);

  useEffect(() => {
    if (!showLogin) return;

    if (loginStep === 0) {
      setTimeout(() => setLoginStep(1), 800);
    } else if (loginStep === 1) {
      const targetUser = "root";
      let i = 0;
      const typeInterval = setInterval(() => {
        setUsername(targetUser.slice(0, i + 1));
        i++;
        if (i === targetUser.length) {
          clearInterval(typeInterval);
          setTimeout(() => setLoginStep(2), 500);
        }
      }, 100);
    } else if (loginStep === 2) {
      setTimeout(() => setLoginStep(3), 600);
    } else if (loginStep === 3) {
      const targetPass = "********";
      let i = 0;
      const typeInterval = setInterval(() => {
        setPassword(targetPass.slice(0, i + 1));
        i++;
        if (i === targetPass.length) {
          clearInterval(typeInterval);
          setTimeout(() => {
            setLoginStep(4);
            setTimeout(() => {
              setFadingOut(true);
              setTimeout(onComplete, 1000);
            }, 800);
          }, 300);
        }
      }, 100);
    }
  }, [showLogin, loginStep, onComplete]);

  return (
    <div className={`boot-container ${fadingOut ? 'fade-out' : ''}`}>
      <div className="boot-terminal">
        {logs.map((log, i) => {
          if (!log) return null;
          return (
            <div key={i} className="boot-line">
              {log.startsWith("[  OK  ]") ? (
                <>
                  <span style={{color: 'white'}}>[  </span>
                  <span style={{color: 'var(--accent-green)'}}>OK</span>
                  <span style={{color: 'white'}}>  ] </span>
                  {log.replace("[  OK  ] ", "")}
                </>
              ) : (
                log
              )}
            </div>
          );
        })}

        {showLogin && (
          <div className="boot-login">
            <br />
            <div>Debian GNU/Linux 12 datacenter tty1</div>
            <br />
            <div>
              datacenter login: {username}
              {loginStep === 1 && <span className="cursor" />}
            </div>
            {loginStep >= 2 && (
              <div>
                Password: {password}
                {loginStep === 3 && <span className="cursor" />}
              </div>
            )}
            {loginStep === 4 && (
              <>
                <br />
                <div>Last login: {new Date().toUTCString()} on tty1</div>
                <div style={{color: 'var(--accent-green)'}}>Welcome to Datacenter CLI. Initiating UI...</div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default BootSequence;
