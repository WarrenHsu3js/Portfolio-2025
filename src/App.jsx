import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Html, useProgress } from '@react-three/drei'
import { Leva } from 'leva'
import './App.css'

import { Experience } from './Components/Experience'
import About from './Contents/About'
import Connects from './Contents/Connects'
import NavBar from './Contents/NavBar'
import InfoPanel from './Contents/InfoPanel'

function Loader() {
  const { progress } = useProgress()
  const [displayedProgress, setDisplayedProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedProgress((prev) => {
        if (prev < progress) {
          return Math.min(prev + 1, progress)
        }
        return prev
      })
    }, 20)
    return () => clearInterval(interval)
  }, [progress])

  return (
    <Html center>
      <div style={{
        color: 'white',
        fontSize: '24px',
        fontFamily: 'sans-serif',
        background: 'rgba(0, 0, 0, 0.6)',
        padding: '20px 40px',
        borderRadius: '12px'
      }}>
        {displayedProgress.toFixed(0)} % loaded
      </div>
    </Html>
  )
}


function Home() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="pt-14 w-full h-screen">
      <Leva collapsed />
      <Canvas onPointerMissed={() => setSelected(null)}>
        <Suspense fallback={<Loader />}>
          <Experience setSelected={setSelected} selected={selected} />
        </Suspense>
      </Canvas>
      <InfoPanel selected={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/connects" element={<Connects />} />
      </Routes>
    </Router>
  )
}

export default App
