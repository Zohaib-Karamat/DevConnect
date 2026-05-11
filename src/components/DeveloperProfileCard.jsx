export default function DeveloperProfileCard({ profile }) {
  return (
    <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur dark:border-cyan-300/15 dark:bg-slate-950/70 dark:shadow-[0_30px_80px_rgba(2,6,23,0.55)]">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <img
          src={profile.avatarUrl}
          alt={profile.name}
          className="h-20 w-20 rounded-2xl object-cover ring-2 ring-cyan-300/40"
        />
        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Developer profile
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            {profile.name}
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/80">
            {profile.bio}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <a
          href={profile.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-cyan-300/70 hover:text-slate-900 dark:border-cyan-300/25 dark:bg-slate-950/80 dark:text-slate-200"
        >
          View GitHub
        </a>
      </div>
    </div>
  )
}
