import type { Durations } from '../types'

interface SettingsPanelProps {
  durations: Durations
  onChange: (durations: Durations) => void
}

function SettingsPanel({ durations, onChange }: SettingsPanelProps) {
  const update = (key: keyof Durations, value: number) => {
    onChange({ ...durations, [key]: value })
  }

  return (
    <div className="bg-orange-50 rounded-2xl p-4">
      <h2 className="text-sm font-semibold text-gray-700 mb-3">
        Settings (minutes)
      </h2>
      <div className="grid grid-cols-3 gap-3">
        <label className="flex flex-col gap-1 text-xs text-gray-600">
          Focus
          <input
            type="number"
            min={1}
            value={durations.focus}
            onChange={(e) => update('focus', Number(e.target.value))}
            className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#f6c90f]"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs text-gray-600">
          Short Break
          <input
            type="number"
            min={1}
            value={durations.shortBreak}
            onChange={(e) => update('shortBreak', Number(e.target.value))}
            className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#f6c90f]"
          />
        </label>
        <label className="flex flex-col gap-1 text-xs text-gray-600">
          Long Break
          <input
            type="number"
            min={1}
            value={durations.longBreak}
            onChange={(e) => update('longBreak', Number(e.target.value))}
            className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 focus:outline-none focus:border-[#f6c90f]"
          />
        </label>
      </div>
    </div>
  )
}

export default SettingsPanel
