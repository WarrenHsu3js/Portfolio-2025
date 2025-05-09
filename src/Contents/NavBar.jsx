import { Link } from "react-router-dom";
import React from 'react'

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 w-full h-14 bg-white/80 shadow-md z-[100] px-6 flex items-center gap-6 backdrop-blur">
      <Link to="/" className="text-xl font-bold text-gray-800 hover:text-black transition">
        2025 Portfolio
      </Link>
      <div className="space-x-6 text-gray-600 text-sm">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/lobby" className="hover:text-blue-600">3D Lobby</Link>
        <Link to="/about" className="hover:text-black transition">About</Link>
        <Link to="/connects" className="hover:text-black transition">Connects</Link>
      </div>
    </div>
  )
}
