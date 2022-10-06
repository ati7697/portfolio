/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'serif': ['ui-serif', '"Clicker Script"'],
      'sense-serif': ['about','"MV Boli"'],
      'sanse-serif':['nav','Kiester'],
      'sans-serif':['resume', 'Cathedral' ]

    },
    screens: {
      xs: '100px',
      sm: '640px',
      md: '768px',
      lg: '1040px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}