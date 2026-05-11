import { Link } from 'react-router-dom'

export default function PrimaryButton({ children, to, type = 'button', onClick }) {
  const className =
    'group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-cyan-400/90 px-8 py-3 text-sm font-semibold text-slate-900 shadow-[0_0_30px_rgba(34,211,238,0.5)] transition hover:bg-cyan-300'

  const content = (
    <>
      <span className="absolute inset-0 translate-y-full bg-white/10 transition duration-300 group-hover:translate-y-0" />
      <span className="relative">{children}</span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {content}
    </button>
  )
}
