import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { AppStateProvider } from './context/AppState'
import './index.css'

const root = document.getElementById('root')
if (!root) throw new Error('Root element missing')

const basename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

createRoot(root).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </BrowserRouter>
  </StrictMode>,
)

if ('serviceWorker' in navigator && (location.hostname === 'localhost' || location.protocol === 'https:')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch(() => {
      /* Install support is optional in this prototype. */
    })
  })
}
