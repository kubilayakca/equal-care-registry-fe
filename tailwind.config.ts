import type { Config } from 'tailwindcss';

const COLORS = {
  'green-800': 'var(--green-800)',
  'green-500': 'var(--green-500)',
  'green-400': 'var(--green-400)',
  'green-200': 'var(--green-200)',
  'green-100': 'var(--green-100)',
  'green-50': 'var(--green-50)',
  'white-85': 'var(--white-85)',
  'white-60': 'var(--white-60)',
  'white-50': 'var(--white-50)',
  'white-40': 'var(--white-40)',
  'white-20': 'var(--white-20)',
  'white-4': 'var(--white-4)',
  'gray-500': 'var(--gray-500)',
  'gray-300': 'var(--gray-300)',
  'gray-100': 'var(--gray-100)',
  'gray-50': 'var(--gray-50)',
  'gray-25': 'var(--gray-25)',
  'blue-1': 'var(--blue-1)',
  'blue-2': 'var(--blue-2)',
  'blue-3': 'var(--blue-3)',
  'blue-85': 'var(--blue-85)',
  'blue-60': 'var(--blue-60)',
  'blue-40': 'var(--blue-40)',
  'blue-20': 'var(--blue-20)',
  'blue-4': 'var(--blue-4)',
  'error-800': 'var(--error-800)',
  'error-400': 'var(--error-400)',
  'error-50': 'var(--error-50)',
  'success-800': 'var(--success-800)',
  'success-400': 'var(--success-400)',
  'success-50': 'var(--success-50)',
  red: {
    DEFAULT: '#D9534F',
  },
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/partials/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      color: {
        ...COLORS,
      },
      backgroundColor: {
        ...COLORS,
      },
      textColor: {
        ...COLORS,
      },
      borderWidth: {},
      borderColor: {
        ...COLORS,
      },
      maxWidth: {
        container: '1440px',
      },
    },
    screens: {
      // => @media (min-width: 640px) { ... }
      sm: '640px',

      // => @media (min-width: 768px) { ... }
      md: '768px',

      // => @media (min-width: 1080px) { ... }
      lg: '1080px',
    },
  },
  safelist: ['flex-col', 'flex-col-reverse', 'flex-row-reverse', 'flex-row'],
  plugins: [],
};
export default config;
