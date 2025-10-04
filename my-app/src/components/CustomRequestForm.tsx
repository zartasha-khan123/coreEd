"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function CustomRequestForm() {
  const [showBrief, setShowBrief] = useState(false)
  const [fileName, setFileName] = useState<string | null>(null)

  return (
    <form className="space-y-6">
      {/* Name + Contact */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-wide text-gray-400 mb-2 pl-2 border-l-2 border-gray-700">
            Your Name
          </label>
          <input
            className="w-full border border-gray-800 rounded-lg p-3 bg-gray-900 text-gray-100 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-wide text-gray-400 mb-2 pl-2 border-l-2 border-gray-700">
            Email or Phone
          </label>
          <input
            className="w-full border border-gray-800 rounded-lg p-3 bg-gray-900 text-gray-100 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            placeholder="Enter your email or phone"
          />
        </div>
      </div>

      {/* Project Details */}
      <div>
        <label className="block text-xs uppercase tracking-wide text-gray-400 mb-2 pl-2 border-l-2 border-gray-700">
          Project Details
        </label>
        <textarea
          placeholder="Describe what you need modified or built…"
          className="w-full border border-gray-800 rounded-lg p-3 bg-gray-900 text-gray-100 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          rows={5}
        />
      </div>

      {/* File Upload + Notes */}
      <div className="space-y-4">
        <div>
          <label className="block text-xs uppercase tracking-wide text-gray-400 mb-2 pl-2 border-l-2 border-gray-700">
            Upload a Brief (optional)
          </label>
          <input
            id="briefFile"
            type="file"
            accept=".pdf,.doc,.docx,.txt"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) setFileName(file.name)
            }}
          />
          <label
            htmlFor="briefFile"
            className="inline-flex items-center gap-2 cursor-pointer border border-gray-700 text-gray-200 hover:bg-gray-900 rounded-lg px-4 py-2"
          >
            📎 Attach File
          </label>
          {fileName && (
            <p className="mt-2 text-sm text-gray-400">Selected: {fileName}</p>
          )}
        </div>

        {/* Toggle textarea */}
        <div>
          <Button
            type="button"
            variant="outline"
            className="border-gray-700 text-gray-200 hover:bg-gray-900"
            onClick={() => setShowBrief(!showBrief)}
          >
            {showBrief ? "Remove Extra Notes" : "Add Extra Notes"}
          </Button>
          {showBrief && (
            <textarea
              placeholder="Paste or write your detailed brief here…"
              className="w-full mt-3 border border-gray-800 rounded-lg p-3 bg-gray-900 text-gray-100 placeholder:text-gray-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              rows={5}
            />
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          Submit Request
        </Button>
        <Button variant="outline" className="border-gray-700 text-gray-200 hover:bg-gray-900">
          Cancel
        </Button>
      </div>
    </form>
  )
}
