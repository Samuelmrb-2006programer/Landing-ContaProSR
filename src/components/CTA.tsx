import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { ctaContent } from '../data/content'

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djJIMjR2LTJoMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

      <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-primary-400/20 blur-3xl" />
      <div className="absolute -bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-primary-400/20 blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6">
            <Sparkles size={16} />
            Comienza hoy
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            {ctaContent.title}
          </h2>

          <p className="text-lg sm:text-xl text-primary-200 leading-relaxed mb-10 max-w-2xl mx-auto">
            {ctaContent.subtitle}
          </p>

          <motion.a
            href="https://contapro-sr.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-bold text-primary-700 bg-white rounded-2xl hover:bg-primary-50 transition-all duration-200 shadow-2xl shadow-primary-900/30"
          >
            {ctaContent.button}
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <p className="text-primary-300 text-sm mt-6">
            Sin compromiso · Implementación en 24 horas · Soporte personalizado
          </p>
        </motion.div>
      </div>
    </section>
  )
}
