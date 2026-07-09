import { Mail } from 'lucide-react'
import { footerLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-primary-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          <div className="lg:col-span-2">
            <a href="#hero" className="flex items-center gap-2.5 mb-4">
              <img src="/contaprosr-logo1.ico" alt="ContaPro SR" className="w-8 h-8 rounded-lg" />
              <span className="text-lg font-bold text-white font-heading tracking-tight">
                ContaPro <span className="text-primary-400">SR</span>
              </span>
            </a>
            <p className="text-primary-400 text-sm leading-relaxed max-w-xs mb-6">
              CRM inteligente para despachos contables. Gestión de tareas, documentos y auditoría con IA.
            </p>
            <a
              href="mailto:contacto@contapro.mx"
              className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
            >
              <Mail size={14} />
              smiguelrballesteros09@gmail.com
            </a>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-primary-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-500">
            Desarrollado por Samuel Ramirez Ballesteros. Todos los derechos reservados&copy; 2026
          </p>
          <div className="flex items-center gap-4">
            {['Twitter', 'LinkedIn', 'Facebook'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-primary-500 hover:text-primary-400 transition-colors"
                aria-label={social}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
