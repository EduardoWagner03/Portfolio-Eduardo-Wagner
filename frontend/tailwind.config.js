/** @type {import('tailwindcss').Config} */

// Design tokens do portfolio. Tudo que antes vivia em 6k linhas de CSS
// (paleta, sombras, blur, keyframes) passa a ser declarado aqui e consumido
// como utilitário nos componentes.
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter Variable'", "system-ui", "sans-serif"],
        display: ["'Space Grotesk Variable'", "'Inter Variable'", "sans-serif"],
        mono: ["'JetBrains Mono Variable'", "ui-monospace", "monospace"],
      },
      colors: {
        // Superfícies do tema escuro — do "espaço profundo" até o vidro elevado.
        ink: {
          950: "#04050A",
          900: "#070912",
          850: "#0B0E1A",
          800: "#111524",
          700: "#1A1F33",
          600: "#252B42",
          500: "#343B55",
        },
        // Acento primário: ciano elétrico.
        flux: {
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
        },
        // Acento secundário: violeta.
        pulse: {
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34,211,238,0.18), 0 8px 40px -8px rgba(34,211,238,0.35)",
        "glow-lg":
          "0 0 0 1px rgba(34,211,238,0.25), 0 24px 80px -16px rgba(34,211,238,0.45)",
        "glow-violet":
          "0 0 0 1px rgba(139,92,246,0.22), 0 16px 60px -12px rgba(139,92,246,0.4)",
        glass: "0 8px 32px -8px rgba(2,6,23,0.6)",
        "inner-hair": "inset 0 1px 0 0 rgba(255,255,255,0.07)",
      },
      backgroundImage: {
        "grid-dark":
          "linear-gradient(to right, rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.07) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
        noise:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.42'/%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        grid: "56px 56px",
        "grid-sm": "32px 32px",
        shimmer: "200% 100%",
      },
      keyframes: {
        "aurora-a": {
          "0%,100%": { transform: "translate3d(-8%,-4%,0) scale(1)" },
          "50%": { transform: "translate3d(10%,6%,0) scale(1.18)" },
        },
        "aurora-b": {
          "0%,100%": { transform: "translate3d(6%,8%,0) scale(1.1)" },
          "50%": { transform: "translate3d(-10%,-6%,0) scale(0.92)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "gradient-pan": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.85)", opacity: "0.7" },
          "80%,100%": { transform: "scale(1.9)", opacity: "0" },
        },
        "scan-y": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(900%)" },
        },
        caret: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
        "spin-slow": { to: { transform: "rotate(360deg)" } },
      },
      animation: {
        "aurora-a": "aurora-a 22s ease-in-out infinite",
        "aurora-b": "aurora-b 28s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
        marquee: "marquee 38s linear infinite",
        "pulse-ring": "pulse-ring 2.6s cubic-bezier(0.24,0.4,0.34,1) infinite",
        "scan-y": "scan-y 6s linear infinite",
        caret: "caret 1.1s step-end infinite",
        "spin-slow": "spin-slow 18s linear infinite",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [],
};
