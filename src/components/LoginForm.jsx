import { useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from './Spinner.jsx'
import TextInput from './TextInput.jsx'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const getErrors = (values) => {
  const errors = {
    email: '',
    password: '',
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.password) {
    errors.password = 'Password is required.'
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters.'
  }

  return errors
}

export default function LoginForm({ role }) {
  const [values, setValues] = useState({ email: '', password: '' })
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const errors = getErrors(values)
  const hasErrors = Object.values(errors).some(Boolean)
  const roleLabel = role === 'developer' ? 'Developer' : 'User'
  const signupPath = role === 'developer' ? '/signup/developer' : '/signup/user'

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
    <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 text-left shadow-[0_18px_60px_rgba(15,23,42,0.12)] dark:border-cyan-300/15 dark:bg-slate-950/70 dark:shadow-[0_30px_80px_rgba(2,6,23,0.6)]">
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
        <TextInput
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your password"
          autoComplete="current-password"
          error={showError('password')}
        />
        <div className="text-right text-xs">
          <Link
            to="/forgot-password"
            className="font-semibold text-slate-500 transition hover:text-cyan-500 dark:text-slate-300 dark:hover:text-cyan-300"
          >
            Forgot password?
          </Link>
        </div>
        <button
          type="submit"
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400/90 px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_0_24px_rgba(34,211,238,0.45)] transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner className="h-4 w-4" />
              Signing in...
            </>
          ) : (
            `Sign in as ${roleLabel}`
          )}
        </button>
      </form>
      <div className="mt-5">
        <button
          type="button"
          className="w-full rounded-full border border-indigo-200 bg-indigo-50 px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-100 dark:border-indigo-500/40 dark:bg-indigo-500/10 dark:text-indigo-100 dark:hover:border-indigo-400/70 dark:hover:bg-indigo-500/20"
        >
          Continue with Google
        </button>
      </div>
      <p className="mt-6 text-sm text-slate-600 dark:text-slate-300/80">
        New to DevConnect?{' '}
        <Link
          to={signupPath}
          className="font-semibold text-cyan-600 dark:text-cyan-300"
        >
          Create a {roleLabel} account
        </Link>
      </p>
    </div>
  )
}
