import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Html, useProgress } from '@react-three/drei';
import { Leva } from 'leva';
import './App.css';

import { Experience } from './Components/Experience';
import About from './Contents/About';
import Connects from './Contents/Connects';
import NavBar from './Contents/NavBar';
import InfoPanel from './Contents/InfoPanel';
import Home from './Contents/Home';
import ProjectDetail from './Contents/ProjectDetail';
import { EcctrlJoystick } from 'ecctrl';

function Loader() {
  const { progress } = useProgress();
  const [displayedProgress, setDisplayedProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedProgress((prev) => {
        if (prev < progress) {
          return Math.min(prev + 1, progress);
        }
        return prev;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <Html center>
      <div style={{
        color: 'white',
        fontSize: '16px',
        fontFamily: 'sans-serif',
        background: 'rgba(0, 0, 0, 0.6)',
        padding: '40px 80px',
        borderRadius: '12px',
        textAlign: 'center',
        lineHeight: '1.8'
      }}>
        <div>{displayedProgress.toFixed(0)}%</div>
        <div>Loading</div>
        <div>請稍後</div>
      </div>
    </Html>
  );
}

function Lobby() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="pt-14 w-full h-screen">
      <EcctrlJoystick joystickBaseProps={{ receiveShadow: true }} />
      <Leva collapsed />
      <Canvas onPointerMissed={() => setSelected(null)}>
        <Suspense fallback={<Loader />}>
          <Experience setSelected={setSelected} selected={selected} />
        </Suspense>
      </Canvas>
      <InfoPanel selected={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/about" element={<About />} />
        <Route path="/connects" element={<Connects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;