import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette
        'canvas-cream': '#F5F1E8',
        'gallery-black': '#1A1A1A',
        'iron-gray': '#4A4A4A',

        // Accent Colors
        'maui-blue': '#0077BE',
        'scroll-gold': '#B8860B',
        'lahaina-coral': '#FF6F61',
      },
      fontFamily: {
        'heading': ['var(--font-cormorant)', 'serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
        'sans': ['var(--font-inter)', 'sans-serif'],
        'serif': ['var(--font-cormorant)', 'serif'],
      },
      fontSize: {
        'h1': '48px',
        'h2': '36px',
        'h3': '24px',
        'body': '16px',
        'small': '14px',
        'tiny': '12px',
      },
      lineHeight: {
        'normal': '1.6',
      },
      backgroundColor: {
        'default': '#F5F1E8', // Canvas Cream
      },
      textColor: {
        'default': '#1A1A1A', // Gallery Black
      },
      spacing: {
        'xs': '4px',
        's': '8px',
        'm': '16px',
        'l': '24px',
        'xl': '32px',
        'xxl': '48px',
        'gutter': '16px',
      },
      maxWidth: {
        'content': '1200px',
        'full-bleed': '100vw',
      },
      gap: {
        'gutter': '16px',
      },
      gridTemplateColumns: {
        'gallery': 'repeat(12, 1fr)',
      },
    },
  },
  plugins: [],
};

export default config;
