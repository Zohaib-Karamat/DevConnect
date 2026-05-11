import { useState } from 'react'

export default function TagInput({ value, onChange, placeholder, onBlur }) {
  const [inputValue, setInputValue] = useState('')

  const addTag = (rawValue) => {
    const trimmed = rawValue.trim()
    if (!trimmed) {
      return
    }

    const exists = value.some(
      (item) => item.toLowerCase() === trimmed.toLowerCase(),
    )

    if (exists) {
      return
    }

    onChange([...value, trimmed])
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault()
      addTag(inputValue)
      setInputValue('')
    }
  }

  const handleBlur = () => {
    if (inputValue.trim()) {
      addTag(inputValue)
      setInputValue('')
    }
    if (onBlur) {
      onBlur()
    }
  }

  const handleRemove = (tag) => {
    onChange(value.filter((item) => item !== tag))
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/90 px-3 py-2 dark:border-cyan-300/20 dark:bg-slate-950/60">
      <div className="flex flex-wrap items-center gap-2">
        {value.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-xs text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-200"
          >
            {tag}
            <button
              type="button"
              onClick={() => handleRemove(tag)}
              className="text-cyan-600/80 transition hover:text-cyan-600 dark:text-cyan-200/70 dark:hover:text-cyan-100"
            >
              x
            </button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="min-w-[140px] flex-1 bg-transparent px-2 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-slate-100 dark:placeholder:text-slate-500"
          aria-label="Tech stack"
        />
      </div>
    </div>
  )
}
