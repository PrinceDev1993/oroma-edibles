module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        font_special: ['Petit Formal Script']
      },
      backgroundImage: theme => ({
        'background_one': "url('/img/image-11.jpg')",
        'background_two': "url('/img/image-15.jpg')"
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
