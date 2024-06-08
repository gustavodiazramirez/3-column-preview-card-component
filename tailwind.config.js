/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      colors: {
        'primary': {
          'bright-orange': 'hsl(31, 77%, 52%)',
          'dark-cyan': 'hsl(184, 100%, 22%)',
          'very-dark-cyan': 'hsl(179, 100%, 13%)',
        },
        'neutral': {
          'transparent-white': 'hsla(0, 0%, 100%, 0.75)',
          'very-light-gray': 'hsl(0, 0%, 95%)',
        },
      },
      fontSize: {
        'body': '15px',
      },
      fontFamily: {
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
        'big-shoulders-display': ['Big Shoulders Display', 'sans-serif'],
      },
      fontWeight: {
        'normal': 400,
        'bold': 700,
      },
    },
  },
  plugins: [],
}