"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { DemoUser, saveUser, setAuthUser } from "@/services/demoUser"

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState<DemoUser["role"]>("client")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!email || !password) {
      setError("Please enter email and password.")
      return
    }
    setLoading(true)
    const user: DemoUser = { email: email.trim(), password, role }
    saveUser(user)
    setAuthUser(user)
    // Redirect based on role
    router.push(role === "client" ? "/dashboard/client" : "/dashboard/developer")
  }

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-10 lg:px-6">
      <div className="mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow">
        <h1 className="text-balance text-2xl font-semibold">Create your account</h1>
        <p className="mt-2 text-sm text-muted-foreground">Choose your role to personalize your dashboard.</p>

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
              autoComplete="new-password"
            />
          </div>

          <div className="space-y-3">
            <Label>Role</Label>
            <RadioGroup
              value={role}
              onValueChange={(val) => setRole(val as DemoUser["role"])}
              className="grid grid-cols-2 gap-3"
            >
              <div className="flex items-center space-x-2 rounded-lg border border-white/10 bg-white/[0.02] p-3">
                <RadioGroupItem id="role-client" value="client" />
                <Label htmlFor="role-client" className="cursor-pointer">
                  Client
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-lg border border-white/10 bg-white/[0.02] p-3">
                <RadioGroupItem id="role-developer" value="developer" />
                <Label htmlFor="role-developer" className="cursor-pointer">
                  Developer
                </Label>
              </div>
            </RadioGroup>
          </div>

          {error ? <p className="text-sm text-red-500">{error}</p> : null}

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Creating account..." : "Sign up"}
          </Button>
        </form>

        <p className="mt-4 text-sm text-muted-foreground">
          Already have an account?{" "}
          <a href="/logIn" className="font-medium text-foreground underline underline-offset-4">
            Log in
          </a>
        </p>
      </div>
    </main>
  )
}
