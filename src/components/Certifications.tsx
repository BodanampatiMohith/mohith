import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface Certification {
  id: number
  title: string
  issuer: string
  link: string
  date: string
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      id: 1,
      title: 'ORCID Profile',
      issuer: 'Open Researcher & Contributor ID',
      link: 'https://orcid.org/0009-0004-9412-0800',
      date: '2024',
    },
    {
      id: 2,
      title: 'IBM Generative AI Certification',
      issuer: 'IBM Professional Certification',
      link: 'https://courses.vit.skillsnetwork.site/certificates/c965a8ea3d2947e799bf7d88b8e6383f',
      date: '2024',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const certVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.section
      id="certifications"
      className="relative py-20 px-6 bg-gradient-to-b from-fbi-black via-fbi-gray to-fbi-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Classified document background */}
      <div className="absolute inset-0 opacity-3 pointer-events-none">
        <motion.div
          className="w-full h-full"
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(220, 20, 60, 0.5) 0px, rgba(220, 20, 60, 0.5) 1px, transparent 1px, transparent 20px)',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-fbi-red mb-4 drop-shadow-lg font-motel" style={{ fontFamily: '"Crimes Times Six", cursive' }}>
            CERTIFICATIONS & PUBLICATIONS
          </h2>
          <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">OFFICIAL CREDENTIALS & APPROVALS</p>
          <div className="flex justify-center gap-2 mt-4">
            <div className="w-12 h-1 bg-fbi-red"></div>
            <div className="w-12 h-1 bg-fbi-neon-green"></div>
            <div className="w-12 h-1 bg-fbi-red"></div>
          </div>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              custom={idx}
              variants={certVariants}
              className="group relative"
            >
              {/* Document style card */}
              <motion.div
                className="relative border-4 border-fbi-red bg-gradient-to-br from-fbi-gray to-fbi-black p-8 overflow-hidden"
                whileHover={{
                  boxShadow: '0 0 40px rgba(220, 20, 60, 0.8), 0 0 80px rgba(0, 255, 65, 0.2)',
                  borderColor: '#00ff41',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Approved stamp */}
                <motion.div
                  className="absolute top-6 right-6 border-4 border-fbi-neon-green text-fbi-neon-green font-mono text-xs font-bold px-6 py-3 rotate-12"
                  animate={{ rotate: [12, 18, 12], scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  ✓ VERIFIED
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Title */}
                  <div>
                    <h3 className="text-2xl font-bold text-fbi-neon-green uppercase tracking-wider mb-2">
                      {cert.title}
                    </h3>
                    <div className="w-16 h-1 bg-fbi-red"></div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <p className="text-gray-300 text-sm">
                      <span className="text-fbi-red font-mono text-xs uppercase">Issuer:</span>{' '}
                      <span className="font-mono">{cert.issuer}</span>
                    </p>
                    <p className="text-gray-300 text-sm">
                      <span className="text-fbi-red font-mono text-xs uppercase">Date:</span>{' '}
                      <span className="font-mono">{cert.date}</span>
                    </p>
                  </div>

                  {/* View button */}
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-fbi-red text-white font-bold uppercase text-xs tracking-widest border-2 border-fbi-neon-green transition-all duration-300"
                    whileHover={{
                      backgroundColor: '#8b0000',
                      boxShadow: '0 0 20px rgba(0, 255, 65, 0.6)',
                    }}
                  >
                    View Credential
                    <ExternalLink size={14} />
                  </motion.a>
                </div>

                {/* Corner marks */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-fbi-neon-green opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-fbi-neon-green opacity-50 group-hover:opacity-100 transition-opacity"></div>

                {/* Scan line effect on hover */}
                <motion.div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                  animate={{ top: ['0%', '100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="w-full h-1 bg-gradient-to-r from-transparent via-fbi-neon-green/50 to-transparent"></div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          className="mt-16 text-center text-gray-400 font-mono text-xs uppercase tracking-widest"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          [CREDENTIALS VERIFIED & ARCHIVED]
        </motion.div>
      </div>
    </motion.section>
  )
}
