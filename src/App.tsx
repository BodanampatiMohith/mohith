import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import IntroLoader from './components/IntroLoader'
import Header from './components/Header'
import Hero from './components/Hero'
import CrimeSceneTape from './components/CrimeSceneTape'
import TechSkills from './components/TechSkills'
import Projects from './components/Projects'
import Coursework from './components/Coursework'
import About from './components/About'
import Certifications from './components/Certifications'
import Connect from './components/Connect'
import Footer from './components/Footer'

export default function App() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    // Intro animation duration
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 4500) // Adjust timing as needed

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-fbi-black overflow-x-hidden">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroLoader key="intro" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <Header />
            <Hero />
            <CrimeSceneTape />
            <TechSkills />
            <Projects />
            <CrimeSceneTape />
            <Coursework />
            <About />
            <Certifications />
            <Connect />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
