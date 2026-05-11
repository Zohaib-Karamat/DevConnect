export default function TextInput({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  autoComplete,
}) {
  const borderClass = error
    ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-400/30 dark:border-rose-400/70 dark:focus:border-rose-300'
    : 'border-slate-200 focus:border-cyan-400 focus:ring-cyan-400/30 dark:border-cyan-300/20 dark:focus:border-cyan-300'

  return (
    <label className="flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-200">
      <span className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">
        {label}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`rounded-2xl border bg-white/90 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 dark:bg-slate-950/60 dark:text-slate-100 dark:placeholder:text-slate-500 ${borderClass}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error ? (
        <span
          id={`${name}-error`}
          className="text-xs text-rose-600 dark:text-rose-300"
        >
          {error}
        </span>
      ) : null}
    </label>
  )
}
