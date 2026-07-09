import { motion } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'
import { problemCards } from '../data/content'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function Problem() {
  return (
    <section id="problem" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-medium mb-4">
            <AlertTriangle size={16} />
            El problema
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-tight max-w-3xl mx-auto">
            ¿Por qué los despachos contables siguen perdiendo tiempo?
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {problemCards.map((card) => (
            <motion.div
              key={card.title}
              variants={item}
              className="group relative p-8 rounded-2xl bg-white border border-primary-100/80 shadow-sm card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-5 group-hover:bg-primary-100 transition-colors">
                <card.icon size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">{card.title}</h3>
              <p className="text-primary-600 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
