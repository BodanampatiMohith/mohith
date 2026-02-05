import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="relative bg-fbi-black border-t border-fbi-red/30 py-12 px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Scan line effect */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fbi-neon-green to-transparent"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Content */}
        <div className="text-center space-y-4">
          {/* Main message */}
          <motion.p
            className="text-gray-400 font-mono text-sm"
            animate={{ opacity: [0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            END OF CLASSIFIED INVESTIGATION
          </motion.p>

          {/* Copyright with styling */}
          <motion.div className="space-y-2">
            <p className="text-fbi-red font-bold text-sm uppercase tracking-wider">
              © 2024 Bodanampati Mohith
            </p>
            <p className="text-gray-500 font-mono text-xs">
              FBI Investigation Portfolio - Case #2024-DIGITAL-001
            </p>
          </motion.div>

          {/* Status indicator */}
          <motion.div
            className="flex items-center justify-center gap-2 text-fbi-neon-green text-xs font-mono"
            animate={{ opacity: [0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <motion.span
              className="w-2 h-2 bg-fbi-neon-green rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            System Active and Monitoring
          </motion.div>

          {/* Footer seal */}
          <motion.div
            className="mt-6 space-y-2"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <p className="font-mono text-fbi-red/50 text-xs">
              ████████████████████████████████
            </p>
            <p className="font-mono text-fbi-red/50 text-xs">
              ALL DATA SECURED & ENCRYPTED
            </p>
            <p className="font-mono text-fbi-red/50 text-xs">
              ████████████████████████████████
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom decoration */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fbi-red to-transparent"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />
    </motion.footer>
  )
}
