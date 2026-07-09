import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { solutionBenefits } from '../data/content'

export default function Solution() {
  return (
    <section id="solution" className="relative py-24 lg:py-32 bg-primary-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-tight mb-4">
            Todo tu despacho en una sola plataforma.
          </h2>
          <p className="text-lg text-primary-500 max-w-2xl mx-auto">
            Una solución integral que reúne todas las herramientas que tu despacho necesita.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary-100/50 bg-white">
              <div className="bg-primary-50 px-4 py-3 border-b border-primary-100 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-primary-400 ml-2 font-medium">ContaPro SR — Plataforma</span>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <div className="col-span-1 bg-primary-50 rounded-xl p-4 space-y-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded bg-primary-200" />
                        <div className="flex-1 h-2 bg-primary-100 rounded" />
                      </div>
                    ))}
                  </div>
                  <div className="col-span-3 bg-white border border-primary-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-semibold text-primary-900">Panel principal</div>
                      <div className="w-20 h-6 bg-primary-500 rounded-lg" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="h-20 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-lg font-bold text-primary-600">156</div>
                          <div className="text-[10px] text-primary-400">Tareas completadas</div>
                        </div>
                      </div>
                      <div className="h-20 bg-gradient-to-br from-accent-green-light to-green-50 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-lg font-bold text-accent-green">98%</div>
                          <div className="text-[10px] text-primary-400">Eficiencia</div>
                        </div>
                      </div>
                    </div>
                    <div className="h-32 bg-primary-50 rounded-lg flex items-end gap-1 px-2 pb-2">
                      {[40, 70, 55, 90, 65, 80, 75].map((h, i) => (
                        <div key={i} className="flex-1 bg-primary-400 rounded-t" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-16 bg-primary-50 rounded-lg flex items-center justify-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-primary-200" />
                      <div className="space-y-1">
                        <div className="w-12 h-2 bg-primary-200 rounded" />
                        <div className="w-16 h-1.5 bg-primary-100 rounded" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-5">
              {solutionBenefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <benefit.icon size={20} className="text-primary-600" />
                  </div>
                  <span className="text-primary-900 font-medium">{benefit.text}</span>
                  <Check size={16} className="text-accent-green ml-auto flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
