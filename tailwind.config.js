/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary :'#059669',
        dark : '#18181b',
        secondary : '#52525b',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};

