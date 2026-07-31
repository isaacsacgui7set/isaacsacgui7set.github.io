import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Homelab from './pages/Homelab';
import Blog from './pages/Blog';
import BootSequence from './components/BootSequence';
import './App.css';

function App() {
  const [showBoot, setShowBoot] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('booted') !== 'true') {
      setShowBoot(true);
    }
  }, []);

  const handleBootComplete = () => {
    sessionStorage.setItem('booted', 'true');
    setShowBoot(false);
  };

  return (
    <>
      {showBoot && <BootSequence onComplete={handleBootComplete} />}
      <div className={`app-container ${showBoot ? 'hidden' : ''}`}>
        <div className="bg-circles"></div>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/homelab" element={<Homelab />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
