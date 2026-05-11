export default function SearchBar() {
  return (
    <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500/80 dark:text-cyan-300/70">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search by skill, role, or project"
          className="w-full rounded-full border border-slate-200 bg-white/80 px-11 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 dark:border-cyan-300/20 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-400/80 dark:focus:border-cyan-300"
        />
      </div>
      <button
        type="button"
        className="rounded-full bg-indigo-500/90 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(79,70,229,0.45)] transition hover:bg-indigo-400"
      >
        Search
      </button>
    </div>
  )
}
