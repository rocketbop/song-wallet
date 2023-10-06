import React from 'react'

interface ToggleButtonProps {
  label: string
  visible: boolean
  onClick: () => void
}

export function ToggleButton({ label, visible, onClick }: ToggleButtonProps) {
  return (
    <button
      className={`btn btn-wide mx-1 ${
        visible ? 'btn-primary' : 'btn-secondary'
      }`}
      onClick={onClick}
    >
      {visible ? `Hide ${label}` : `Show ${label}`}
    </button>
  )
}
