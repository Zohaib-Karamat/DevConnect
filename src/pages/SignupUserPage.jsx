import { useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner.jsx'
import TextInput from '../components/TextInput.jsx'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const getErrors = (values) => {
  const errors = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  if (!values.name.trim()) {
    errors.name = 'Name is required.'
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.password) {
    errors.password = 'Password is required.'
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters.'
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm your password.'
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Passwords do not match.'
  }

  return errors
}

export default function SignupUserPage() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

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
    if (hasErrors) {
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }

  return (
    <main className="landing-bg relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="ambient-blob ambient-blob--one" />
        <div className="ambient-blob ambient-blob--two" />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16 text-center text-slate-900 dark:text-slate-100">
        <p className="fade-in-up text-xs uppercase tracking-[0.4em] text-cyan-600/90 dark:text-cyan-300/80">
          User onboarding
        </p>
        <h1 className="fade-in-up delay-150 mt-4 text-4xl font-semibold sm:text-5xl">
          Create your user account
        </h1>
        <p className="fade-in-up delay-300 mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-200/80 sm:text-lg">
          Get access to the dev community and explore new products.
        </p>
        <div className="fade-in-up delay-450 mt-10 w-full max-w-2xl rounded-3xl border border-slate-200 bg-white/80 p-8 text-left shadow-[0_18px_60px_rgba(15,23,42,0.12)] dark:border-cyan-300/15 dark:bg-slate-950/70 dark:shadow-[0_30px_80px_rgba(2,6,23,0.6)]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <TextInput
              label="Full name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Grace Hopper"
              autoComplete="name"
              error={showError('name')}
            />
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
            <div className="grid gap-4 sm:grid-cols-2">
              <TextInput
                label="Password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Create a password"
                autoComplete="new-password"
                error={showError('password')}
              />
              <TextInput
                label="Confirm password"
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Re-enter password"
                autoComplete="new-password"
                error={showError('confirmPassword')}
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400/90 px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_0_24px_rgba(34,211,238,0.45)] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner className="h-4 w-4" />
                  Creating account...
                </>
              ) : (
                'Create user account'
              )}
            </button>
          </form>
          <p className="mt-6 text-sm text-slate-600 dark:text-slate-300/80">
            Already have an account?{' '}
            <Link
              to="/login/user"
              className="font-semibold text-cyan-600 dark:text-cyan-300"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
