import { motion } from 'framer-motion'
import { useState } from 'react'
import { Code, Layers, Brain, Wrench } from 'lucide-react'
import { ReactNode } from 'react'

interface Skill {
  category: string
  items: string[]
  icon: ReactNode
}

export default function TechSkills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills: Skill[] = [
    {
      category: 'Languages',
      items: ['Python', 'Java', 'C/C++', 'JavaScript', 'SQL', 'HTML', 'CSS'],
      icon: <Code size={32} />,
    },
    {
      category: 'Frontend & Backend',
      items: ['React', 'React Native', 'Node.js', 'Flask', 'Tailwind CSS'],
      icon: <Layers size={32} />,
    },
    {
      category: 'AI & ML',
      items: ['TensorFlow', 'PyTorch', 'Keras', 'OpenCV', 'Scikit-learn'],
      icon: <Brain size={32} />,
    },
    {
      category: 'Tools & Environment',
      items: ['Jupyter', 'Git', 'VS Code', 'Streamlit'],
      icon: <Wrench size={32} />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const skillItemVariants = {
    initial: { opacity: 0.6, scale: 0.95 },
    hover: {
      opacity: 1,
      scale: 1.15,
      rotateY: 180,
      backgroundColor: '#00ff41',
      color: '#0a0a0a',
      boxShadow: '0 0 20px rgba(0, 255, 65, 0.8), 0 0 40px rgba(220, 20, 60, 0.6)',
    },
  }

  const bloodSplashVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0.3, 0.8, 0],
      scale: [0, 1, 1.5],
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.section
      id="skills"
      className="relative py-20 px-6 min-h-screen flex items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 65, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.2) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-fbi-neon-green/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-fbi-neon-green mb-4 drop-shadow-lg font-crimes">
            TECH SKILLS
          </h2>
          <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">CLASSIFIED EXPERTISE DATABASE</p>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-12 h-1 bg-fbi-neon-green"></div>
            <div className="w-12 h-1 bg-fbi-red"></div>
            <div className="w-12 h-1 bg-fbi-neon-green"></div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={categoryVariants}
              className="relative"
            >
              {/* Category Header */}
              <motion.div
                className="bg-fbi-gray border-2 border-fbi-neon-green p-6 rounded-lg mb-4 text-center"
                whileHover={{ boxShadow: '0 0 20px rgba(0, 255, 65, 0.5)' }}
              >
                <div className="text-fbi-neon-green mb-2 flex justify-center">{skillGroup.icon}</div>
                <h3 className="text-fbi-neon-green font-bold uppercase tracking-widest text-sm">
                  {skillGroup.category}
                </h3>
              </motion.div>

              {/* Skills items */}
              <div className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <motion.div
                    key={skill}
                    className="relative"
                    onHoverStart={() => setHoveredSkill(skill)}
                    onHoverEnd={() => setHoveredSkill(null)}
                  >
                    <motion.button
                      variants={skillItemVariants}
                      initial="initial"
                      whileHover="hover"
                      className="w-full px-4 py-3 bg-fbi-gray border-2 border-fbi-neon-green text-fbi-neon-green font-bold uppercase tracking-wider rounded-sm transition-all duration-300 text-sm"
                    >
                      {skill}
                      <span className="ml-2 text-fbi-red">▶</span>
                    </motion.button>

                    {/* Blood splash effect on hover */}
                    {hoveredSkill === skill && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        variants={bloodSplashVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <svg
                          className="w-full h-full"
                          viewBox="0 0 100 100"
                          style={{ overflow: 'visible' }}
                        >
                          <path
                            d="M50,50 Q30,30 20,45 Q10,60 20,75 Q30,85 50,90 Q70,85 80,75 Q90,60 80,45 Q70,30 50,50"
                            fill="#dc143c"
                            opacity="0.3"
                          />
                        </svg>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Decorative corner element */}
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-fbi-red"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-fbi-red"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Evidence seal */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, rotate: -45 }}
          whileInView={{ opacity: 0.3, rotate: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-6xl font-bold text-fbi-red opacity-10 font-mono">
            EVIDENCE CATALOGUED
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
