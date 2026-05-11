import { Link } from 'react-router-dom'

export default function RoleCard({ title, description, to }) {
  return (
    <Link
      to={to}
      className="group relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-6 text-left transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-[0_20px_60px_rgba(15,23,42,0.15)] dark:border-cyan-300/15 dark:bg-slate-950/60 dark:hover:shadow-[0_20px_60px_rgba(15,23,42,0.6)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/20 opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
          Choose your path
        </p>
        <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/80">
          {description}
        </p>
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 transition group-hover:text-cyan-500 dark:text-cyan-300 dark:group-hover:text-cyan-200">
          <span>Continue</span>
          <span className="inline-flex h-4 w-4 items-center justify-center transition group-hover:translate-x-1">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M5 12h10m0 0-4-4m4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
