import { motion } from 'framer-motion'
import { Github, Mail, ExternalLink } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  }

  return (
    <motion.section
      id="about"
      className="relative py-20 px-6 min-h-screen flex items-center bg-gradient-to-b from-fbi-black via-fbi-gray to-fbi-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Background file cabinet effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.2) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* File folder header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="border-t-4 border-r-4 border-b-2 border-l-4 border-fbi-red bg-gradient-to-b from-fbi-gray to-fbi-black p-8 relative">
            {/* File folder tab */}
            <div className="absolute -top-6 left-8 px-6 py-2 bg-fbi-red text-white font-bold text-sm font-mono border-2 border-fbi-red rounded-t-lg">
              FBI PERSONNEL FILE
            </div>

            {/* Classification stamp */}
            <motion.div
              className="absolute top-4 right-4 border-2 border-fbi-blood-red text-fbi-blood-red font-mono text-xs font-bold px-3 py-1 rotate-12"
              animate={{ rotate: [12, 15, 12] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              CLASSIFIED
            </motion.div>

            {/* Content */}
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              {/* Name */}
              <motion.div variants={itemVariants}>
                <h2 className="text-5xl md:text-6xl font-bold text-fbi-neon-green mb-2 font-crimes drop-shadow-lg">
                  BODANAMPATI MOHITH
                </h2>
                <div className="w-20 h-1 bg-fbi-red"></div>
              </motion.div>

              {/* Role */}
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl text-fbi-red font-bold uppercase tracking-widest">
                  Tech Explorer & AI Specialist
                </h3>
                <p className="text-gray-300 mt-2 font-mono text-sm">CASE ID: #2024-PORTFOLIO-001</p>
              </motion.div>

              {/* Specialization */}
              <motion.div variants={itemVariants}>
                <h4 className="text-fbi-neon-green font-bold uppercase tracking-widest text-sm mb-3">
                  SPECIALIZATION AREAS
                </h4>
                <div className="space-y-2">
                  {[
                    'Artificial Intelligence & Machine Learning',
                    'Intelligent Systems Design',
                    'Web Application Architecture',
                    'Data-Driven Solution Development',
                    'Real-Time Performance Optimization',
                    'Full-Stack Development',
                  ].map((skill, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      viewport={{ once: false, amount: 0.2 }}
                    >
                      <span className="text-fbi-red text-lg leading-none mt-1">▸</span>
                      <span className="text-sm leading-relaxed">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Bio */}
              <motion.div variants={itemVariants}>
                <h4 className="text-fbi-neon-green font-bold uppercase tracking-widest text-sm mb-3">
                  PROFILE SUMMARY
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Passionate technologist dedicated to exploring the intersection of artificial intelligence, machine learning, and 
                  real-world problem solving. With expertise in full-stack development and advanced ML techniques, I design and build 
                  intelligent systems that transform data into actionable insights. Committed to continuous learning and innovation 
                  in emerging technologies.
                </p>
              </motion.div>

              {/* Contact Section - End of File */}
              <motion.div
                variants={itemVariants}
                className="border-t-2 border-fbi-red pt-6 mt-8"
              >
                <h4 className="text-fbi-red font-bold uppercase tracking-widest text-sm mb-4">
                  CONTACT INFORMATION
                </h4>
                <div className="space-y-3">
                  {/* GitHub */}
                  <motion.a
                    href="https://github.com/BodanampatiMohith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-fbi-neon-green transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <Github size={18} className="text-fbi-neon-green" />
                    <span className="text-sm font-mono">github.com/BodanampatiMohith</span>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:bodanampatimohith01@gmail.com"
                    className="flex items-center gap-3 text-gray-300 hover:text-fbi-red transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <Mail size={18} className="text-fbi-red" />
                    <span className="text-sm font-mono">bodanampatimohith01@gmail.com</span>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </motion.a>

                  {/* Kaggle */}
                  <motion.a
                    href="https://www.kaggle.com/bodanampatimohith"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-fbi-neon-green transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-4 h-4 text-fbi-neon-green text-xs font-bold">K</span>
                    <span className="text-sm font-mono">Kaggle Profile</span>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    href="https://www.linkedin.com/in/bodanampati-mohith-35670b277/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-fbi-red transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-4 h-4 text-fbi-red text-xs font-bold">in</span>
                    <span className="text-sm font-mono">LinkedIn Profile</span>
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </motion.a>
                </div>
              </motion.div>

              {/* File archived stamp */}
              <motion.div
                className="border-t-2 border-fbi-neon-green pt-4 mt-6"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="text-fbi-neon-green font-mono text-xs uppercase tracking-widest">
                  ✓ FILE ARCHIVED & ENCRYPTED
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
