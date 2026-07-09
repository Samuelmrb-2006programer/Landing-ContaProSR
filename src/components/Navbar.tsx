import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-sm border-b border-primary-100/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#hero" className="flex items-center gap-2.5" onClick={(e) => { e.preventDefault(); scrollTo('#hero') }}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-600 to-primary-400 flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-lg font-bold text-primary-900 font-heading tracking-tight">
              ContaPro <span className="text-primary-500">SR</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                className="text-sm font-medium text-primary-700 hover:text-primary-500 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://contapro-sr.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Solicitar demo
            </a>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-primary-700 hover:bg-primary-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-primary-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  className="block px-3 py-2.5 text-sm font-medium text-primary-700 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://contapro-sr.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 px-5 py-2.5 text-sm font-semibold text-white bg-primary-600 rounded-xl text-center hover:bg-primary-700 transition-colors"
              >
                Solicitar demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
