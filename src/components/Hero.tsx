import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { heroContent } from '../data/content'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' as const },
  }),
}

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary-200/40 to-primary-100/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-primary-300/30 to-primary-100/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary-100/10 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100/80 border border-primary-200 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              Nueva versión disponible
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-900 leading-[1.1] mb-6"
            >
              {heroContent.title}
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-lg sm:text-xl text-primary-600 leading-relaxed mb-8 max-w-xl"
            >
              {heroContent.subtitle}
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://contapro-sr.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-primary-600 rounded-2xl hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {heroContent.ctaPrimary}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => scrollTo('#features')}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-700 bg-white rounded-2xl hover:bg-primary-50 transition-all duration-200 shadow-sm hover:shadow-md border border-primary-100"
              >
                <Play size={18} className="text-primary-500" />
                {heroContent.ctaSecondary}
              </button>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex items-center gap-6 mt-10 text-sm text-primary-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-accent-green-light flex items-center justify-center">
                  <svg className="w-3 h-3 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                Sin instalación
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-accent-green-light flex items-center justify-center">
                  <svg className="w-3 h-3 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                Prueba gratuita
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-accent-green-light flex items-center justify-center">
                  <svg className="w-3 h-3 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                Soporte 24/7
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' as const }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary-100/50 bg-white">
              <div className="bg-primary-50 px-4 py-3 border-b border-primary-100 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs text-primary-400 ml-2 font-medium">Dashboard — ContaPro SR</span>
              </div>

              <div className="p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="w-24 h-3 bg-primary-200 rounded-full" />
                    <div className="w-16 h-2 bg-primary-100 rounded-full mt-1.5" />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-16 h-8 bg-primary-100 rounded-lg" />
                    <div className="w-16 h-8 bg-primary-500 rounded-lg" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Tareas activas', value: '24', color: 'bg-primary-500' },
                    { label: 'Completadas', value: '156', color: 'bg-accent-green' },
                    { label: 'Pendientes', value: '8', color: 'bg-amber-400' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-primary-50 rounded-xl p-3.5">
                      <div className={`w-2 h-2 rounded-full ${stat.color} mb-2`} />
                      <div className="text-lg font-bold text-primary-900">{stat.value}</div>
                      <div className="text-[10px] text-primary-400 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-semibold text-primary-700">Tareas recientes</div>
                    <div className="text-[10px] text-primary-400">Ver todas</div>
                  </div>
                  <div className="space-y-2">
                    {[
                      { task: 'Revisión ISR Q1', status: 'En progreso', statusColor: 'bg-primary-500' },
                      { task: 'Declaración IVA marzo', status: 'Completada', statusColor: 'bg-accent-green' },
                      { task: 'Auditoría Cliente A', status: 'Pendiente', statusColor: 'bg-amber-400' },
                    ].map((item) => (
                      <div key={item.task} className="flex items-center justify-between py-2.5 px-3 bg-primary-50/50 rounded-lg">
                        <div className="text-sm font-medium text-primary-900">{item.task}</div>
                        <div className="flex items-center gap-1.5">
                          <div className={`w-1.5 h-1.5 rounded-full ${item.statusColor}`} />
                          <span className="text-[10px] text-primary-400">{item.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-24 bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xs font-medium text-primary-400">Rendimiento del despacho</div>
                    <div className="text-2xl font-bold text-primary-600 mt-1">92%</div>
                    <div className="w-32 h-1.5 bg-primary-200 rounded-full mt-2 mx-auto overflow-hidden">
                      <div className="w-[92%] h-full bg-primary-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-2xl blur-xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary-300/20 to-primary-500/20 rounded-2xl blur-xl" />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-primary-300 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-primary-400 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
