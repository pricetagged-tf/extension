/* eslint-disable no-console */
import itemInjector from './injectors/item'

;(() => {
  console.info('[vitesse-webext] Hello world from content script')

  // communication example: send previous tab title from background page
  // onMessage('tab-prev', ({ data }) => {
  //   console.log(`[vitesse-webext] Navigate from page "${data.title}"`)
  // })

  // mount component to context window
  const container = document.createElement('div')
  container.id = __NAME__
  const root = document.createElement('div')
  const styleEl = document.createElement('link')
  const shadowDOM =
    container.attachShadow?.({ mode: __DEV__ ? 'open' : 'closed' }) || container
  styleEl.setAttribute('rel', 'stylesheet')
  styleEl.setAttribute(
    'href',
    browser.runtime.getURL('dist/contentScripts/style.css')
  )
  shadowDOM.appendChild(styleEl)
  shadowDOM.appendChild(root)
  document.body.appendChild(container)
  // const app = createApp(App)
  // setupApp(app)
  // app.mount(root)

  itemInjector()
})()
