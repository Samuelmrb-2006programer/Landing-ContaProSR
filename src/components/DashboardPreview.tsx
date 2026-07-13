import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Maximize2 } from 'lucide-react'
import { dashboardScreenshots } from '../data/content'

export default function DashboardPreview() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="dashboard" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-900 leading-tight mb-4">
            Conoce la plataforma
          </h2>
          <p className="text-lg text-primary-500 max-w-2xl mx-auto">
            Explora las diferentes secciones de ContaPro SR.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {dashboardScreenshots.map((screen, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelected(i)}
              className="group relative overflow-hidden rounded-2xl border border-primary-100/80 shadow-sm card-hover text-left bg-white"
            >
              <div className="h-48 bg-primary-50 flex items-center justify-center relative overflow-hidden">
                <img
                  src={screen.img}
                  alt={screen.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={14} className="text-white" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-primary-900">{screen.label}</h3>
                <p className="text-xs text-primary-400 mt-1">ContaPro SR</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary-900/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-primary-100">
                <h3 className="font-semibold text-primary-900">
                  {dashboardScreenshots[selected].label} — ContaPro SR
                </h3>
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 rounded-lg hover:bg-primary-50 text-primary-500 transition-colors"
                  aria-label="Cerrar"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="h-80 sm:h-96 bg-primary-50 flex items-center justify-center overflow-hidden">
                <img
                  src={dashboardScreenshots[selected].img}
                  alt={dashboardScreenshots[selected].label}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
