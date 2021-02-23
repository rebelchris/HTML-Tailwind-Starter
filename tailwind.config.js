module.exports = {
  purge: {
    enabled: true,
    content: ["src/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'daily-dev-tips': "#F89283"
      },
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
