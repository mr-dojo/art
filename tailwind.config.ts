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
        background: "var(--background)",
        foreground: "var(--foreground)",
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
