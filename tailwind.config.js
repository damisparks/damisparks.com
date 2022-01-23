module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    // todo: add this as well later.
    // darkSelector: '.dark',
    extend: {
      colors: {
        // todo: to change this later.
        primary: 'tbd',
        secondary: 'tbd',
        dark: 'dark',
        linkExactActiveClass: 'tbd',
      },
      fontFamily: {
        // todo: tbd
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
