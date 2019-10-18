import App from './App.svelte'

import './style/normalize.styl'

const app = new App({
  target: document.getElementById('app'),
})

window.app = app

export default app
