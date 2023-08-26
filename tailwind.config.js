/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        lightGray: '#B8BECD',
        lightOrange: '#FB8F1D',
        normalBlack: '#202336',
        lightYellow:  '#FFBB0C',
        whitishGray: '#F9F9FB',
        brightGray: '#848484'
      },
      fontFamily: {
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
};