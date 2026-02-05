import { motion } from 'framer-motion'
import { useState } from 'react'

interface TechCard {
  id: number
  name: string
  category: string
  icon: string
}

export default function TechStackVisual() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const techStack: TechCard[] = [
    { id: 1, name: 'React', category: 'Frontend', icon: '⚛️' },
    { id: 2, name: 'TypeScript', category: 'Language', icon: '📘' },
    { id: 3, name: 'Node.js', category: 'Backend', icon: '🟩' },
    { id: 4, name: 'Flask', category: 'Backend', icon: '🍶' },
    { id: 5, name: 'TensorFlow', category: 'ML', icon: '🔲' },
    { id: 6, name: 'PyTorch', category: 'ML', icon: '🔷' },
    { id: 7, name: 'Three.js', category: '3D', icon: '🎭' },
    { id: 8, name: 'Framer Motion', category: 'Animation', icon: '✨' },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -45 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        type: 'spring',
        stiffness: 100,
      },
    }),
  }

  const floatVariants = (i: number) => ({
    y: [0, -20 - i * 5, 0],
    rotate: [i * 5, i * 5 + 10, i * 5],
    transition: {
      duration: 4 + i * 0.5,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  })

  const hoverVariants = {
    initial: { scale: 1, rotateY: 0 },
    hover: {
      scale: 1.1,
      rotateY: 360,
      boxShadow: '0 0 40px rgba(220, 20, 60, 0.8), 0 0 80px rgba(0, 255, 65, 0.5)',
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.section
      id="techstack"
      className="relative py-20 px-6 min-h-screen flex items-center bg-gradient-to-b from-fbi-black via-fbi-gray to-fbi-black overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Blood bath animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Main blood effect */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 30, repeat: Infinity }}
          style={{
            backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(220, 20, 60, 0.3), transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-fbi-red/30 rounded-full blur-sm"
            animate={{
              x: [0, Math.random() * 400 - 200],
              y: [0, Math.random() * 300 - 150],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-fbi-red mb-4 drop-shadow-lg font-motel">
            TECH ARSENAL
          </h2>
          <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">EVIDENCE COLLECTION - CASE #2024</p>
          <div className="flex justify-center gap-2 mt-4">
            <motion.div className="w-12 h-1 bg-fbi-red" animate={{ scaleX: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            <div className="w-12 h-1 bg-fbi-neon-green"></div>
            <motion.div className="w-12 h-1 bg-fbi-red" animate={{ scaleX: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
          </div>
        </motion.div>

        {/* Tech Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
        >
          {techStack.map((tech, idx) => (
            <motion.div
              key={tech.id}
              custom={idx}
              variants={cardVariants}
              animate={floatVariants(idx)}
              onHoverStart={() => setHoveredCard(tech.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div
                variants={hoverVariants}
                initial="initial"
                whileHover="hover"
                className="relative group h-48 bg-gradient-to-br from-fbi-gray to-fbi-black border-2 border-fbi-neon-green p-6 rounded-lg cursor-pointer overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Card content */}
                <div className="flex flex-col items-center justify-center h-full relative z-10">
                  <motion.div
                    className="text-5xl mb-4"
                    animate={
                      hoveredCard === tech.id
                        ? { rotate: 360, scale: 1.2 }
                        : { rotate: 0, scale: 1 }
                    }
                    transition={{ duration: 0.6 }}
                  >
                    {tech.icon}
                  </motion.div>
                  <h3 className="text-fbi-neon-green font-bold text-lg text-center">{tech.name}</h3>
                  <p className="text-fbi-red text-xs font-mono mt-2 uppercase tracking-widest">{tech.category}</p>
                </div>

                {/* Holographic effect on hover */}
                {hoveredCard === tech.id && (
                  <motion.div
                    className="absolute inset-0 opacity-30 pointer-events-none"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{
                      backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(0, 255, 65, 0.2) 50%, transparent 70%)',
                      backgroundSize: '200% 200%',
                    }}
                  />
                )}

                {/* Corner elements */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-fbi-neon-green opacity-50"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-fbi-neon-green opacity-50"></div>

                {/* FBI case label */}
                <div className="absolute top-2 right-2 text-xs text-fbi-red font-mono opacity-30 hidden group-hover:block">
                  █ █ █
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scan line effect */}
        <motion.div
          className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-transparent via-fbi-neon-green to-transparent pointer-events-none"
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>
    </motion.section>
  )
}
