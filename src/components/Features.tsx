import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { features } from '../data/content'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/80 border border-primary-200 text-primary-700 text-sm font-medium mb-4">
            <Sparkles size={16} />
            Funcionalidades
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-tight mb-4">
            Todo lo que necesitas, en un solo lugar.
          </h2>
          <p className="text-lg text-primary-500 max-w-2xl mx-auto">
            Herramientas diseñadas específicamente para las necesidades de los despachos contables modernos.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative p-6 rounded-2xl bg-white border border-primary-100/80 shadow-sm card-hover"
            >
              <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
                <feature.icon size={22} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-primary-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-primary-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
