import {
  BriefcaseBusiness,
  Users,
  FileText,
  LayoutDashboard,
  BrainCircuit,
  BarChart3,
  ShieldCheck,
  UserCog,
  Clock,
  TrendingUp,
  FileSpreadsheet,
  ClipboardCheck,
  Globe,
} from 'lucide-react'

export const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Características', href: '#features' },
  { label: 'Beneficios', href: '#benefits' },
  { label: 'Cómo funciona', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
]

export const heroContent = {
  title: 'Gestiona tu despacho contable con Inteligencia Artificial.',
  subtitle:
    'Centraliza tareas, documentos, colaboradores y auditorías inteligentes en una sola plataforma para aumentar la productividad de tu despacho.',
  ctaPrimary: 'Solicitar demostración',
  ctaSecondary: 'Conocer funcionalidades',
}

export const problemCards = [
  {
    icon: FileText,
    title: 'Documentos desorganizados',
    description:
      'Archivos repartidos entre WhatsApp, correo electrónico y carpetas. Encontrar un documento puede tomar horas.',
  },
  {
    icon: Users,
    title: 'Seguimiento complicado',
    description:
      'No existe un control claro sobre quién realiza cada tarea. Los plazos se vencen sin que nadie lo note.',
  },
  {
    icon: Clock,
    title: 'Procesos manuales',
    description:
      'Las revisiones contables consumen demasiado tiempo. La falta de automatización reduce la rentabilidad del despacho.',
  },
]

export const solutionBenefits = [
  { icon: ClipboardCheck, text: 'Gestión inteligente de tareas' },
  { icon: UserCog, text: 'Asignación por contador' },
  { icon: Clock, text: 'Historial de actividades' },
  { icon: FileText, text: 'Gestión documental' },
  { icon: LayoutDashboard, text: 'Dashboard en tiempo real' },
  { icon: BrainCircuit, text: 'Auditor IA' },
]

export const features = [
  {
    icon: ClipboardCheck,
    title: 'Gestión de tareas',
    description:
      'Crea, asigna y da seguimiento a todas las tareas del despacho desde un solo lugar.',
  },
  {
    icon: Users,
    title: 'Gestión de contadores',
    description:
      'Administra tu equipo, asigna responsabilidades y mide la productividad de cada colaborador.',
  },
  {
    icon: FileText,
    title: 'Gestión documental',
    description:
      'Sube, organiza y encuentra documentos al instante. Adiós a las carpetas compartidas.',
  },
  {
    icon: Clock,
    title: 'Historial',
    description:
      'Registro completo de cada actividad, cambio y auditoría realizada en el sistema.',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard',
    description:
      'Visualiza el estado de tu despacho en tiempo real con gráficos y métricas clave.',
  },
  {
    icon: BrainCircuit,
    title: 'Auditor IA',
    description:
      'Inteligencia Artificial que analiza documentos contables y detecta inconsistencias automáticamente.',
  },
  {
    icon: BarChart3,
    title: 'Reportes',
    description:
      'Genera informes detallados de productividad, avance de tareas y resultados de auditorías.',
  },
  {
    icon: ShieldCheck,
    title: 'Seguridad',
    description:
      'Encriptación de extremo a extremo y copias de seguridad automáticas para proteger tus datos.',
  },
  {
    icon: UserCog,
    title: 'Roles de usuario',
    description:
      'Define permisos por rol: administrador, contador senior, contador junior y auditor.',
  },
]

export const steps = [
  {
    number: '01',
    title: 'El administrador crea una tarea',
    description:
      'Define la actividad, asigna al contador responsable, adjunta documentos y establece fechas límite.',
  },
  {
    number: '02',
    title: 'El contador recibe y ejecuta',
    description:
      'Recibe la notificación, accede a los documentos, realiza el trabajo y marca la tarea como completada.',
  },
  {
    number: '03',
    title: 'La IA analiza y el administrador recibe resultados',
    description:
      'El Auditor IA revisa los archivos automáticamente, detecta hallazgos y notifica al administrador.',
  },
]

export const dashboardScreenshots = [
  { label: 'Login', color: 'from-primary-800 to-primary-600' },
  { label: 'Dashboard', color: 'from-primary-700 to-primary-500' },
  { label: 'Lista de tareas', color: 'from-primary-600 to-primary-400' },
  { label: 'Historial', color: 'from-primary-700 to-primary-500' },
  { label: 'Auditor IA', color: 'from-primary-600 to-primary-400' },
  { label: 'Gestión de documentos', color: 'from-primary-800 to-primary-600' },
]

