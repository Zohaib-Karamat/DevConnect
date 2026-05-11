import { useEffect, useState } from 'react'

const storageKey = 'devconnect-theme'

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const stored = window.localStorage.getItem(storageKey)
  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  return 'dark'
}

const applyTheme = (nextTheme) => {
  const root = document.documentElement
  root.classList.toggle('dark', nextTheme === 'dark')
  root.style.colorScheme = nextTheme
  window.localStorage.setItem(storageKey, nextTheme)
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const handleToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-cyan-400/60 hover:text-slate-900 dark:border-cyan-300/20 dark:bg-slate-950/60 dark:text-slate-200 dark:hover:text-white"
      aria-label="Toggle color mode"
    >
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-cyan-200">
        {theme === 'dark' ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M12 4.5a1 1 0 0 1 1 1v1.2a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1zm0 11.8a1 1 0 0 1 1 1v1.2a1 1 0 1 1-2 0v-1.2a1 1 0 0 1 1-1zm7.5-4.3a1 1 0 0 1-1 1h-1.2a1 1 0 1 1 0-2h1.2a1 1 0 0 1 1 1zm-11.8 0a1 1 0 0 1-1 1H5.5a1 1 0 1 1 0-2h1.2a1 1 0 0 1 1 1zm8.36-5.36a1 1 0 0 1 0 1.42l-.85.85a1 1 0 1 1-1.42-1.42l.85-.85a1 1 0 0 1 1.42 0zm-7.43 7.43a1 1 0 0 1 0 1.42l-.85.85a1 1 0 0 1-1.42-1.42l.85-.85a1 1 0 0 1 1.42 0zm7.43 1.42a1 1 0 0 1-1.42 0l-.85-.85a1 1 0 0 1 1.42-1.42l.85.85a1 1 0 0 1 0 1.42zm-7.43-7.43a1 1 0 0 1-1.42 0l-.85-.85a1 1 0 0 1 1.42-1.42l.85.85a1 1 0 0 1 0 1.42zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
            <path d="M12.7 2.4a1 1 0 0 0-1.2.6 8.5 8.5 0 1 0 9.9 9.9 1 1 0 0 0-.6-1.2 6.8 6.8 0 0 1-8.1-8.1z" />
          </svg>
        )}
      </span>
      <span>{theme === 'dark' ? 'Dark' : 'Light'} mode</span>
    </button>
  )
}
