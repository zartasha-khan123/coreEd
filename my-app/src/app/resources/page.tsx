"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DemoUser, getAuthUser } from "@/services/demoUser"

export default function ResourcesPage() {
  const router = useRouter()
  const [user, setUser] = useState<DemoUser | null>(null)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const u = getAuthUser()
    if (!u) {
      router.replace("/login")
      return
    }
    setUser(u)
    setChecked(true)
  }, [router])

  if (!checked) {
    return (
      <main className="min-h-[60vh] bg-background text-foreground flex items-center justify-center">
        <span className="text-sm text-muted-foreground">Loading...</span>
      </main>
    )
  }

  if (!user) return null

  return (
    <main className="bg-background text-foreground">
      <header className="border-b border-border bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-pretty text-3xl font-semibold tracking-tight">Resources</h1>
              <p className="mt-2 text-muted-foreground">
                Guides, policies, and templates to help you succeed in the marketplace.
              </p>
            </div>
            <Badge variant="secondary" className="uppercase">
              Guides
            </Badge>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Getting Started</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">New to the marketplace? Start here.</p>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" asChild>
                  <a href="/resources/getting-started">Overview</a>
                </Button>
                <Button size="sm" variant="secondary" asChild>
                  <a href={user.role === "client" ? "/resources/client-onboarding" : "/resources/developer-onboarding"}>
                    {user.role === "client" ? "Client Onboarding" : "Developer Onboarding"}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Templates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">Briefs, SOWs, and acceptance criteria to accelerate delivery.</p>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" asChild>
                  <a href="/resources/templates/project-brief">Project Brief</a>
                </Button>
                <Button size="sm" variant="secondary" asChild>
                  <a href="/resources/templates/sow">SOW</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Policies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">Trust, safety, and payment guidelines.</p>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" asChild>
                  <a href="/resources/fees">Fees & Payouts</a>
                </Button>
                <Button size="sm" variant="secondary" asChild>
                  <a href="/resources/safety">Trust & Safety</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Client Guides</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <a className="underline underline-offset-4" href="/resources/client/how-to-choose-developer">
                How to choose the right developer
              </a>
              <a className="underline underline-offset-4" href="/resources/client/scoping-agentic-projects">
                Scoping agentic projects
              </a>
              <a className="underline underline-offset-4" href="/resources/client/reviewing-deliverables">
                Reviewing deliverables
              </a>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Developer Guides</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2">
              <a className="underline underline-offset-4" href="/resources/developer/winning-proposals">
                Winning proposals
              </a>
              <a className="underline underline-offset-4" href="/resources/developer/agent-quality-checklist">
                Agent quality checklist
              </a>
              <a className="underline underline-offset-4" href="/resources/developer/hand-off-best-practices">
                Hand-off best practices
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-lg border border-border p-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm text-muted-foreground">Signed in as</p>
            <p className="font-medium">
              {user.email} · {user.role === "client" ? "Client" : "Developer"}
            </p>
          </div>
          <div className="flex gap-3">
            {user.role === "client" ? (
              <>
                <Button asChild>
                  <a href="/marketplace/post-job">Post a Job</a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="/marketplace/developers">Browse Developers</a>
                </Button>
              </>
            ) : (
              <>
                <Button asChild>
                  <a href="/marketplace/projects">Find Projects</a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="/marketplace/agents">Publish Agent</a>
                </Button>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
