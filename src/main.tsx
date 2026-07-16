import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

const rootElement = document.getElementById('root')

// Fail loudly rather than silently rendering nothing if index.html loses its mount point.
if (!rootElement) {
  throw new Error('Unable to start: no element with id "root" was found in index.html.')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
