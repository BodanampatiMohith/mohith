import { motion } from 'framer-motion'
import { Github, Mail, Zap } from 'lucide-react'

export default function Connect() {
  const connections = [
    {
      id: 1,
      title: 'GitHub Repository',
      description: 'Explore all case files and source code',
      icon: Github,
      url: 'https://github.com/BodanampatiMohith',
      color: 'neon-green',
    },
    {
      id: 2,
      title: 'Email Contact',
      description: 'Send investigative inquiries',
      icon: Mail,
      url: 'mailto:bodanampatimohith01@gmail.com',
      color: 'red',
    },
    {
      id: 3,
      title: 'Kaggle Profile',
      description: 'AI & ML competition records',
      icon: Zap,
      url: 'https://www.kaggle.com/bodanampatimohith',
      color: 'neon-green',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
      },
    }),
  }

  const getColorClass = (color: string) => {
    return color === 'red' ? 'text-fbi-red' : 'text-fbi-neon-green'
  }

  return (
    <motion.section
      id="connect"
      className="relative py-20 px-6 min-h-screen flex items-center bg-gradient-to-b from-fbi-gray to-fbi-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 65, 0.1), transparent 50%)',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-fbi-neon-green mb-4 drop-shadow-lg font-crimes">
            CONNECT
          </h2>
          <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">FBI DATABASE ENTRIES - ACTIVE CHANNELS</p>
          <div className="flex justify-center gap-2 mt-4">
            <motion.div
              className="w-12 h-1 bg-fbi-neon-green"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="w-12 h-1 bg-fbi-red"></div>
            <motion.div
              className="w-12 h-1 bg-fbi-neon-green"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Connection Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {connections.map((connection, idx) => {
            const IconComponent = connection.icon
            return (
              <motion.a
                key={connection.id}
                href={connection.url}
                target="_blank"
                rel="noopener noreferrer"
                custom={idx}
                variants={cardVariants}
                className="group"
              >
                <motion.div
                  className="relative h-64 bg-gradient-to-br from-fbi-gray to-fbi-black border-2 border-fbi-neon-green p-6 rounded-lg overflow-hidden cursor-pointer"
                  whileHover={{
                    boxShadow: '0 0 40px rgba(0, 255, 65, 0.6), 0 0 80px rgba(220, 20, 60, 0.2)',
                    borderColor: '#dc143c',
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <motion.div
                    className={`mb-6 ${getColorClass(connection.color)}`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity }}
                  >
                    <IconComponent size={48} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-fbi-neon-green mb-3 uppercase tracking-wide">
                    {connection.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {connection.description}
                  </p>

                  {/* Status */}
                  <motion.div
                    className="flex items-center gap-2 text-xs text-fbi-red font-mono"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="w-2 h-2 bg-fbi-neon-green rounded-full animate-pulse"></span>
                    ACTIVE CONNECTION
                  </motion.div>

                  {/* Corner marks */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-fbi-red opacity-30 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-fbi-red opacity-30 group-hover:opacity-100 transition-opacity"></div>

                  {/* Hover glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-fbi-neon-green/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                  {/* Scan line on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                    animate={{ top: ['0%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-fbi-neon-green/50 to-transparent"></div>
                  </motion.div>
                </motion.div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Additional connections info */}
        <motion.div
          className="border-t-2 border-fbi-red pt-12 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="text-fbi-red font-bold uppercase tracking-widest text-sm mb-6">Additional Profiles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: 'LinkedIn Profile',
                url: 'https://www.linkedin.com/in/bodanampati-mohith-35670b277/',
              },
              {
                name: 'LeetCode Profile',
                url: 'https://leetcode.com/u/Bodanampati_Mohith/',
              },
            ].map((profile, i) => (
              <motion.a
                key={i}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 border border-fbi-neon-green/50 hover:border-fbi-neon-green bg-fbi-gray/30 hover:bg-fbi-gray/60 transition-all rounded-sm"
                whileHover={{ x: 10 }}
              >
                <span className="text-gray-300 font-mono text-sm group-hover:text-fbi-neon-green transition-colors">
                  {profile.name}
                </span>
                <motion.span className="text-fbi-red" animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                  →
                </motion.span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
