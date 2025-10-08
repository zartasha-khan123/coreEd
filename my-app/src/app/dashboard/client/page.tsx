"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { clearAuthUser, getAuthUser } from "@/services/demoUser"
import Link from "next/link"

export default function ClientDashboard() {
  const router = useRouter()
  const [ready, setReady] = useState(false)
  const [email, setEmail] = useState<string>("")

  useEffect(() => {
    const user = getAuthUser()
    if (!user) {
      router.replace("/login")
      return
    }
    if (user.role !== "client") {
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
        <h1 className="text-balance text-2xl font-semibold">Client Dashboard</h1>
        <p className="mt-2 text-muted-foreground">Signed in as {email}</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <h2 className="text-lg font-semibold">Post a Job</h2>
            <p className="mt-1 text-sm text-muted-foreground">Find top AI agents and developers for your project.</p>
            <Link href="/marketplace/post-job" className="mt-3 inline-block underline underline-offset-4">
              Go to Post a Job
            </Link>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
            <h2 className="text-lg font-semibold">Browse Talent</h2>
            <p className="mt-1 text-sm text-muted-foreground">Explore vetted agents and developers.</p>
            <div className="mt-3 space-x-4">
              <Link href="/#agents" className="underline underline-offset-4">
                Agents
              </Link>
              <Link href="/#profile" className="underline underline-offset-4">
                Developers
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
