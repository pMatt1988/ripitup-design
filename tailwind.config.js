module.exports = {
  corePlugins: {
    dropShadow: true
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'heading': ['montserrat', 'sans-serif'],
      'body': ['Fira Sans', 'sans-serif']
    },
    extend: {
      screens: {
        'msm': {'max': '639px' }
      },
      minWidth: {
        'button': '175'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
