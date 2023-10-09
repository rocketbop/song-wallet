import React, { useState } from 'react'

interface NewSongFormProps {
  onSaveClick: (formData: any) => void
}

export function NewSongForm({ onSaveClick }: NewSongFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const onSubmit = (event: any) => {
    event.preventDefault()
    onSaveClick(formData)
  }

  return (
    <form className="max-w-md mx-auto mt-4 p-4 bg-white shadow-md rounded-lg">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter the title"
        />
      </div>

      <div className="flex justify-end">
        <button className="btn btn-secondary mr-2 p-2">Cancel</button>

        <button onClick={onSubmit} className="btn btn-primary mr-2 p-2">
          Save
        </button>
      </div>
    </form>
  )
}
