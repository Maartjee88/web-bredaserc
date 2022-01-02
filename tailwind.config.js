module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
      transparent     : 'transparent',
      current         : 'currentColor',
      primary         : 'var(--color-primary)',
      'primary-dark'  : 'var(--color-primary-dark)',
      'primary-light' : 'var(--color-primary-light)',
      secondary       : 'var(--color-secondary)',
      black           : 'var(--color-black)',
      'gray-dark'     : 'var(--color-gray-dark)',
      'gray-light'    : 'var(--color-gray-light)',
      'gray-lightest' : 'var(--color-gray-lightest)',
      white           : 'var(--color-white)',
    },
    fontFamily: {
      'sans'  : ['Lato', 'sans-serif'],
      'header': ['Oswald', 'sans-serif'],
    },
    fontSize: {
      'body-xs'     : ['0.75rem', '1.1875rem'],   // 12 | 19
      'body-sm'     : ['0.875rem', '1.4375rem'],  // 14 | 23
      'body-base'   : ['1rem', '1.625rem'],       // 16 | 26
      'head-sm-lg'  : ['1.25rem', '1.5rem'],      // 20 | 24
      'head-md-lg'  : ['1.75rem', '2.125rem'],    // 28 | 34
      'head-lg-lg'  : ['2.625rem', '3.125rem'],   // 42 | 50
      'head-xl-lg'  : ['3.75rem', '4.5rem'],      // 60 | 72
      'head-sm'     : ['1rem', '1.1875rem'],      // 16 | 19
      'head-md'     : ['1.25rem', '1.5rem'],      // 20 | 24
      'head-lg'     : ['1.625rem', '1.9375rem'],  // 26 | 31
      'head-xl'     : ['2rem', '2.375rem'],       // 32 | 38
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    'gatsby-plugin-postcss',
  ],
}
