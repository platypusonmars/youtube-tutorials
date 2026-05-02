import type { Mode } from '../types'

interface ModeSelectorProps {
  mode: Mode
  onChange: (mode: Mode) => void
}

const modes: { value: Mode; label: string }[] = [
  { value: 'focus', label: 'Focus' },
  { value: 'shortBreak', label: 'Short Break' },
  { value: 'longBreak', label: 'Long Break' },
]

function ModeSelector({ mode, onChange }: ModeSelectorProps) {
  return (
    <div className="flex gap-2 justify-center">
      {modes.map((m) => {
        const isActive = mode === m.value
        return (
          <button
            key={m.value}
            onClick={() => onChange(m.value)}
            className={
              'px-4 py-2 rounded-2xl text-sm font-medium transition ' +
              (isActive
                ? 'bg-[#f6c90f] text-gray-900'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200')
            }
          >
            {m.label}
          </button>
        )
      })}
    </div>
  )
}

export default ModeSelector
