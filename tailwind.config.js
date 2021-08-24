module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: 'var(--color-primary)',
      'primary-dark': 'var(--color-primary-dark)',
      'primary-light': 'var(--color-primary-light)',
      secondary: 'var(--color-secondary)',
      black: 'var(--color-black)',
      'gray-dark': 'var(--color-gray-dark)',
      'gray-light': 'var(--color-gray-light)',
      white: 'var(--color-white)',
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
