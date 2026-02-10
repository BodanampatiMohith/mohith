import { motion } from 'framer-motion'
import { useState } from 'react'
import { X, Minus, Square } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  github: string
  image: string
}

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'Emergency ISL Detection',
      description: 'AI-powered system for detecting emergency situations and sign language interpretation for instant communication assistance.',
      github: 'https://github.com/BodanampatiMohith/Emergency-ISL-Detection',
      image: 'emergency-alert',
    },
    {
      id: 2,
      title: 'Jumbled Frame Construction',
      description: 'Advanced algorithm for reconstructing jumbled frame sequences using machine learning and computer vision techniques.',
      github: 'https://github.com/BodanampatiMohith/Jumbled-Frame-Construction',
      image: 'frame-construction',
    },
    {
      id: 3,
      title: 'Sign Language Translator ML',
      description: 'Real-time sign language translation system powered by deep learning and gesture recognition algorithms.',
      github: 'https://github.com/BodanampatiMohith/Sign_Language_Translator_ML',
      image: 'sign-translator',
    },
    {
      id: 4,
      title: 'AutoResearch AI',
      description: 'Automated research assistant that leverages AI to gather, analyze, and synthesize academic information.',
      github: 'https://github.com/BodanampatiMohith/AutoResearch-ai',
      image: 'auto-research',
    },
    {
      id: 5,
      title: 'The Sneakers Store',
      description: 'Full-stack e-commerce platform for sneaker retail with inventory management and secure payment integration.',
      github: 'https://github.com/BodanampatiMohith/The_Sneakers_Store',
      image: 'sneakers-store',
    },
    {
      id: 6,
      title: 'MeetMate AI',
      description: 'Intelligent meeting scheduler that uses AI to find optimal times, suggest discussion points, and manage follow-ups.',
      github: 'https://github.com/BodanampatiMohith/MeetMate-AI',
      image: 'meetmate',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const windowVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        type: 'spring',
        stiffness: 100,
      },
    }),
  }

  const handleGithubClick = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <motion.section
      id="projects"
      className="relative py-20 px-6 min-h-screen flex items-center bg-gradient-to-b from-fbi-black to-fbi-gray"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.2) 1px, transparent 1px)',
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-fbi-neon-green mb-4 drop-shadow-lg font-crimes">
            CASE FILES
          </h2>
          <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">FORENSIC INVESTIGATION WINDOWS</p>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-12 h-1 bg-fbi-neon-green"></div>
            <div className="w-12 h-1 bg-fbi-red"></div>
            <div className="w-12 h-1 bg-fbi-neon-green"></div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              custom={idx}
              variants={windowVariants}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative"
            >
              {/* Windows-style window */}
              <motion.div
                className="bg-gradient-to-b from-fbi-gray to-fbi-black border-2 border-fbi-red overflow-hidden shadow-2xl"
                animate={
                  hoveredProject === project.id
                    ? {
                        boxShadow: '0 0 30px rgba(220, 20, 60, 0.8), 0 0 60px rgba(0, 255, 65, 0.3)',
                        rotate: [-0.5, 0.5, -0.5],
                        scale: 1.1,
                      }
                    : { boxShadow: '0 0 0px rgba(0,0,0,0)', scale: 1 }
                }
                transition={{ duration: 0.4 }}
              >
                {/* Title Bar */}
                <motion.div className="bg-gradient-to-r from-fbi-red to-fbi-blood-red p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-fbi-neon-green rounded-full"></div>
                    <span className="text-white font-mono text-xs font-bold uppercase tracking-wider">
                      {project.title}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-white hover:bg-fbi-blood-red p-1 transition-colors">
                      <Minus size={14} />
                    </button>
                    <button className="text-white hover:bg-fbi-blood-red p-1 transition-colors">
                      <Square size={14} />
                    </button>
                    <button className="text-white hover:bg-fbi-blood-red p-1 transition-colors">
                      <X size={14} />
                    </button>
                  </div>
                </motion.div>

                {/* Content area */}
                <div className="p-6 space-y-4">
                  {/* Crime-themed image placeholder */}
                  <motion.div
                    className="w-full h-40 bg-gradient-to-br from-fbi-neon-green/20 to-fbi-red/20 border border-fbi-neon-green/50 flex items-center justify-center overflow-hidden relative"
                    animate={hoveredProject === project.id ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center text-fbi-neon-green/50">
                      <motion.svg
                        className="w-16 h-16 mx-auto mb-2"
                        viewBox="0 0 100 100"
                        animate={hoveredProject === project.id ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
                        <rect x="30" y="30" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" />
                        <circle cx="50" cy="50" r="5" fill="currentColor" />
                      </motion.svg>
                      <p className="text-xs font-mono">[EVIDENCE SCAN]</p>
                    </div>

                    {/* Scan line effect on hover */}
                    {hoveredProject === project.id && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-fbi-red/30 to-transparent"
                        animate={{ top: ['0%', '100%'] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </motion.div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed font-sans">
                    {project.description}
                  </p>

                  {/* Status indicator */}
                  <motion.div
                    className="flex items-center gap-2 text-xs text-fbi-neon-green font-mono"
                    animate={hoveredProject === project.id ? { x: 5 } : { x: 0 }}
                  >
                    <span className="w-2 h-2 bg-fbi-neon-green rounded-full animate-pulse"></span>
                    CASE STATUS: ACTIVE
                  </motion.div>

                  {/* GitHub button */}
                  <motion.button
                    onClick={() => handleGithubClick(project.github)}
                    className="w-full py-2 bg-fbi-red text-white font-bold uppercase text-xs tracking-widest rounded-sm border border-fbi-neon-green transition-all duration-300"
                    whileHover={{
                      backgroundColor: '#8b0000',
                      boxShadow: '0 0 20px rgba(0, 255, 65, 0.6)',
                    }}
                  >
                    View Repository
                  </motion.button>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-fbi-neon-green opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-fbi-neon-green opacity-50"></div>

                {/* Case opened animation on hover */}
                {hoveredProject === project.id && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="text-fbi-red font-bold text-2xl font-mono opacity-20"
                      animate={{ rotate: -12, x: -20 }}
                    >
                      ⚠ CASE OPENED
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          className="mt-16 text-center font-mono text-sm text-fbi-red/50 opacity-50"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          [END OF CASE FILES - MORE DATA CLASSIFIED]
        </motion.div>
      </div>
    </motion.section>
  )
}
