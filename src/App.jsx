import { Suspense, useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import { Leva } from "leva";
import { useTranslation } from "react-i18next";

import NavBar from "./Contents/NavBar";
import Home from "./Contents/Home";
import InfoPanel from "./Components/InfoPanel";
import { Experience } from "./Components/Experience";
import "./App.css";

function Loader() {
  const { progress } = useProgress();
  const [p, setP] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const id = setInterval(() => setP((v) => (v < progress ? Math.min(v + 1, progress) : v)), 20);
    return () => clearInterval(id);
  }, [progress]);

  return (
    <Html center>
      <div className="text-white text-base bg-black/60 px-16 py-10 rounded-xl text-center leading-7">
        <div>{p.toFixed(0)}%</div>
        <div>{t("loader.loading")}</div>
        <div>{t("loader.wait")}</div>
      </div>
    </Html>
  );
}

function Lobby() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="fixed inset-0 fullscreen">
      <Leva collapsed />
      <Canvas onPointerMissed={() => setSelected(null)}>
        <Suspense fallback={<Loader />}>
          <Experience selected={selected} setSelected={setSelected} />
        </Suspense>
      </Canvas>
      <InfoPanel selected={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lobby" element={<Lobby />} />
        </Routes>
      </div>
    </Router>
  );
}
