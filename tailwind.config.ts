import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6', // blue-500
          light: '#60a5fa', // blue-400
          dark: '#2563eb', // blue-600
        },
        secondary: {
          DEFAULT: '#8b5cf6', // purple-500
          light: '#a78bfa', // purple-400
          dark: '#7c3aed', // purple-600
        },
        accent: {
          DEFAULT: '#10b981', // emerald-500
        },
        textLight: '#f3f4f6', // gray-100 (for dark backgrounds)
        textDark: '#1f2937',  // gray-800 (for light backgrounds)
        backgroundLight: '#ffffff',
        backgroundDark: '#111827', // gray-900
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
