import type { Mode, Session } from '../types'

interface SessionListProps {
  sessions: Session[]
}

const modeLabels: Record<Mode, string> = {
  focus: 'Focus',
  shortBreak: 'Short Break',
  longBreak: 'Long Break',
}

function SessionList({ sessions }: SessionListProps) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-gray-700 mb-2">
        Today's sessions
      </h2>
      {sessions.length === 0 ? (
        <p className="text-xs text-gray-400">No sessions yet. Start focusing!</p>
      ) : (
        <ul className="space-y-2">
          {sessions.map((s) => (
            <li
              key={s.id}
              className="flex justify-between items-center bg-orange-50 rounded-xl px-4 py-2 text-sm text-gray-700"
            >
              <span>{modeLabels[s.mode]}</span>
              <span className="text-gray-500">{s.duration} min</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SessionList
