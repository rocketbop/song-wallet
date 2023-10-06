import React from 'react'

export function NewSongForm() {
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
          placeholder="Enter the title"
        />
      </div>

      <div className="flex justify-end">
        <button className="btn btn-secondary mr-2 p-2">Cancel</button>

        <button className="btn btn-primary mr-2 p-2">Save</button>
      </div>
    </form>
  )
}
