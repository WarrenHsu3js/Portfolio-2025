import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import { Experience } from './Components/Experience'
import About from './Contents/About'
import Connects from './Contents/Connects'
import NavBar from './Contents/NavBar'
import InfoPanel from './Contents/InfoPanel'
import { Leva } from 'leva'

function Home() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="pt-14 w-full h-screen">
      <Leva collapsed />
      <Canvas onPointerMissed={() => setSelected(null)}>
        <Suspense>
          <Experience setSelected={setSelected} selected={selected} />
        </Suspense>
      </Canvas>
      <InfoPanel selected={selected} onClose={() => setSelected(null)} />
    </div>
  )
}

function App() {
  return (
    <Router basename="/Portfolio-2025">
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
