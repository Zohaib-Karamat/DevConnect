import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const storageKey = 'devconnect-theme'
const storedTheme = window.localStorage.getItem(storageKey)
const initialTheme = storedTheme === 'light' || storedTheme === 'dark'
  ? storedTheme
  : 'dark'

document.documentElement.classList.toggle('dark', initialTheme === 'dark')
document.documentElement.style.colorScheme = initialTheme

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
