import { useState } from 'react'
import DeveloperProfileCard from '../components/DeveloperProfileCard.jsx'
import { activeProjects, developerProfile, recentBids } from '../data/mockData.js'

const statusStyles = {
  Active: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
  'In Review': 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
  Paused: 'bg-rose-500/15 text-rose-700 dark:text-rose-300',
  Beta: 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300',
  Accepted: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
  Pending: 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
  Shortlisted: 'bg-sky-500/15 text-sky-700 dark:text-sky-300',
}

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const getStatusClass = (status) =>
    statusStyles[status] || 'bg-slate-500/15 text-slate-600 dark:text-slate-300'

  return (
    <main className="relative">
      <div
        className={`fixed inset-0 z-40 bg-slate-900/40 transition md:hidden ${
          sidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setSidebarOpen(false)}
      />
      <div className="mx-auto flex min-h-screen max-w-6xl gap-8 px-6 py-10">
        <aside
          className={`fixed left-0 top-0 z-50 h-full w-64 border-r border-slate-200/70 bg-white/95 px-6 py-8 shadow-lg transition duration-300 dark:border-slate-800 dark:bg-slate-950/95 md:static md:translate-x-0 md:shadow-none ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between md:block">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Developer
              </p>
              <h2 className="mt-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                Dashboard
              </h2>
            </div>
            <button
              type="button"
              className="rounded-lg border border-slate-200 p-2 text-slate-600 dark:border-slate-700 dark:text-slate-300 md:hidden"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path
                  d="M6 6l12 12M18 6l-12 12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <nav className="mt-8 flex flex-col gap-3 text-sm font-semibold">
            <button className="rounded-xl border border-cyan-300/30 bg-cyan-500/10 px-4 py-3 text-left text-cyan-700 transition dark:text-cyan-200">
              Profile
            </button>
            <button className="rounded-xl border border-slate-200 px-4 py-3 text-left text-slate-600 transition hover:border-cyan-300/40 hover:text-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:text-white">
              Projects
            </button>
            <button className="rounded-xl border border-slate-200 px-4 py-3 text-left text-slate-600 transition hover:border-rose-300/40 hover:text-rose-500 dark:border-slate-800 dark:text-slate-300 dark:hover:text-rose-300">
              Logout
            </button>
          </nav>
        </aside>

        <section className="flex-1 space-y-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Developer dashboard
              </p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-slate-100">
                Welcome back, Ava
              </h1>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/80">
                Track your work and keep bids moving forward.
              </p>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-300/60 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-200 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              Menu
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <DeveloperProfileCard profile={developerProfile} />

          <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Active projects
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/80">
                Four live collaborations with active contributors.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {activeProjects.map((project) => (
                  <article
                    key={project.id}
                    className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-950/70"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                        {project.title}
                      </h3>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                          project.status,
                        )}`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                      Updated {project.date}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Recent bids
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/80">
                Keep tabs on your latest proposals.
              </p>
              <div className="mt-6 space-y-4">
                {recentBids.map((bid) => (
                  <article
                    key={bid.id}
                    className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-950/70"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                        {bid.project}
                      </h3>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                          bid.status,
                        )}`}
                      >
                        {bid.status}
                      </span>
                    </div>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-300/80">
                      Bid amount
                    </p>
                    <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {bid.amount}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
