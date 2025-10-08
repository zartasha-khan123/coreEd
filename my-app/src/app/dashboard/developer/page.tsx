"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { clearAuthUser, getAuthUser } from "@/services/demoUser"
import Link from "next/link"

export default function DeveloperDashboard() {
  const router = useRouter()
  const [ready, setReady] = useState(false)
  const [email, setEmail] = useState<string>("")

  useEffect(() => {
    const user = getAuthUser()
    if (!user) {
      router.replace("/logIn")
      return
    }
    if (user.role !== "developer") {
      router.replace(`/dashboard/${user.role}`)
      return
    }
    setEmail(user.email)
    setReady(true)
  }, [router])

  if (!ready) return null

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-10 lg:px-6">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <h1 className="text-balance text-2xl font-semibold">Developer Dashboard</h1>
        <p className="mt-2 text-muted-foreground">Signed in as {email}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <h2 className="text-lg font-semibold">Find Projects</h2>
            <p className="mt-1 text-sm text-muted-foreground">Apply to projects that match your skills.</p>
            <Link href={`/agents_details`} className="mt-3 inline-block underline underline-offset-4">
              Browse Projects
            </Link>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <h2 className="text-lg font-semibold">Build Agents</h2>
            <p className="mt-1 text-sm text-muted-foreground">Use platform tools and templates to ship faster.</p>
            <div className="mt-3 space-x-4">
              <Link href={`/agents_details`} className="underline underline-offset-4">
                Agent Templates
              </Link>
              <Link href="/#profile" className="underline underline-offset-4">
                Starter Kits
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Button
            variant="secondary"
            onClick={() => {
              clearAuthUser()
              router.replace("/logIn")
            }}
          >
            Log out
          </Button>
        </div>
      </div>
    </main>
  )
}
