import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm.jsx'

export default function LoginPage({ role }) {
  const roleLabel = role === 'developer' ? 'Developer' : 'User'

  return (
    <main className="landing-bg relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="ambient-blob ambient-blob--one" />
        <div className="ambient-blob ambient-blob--two" />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-16 text-center text-slate-900 dark:text-slate-100">
        <p className="fade-in-up text-xs uppercase tracking-[0.4em] text-cyan-600/90 dark:text-cyan-300/80">
          Welcome back
        </p>
        <h1 className="fade-in-up delay-150 mt-4 text-4xl font-semibold sm:text-5xl">
          {roleLabel} login
        </h1>
        <p className="fade-in-up delay-300 mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-200/80 sm:text-lg">
          Pick up where you left off and continue building with DevConnect.
        </p>
        <div className="fade-in-up delay-450 mt-10 w-full max-w-xl">
          <LoginForm role={role} />
        </div>
        <Link
          to="/select-role"
          className="fade-in-up delay-600 mt-8 text-sm font-semibold text-slate-600 transition hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300"
        >
          Choose a different role
        </Link>
      </div>
    </main>
  )
}
