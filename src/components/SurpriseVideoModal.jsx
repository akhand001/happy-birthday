import React, { useState } from 'react'

export default function SurpriseVideoModal({ videoUrl }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="text-center my-6">
      <button
        onClick={() => setOpen(true)}
        className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600"
      >
        🎥 Watch Surprise Video
      </button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <video src={videoUrl} controls className="w-[500px]" />
            <button
              onClick={() => setOpen(false)}
              className="mt-2 bg-gray-300 px-3 py-1 rounded hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
