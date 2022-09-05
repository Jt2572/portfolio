module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: '#41545f',
          50: '#aee1ff',
          100: '#a7d6f1',
          200: '#96c0d8',
          300: '#7b9caf',
          400: '#5d7786',
          500: '#41545f',
          600: '#3f515c',
          700: '#384852',
          800: '#263138',
          900: '#14191d',
        },
      }
    },
    container: {
      center: true,
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 992px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1500px',
      // => @media (min-width: 1400px) { ... }
    }
  },
  variants: {
    extend: {
      scale: ['group-hover'],
    },
  },
  plugins: [],
}