export const benefits = [
  {
    icon: TrendingUp,
    title: 'Mayor productividad',
    description: 'Reduce el tiempo administrativo y enfócate en lo que realmente importa.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Organización del despacho',
    description: 'Toda la información de clientes y tareas centralizada y ordenada.',
  },
  {
    icon: ShieldCheck,
    title: 'Menos errores humanos',
    description: 'La IA detecta inconsistencias antes de que se conviertan en problemas.',
  },
  {
    icon: ClipboardCheck,
    title: 'Seguimiento completo',
    description: 'Sabrás exactamente en qué estado está cada tarea en todo momento.',
  },
  {
    icon: FileSpreadsheet,
    title: 'Centralización de documentos',
    description: 'Todos los archivos en un solo lugar, accesibles y organizados.',
  },
  {
    icon: BrainCircuit,
    title: 'Automatización mediante IA',
    description: 'Revisiones automáticas que ahorran horas de trabajo manual.',
  },
  {
    icon: Users,
    title: 'Trabajo colaborativo',
    description: 'Tu equipo trabaja en sincronía con roles y responsabilidades claras.',
  },
  {
    icon: Globe,
    title: 'Información en tiempo real',
    description: 'Dashboard actualizado al instante con las métricas de tu despacho.',
  },
]

export const stats = [
  { value: 500, suffix: '+', label: 'tareas gestionadas' },
  { value: 95, suffix: '%', label: 'menos tiempo de seguimiento' },
  { value: 100, suffix: '%', label: 'centralización documental' },
  { value: 24, suffix: '/7', label: 'acceso desde cualquier lugar' },
]

export const testimonials = [
  {
    name: 'María González',
    role: 'Contadora Senior',
    company: 'Despacho González & Asociados',
    quote:
      'ContaPro SR transformó la forma en que trabajamos. Ahora sabemos exactamente quién hace qué y cuándo. La productividad de nuestro despacho aumentó un 40 %.',
    initials: 'MG',
  },
  {
    name: 'Carlos Ramírez',
    role: 'Director Administrativo',
    company: 'Ramírez Contadores',
    quote:
      'El Auditor IA es increíble. Lo que antes nos tomaba días de revisión manual, ahora se hace en minutos. Hemos reducido los errores casi a cero.',
    initials: 'CR',
  },
  {
    name: 'Ana Lucía Fernández',
    role: 'Socia Fundadora',
    company: 'ALF Consultoría Fiscal',
    quote:
      'La centralización documental cambió todo. Ya no perdemos tiempo buscando archivos en WhatsApp o correos. Todo está en un solo lugar.',
    initials: 'AF',
  },
]

export const faqItems = [
  {
    question: '¿Qué es ContaPro SR?',
    answer:
      'ContaPro SR es un CRM inteligente diseñado específicamente para despachos contables. Integra gestión de tareas, documentos, colaboradores y un Auditor con Inteligencia Artificial que automatiza las revisiones contables.',
  },
  {
    question: '¿Cómo funciona el Auditor IA?',
    answer:
      'El Auditor IA analiza automáticamente los documentos contables subidos a la plataforma. Detecta inconsistencias, omisiones y posibles errores, generando un reporte detallado para el administrador en cuestión de minutos.',
  },
  {
    question: '¿Necesito instalar algo?',
    answer:
      'No. ContaPro SR es una plataforma 100% en la nube. Solo necesitas un navegador web y conexión a internet para acceder desde cualquier dispositivo.',
  },
  {
    question: '¿Puedo subir archivos Excel?',
    answer:
      'Sí. La plataforma acepta archivos Excel, PDF, Word y formatos contables estándar. El Auditor IA puede procesar y analizar automáticamente estos documentos.',
  },
  {
    question: '¿Puedo asignar tareas a varios contadores?',
    answer:
      'Por supuesto. Puedes asignar tareas individuales o por equipo, establecer fechas límite y dar seguimiento al avance de cada contador desde el Dashboard.',
  },
  {
    question: '¿Los datos están protegidos?',
    answer:
      'Absolutamente. Utilizamos encriptación de extremo a extremo, servidores seguros y copias de seguridad automáticas. Cumplimos con los más altos estándares de protección de datos.',
  },
]

export const ctaContent = {
  title: 'Lleva tu despacho contable al siguiente nivel.',
  subtitle:
    'Automatiza procesos, organiza tus tareas y aprovecha la Inteligencia Artificial para aumentar la productividad de tu equipo.',
  button: 'Comienza con tu despacho',
}

export const footerLinks = [
  {
    title: 'Producto',
    links: [
      { label: 'Inicio', href: '#hero' },
      { label: 'Características', href: '#features' },
      { label: 'Beneficios', href: '#benefits' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Preguntas frecuentes', href: '#faq' },
      { label: 'Soporte', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre nosotros', href: '#' },
      { label: 'Contacto', href: '#' },
      { label: 'Privacidad', href: '#' },
    ],
  },
]
