const sveltePreprocesser = require('svelte-preprocess')

module.exports = {
  preprocess: sveltePreprocesser({
    stylus: {
      paths: ['node_modules'],
    },
  }),
}
