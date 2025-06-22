# 🚀 Portfolio Eduardo Wagner

<div align="center">

![Portfolio Preview](https://img.shields.io/badge/Status-Em%20Produção-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8)

**Portfolio profissional desenvolvido em Next.js para apresentar projetos e habilidades como Desenvolvedor Full Stack Júnior**

[🌐 Ver Demo](https://seu-portfolio.vercel.app) • [📧 Contato](mailto:eduardogwagner2003@gmail.com) • [💼 LinkedIn](https://linkedin.com/in/seu-perfil)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias](#-tecnologias)
- [Funcionalidades](#-funcionalidades)
- [Instalação](#-instalação)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Deploy](#-deploy)
- [Performance](#-performance)
- [Contato](#-contato)

---

## 🎯 Sobre o Projeto

Este é o **portfolio profissional** desenvolvido para apresentar minhas habilidades como desenvolvedor, projetos realizados e experiência técnica. O objetivo é demonstrar competências em desenvolvimento frontend moderno utilizando as melhores práticas do mercado.

### ✨ Características Principais

- � **Design Moderno**: Interface clean e profissional
- � **Responsivo**: Adaptado para todos os dispositivos
- � **Dark/Light Mode**: Alternância suave entre temas
- ⚡ **Performance**: Otimizado para velocidade e SEO
- 🔧 **Interativo**: Modais, animações e micro-interações

---

## 🛠️ Tecnologias

### Core
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### UI/UX
- **shadcn/ui** - Sistema de componentes
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones modernos
- **CSS3** - Animações e transições

### Ferramentas
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![VSCode](https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

---

## ✨ Funcionalidades

### 🎨 Interface & Design
- ✅ **Design Responsivo** - Mobile-first approach
- ✅ **Dark/Light Theme** - Persistência de preferências
- ✅ **Animações Fluidas** - Transições suaves
- ✅ **Layout Moderno** - Grid e Flexbox

### 🖼️ Seções Principais
- ✅ **Hero Section** - Apresentação principal
- ✅ **Sobre** - História e objetivos profissionais
- ✅ **Habilidades** - Stack tecnológico organizado
- ✅ **Projetos** - Portfolio com modais interativos
- ✅ **Experiência** - Timeline profissional
- ✅ **Contato** - Formulário funcional

### 🔧 Recursos Técnicos
- ✅ **SEO Otimizado** - Meta tags dinâmicas
- ✅ **Performance** - Lazy loading e otimizações
- ✅ **Acessibilidade** - WCAG compliance
- ✅ **TypeScript** - Tipagem estática

### � Interatividade
- ✅ **Modal de Projetos** - Galeria de imagens
- ✅ **Formulário de Contato** - Validação em tempo real
- ✅ **Navegação Suave** - Scroll animado
- ✅ **Hover Effects** - Micro-interações

---

## 🚀 Instalação

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Git

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/EduardoWagner03/Portfolio-Eduardo-Wagner.git
cd Portfolio-Eduardo-Wagner
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute em desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse o projeto**
```
http://localhost:3000
```

---

## 📁 Estrutura do Projeto

```
Portfolio-Eduardo-Wagner/
├── 📂 app/                 # App Router (Next.js 14)
│   ├── 📄 layout.tsx       # Layout raiz
│   ├── 📄 page.tsx         # Página principal
│   └── 📄 globals.css      # Estilos globais
├── 📂 components/          # Componentes reutilizáveis
│   ├── 📂 ui/              # shadcn/ui components
│   └── 📄 theme-provider.tsx
├── 📂 lib/                 # Utilitários
├── 📂 public/              # Assets estáticos
├── 📄 package.json         # Dependências
├── 📄 tailwind.config.js   # Config Tailwind
├── 📄 next.config.js       # Config Next.js
├── 📄 .gitignore          # Git ignore
└── 📄 README.md           # Este arquivo
```

---

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção

# Qualidade
npm run lint         # ESLint
```

---

## 🌐 Deploy

### Vercel (Recomendado)
1. Conecte o repositório GitHub à [Vercel](https://vercel.com)
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Configuração
```env
# .env.local (se necessário)
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

### Outras Plataformas
- **Netlify**: Auto-deploy com GitHub
- **GitHub Pages**: Workflow Actions
- **Railway**: Deploy com Docker

---

## 📊 Performance

### Lighthouse Scores
- ⚡ **Performance**: 95+
- ♿ **Accessibility**: 100
- 🔧 **Best Practices**: 100
- 🔍 **SEO**: 100

### Métricas
- 🚀 **First Contentful Paint**: < 1.2s
- 🎯 **Largest Contentful Paint**: < 2.0s
- 📱 **Mobile Friendly**: Otimizado
- 🌐 **Core Web Vitals**: Aprovado

---

## 🛠️ Personalização

Para adaptar este portfolio:

1. **Informações Pessoais**: Edite os dados em [`app/page.tsx`](app/page.tsx)
2. **Projetos**: Atualize o array `projects`
3. **Habilidades**: Modifique o objeto `skills`
4. **Tema**: Customize cores em [`tailwind.config.js`](tailwind.config.js)
5. **Imagens**: Adicione seus assets em [`public/`](public/)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 📞 Contato

<div align="center">

**Eduardo Gregório Wagner**  
*Desenvolvedor Full Stack Júnior*

[![Email](https://img.shields.io/badge/Email-eduardogwagner2003@gmail.com-red?style=for-the-badge&logo=gmail&logoColor=white)](mailto:eduardogwagner2003@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Eduardo%20Wagner-blue?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/seu-perfil)
[![GitHub](https://img.shields.io/badge/GitHub-EduardoWagner03-black?style=for-the-badge&logo=github&logoColor=white)](https://github.com/EduardoWagner03)

</div>

---

<div align="center">

⭐ **Se este portfolio te inspirou, considere dar uma estrela!** ⭐

*Desenvolvido com ❤️ e muito café ☕*

</div>