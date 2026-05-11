import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Select Role', to: '/select-role' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Login', to: '/login/developer' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm font-semibold transition ${
      isActive
        ? 'text-cyan-500 dark:text-cyan-300'
        : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
    }`

  const handleClose = () => {
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-lg font-semibold text-slate-900 dark:text-slate-100"
        >
          DevConnect
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-slate-200/70 bg-white/70 p-2 text-slate-700 transition hover:border-cyan-400/60 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-200 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      <div
        className={`border-t border-slate-200/70 bg-white/95 px-6 py-4 transition dark:border-slate-800 dark:bg-slate-950/90 md:hidden ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClass}
              onClick={handleClose}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
