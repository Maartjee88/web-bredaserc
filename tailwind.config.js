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
      'gray-lightest': 'var(--color-gray-lightest)',
      white: 'var(--color-white)',
    },
    fontFamily: {
      'sans': ['Lato', 'sans-serif'],
      'header': ['Oswald', 'sans-serif'],
    },
    fontSize: {
      'xs': ['0.75rem', '1rem'],
      'sm': ['0.875rem', '1.5rem'],
      'base': ['1rem', '1.5rem'],
      'lg': ['1.75rem', '3rem'],
      'xl': ['2.625rem', '3rem'],
      '2xl': ['4.25rem', '4.5rem'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
