import { motion } from 'framer-motion'

export default function CrimeSceneTape() {
  const tapeText = '● CRIME SCENE — DO NOT CROSS ● CLASSIFIED — FBI INVESTIGATION ● '

  return (
    <div className="relative w-full py-8 bg-fbi-black overflow-hidden border-y-2 border-fbi-red/30">
      {/* Top tape */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-r from-yellow-400 via-black via-yellow-400 to-black opacity-80"
        style={{
          backgroundSize: '50px 100%',
          backgroundImage: 'repeating-linear-gradient(45deg, #fbbf24, #fbbf24 10px, #000 10px, #000 20px)',
        }}
        animate={{ x: [-100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {/* Tape text marquee */}
        <motion.div
          className="absolute inset-0 flex items-center whitespace-nowrap text-black font-mono font-bold text-xs tracking-widest"
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          <span>{tapeText}</span>
          <span>{tapeText}</span>
        </motion.div>
      </motion.div>

      {/* Bottom tape */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-l from-red-700 via-black via-red-700 to-black opacity-80"
        style={{
          backgroundSize: '50px 100%',
          backgroundImage: 'repeating-linear-gradient(-45deg, #b91c1c, #b91c1c 10px, #000 10px, #000 20px)',
        }}
        animate={{ x: [0, 100] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {/* Tape text marquee */}
        <motion.div
          className="absolute inset-0 flex items-center whitespace-nowrap text-white font-mono font-bold text-xs tracking-widest"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          <span>{tapeText}</span>
          <span>{tapeText}</span>
        </motion.div>
      </motion.div>

      {/* Center divider text */}
      <motion.div
        className="relative z-10 flex justify-center items-center h-12"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span className="text-fbi-red font-mono text-xs uppercase tracking-widest font-bold">
          ⚠ INVESTIGATION AREA ⚠
        </span>
      </motion.div>

      {/* X pattern overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="#dc143c" strokeWidth="2" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="#dc143c" strokeWidth="2" />
      </svg>
    </div>
  )
}
