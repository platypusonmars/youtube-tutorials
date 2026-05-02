interface TimerDisplayProps {
  minutes: number
  seconds: number
}

function TimerDisplay({ minutes, seconds }: TimerDisplayProps) {
  const format = (n: number) => n.toString().padStart(2, '0')

  return (
    <div className="text-center py-4">
      <div className="font-mono tabular-nums text-7xl font-bold text-gray-800">
        {format(minutes)}:{format(seconds)}
      </div>
    </div>
  )
}

export default TimerDisplay
