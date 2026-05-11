import { activeProjects, recentBids } from '../data/mockData.js'

const statusStyles = {
  Active: 'bg-emerald-500/15 text-emerald-300',
  'In Review': 'bg-amber-500/15 text-amber-300',
  Paused: 'bg-rose-500/15 text-rose-300',
  Beta: 'bg-indigo-500/15 text-indigo-300',
  Accepted: 'bg-emerald-500/15 text-emerald-300',
  Pending: 'bg-amber-500/15 text-amber-300',
  Shortlisted: 'bg-sky-500/15 text-sky-300',
}

const getStatusClass = (status) =>
  statusStyles[status] || 'bg-slate-500/15 text-slate-300'

export default function LandingHighlights() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 pb-16">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-cyan-300/15 bg-slate-950/70 p-6 shadow-[0_30px_70px_rgba(2,6,23,0.5)]">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Active projects
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-100">
            Live collaborations
          </h2>
          <div className="mt-6 space-y-4">
            {activeProjects.slice(0, 2).map((project) => (
              <article
                key={project.id}
                className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-slate-100">
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
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-slate-400">
                  Updated {project.date}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-cyan-300/15 bg-slate-950/70 p-6 shadow-[0_30px_70px_rgba(2,6,23,0.5)]">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Recent bids
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-100">
            Your latest proposals
          </h2>
          <div className="mt-6 space-y-4">
            {recentBids.map((bid) => (
              <article
                key={bid.id}
                className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-slate-100">
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
                <p className="mt-3 text-sm text-slate-300">Bid amount</p>
                <p className="text-lg font-semibold text-slate-100">
                  {bid.amount}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
