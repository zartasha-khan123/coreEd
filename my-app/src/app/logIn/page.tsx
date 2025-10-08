"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { findUser, setAuthUser } from "@/services/demoUser"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    const user = findUser(email.trim())
    if (!user || user.password !== password) {
      setLoading(false)
      setError("Invalid email or password.")
      return
    }
    setAuthUser(user)
    router.push(user.role === "client" ? "/dashboard/client" : "/dashboard/developer")
  }

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-10 lg:px-6">
      <div className="mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow">
        <h1 className="text-balance text-2xl font-semibold">Welcome back</h1>
        <p className="mt-2 text-sm text-muted-foreground">Log in to continue to your dashboard.</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          {error ? <p className="text-sm text-red-500">{error}</p> : null}

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Signing in..." : "Log in"}
          </Button>
        </form>

        <p className="mt-4 text-sm text-muted-foreground">
          New here?{" "}
          <a href="/signUp" className="font-medium text-foreground underline underline-offset-4">
            Create an account
          </a>
        </p>
      </div>
    </main>
  )
}
