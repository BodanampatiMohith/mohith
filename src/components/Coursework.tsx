import { motion } from 'framer-motion'
import { useState } from 'react'
import { BookOpen, Box, Settings, Network, Database, Lightbulb, TrendingUp, Eye, Cloud } from 'lucide-react'

interface Course {
  id: number
  subject: string
  short: string
  icon: React.ReactNode
}

export default function Coursework() {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null)

  const courses: Course[] = [
    { id: 1, subject: 'Data Structures & Algorithms', short: 'DSA', icon: <BookOpen size={32} /> },
    { id: 2, subject: 'Object-Oriented Programming', short: 'OOP', icon: <Box size={32} /> },
    { id: 3, subject: 'Operating Systems', short: 'OS', icon: <Settings size={32} /> },
    { id: 4, subject: 'Computer Networks', short: 'CN', icon: <Network size={32} /> },
    { id: 5, subject: 'Database Management Systems', short: 'DBMS', icon: <Database size={32} /> },
    { id: 6, subject: 'Artificial Intelligence', short: 'AI', icon: <Lightbulb size={32} /> },
    { id: 7, subject: 'Machine Learning', short: 'ML', icon: <TrendingUp size={32} /> },
    { id: 8, subject: 'Machine Vision / Digital Image Processing', short: 'DIP', icon: <Eye size={32} /> },
    { id: 9, subject: 'Cloud Architecture Design', short: 'CAD', icon: <Cloud size={32} /> },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const folderVariants = {
    hidden: { opacity: 0, rotateY: -90, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      rotateY: 0,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.6,
        type: 'spring',
      },
    }),
  }

  return (
    <motion.section
      id="coursework"
      className="relative py-20 px-6 min-h-screen flex items-center bg-gradient-to-b from-fbi-gray via-fbi-black to-fbi-gray"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* FBI archive cabinet pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div
          className="w-full h-full"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 30, repeat: Infinity }}
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(0, 255, 65, 0.1) 0px, rgba(0, 255, 65, 0.1) 10px, transparent 10px, transparent 20px)',
            backgroundSize: '200% 200%',
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
          <h2 className="text-5xl md:text-6xl font-bold text-fbi-red mb-4 drop-shadow-lg font-crimes">
            CLASSIFIED COURSEWORK
          </h2>
          <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">FBI ARCHIVE REPOSITORY</p>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-12 h-1 bg-fbi-red"></div>
            <div className="w-12 h-1 bg-fbi-neon-green"></div>
            <div className="w-12 h-1 bg-fbi-red"></div>
          </div>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
        >
          {courses.map((course, idx) => (
            <motion.div
              key={course.id}
              custom={idx}
              variants={folderVariants}
              onHoverStart={() => setExpandedCourse(course.id)}
              onHoverEnd={() => setExpandedCourse(null)}
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* File Folder */}
              <motion.div
                className="relative group cursor-pointer h-64 perspective"
                animate={{
                  rotateY: expandedCourse === course.id ? 15 : 0,
                  z: expandedCourse === course.id ? 50 : 0,
                }}
                transition={{ duration: 0.4 }}
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Folder back */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-fbi-red/20 to-fbi-blood-red/20 border-2 border-fbi-red rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div className="p-6 h-full flex flex-col items-center justify-center text-center">
                    <p className="text-fbi-neon-green font-mono text-xs uppercase mb-4">CLASSIFIED CONTENT</p>
                    <div className="text-fbi-neon-green text-lg font-bold uppercase tracking-wider mb-4">
                      {course.subject}
                    </div>
                    <motion.div
                      className="text-fbi-neon-green/50 text-xs"
                      animate={{ opacity: [0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      ▲ FILE DECRYPTING ▲
                    </motion.div>
                  </div>
                </motion.div>

                {/* Folder front */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-fbi-dark-gray to-fbi-gray border-4 border-fbi-red rounded-lg shadow-2xl overflow-hidden"
                  animate={
                    expandedCourse === course.id
                      ? {
                          boxShadow: '0 0 40px rgba(220, 20, 60, 0.6), 0 0 80px rgba(0, 255, 65, 0.3)',
                          scale: 1.05,
                        }
                      : {
                          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                          scale: 1,
                        }
                  }
                  transition={{ duration: 0.3 }}
                  style={{
                    backfaceVisibility: 'hidden',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Folder tab */}
                  <div className="absolute top-0 left-4 w-32 h-10 bg-gradient-to-b from-fbi-red to-fbi-blood-red border-2 border-fbi-red rounded-b-lg flex items-center justify-center">
                    <div className="text-white font-bold text-xs font-mono">CASE FILE</div>
                  </div>

                  {/* Folder content area */}
                  <div className="p-8 h-full flex flex-col items-center justify-center text-center relative overflow-hidden">
                    {/* Icon */}
                    <motion.div
                      className="mb-6 text-fbi-neon-green"
                      animate={
                        expandedCourse === course.id
                          ? { scale: 1.2, rotate: 360 }
                          : { scale: 1, rotate: 0 }
                      }
                      transition={{ duration: 0.5 }}
                    >
                      {course.icon}
                    </motion.div>

                    {/* Subject */}
                    <h3 className="text-fbi-neon-green font-bold uppercase tracking-wider text-center leading-tight mb-4">
                      {course.subject}
                    </h3>

                    {/* Status indicator */}
                    <motion.div
                      className="inline-flex items-center gap-2 text-fbi-red text-xs font-mono"
                      animate={expandedCourse === course.id ? { opacity: 1 } : { opacity: 0.5 }}
                    >
                      <span className="w-2 h-2 bg-fbi-neon-green rounded-full animate-pulse"></span>
                      ARCHIVED & SECURE
                    </motion.div>
                  </div>

                  {/* Corner elements */}
                  <motion.div className="absolute top-12 right-4 w-6 h-6 border-t-2 border-r-2 border-fbi-neon-green opacity-50" />
                  <motion.div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-fbi-neon-green opacity-50" />

                  {/* FBI seal */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-16 h-16 text-fbi-red/20 text-2xl font-bold rotate-45"
                    animate={{ rotate: [45, 55, 45] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ✓
                  </motion.div>

                  {/* Scan line on hover */}
                  {expandedCourse === course.id && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-fbi-neon-green/20 to-transparent pointer-events-none"
                      animate={{ top: ['0%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* FBI archive label */}
        <motion.div
          className="mt-16 text-center"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <p className="font-mono text-fbi-red/50 text-sm uppercase">
            All materials classified and encrypted
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
