export default function Spinner({ className = 'h-4 w-4' }) {
  return (
    <span
      className={`inline-flex ${className} animate-spin rounded-full border-2 border-current border-t-transparent`}
      aria-hidden="true"
    />
  )
}
