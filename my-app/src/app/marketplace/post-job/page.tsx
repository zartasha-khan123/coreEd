"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getAuthUser } from "@/services/demoUser"

type DemoJob = {
  id: string
  title: string
  description: string
  budget?: string
  skills?: string[]
  category?: string
  createdBy: string
  createdAt: string
}

const JOBS_KEY = "demo_jobs"

export default function PostJobPage() {
  const router = useRouter()
  const [ready, setReady] = useState(false)
  const [email, setEmail] = useState<string>("")

  // form state
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [budget, setBudget] = useState("")
  const [skills, setSkills] = useState("") // comma-separated
  const [category, setCategory] = useState("")

  useEffect(() => {
    const user = getAuthUser()
    if (!user) {
      router.replace("/login")
      return
    }
    if (user.role !== "client") {
      // Only clients can post jobs; send developers to their dashboard
      router.replace(`/dashboard/${user.role}`)
      return
    }
    setEmail(user.email)
    setReady(true)
  }, [router])

  if (!ready) return null

  function saveJob(job: DemoJob) {
    try {
      const raw = window.localStorage.getItem(JOBS_KEY)
      const list = raw ? (JSON.parse(raw) as DemoJob[]) : []
      list.push(job)
      window.localStorage.setItem(JOBS_KEY, JSON.stringify(list))
    } catch (e) {
      // no-op for demo
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim() || !description.trim()) {
      alert("Please provide a title and description.")
      return
    }
    const job: DemoJob = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      budget: budget.trim() || undefined,
      skills: skills
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
      category: category.trim() || undefined,
      createdBy: email,
      createdAt: new Date().toISOString(),
    }
    saveJob(job)
    alert("Job posted! Redirecting to your dashboard.")
    router.replace("/dashboard/client")
  }

  return (
    <main className="mx-auto max-w-[900px] px-4 py-10 lg:px-6">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <header className="mb-6">
          <h1 className="text-balance text-2xl font-semibold">Post a Job</h1>
          <p className="mt-2 text-muted-foreground">
            Create a new opportunity and connect with top AI agents and developers.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="grid gap-5">
          {/* Title */}
          <div>
            <label htmlFor="title" className="mb-2 block text-sm font-medium text-white/90">
              Job Title
            </label>
            <input
              id="title"
              name="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="e.g. Build a lead qualification AI agent"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="mb-2 block text-sm font-medium text-white/90">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={6}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Describe your project scope, goals, timelines, and deliverables."
            />
          </div>

          {/* Budget and Category */}
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="budget" className="mb-2 block text-sm font-medium text-white/90">
                Budget (optional)
              </label>
              <input
                id="budget"
                name="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="e.g. $2,000 - $5,000"
              />
            </div>
            <div>
              <label htmlFor="category" className="mb-2 block text-sm font-medium text-white/90">
                Category (optional)
              </label>
              <input
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="e.g. Customer Service, Finance, HR"
              />
            </div>
          </div>

          {/* Skills */}
          <div>
            <label htmlFor="skills" className="mb-2 block text-sm font-medium text-white/90">
              Skills (comma-separated, optional)
            </label>
            <input
              id="skills"
              name="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="e.g. Next.js, RAG, OpenAI, Agents"
            />
            {skills && (
              <div className="mt-2 flex flex-wrap gap-2">
                {skills
                  .split(",")
                  .map((s) => s.trim())
                  .filter(Boolean)
                  .map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-white/80"
                    >
                      {s}
                    </span>
                  ))}
              </div>
            )}
          </div>

          <div className="mt-2 flex items-center justify-end gap-3">
            <Button
              type="button"
              variant="secondary"
              onClick={() => router.replace("/dashboard/client")}
              className="rounded-full"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="rounded-full text-white"
              style={{
                background: "linear-gradient(90deg, #a855f7 0%, #9333ea 35%, #7e22ce 100%)",
                boxShadow:
                  "0 10px 28px rgba(168, 85, 247, 0.55), 0 0 0 1px rgba(255,255,255,0.10) inset, 0 0 20px rgba(126, 34, 206, 0.35)",
              }}
            >
              Post Job
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}
