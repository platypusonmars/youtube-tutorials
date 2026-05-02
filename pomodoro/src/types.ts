export type Mode = 'focus' | 'shortBreak' | 'longBreak'

export interface Durations {
  focus: number
  shortBreak: number
  longBreak: number
}

export interface Session {
  id: string
  mode: Mode
  duration: number
}
