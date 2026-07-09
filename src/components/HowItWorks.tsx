import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { steps } from '../data/content'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-primary-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-tight mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg text-primary-500 max-w-2xl mx-auto">
            Tres pasos simples para transformar la gestión de tu despacho.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-14 h-14 rounded-2xl bg-primary-600 text-white flex items-center justify-center text-lg font-bold shadow-lg shadow-primary-200 flex-shrink-0"
                  >
                    {step.number}
                  </motion.div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-primary-300 to-primary-100 my-2">
                      <ArrowDown size={14} className="text-primary-400 -ml-[6.5px] mt-14 animate-bounce" />
                    </div>
                  )}
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-primary-100/80 flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">{step.title}</h3>
                  <p className="text-primary-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
