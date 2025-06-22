"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ThemeProvider, useTheme } from "@/components/theme-provider"
import {
  Moon,
  Sun,
  Menu,
  X,
  Download,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  ExternalLink,
  Calendar,
  Users,
  Code,
  Database,
  Server,
  Smartphone,
  Globe,
  Award,
  BookOpen,
  Send,
  User,
  MessageSquare,
  Lock,
  FileText,
  Briefcase,
  TrendingUp,
  Zap,
  Shield,
  Monitor,
  Cpu,
  Activity,
  BarChart3,
  Settings,
  Layers,
  CheckCircle,
  Star,
  GraduationCap,
  Clock,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  Target,
  Rocket,
  Timer,
} from "lucide-react"

interface Skill {
  name: string;
  icon: string;
  studying?: boolean; // Propriedade opcional
}

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isFormSubmitting, setIsFormSubmitting] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Intersection Observer for scroll reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe all sections
    const sections = ["home", "about", "skills", "projects", "experience", "contact"]
    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) {
        observer.observe(element)
        sectionRefs.current[section] = element
      }
    })

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsFormSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsFormSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("Mensagem enviada com sucesso!")
  }

  // Corrigir a função de abertura do modal
  const openProjectModal = (projectIndex: number) => {
    setSelectedProject(projectIndex)
    setCurrentImageIndex(-1) // -1 para mostrar a página inicial primeiro
    document.body.style.overflow = "hidden"
  }

  // Corrigir a função de fechamento do modal
  const closeProjectModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
    document.body.style.overflow = "auto" // Mudança de "unset" para "auto"
  }

  // Adicionar useEffect para gerenciar o overflow e tecla ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProject !== null) {
        closeProjectModal()
      }
    }

    // Adicionar listener para ESC
    if (selectedProject !== null) {
      document.addEventListener("keydown", handleEscape)
    }

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", handleEscape)
      // Garantir que o overflow seja restaurado se o componente for desmontado
      if (selectedProject !== null) {
        document.body.style.overflow = "auto"
      }
    }
  }, [selectedProject])

  const nextImage = () => {
    if (selectedProject !== null) {
      const project = projects[selectedProject]
      const totalImages = project.detailedImages.length
      setCurrentImageIndex((prev) => {
        if (prev === -1) return 0 // Da página inicial para primeira imagem
        return (prev + 1) % totalImages
      })
    }
  }

  const prevImage = () => {
    if (selectedProject !== null) {
      const project = projects[selectedProject]
      const totalImages = project.detailedImages.length
      setCurrentImageIndex((prev) => {
        if (prev === 0) return -1 // Da primeira imagem para página inicial
        if (prev === -1) return totalImages - 1 // Da página inicial para última imagem
        return prev - 1
      })
    }
  }

  const skills: { [key: string]: Skill[] } = {
    frontend: [
      { name: "JavaScript ES6+", icon: "⚡" },
      { name: "HTML5 & CSS3", icon: "🎨" },
      { name: "Bootstrap", icon: "🅱️" },
      { name: "EJS", icon: "📄" },
      { name: "React", icon: "⚛️", studying: true },
      { name: "React Native", icon: "📱", studying: true },
    ],
    backend: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "🚀" },
      { name: "Python", icon: "🐍" },
    ],
    database: [
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Firebase", icon: "🔥" },
    ],
    libraries: [
      { name: "Chart.js", icon: "📊" },
      { name: "SweetAlert2", icon: "🎨" },
      { name: "jQuery", icon: "💛" },
    ],
    tools: [
      { name: "Git & GitHub", icon: "📚" },
      { name: "Electron.js", icon: "⚡" },
      { name: "Progressive Web Apps (PWA)", icon: "📱" },
    ],
    methodologies: [
      { name: "Scrum & Metodologias Ágeis", icon: "🔄" },
      { name: "Jira", icon: "📋" },
      { name: "Google Cloud Platform", icon: "☁️" },
    ],
  }

  const projects = [
    {
      title: "FlowTime - Sistema de Gestão para Podologia",
      status: "✅ Finalizado e Comercializado",
      badge: "EM PRODUÇÃO",
      type: "Sistema de Gestão",
      team: "3 desenvolvedores",
      period: "Outubro 2024 - Janeiro 2025",
      description: "Sistema completo de gestão para clínica de podologia, atualmente em operação comercial real.",
      features: [
        { text: "Interface responsiva com PWA", icon: <Smartphone className="h-4 w-4" /> },
        { text: "Sistema completo de agendamentos", icon: <Calendar className="h-4 w-4" /> },
        { text: "Geração de PDFs e assinaturas digitais", icon: <FileText className="h-4 w-4" /> },
        { text: "Aplicação Web e Desktop", icon: <Monitor className="h-4 w-4" /> },
        { text: "Notificações push e sistema offline", icon: <Zap className="h-4 w-4" /> },
      ],
      technologies: ["JavaScript", "Node.js", "Express.js", "Firebase", "Electron.js", "PWA"],
      results: "Sistema vendido e em uso comercial em clínica real",
      images: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
      ],
      detailedImages: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      isPremium: true,
      projectType: "🏆 Projeto Comercial",
      story: {
        origin:
          "O FlowTime nasceu da necessidade real de uma clínica de podologia que enfrentava dificuldades para gerenciar agendamentos, prontuários e controle financeiro. A proprietária da clínica, uma podóloga experiente, estava perdendo tempo precioso com processos manuais e planilhas desorganizadas.",
        challenge:
          "O principal desafio era criar um sistema que fosse intuitivo para profissionais da saúde, mas robusto o suficiente para gerenciar todos os aspectos de uma clínica moderna. Precisávamos integrar agendamentos, prontuários digitais, assinaturas eletrônicas e relatórios financeiros em uma única plataforma.",
        solution:
          "Desenvolvemos uma solução completa que combina uma interface web responsiva com uma aplicação desktop usando Electron.js. O sistema permite agendamentos em tempo real, geração automática de documentos PDF, assinaturas digitais e funciona offline quando necessário.",
        impact:
          "Após a implementação, a clínica reduziu em 70% o tempo gasto com tarefas administrativas, aumentou a satisfação dos pacientes com agendamentos mais organizados e melhorou significativamente o controle financeiro. O sistema está em produção há 3 meses com 100% de uptime.",
        timeline: [
          {
            phase: "Descoberta",
            duration: "2 semanas",
            description: "Análise de requisitos e entendimento do negócio",
          },
          { phase: "Prototipagem", duration: "1 semana", description: "Criação de wireframes e validação com cliente" },
          { phase: "Desenvolvimento", duration: "8 semanas", description: "Implementação do sistema completo" },
          { phase: "Testes", duration: "2 semanas", description: "Testes integrados e correções" },
          { phase: "Deploy", duration: "1 semana", description: "Implementação e treinamento da equipe" },
        ],
      },
    },
    {
      title: "TonerTrack - Sistema de Gerenciamento de Impressoras",
      status: "🔄 Em Desenvolvimento",
      badge: "EM DESENVOLVIMENTO",
      type: "Sistema de Gerenciamento",
      team: "Desenvolvimento individual",
      period: "Em andamento",
      description: "Sistema voltado para instituições de ensino para gerenciamento eficiente de impressoras.",
      features: [
        { text: "Dashboard analítico com gráficos", icon: <BarChart3 className="h-4 w-4" /> },
        { text: "API RESTful e relatórios dinâmicos", icon: <Server className="h-4 w-4" /> },
        { text: "Sistema de autenticação Firebase", icon: <Shield className="h-4 w-4" /> },
        { text: "Interface desktop multiplataforma", icon: <Monitor className="h-4 w-4" /> },
        { text: "Upload de arquivos e alertas", icon: <Settings className="h-4 w-4" /> },
      ],
      technologies: ["JavaScript", "Node.js", "PostgreSQL", "Firebase", "Electron.js"],
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      detailedImages: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      isPremium: true,
      projectType: "💼 Projeto Institucional",
      story: {
        origin:
          "O TonerTrack surgiu da observação de um problema recorrente em instituições de ensino: o desperdício e má gestão de recursos de impressão. Professores e funcionários frequentemente enfrentavam impressoras sem toner ou papel, causando interrupções nas atividades acadêmicas.",
        challenge:
          "Criar um sistema que monitore em tempo real o status de múltiplas impressoras, gerencie estoque de suprimentos, controle custos por departamento e forneça relatórios detalhados para tomada de decisões administrativas.",
        solution:
          "Estou desenvolvendo uma plataforma web com dashboard interativo que se conecta às impressoras via SNMP, monitora níveis de toner, papel e status de funcionamento. O sistema inclui alertas automáticos, controle de acesso por usuário e relatórios de custo por impressão.",
        impact:
          "Espera-se uma redução de 40% nos custos de impressão e eliminação de 90% das interrupções por falta de suprimentos. O sistema permitirá um controle mais eficiente do orçamento destinado à impressão.",
        timeline: [
          { phase: "Pesquisa", duration: "1 semana", description: "Estudo de protocolos SNMP e análise de mercado" },
          { phase: "Arquitetura", duration: "1 semana", description: "Definição da arquitetura do sistema" },
          { phase: "MVP", duration: "4 semanas", description: "Desenvolvimento do produto mínimo viável" },
          { phase: "Testes", duration: "2 semanas", description: "Testes com impressoras reais" },
          { phase: "Refinamento", duration: "3 semanas", description: "Melhorias baseadas em feedback" },
        ],
      },
    },
    {
      title: "Thermal Tech - Sistema IoT de Monitoramento",
      status: "🔄 Em Desenvolvimento",
      badge: "EM DESENVOLVIMENTO",
      type: "Sistema IoT",
      team: "2 desenvolvedores",
      period: "Em andamento",
      description: "Sistema IoT para monitoramento industrial em tempo real.",
      features: [
        { text: "Dashboards IoT em tempo real", icon: <Activity className="h-4 w-4" /> },
        { text: "Comunicação MQTT e WebSockets", icon: <Zap className="h-4 w-4" /> },
        { text: "Sistema CMMS completo", icon: <Settings className="h-4 w-4" /> },
        { text: "Controle automatizado de salas", icon: <Cpu className="h-4 w-4" /> },
        { text: "Arquitetura MVC e cache Redis", icon: <Layers className="h-4 w-4" /> },
      ],
      technologies: ["JavaScript", "Node.js", "PostgreSQL", "MQTT", "WebSockets", "Redis"],
      images: ["/placeholder.svg?height=300&width=500", "/placeholder.svg?height=300&width=500"],
      detailedImages: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      isPremium: true,
      projectType: "🏭 Projeto Industrial",
      story: {
        origin:
          "O Thermal Tech nasceu da necessidade de uma indústria de monitorar temperatura e umidade em tempo real em suas salas de produção. Variações não controladas estavam causando perdas significativas na qualidade dos produtos.",
        challenge:
          "Desenvolver um sistema IoT robusto que colete dados de múltiplos sensores, processe informações em tempo real, envie alertas automáticos e mantenha histórico para análises preditivas, tudo isso com alta disponibilidade.",
        solution:
          "Estamos criando uma arquitetura distribuída usando MQTT para comunicação com sensores, WebSockets para atualizações em tempo real no dashboard, Redis para cache de alta performance e PostgreSQL para persistência de dados históricos.",
        impact:
          "O sistema permitirá redução de 60% nas perdas por variação térmica, melhoria na qualidade dos produtos e capacidade de manutenção preditiva baseada em dados históricos.",
        timeline: [
          { phase: "Prototipagem", duration: "2 semanas", description: "Desenvolvimento de protótipo com sensores" },
          { phase: "Backend", duration: "4 semanas", description: "API e sistema de comunicação MQTT" },
          { phase: "Frontend", duration: "3 semanas", description: "Dashboard em tempo real" },
          { phase: "Integração", duration: "2 semanas", description: "Testes de integração completa" },
          { phase: "Deploy", duration: "1 semana", description: "Implementação no ambiente industrial" },
        ],
      },
    },
  ]

  const experiences = [
    {
      title: "Desenvolvedor Full Stack",
      company: "Projeto FlowTime",
      period: "Outubro 2024 - Janeiro 2025",
      type: "Comercial",
      achievements: [
        "Desenvolveu sistema completo de gestão para clínica de podologia",
        "Liderou desenvolvimento frontend com JavaScript, HTML5, CSS3, Bootstrap",
        "Implementou backend robusto usando Node.js, Express.js, Firebase",
        "Criou aplicação desktop multiplataforma com Electron.js",
        "Entregou sistema em produção comercial com 100% de funcionalidade",
        "Colaborou em equipe multidisciplinar de 3 desenvolvedores",
      ],
      isPremium: true,
    },
    {
      title: "Desenvolvedor de Software",
      company: "Projetos Universitários",
      period: "2021 - 2024",
      type: "Acadêmico",
      achievements: [
        "Liderou equipes de desenvolvimento em 5+ projetos acadêmicos",
        "Aplicou metodologias Scrum com sprints de 2 a 3 semanas",
        "Gerenciou versionamento de código com Git e GitHub",
        "Executou ciclo completo: análise, desenvolvimento, testes, deploy",
        "Coordenou divisão de tarefas entre frontend e backend",
      ],
    },
  ]

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div
        className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
      >
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all duration-300 hover:bg-white/95 dark:hover:bg-gray-900/95">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold text-[#0077B5] hover:scale-105 transition-transform duration-300 cursor-pointer">
              EW
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "Sobre" },
                { id: "skills", label: "Habilidades" },
                { id: "projects", label: "Projetos" },
                { id: "experience", label: "Experiência" },
                { id: "contact", label: "Contato" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative transition-all duration-300 hover:text-[#0077B5] hover:scale-105 ${activeSection === item.id
                    ? "text-[#0077B5] font-semibold after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-[#0077B5] after:rounded-full"
                    : ""
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:scale-105 transition-all duration-300 hover:shadow-lg"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              <Button
                size="sm"
                className="hidden md:flex bg-[#0077B5] hover:bg-[#005885] text-white hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:scale-105 transition-all duration-300"
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 animate-in slide-in-from-top duration-300">
              <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3 md:space-y-4">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "Sobre" },
                  { id: "skills", label: "Habilidades" },
                  { id: "projects", label: "Projetos" },
                  { id: "experience", label: "Experiência" },
                  { id: "contact", label: "Contato" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left transition-all duration-300 hover:text-[#0077B5] hover:translate-x-2 ${activeSection === item.id ? "text-[#0077B5] font-semibold" : ""
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  size="sm"
                  className="w-fit bg-[#0077B5] hover:bg-[#005885] text-white hover:scale-105 transition-all duration-300"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </Button>
              </nav>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className="pt-24 pb-16 px-4 bg-gradient-to-br from-white to-[#f8f9fa] dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
        >
          {/* Background animations */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0077B5]/5 via-transparent to-[#005885]/5"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#0077B5]/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-20 w-96 h-96 bg-[#005885]/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div
              className={`grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 ${visibleSections.has("home") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight hover:scale-105 transition-transform duration-500">
                  Eduardo Gregório{" "}
                  <span className="text-[#0077B5] bg-gradient-to-r from-[#0077B5] to-[#005885] bg-clip-text text-transparent animate-gradient">
                    Wagner
                  </span>
                </h1>
                <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium hover:text-[#0077B5] transition-colors duration-300">
                  Desenvolvedor Full Stack Júnior
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300">
                  Transformando ideias em código há 4 anos. Especialista em Frontend com experiência em sistemas
                  comerciais.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    onClick={() => scrollToSection("projects")}
                    className="bg-[#0077B5] hover:bg-[#005885] text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group"
                  >
                    <TrendingUp className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Ver Projetos
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => scrollToSection("contact")}
                    className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:scale-105 transition-all duration-300 hover:shadow-lg group"
                  >
                    <Mail className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Entre em Contato
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="w-80 h-80 bg-gradient-to-br from-[#0077B5] to-[#005885] rounded-full flex items-center justify-center transform hover:scale-105 transition-all duration-700 shadow-2xl hover:shadow-3xl">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Eduardo Wagner"
                      className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg hover:border-8 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0077B5]/20 to-[#005885]/20 rounded-full blur-xl -z-10 hover:blur-2xl hover:scale-125 transition-all duration-700"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-16 px-4 bg-gradient-to-br from-[#f8f9fa] to-[#f1f3f4] dark:from-gray-800 dark:to-gray-700 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent dark:from-blue-900/10 dark:to-transparent"></div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div
              className={`transition-all duration-1000 delay-200 ${visibleSections.has("about") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 hover:scale-105 transition-transform duration-300">
                Sobre <span className="text-[#0077B5]">Mim</span>
              </h2>

              <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                <div className="lg:col-span-2">
                  <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-xl hover:scale-105 group">
                    <CardContent className="p-8 space-y-6">
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                        Desenvolvedor de 21 anos, natural do Paraná, cursando último ano de Engenharia de Software.
                        Minha jornada começou pela curiosidade de entender como as tecnologias funcionam e como criar
                        soluções que fazem diferença na vida das pessoas.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                        Durante minha formação, desenvolvi experiência prática criando sistemas completos do zero,
                        aplicando conceitos teóricos em projetos reais para clínicas e instituições de ensino. Tenho
                        experiência tanto em desenvolvimento individual quanto colaborativo, utilizando metodologias
                        ágeis e Git/GitHub.
                      </p>
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                        Busco minha primeira oportunidade como desenvolvedor júnior, onde possa contribuir com soluções
                        inovadoras e crescer profissionalmente.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="bg-[#f1f3f4] dark:bg-gray-900 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-500 rounded-xl hover:scale-105 group">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="group/stat">
                          <div className="text-3xl font-bold text-[#0077B5] transition-transform duration-300">21</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-[#0077B5] transition-colors duration-300">
                            anos
                          </div>
                        </div>
                        <div className="group/stat">
                          <div className="text-3xl font-bold text-[#0077B5] transition-transform duration-300">4</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-[#0077B5] transition-colors duration-300">
                            anos estudando
                          </div>
                        </div>
                        <div className="group/stat">
                          <div className="text-3xl font-bold text-[#0077B5] transition-transform duration-300">1</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-[#0077B5] transition-colors duration-300">
                            sistema comercializado
                          </div>
                        </div>
                        <div className="group/stat">
                          <div className="text-3xl font-bold text-[#0077B5] transition-transform duration-300">3</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-[#0077B5] transition-colors duration-300">
                            projetos desenvolvidos
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-transparent dark:from-blue-900/10 dark:to-transparent"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-[#0077B5]/5 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-20 w-96 h-96 bg-[#005885]/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
                Minhas{" "}
                <span className="text-[#0077B5] bg-gradient-to-r from-[#0077B5] to-[#005885] bg-clip-text text-transparent">
                  Habilidades
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300">
                Tecnologias e ferramentas que domino para criar soluções completas e eficientes
              </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {Object.entries(skills).map(([category, skillsList]) => (
                <Card key={category} className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20 border-2 border-[#0077B5]/30 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-xl overflow-hidden group">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white capitalize transition-colors duration-300 group-hover:text-[#0077B5]">
                      {category === "frontend" && "Frontend"}
                      {category === "backend" && "Backend"}
                      {category === "database" && "Banco de Dados"}
                      {category === "libraries" && "Bibliotecas"}
                      {category === "tools" && "Ferramentas"}
                      {category === "methodologies" && "Metodologias"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {skillsList.map((skill, index) => (
                        <div
                          key={skill.name}
                          className={`flex items-center justify-between p-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 group/skill ${visibleSections.has("skills") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                            }`}
                          style={{ transitionDelay: `${index * 100}ms` }}
                        >
                          <div className="flex items-center">
                            <span className="text-2xl mr-3 transition-transform duration-300 group-hover/skill:scale-125">
                              {skill.icon}
                            </span>
                            <span className="font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300 group-hover/skill:text-[#0077B5]">
                              {skill.name}
                            </span>
                          </div>
                          {skill.studying && (
                            <Badge className="text-xs bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 dark:from-yellow-900/30 dark:to-orange-900/30 dark:text-yellow-200 border-yellow-300 dark:border-yellow-700 animate-pulse transition-transform duration-300">
                              📚 Estudando
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Skills Summary */}
            <div className="mt-16 grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2 transition-transform duration-300">
                    {Object.values(skills).flat().length}
                  </div>
                  <div className="text-sm text-green-700 dark:text-green-300 font-medium group-hover:text-green-800 dark:group-hover:text-green-200 transition-colors duration-300">
                    Total de Tecnologias
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 transition-transform duration-300">
                    {
                      Object.values(skills)
                        .flat()
                        .filter((s) => s.studying).length
                    }
                  </div>
                  <div className="text-sm text-blue-700 dark:text-blue-300 font-medium group-hover:text-blue-800 dark:group-hover:text-blue-200 transition-colors duration-300">
                    Em Estudo
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl hover:scale-105 group">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2 transition-transform duration-300">
                    4+
                  </div>
                  <div className="text-sm text-purple-700 dark:text-purple-300 font-medium group-hover:text-purple-800 dark:group-hover:text-purple-200 transition-colors duration-300">
                    Anos de Experiência
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-16 px-4 bg-gradient-to-br from-[#f8f9fa] to-[#f1f3f4] dark:from-gray-800 dark:to-gray-700 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0077B5]/5 via-transparent to-[#005885]/5"></div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div
              className={`transition-all duration-1000 ${visibleSections.has("projects") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 hover:scale-105 transition-transform duration-300">
                Meus <span className="text-[#0077B5]">Projetos</span>
              </h2>

              <div className="text-center mb-12">
                <Badge
                  variant="outline"
                  className="bg-yellow-50 text-yellow-800 border-yellow-300 dark:bg-yellow-900/20 dark:text-yellow-200 dark:border-yellow-700 px-4 py-2 hover:scale-105 transition-transform duration-300"
                >
                  <Lock className="h-4 w-4 mr-2" />
                  ⚠️ Todos os repositórios são privados por questões de confidencialidade comercial
                </Badge>
              </div>

              <div className="space-y-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ${visibleSections.has("projects") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                    style={{ transitionDelay: `${index * 300}ms` }}
                  >
                    <Card>
                      {project.isPremium && (
                        <div className="bg-gradient-to-r from-[#0077B5] to-[#005885] text-white px-6 py-2 group-hover:from-[#005885] group-hover:to-[#004070] transition-all duration-300">
                          <div className="flex items-center justify-between">
                            <Badge className="bg-white/20 text-white border-white/30 transition-transform duration-300">
                              <Star className="h-3 w-3 mr-1" />
                              {project.badge}
                            </Badge>
                            <span className="text-sm font-medium transition-transform duration-300">
                              {project.projectType}
                            </span>
                          </div>
                        </div>
                      )}

                      <CardHeader className="pb-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl text-[#0077B5] mb-2 transition-transform duration-300">
                              {project.title}
                            </CardTitle>
                            <div className="flex items-center gap-2 mb-2">
                              <CardDescription className="text-lg font-semibold transition-colors duration-300">
                                {project.status}
                              </CardDescription>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <span className="flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full transition-transform duration-300">
                              <Users className="h-4 w-4 mr-1" />
                              {project.team}
                            </span>
                            <span className="flex items-center bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full transition-transform duration-300">
                              <Calendar className="h-4 w-4 mr-1" />
                              {project.period}
                            </span>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        {/* Project Images */}
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {project.images?.map((image, imgIndex) => (
                            <div key={imgIndex} className="group/img relative overflow-hidden rounded-lg">
                              <img
                                src={image || "/placeholder.svg"}
                                alt={`${project.title} - Screenshot ${imgIndex + 1}`}
                                className="w-full h-48 object-cover transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                                <ExternalLink className="h-6 w-6 text-white opacity-0 group-hover/img:opacity-100 transition-all duration-300" />
                              </div>
                            </div>
                          ))}
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                          {project.description}
                        </p>

                        <div>
                          <h4 className="font-semibold mb-4 flex items-center transition-colors duration-300">
                            <CheckCircle className="h-5 w-5 mr-2 text-green-500 transition-transform duration-300" />
                            Funcionalidades:
                          </h4>
                          <ul className="grid md:grid-cols-2 gap-3">
                            {project.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-gray-600 dark:text-gray-300 group/feature transition-colors duration-300"
                              >
                                <span className="text-[#0077B5] mr-3 mt-1 transition-transform duration-300">
                                  {feature.icon}
                                </span>
                                <span className="transition-transform duration-300">{feature.text}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 flex items-center transition-colors duration-300">
                            <Code className="h-5 w-5 mr-2 text-[#0077B5] transition-transform duration-300" />
                            Tecnologias:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge
                                key={tech}
                                className="bg-[#0077B5] text-white hover:bg-[#005885] transition-all duration-300"
                                style={{ animationDelay: `${techIndex * 100}ms` }}
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {project.results && (
                          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800 transition-transform duration-300 group/result">
                            <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2 flex items-center">
                              <Award className="h-5 w-5 mr-2 transition-transform duration-300" />
                              Resultados:
                            </h4>
                            <p className="text-green-700 dark:text-green-300 font-medium">{project.results}</p>
                          </div>
                        )}

                        <div className="flex flex-wrap gap-4 pt-4">
                          <Button
                            variant="outline"
                            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 transition-all duration-300 hover:shadow-lg group/btn"
                          >
                            <Lock className="h-4 w-4 mr-2 transition-transform duration-300" />
                            Repositório Privado
                          </Button>
                          <Button
                            onClick={() => openProjectModal(index)}
                            className="bg-[#0077B5] hover:bg-[#005885] text-white transition-all duration-300 hover:shadow-xl group/btn"
                          >
                            <FileText className="h-4 w-4 mr-2 transition-transform duration-300" />
                            {index === 0 ? "Case Study" : "Detalhes"}
                          </Button>
                          {index === 0 && (
                            <Button
                              variant="outline"
                              className="border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-all duration-300 hover:shadow-lg group/btn"
                            >
                              <Briefcase className="h-4 w-4 mr-2 transition-transform duration-300" />
                              Ver em Produção
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 px-4 bg-white dark:bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent dark:from-blue-900/10 dark:to-transparent"></div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 hover:scale-105 transition-transform duration-300">
              Minha <span className="text-[#0077B5]">Experiência</span>
            </h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0077B5] to-[#005885] hidden md:block hover:w-1 transition-all duration-300"></div>

              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-700 ${visibleSections.has("experience") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                      }`}
                    style={{ transitionDelay: `${index * 400}ms` }}
                  >
                    <div className="relative md:ml-16">
                      {/* Timeline Dot */}
                      <div className="absolute -left-20 top-6 w-4 h-4 bg-[#0077B5] rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block transition-all duration-300"></div>

                      <Card
                        className={`${experience.isPremium
                          ? "bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/20 border-l-4 border-l-[#0077B5] shadow-xl"
                          : "bg-[#f8f9fa] dark:bg-gray-800"
                          } border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-xl group`}
                      >
                        <CardHeader>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 md:gap-4">
                            <div>
                              <CardTitle className="text-xl text-[#0077B5] flex items-center transition-transform duration-300">
                                {experience.isPremium && (
                                  <Star className="h-5 w-5 mr-2 text-yellow-500 transition-transform duration-300" />
                                )}
                                {experience.title}
                              </CardTitle>
                              <CardDescription className="text-lg font-semibold text-gray-700 dark:text-gray-300 transition-colors duration-300">
                                {experience.company}
                              </CardDescription>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge
                                variant="outline"
                                className={`${experience.type === "Comercial"
                                  ? "bg-green-50 text-green-700 border-green-300 dark:bg-green-900/20 dark:text-green-200 transition-transform duration-300"
                                  : "bg-blue-50 text-blue-700 border-blue-300 dark:bg-blue-900/20 dark:text-blue-200 transition-transform duration-300"
                                  } transition-transform duration-300`}
                              >
                                {experience.type}
                              </Badge>
                              <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center transition-colors duration-300">
                                <Calendar className="h-4 w-4 mr-1 transition-transform duration-300" />
                                {experience.period}
                              </span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {experience.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="flex items-start group/achievement transition-transform duration-300"
                              >
                                <CheckCircle className="h-5 w-5 text-[#0077B5] mr-3 mt-0.5 flex-shrink-0 transition-transform duration-300" />
                                <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}

                {/* Education */}
                <div
                  className={`transition-all duration-700 ${visibleSections.has("experience") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                    }`}
                  style={{ transitionDelay: "800ms" }}
                >
                  <div className="relative md:ml-16">
                    <div className="absolute -left-20 top-6 w-4 h-4 bg-[#0077B5] rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block transition-all duration-300"></div>

                    <Card className="bg-gradient-to-br from-[#f8f9fa] to-white dark:from-gray-800 dark:to-gray-900 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 rounded-xl group">
                      <CardHeader>
                        <CardTitle className="text-xl text-[#0077B5] flex items-center transition-transform duration-300">
                          <GraduationCap className="h-5 w-5 mr-2 transition-transform duration-300" />
                          Engenharia de Software
                        </CardTitle>
                        <CardDescription className="text-lg transition-colors duration-300">
                          Universidade do Vale do Itajaí (UNIVALI) | 7º/8º período - Conclusão em 2025
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center group/education transition-transform duration-300">
                          <BookOpen className="h-5 w-5 text-[#0077B5] mr-3 transition-transform duration-300" />
                          <span className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                            Formação sólida em desenvolvimento de software, metodologias ágeis e arquitetura de sistemas
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 px-4 bg-gradient-to-br from-[#f8f9fa] via-white to-[#f1f3f4] dark:from-gray-800 dark:via-gray-900 dark:to-gray-700 relative overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0077B5]/5 via-transparent to-[#005885]/5"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0077B5]/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#005885]/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>

          <div className="container mx-auto max-w-6xl relative z-10">
            <div
              className={`transition-all duration-1000 ${visibleSections.has("contact") ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            >
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:scale-105 transition-transform duration-300">
                  Entre em{" "}
                  <span className="text-[#0077B5] bg-gradient-to-r from-[#0077B5] to-[#005885] bg-clip-text text-transparent">
                    Contato
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300">
                  Pronto para transformar ideias em realidade? Vamos conversar sobre seu próximo projeto!
                </p>
              </div>

              <div className="grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-12">
                {/* Contact Info - 2 columns */}
                <div className="lg:col-span-1 xl:col-span-2 space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center hover:scale-105 transition-transform duration-300">
                      <div className="w-8 h-8 bg-[#0077B5] rounded-lg flex items-center justify-center mr-3 transition-transform duration-300">
                        <Zap className="h-4 w-4 text-white" />
                      </div>
                      Vamos conversar!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300">
                      Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato comigo
                      através do formulário ou pelas informações abaixo.
                    </p>
                  </div>

                  {/* Contact Cards */}
                  <div className="space-y-4">
                    <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl group">
                      <CardContent className="p-6">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#0077B5] to-[#005885] rounded-xl flex items-center justify-center mr-4 transition-transform duration-300">
                            <Mail className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                              Email
                            </div>
                            <div className="text-gray-600 dark:text-gray-300 text-sm">eduardogwagner2003@gmail.com</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl group">
                      <CardContent className="p-6">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4 transition-transform duration-300">
                            <MapPin className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                              Localização
                            </div>
                            <div className="text-gray-600 dark:text-gray-300 text-sm">Paraná, Brasil</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl group">
                      <CardContent className="p-6">
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4 transition-transform duration-300">
                            <Clock className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                              Disponibilidade
                            </div>
                            <div className="text-gray-600 dark:text-gray-300 text-sm">Seg - Sex, 8h às 18h</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                      Conecte-se comigo
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <Button
                        variant="outline"
                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 transition-all duration-300 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] group rounded-xl p-4 h-auto flex-col"
                      >
                        <Linkedin className="h-6 w-6 mb-2 transition-transform duration-300" />
                        <span className="text-xs">LinkedIn</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 transition-all duration-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 group rounded-xl p-4 h-auto flex-col"
                      >
                        <Github className="h-6 w-6 mb-2 transition-transform duration-300" />
                        <span className="text-xs">GitHub</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:border-transparent group rounded-xl p-4 h-auto flex-col"
                      >
                        <Instagram className="h-6 w-6 mb-2 transition-transform duration-300" />
                        <span className="text-xs">Instagram</span>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Contact Form - 3 columns */}
                <div className="lg:col-span-2 xl:col-span-3">
                  <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-gray-200 dark:border-gray-700 shadow-2xl hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden hover:scale-105 group">
                    {/* Form Header */}
                    <div className="bg-gradient-to-r from-[#0077B5] to-[#005885] p-6 group-hover:from-[#005885] group-hover:to-[#004070] transition-all duration-300">
                      <CardTitle className="flex items-center text-white text-xl transition-transform duration-300">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3 transition-transform duration-300">
                          <Send className="h-4 w-4" />
                        </div>
                        Envie uma mensagem
                      </CardTitle>
                      <p className="text-blue-100 mt-2">Preencha o formulário e retornarei em até 24 horas</p>
                    </div>

                    <CardContent className="p-8">
                      <form onSubmit={handleFormSubmit} className="space-y-6">
                        {/* Name Field */}
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                            <User className="h-5 w-5 text-gray-400 group-focus-within:text-[#0077B5] group-focus-within:scale-125 transition-all duration-300" />
                          </div>
                          <Input
                            placeholder=" "
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="peer pl-16 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 focus:border-[#0077B5] focus:bg-white dark:focus:bg-gray-700 transition-all duration-300 rounded-xl hover:scale-105 focus:scale-105"
                          />
                          {!formData.name && (
                            <label className="absolute left-16 top-1/2 -translate-y-1/2 text-base text-gray-500 dark:text-gray-400 transition-all duration-300 font-medium pointer-events-none">
                              Seu nome completo *
                            </label>
                          )}
                        </div>
                    
                        {/* Email Field */}
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                            <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-[#0077B5] group-focus-within:scale-125 transition-all duration-300" />
                          </div>
                          <Input
                            type="email"
                            placeholder=" "
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="peer pl-16 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 focus:border-[#0077B5] focus:bg-white dark:focus:bg-gray-700 transition-all duration-300 rounded-xl hover:scale-105 focus:scale-105"
                          />
                          {!formData.email && (
                            <label className="absolute left-16 top-1/2 -translate-y-1/2 text-base text-gray-500 dark:text-gray-400 transition-all duration-300 font-medium pointer-events-none">
                              Seu melhor email *
                            </label>
                          )}
                        </div>
                    
                        {/* Subject Field */}
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                            <Briefcase className="h-5 w-5 text-gray-400 group-focus-within:text-[#0077B5] group-focus-within:scale-125 transition-all duration-300" />
                          </div>
                          <select
                            value={formData.subject || ""}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="w-full pl-16 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 focus:border-[#0077B5] focus:bg-white dark:focus:bg-gray-700 transition-all duration-300 rounded-xl text-gray-900 dark:text-white hover:scale-105 focus:scale-105 appearance-none"
                          >
                            <option value="" disabled hidden>
                              Selecione o assunto
                            </option>
                            <option value="job">Oportunidade de Trabalho</option>
                            <option value="project">Projeto Freelance</option>
                            <option value="collaboration">Colaboração</option>
                            <option value="other">Outros</option>
                          </select>
                          {!formData.subject && (
                            <label className="absolute left-16 top-1/2 -translate-y-1/2 text-base text-gray-500 dark:text-gray-400 transition-all duration-300 font-medium pointer-events-none">
                              Assunto
                            </label>
                          )}
                          {/* Custom dropdown arrow */}
                          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                    
                        {/* Message Field */}
                        <div className="relative group">
                          <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none z-10">
                            <MessageSquare className="h-5 w-5 text-gray-400 group-focus-within:text-[#0077B5] group-focus-within:scale-125 transition-all duration-300" />
                          </div>
                          <Textarea
                            placeholder=" "
                            required
                            rows={6}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="pl-16 pt-4 pb-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 focus:border-[#0077B5] focus:bg-white dark:focus:bg-gray-700 transition-all duration-300 resize-none rounded-xl hover:scale-105 focus:scale-105"
                          />
                          {!formData.message && (
                            <label className="absolute left-16 top-4 text-base text-gray-500 dark:text-gray-400 transition-all duration-300 font-medium pointer-events-none">
                              Conte-me sobre seu projeto ou oportunidade *
                            </label>
                          )}
                        </div>
                    
                        {/* Submit Button */}
                        <Button
                          type="submit"
                          disabled={isFormSubmitting}
                          className="w-full bg-gradient-to-r from-[#0077B5] to-[#005885] hover:from-[#005885] hover:to-[#004070] text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed rounded-xl py-4 text-lg font-semibold group/submit"
                        >
                          {isFormSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                              Enviando mensagem...
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5 mr-3 transition-transform duration-300" />
                              Enviar Mensagem
                            </>
                          )}
                        </Button>
                    
                        {/* Form Footer */}
                        <div className="text-center pt-4">
                          <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                            🔒 Suas informações estão seguras e não serão compartilhadas
                          </p>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-16 text-center">
                <Card className="bg-gradient-to-r from-[#0077B5] to-[#005885] border-none shadow-2xl rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-500 group">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 transition-transform duration-300">
                      Pronto para começar seu projeto?
                    </h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                      Vamos transformar suas ideias em realidade! Entre em contato e vamos discutir como posso ajudar.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button
                        variant="outline"
                        className="bg-white text-[#0077B5] border-white hover:bg-gray-100 transition-all duration-300 rounded-xl px-8 py-3 group/cta"
                      >
                        <Download className="h-4 w-4 mr-2 transition-transform duration-300" />
                        Download CV
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-transparent text-white border-white hover:bg-white hover:text-[#0077B5] transition-all duration-300 rounded-xl px-8 py-3 group/cta"
                      >
                        <Calendar className="h-4 w-4 mr-2 transition-transform duration-300" />
                        Agendar Conversa
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
              © 2025 Eduardo Gregório Wagner. Todos os direitos reservados.
            </p>
          </div>
        </footer>

        {/* Project Modal */}
        {selectedProject !== null && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={closeProjectModal} // Adicionar esta linha
          >
            <div
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom duration-500"
              onClick={(e) => e.stopPropagation()} // Adicionar esta linha para evitar fechar quando clicar no conteúdo
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#0077B5] to-[#005885] text-white p-6 rounded-t-2xl z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{projects[selectedProject].title}</h2>
                    <p className="text-blue-100 mt-1">{projects[selectedProject].projectType}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={closeProjectModal}
                    className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-[#0077B5] transition-all duration-300"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-8">
                {/* Image Gallery */}
                <div className="relative">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
                    {currentImageIndex === -1 ? (
                      // Página inicial dedicada ao projeto
                      <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0077B5] to-[#005885] text-white">
                        <div className="text-center space-y-4">
                          <h3 className="text-3xl font-bold">{projects[selectedProject].title}</h3>
                          <p className="text-xl text-blue-100">{projects[selectedProject].projectType}</p>
                          <div className="flex items-center justify-center space-x-4 text-blue-100">
                            <span className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {projects[selectedProject].team}
                            </span>
                            <span className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {projects[selectedProject].period}
                            </span>
                          </div>
                          <Badge className="bg-white/20 text-white border-white/30">
                            <Star className="h-3 w-3 mr-1" />
                            {projects[selectedProject].badge}
                          </Badge>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={projects[selectedProject].detailedImages[currentImageIndex] || "/placeholder.svg"}
                        alt={`${projects[selectedProject].title} - Imagem ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Navigation Arrows */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm transition-all duration-300"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm transition-all duration-300"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>

                  {/* Image Indicators */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {/* Indicador para página inicial */}
                    <button
                      onClick={() => setCurrentImageIndex(-1)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImageIndex === -1
                        ? "bg-[#0077B5] scale-125"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-[#0077B5]/50"
                        }`}
                    />
                    {/* Indicadores para imagens */}
                    {projects[selectedProject].detailedImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                          ? "bg-[#0077B5] scale-125"
                          : "bg-gray-300 dark:bg-gray-600 hover:bg-[#0077B5]/50"
                          }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Project Story */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Origin Story */}
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-[#0077B5]">
                        <Lightbulb className="h-5 w-5 mr-2" />
                        Como Surgiu
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {projects[selectedProject].story.origin}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Challenge */}
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-orange-600">
                        <Target className="h-5 w-5 mr-2" />
                        Desafio
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {projects[selectedProject].story.challenge}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Solution */}
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-green-600">
                        <Rocket className="h-5 w-5 mr-2" />
                        Solução
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {projects[selectedProject].story.solution}
                      </p>
                    </CardContent>
                  </Card>

                  {/* Impact */}
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-purple-600">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        Impacto
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {projects[selectedProject].story.impact}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-[#0077B5]">
                      <Timer className="h-5 w-5 mr-2" />
                      Timeline do Projeto
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {projects[selectedProject].story.timeline.map((phase, index) => (
                        <div key={index} className="flex items-start space-x-4 group transition-transform duration-300">
                          <div className="w-8 h-8 bg-[#0077B5] rounded-full flex items-center justify-center text-white text-sm font-bold transition-transform duration-300">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h4 className="font-semibold text-gray-900 dark:text-white">{phase.phase}</h4>
                              <Badge variant="outline" className="text-xs">
                                {phase.duration}
                              </Badge>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">{phase.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Technologies Used */}
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-[#0077B5]">
                      <Code className="h-5 w-5 mr-2" />
                      Tecnologias Utilizadas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {projects[selectedProject].technologies.map((tech, index) => (
                        <Badge
                          key={tech}
                          className="bg-[#0077B5] text-white hover:bg-[#005885] transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </ThemeProvider>
  )
}