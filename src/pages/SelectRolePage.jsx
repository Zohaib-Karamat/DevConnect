import { Link } from 'react-router-dom'
import RoleCard from '../components/RoleCard.jsx'

export default function SelectRolePage() {
  return (
    <main className="landing-bg relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="ambient-blob ambient-blob--one" />
        <div className="ambient-blob ambient-blob--two" />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16 text-center text-slate-900 dark:text-slate-100">
        <p className="fade-in-up text-xs uppercase tracking-[0.4em] text-cyan-600/90 dark:text-cyan-300/80">
          Start here
        </p>
        <h1 className="fade-in-up delay-150 mt-4 text-4xl font-semibold sm:text-5xl">
          Choose your role
        </h1>
        <p className="fade-in-up delay-300 mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-200/80 sm:text-lg">
          Tell us who you are and we will tailor DevConnect to your journey.
        </p>
        <div className="fade-in-up delay-450 mt-10 grid w-full gap-6 md:grid-cols-2">
          <RoleCard
            title="I'm a Developer"
            description="Build teams, showcase your stack, and find collaborators."
            to="/login/developer"
          />
          <RoleCard
            title="I'm a User"
            description="Discover products, hire talent, and launch faster."
            to="/login/user"
          />
        </div>
        <Link
          to="/"
          className="fade-in-up delay-600 mt-10 text-sm font-semibold text-slate-600 transition hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
