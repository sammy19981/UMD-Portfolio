import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist"', '"SF Pro Display"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', '"SF Mono"', '"Fira Code"', 'monospace'],
      },
      colors: {
        surface: {
          0: '#09090b',
          1: '#0c0c0f',
          2: '#111114',
          3: '#18181b',
          4: '#1e1e22',
          5: '#27272a',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.06)',
          hover: 'rgba(255,255,255,0.12)',
          active: 'rgba(255,255,255,0.18)',
        },
        accent: {
          DEFAULT: '#6366f1',
          dim: 'rgba(99,102,241,0.15)',
          glow: 'rgba(99,102,241,0.25)',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(99,102,241,0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(99,102,241,0.2)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
