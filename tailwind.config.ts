import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      maxWidth: {
        '1200': '1200px',
      },
      gridTemplateColumns: {
        layout: 'auto minmax(320px, 1200px) auto',
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      colors: {
        darkTheme: {
          'custom-color': '#ffffff',
          'alert-text': '#ffcc00',
        },
        lightTheme: {
          'custom-color': '#333333',
          'alert-text': '#ff6347',
        },
      },
    },
  },

  plugins: [],
};

export default config;
