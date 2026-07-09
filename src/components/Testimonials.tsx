import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '../data/content'

const colors = ['from-primary-600 to-primary-400', 'from-primary-500 to-primary-300', 'from-primary-700 to-primary-500']

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-primary-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-tight mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-primary-500 max-w-2xl mx-auto">
            Despachos contables que ya transformaron su operación con ContaPro SR.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative bg-white rounded-2xl p-6 border border-primary-100/80 shadow-sm card-hover"
            >
              <Quote size={28} className="text-primary-200 mb-4" />
              <p className="text-primary-600 leading-relaxed mb-6 text-sm">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-primary-100">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors[i % colors.length]} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-sm font-semibold">{t.initials}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary-900">{t.name}</div>
                  <div className="text-xs text-primary-400">{t.role}</div>
                  <div className="text-xs text-primary-400 font-medium">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
