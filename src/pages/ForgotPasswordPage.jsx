import { useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner.jsx'
import TextInput from '../components/TextInput.jsx'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const getErrors = (values) => {
  const errors = { email: '' }

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  return errors
}

export default function ForgotPasswordPage() {
  const [values, setValues] = useState({ email: '' })
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const errors = getErrors(values)
  const hasErrors = Object.values(errors).some(Boolean)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleBlur = (event) => {
    const { name } = event.target
    setTouched((prev) => ({ ...prev, [name]: true }))
  }

  const showError = (field) => (touched[field] || submitted) && errors[field]

  const handleSubmit = (event) => {
    event.preventDefault()
    if (loading) {
      return
    }
    setSubmitted(true)
    setSuccess(false)
    if (hasErrors) {
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 1500)
  }

  return (
    <main className="landing-bg relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="ambient-blob ambient-blob--one" />
        <div className="ambient-blob ambient-blob--two" />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-16 text-center text-slate-900 dark:text-slate-100">
        <p className="fade-in-up text-xs uppercase tracking-[0.4em] text-cyan-600/90 dark:text-cyan-300/80">
          Account recovery
        </p>
        <h1 className="fade-in-up delay-150 mt-4 text-4xl font-semibold sm:text-5xl">
          Reset your password
        </h1>
        <p className="fade-in-up delay-300 mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-200/80 sm:text-lg">
          Enter your email and we will send you a reset link.
        </p>
        <div className="fade-in-up delay-450 mt-10 w-full max-w-xl rounded-3xl border border-slate-200 bg-white/80 p-8 text-left shadow-[0_18px_60px_rgba(15,23,42,0.12)] dark:border-cyan-300/15 dark:bg-slate-950/70 dark:shadow-[0_30px_80px_rgba(2,6,23,0.6)]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextInput
              label="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="you@devconnect.io"
              autoComplete="email"
              error={showError('email')}
            />
            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400/90 px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_0_24px_rgba(34,211,238,0.45)] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner className="h-4 w-4" />
                  Sending...
                </>
              ) : (
                'Send Reset Link'
              )}
            </button>
          </form>
          {success ? (
            <p className="mt-4 text-sm text-emerald-600 dark:text-emerald-300">
              Reset link sent. Check your inbox.
            </p>
          ) : null}
          <p className="mt-6 text-sm text-slate-600 dark:text-slate-300/80">
            Remembered your password?{' '}
            <Link
              to="/login/developer"
              className="font-semibold text-cyan-600 dark:text-cyan-300"
            >
              Back to login
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
