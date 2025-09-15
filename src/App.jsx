import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './Pages/About'
import Resume from './Pages/Resume'
import Projects from './Pages/Project'

// AOS import
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true,     // scroll ke baad animation sirf ek bar chale
    })
  }, [])

  return (
    <Router>
      {/* Navbar will always show in all page */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  )
}
