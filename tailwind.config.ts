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
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        tertiary: 'var(--tertiary-color)',
        'primary-linear-gradient': 'var(--primary-linear-gradient)',
        'text-primary': 'var(--text-primary-color)',
        'text-secondary': 'var(--text-secondary-color)',
        'border-primary': 'var(--border-primary-color)',
        'border-secondary': 'var(--border-secondary-color)',
        'box-shadow-primary': 'var(--box-shadow-primary-color)',
        'box-shadow-secondary': 'var(--box-shadow-secondary-color)',
      },
    },
  },
  plugins: [],
};
export default config;
