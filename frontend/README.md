# Portfolio — Eduardo G. Wagner

Site pessoal e portfolio profissional de Eduardo Gregório Wagner, Desenvolvedor Full Stack Pleno e sócio-fundador da [StreamDev](https://streamdev.dev.br/).

🔗 **[eduardowagner.com.br](https://eduardowagner.com.br/)**

## Sobre

Portfolio em React com Tailwind CSS, i18n completo em português e inglês, e um backend próprio para o formulário de contato. Apresenta experiência profissional, formação, habilidades técnicas e os projetos desenvolvidos na StreamDev e como freelancer.

## Stack

**Frontend** (`/frontend`)
- React (Create React App + CRACO)
- Tailwind CSS
- Framer Motion (animações)
- Lucide Icons / react-icons
- i18n próprio (PT/EN), com todo o texto do site centralizado em `src/i18n/`

**Backend** (`/backend`)
- Node.js + Express
- Nodemailer (envio do formulário de contato via Gmail)
- Publicado no Google Cloud Run

## Rodando localmente

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Cria um `.env.local` a partir do `.env.example` com a URL do backend:

```
REACT_APP_API_URL=http://localhost:3001
```

### Backend

```bash
cd backend
npm install
npm run dev
```

Cria um `.env` a partir do `.env.example` com as credenciais do Gmail (senha de app) e as origens permitidas por CORS.

## Deploy

- **Frontend**: Cloudflare Pages, build automático a partir da branch `main` (diretório raiz `frontend`, comando `npm run build`, saída `build`).
- **Backend**: Google Cloud Run, deploy via `gcloud run deploy --source .` a partir de `/backend` (usa o `Dockerfile` do próprio diretório).

## Estrutura

```
.
├── frontend/   # Site (React + Tailwind)
└── backend/    # API do formulário de contato (Express + Nodemailer)
```
