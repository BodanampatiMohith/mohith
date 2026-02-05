import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import '../styles/intro.css'

export default function IntroLoader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 100 : prev + Math.random() * 30))
    }, 200)

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  }

  const characters = 'ACCESSING CLASSIFIED FILES…'

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed inset-0 bg-gradient-to-b from-fbi-black via-fbi-gray to-fbi-black flex items-center justify-center z-50 overflow-hidden"
    >
      {/* Crime Scene Tape - Top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-yellow-400 via-black via-yellow-400 to-black opacity-80"
        style={{
          backgroundSize: '50px 100%',
          backgroundImage: 'repeating-linear-gradient(45deg, #fbbf24, #fbbf24 10px, #000 10px, #000 20px)',
          willChange: 'transform',
        }}
        animate={{ x: [-100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <motion.div
          className="absolute inset-0 flex items-center whitespace-nowrap text-black font-mono font-bold text-xs tracking-widest"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ willChange: 'transform' }}
        >
          <span>● CRIME SCENE — DO NOT CROSS ● CLASSIFIED — FBI INVESTIGATION ● </span>
          <span>● CRIME SCENE — DO NOT CROSS ● CLASSIFIED — FBI INVESTIGATION ● </span>
        </motion.div>
      </motion.div>

      {/* Crime Scene Tape - Bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-l from-red-700 via-black via-red-700 to-black opacity-80"
        style={{
          backgroundSize: '50px 100%',
          backgroundImage: 'repeating-linear-gradient(-45deg, #b91c1c, #b91c1c 10px, #000 10px, #000 20px)',
          willChange: 'transform',
        }}
        animate={{ x: [0, 100] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <motion.div
          className="absolute inset-0 flex items-center whitespace-nowrap text-white font-mono font-bold text-xs tracking-widest"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ willChange: 'transform' }}
        >
          <span>● CRIME SCENE — DO NOT CROSS ● CLASSIFIED — FBI INVESTIGATION ● </span>
          <span>● CRIME SCENE — DO NOT CROSS ● CLASSIFIED — FBI INVESTIGATION ● </span>
        </motion.div>
      </motion.div>

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-full h-1 bg-gradient-to-b from-transparent via-fbi-red to-transparent opacity-50"
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Glitch effect background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="absolute w-full h-full"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(220, 20, 60, 0.1) 2px, rgba(220, 20, 60, 0.1) 4px)',
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* Magnifying glass animation */}
        <motion.div
          className="mb-12 flex justify-center"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            className="text-fbi-neon-green"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="50" cy="50" r="40" />
            <line x1="85" y1="85" x2="110" y2="110" />
          </svg>
        </motion.div>

        {/* Main text with glitch effect */}
        <motion.div
          className="text-4xl md:text-5xl font-bold mb-6 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <span className="text-fbi-neon-green block mb-2">FBI DATABASE</span>
          <span className="text-fbi-red inline-block animate-pulse">Mohith</span>
        </motion.div>

        {/* Loading text character by character */}
        <motion.div className="mt-8 text-lg text-fbi-neon-green font-mono tracking-wider">
          {characters.split('').map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              style={{ display: 'inline-block' }}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        {/* Progress bar */}
        <div className="mt-12 w-full bg-fbi-gray border-2 border-fbi-red rounded-lg overflow-hidden h-3">
          <motion.div
            className="h-full bg-gradient-to-r from-fbi-red to-fbi-blood-red"
            initial={{ width: '0%' }}
            animate={{ width: `${Math.min(progress, 95)}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Progress text */}
        <motion.p
          className="mt-4 text-sm text-fbi-neon-green font-mono"
          animate={{ opacity: [0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          {Math.min(Math.floor(progress), 99)}% COMPLETE
        </motion.p>

        {/* Case file number */}
        <motion.div
          className="mt-8 text-xs text-fbi-red font-mono opacity-75"
          animate={{ opacity: [0.3, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          CASE #2024-PORTFOLIO-001
        </motion.div>
      </div>

      {/* Corner elements */}
      <div className="absolute top-4 left-4 text-fbi-red text-xs font-mono opacity-50">
        TOP SECRET
      </div>
      <div className="absolute bottom-4 right-4 text-fbi-red text-xs font-mono opacity-50">
        CONFIDENTIAL
      </div>
    </motion.div>
  )
}
