module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      2: '2 2 0%'
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: '#282c34',
      yellow: '#fcd33f',
      red: '#FF0000',
      one: {
        light: '#b6aff9',
        DEFAULT: '#3000bf',
        dark: '#0f0644'
      },
      two: {
        light: '#f9a0a7',
        DEFAULT: '#f52d35',
        dark: '#911026'
      },
      background: {
        light: '#f7e3bf',
        DEFAULT: '#ffcc33',
        dark: '#c67f38'
      },
      success: {
        DEFAULT: '#2d9e42'
      },
      warning: {
        DEFAULT: '#f4602c'
      },
      trans: {
        DEFAULT: 'rgba(0,0,0,0)'
      }
    },
    screens: {
      sm: { max: '639px' },
      md: { min: '640px', max: '1279px' },
      // device
      dv: { max: '960px' },
      // desktop
      ds: '961px',
      xl: '1280px',
      '2xl': '1640px'
    }
  },
  variants: {
    extend: {
      margin: ['last'],
    }
  },
  plugins: [],
}
