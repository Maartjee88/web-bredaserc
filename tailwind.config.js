module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: {
          '50': '#ffffff',
          '100': '#feecd6',
          '200': '#fdd9ad',
          '300': '#fdc784',
          '400': '#fcb45b',
          '500': '#fba132',
          '600': '#da8a26',
          '700': '#ba721a',
          '800': '#995b0e',
          '900': '#784302',
        }
      }
    },
    fontFamily: {
      'sans': ['Lato', 'sans-serif'],
      'header': ['Oswald', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
