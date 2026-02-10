import { motion } from 'framer-motion'

export default function Header() {
  const navItems = ['Home', 'Projects', 'Skills', 'Coursework', 'Certifications', 'About']

  const nameVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    hover: { color: '#00ff41', textShadow: '0 0 20px rgba(0, 255, 65, 0.5)', scale: 1.1, transition: { duration: 0.3 } },
  }

  const bloodDripVariants = {
    initial: { opacity: 0, y: 0 },
    animate: {
      opacity: [0, 1, 0],
      y: [0, 15, 30],
      transition: { duration: 1.5, repeat: Infinity },
    },
  }

  const navItemVariants = {
    initial: { opacity: 0, y: -20 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.5 },
    }),
    hover: {
      color: '#dc143c',
      textShadow: '0 0 10px rgba(220, 20, 60, 0.8)',
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-fbi-black via-fbi-gray to-transparent backdrop-blur-sm border-b border-fbi-red/20 py-6 px-8"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Name with blood drip */}
        <div className="relative">
          <motion.div
            variants={nameVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="text-3xl font-bold text-fbi-red cursor-pointer relative"
          >
            Bodanampati Mohith
            
            {/* Blood drip animation */}
            <motion.div
              variants={bloodDripVariants}
              initial="initial"
              animate="animate"
              className="absolute -bottom-4 left-0 text-xs text-fbi-red opacity-50"
            >
              ▼
            </motion.div>
          </motion.div>
        </div>

        {/* Right side - Navigation */}
        <nav className="flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              custom={i}
              variants={navItemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="text-sm font-mono uppercase tracking-widest text-gray-300 transition-all duration-300"
            >
              {item}
            </motion.a>
          ))}
        </nav>
      </div>

      {/* Scan line effect at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fbi-red to-transparent"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.header>
  )
}
