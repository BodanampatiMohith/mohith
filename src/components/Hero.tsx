import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    // Mouse tracking for future enhancements
    const handleMouseMove = () => {
      // Can be used for interactive effects
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Generate random particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 8 + Math.random() * 4,
  }))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <motion.section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background particles/fog effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-fbi-neon-green/30 rounded-full blur-sm"
            initial={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
              opacity: 0,
            }}
            animate={{
              y: [`${particle.y}%`, `${particle.y - 30}%`],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Crime scene gradient background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-fbi-red via-fbi-black to-fbi-neon-green mix-blend-multiply blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Blurred crime scene visuals in background */}
      <div className="absolute inset-0 opacity-10">
        <motion.svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          animate={{
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          {/* Abstract crime scene shapes */}
          <path
            d="M 100 100 L 900 100 L 900 900 L 100 900 Z"
            stroke="#dc143c"
            fill="none"
            strokeWidth="2"
          />
          <circle cx="200" cy="200" r="100" fill="none" stroke="#00ff41" strokeWidth="1" />
          <path d="M 300 300 Q 400 250 500 300 T 700 300" stroke="#dc143c" fill="none" strokeWidth="1" />
          <rect x="600" y="150" width="200" height="200" fill="none" stroke="#00ff41" strokeWidth="1" />
        </motion.svg>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-7xl font-bold text-fbi-neon-green mb-6 drop-shadow-lg font-crimes"
        >
          Mohith
        </motion.h1>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="mt-8">
          <h2 className="text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
            <span className="text-fbi-red font-bold">Tech Explorer</span>
            {' | '}
            <span className="text-fbi-neon-green">AI & ML Specialist</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-8 max-w-2xl mx-auto">
            Hi, I'm Mohith – Tech Explorer. Designing Intelligent Systems with AI & ML at the Core, 
            Crafting Smart Web Applications that Turn Data into Real-World Solutions.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          variants={itemVariants}
          whileHover={{
            scale: 1.1,
            boxShadow: '0 0 30px rgba(220, 20, 60, 0.7)',
            backgroundColor: '#8b0000',
          }}
          className="mt-12 px-8 py-3 bg-fbi-red text-white font-bold uppercase tracking-widest rounded-sm border-2 border-fbi-neon-green transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,65,0.5)]"
        >
          Explore Case Files
        </motion.button>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-fbi-neon-green text-sm font-mono">SCROLL TO INVESTIGATE</div>
        <div className="text-2xl text-fbi-red text-center mt-2">↓</div>
      </motion.div>
    </motion.section>
  )
}
