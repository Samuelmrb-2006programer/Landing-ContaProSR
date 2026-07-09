import { motion } from 'framer-motion'
import { Gift } from 'lucide-react'
import { benefits } from '../data/content'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
}

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-24 lg:py-32 bg-primary-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-green-light border border-green-200 text-accent-green text-sm font-medium mb-4">
            <Gift size={16} />
            Beneficios
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-tight mb-4">
            Ventajas de usar ContaPro SR
          </h2>
          <p className="text-lg text-primary-500 max-w-2xl mx-auto">
            Descubre por qué los mejores despachos ya confían en nosotros.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={item}
              className="group relative p-6 rounded-2xl bg-white border border-primary-100/80 shadow-sm card-hover"
            >
              <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
                <benefit.icon size={22} className="text-primary-600" />
              </div>
              <h3 className="text-base font-bold text-primary-900 mb-1.5">{benefit.title}</h3>
              <p className="text-sm text-primary-500 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
