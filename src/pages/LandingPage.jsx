import AnimatedLogo from '../components/AnimatedLogo.jsx'
import LandingHighlights from '../components/LandingHighlights.jsx'
import PrimaryButton from '../components/PrimaryButton.jsx'
import SearchBar from '../components/SearchBar.jsx'

export default function LandingPage() {
  return (
    <main className="landing-bg relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="ambient-blob ambient-blob--one" />
        <div className="ambient-blob ambient-blob--two" />
      </div>
      <div className="relative">
        <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16 text-center text-slate-900 dark:text-slate-100">
          <div className="fade-in-up">
            <AnimatedLogo />
          </div>
          <p className="fade-in-up delay-150 mt-6 text-xs uppercase tracking-[0.4em] text-cyan-600/90 dark:text-cyan-300/80">
            Find your people
          </p>
          <h1 className="fade-in-up delay-300 mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            DevConnect: build together, ship faster
          </h1>
          <p className="fade-in-up delay-450 mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-200/80 sm:text-lg">
            Discover collaborators, mentorship, and projects tailored to your stack.
          </p>
          <div className="fade-in-up delay-600 mt-8 w-full max-w-xl">
            <SearchBar />
          </div>
          <div className="fade-in-up delay-750 mt-8">
            <PrimaryButton to="/select-role">Get Started</PrimaryButton>
          </div>
        </section>
        <LandingHighlights />
      </div>
    </main>
  )
}
