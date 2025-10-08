"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DemoUser, getAuthUser } from "@/services/demoUser"

export default function AboutPage() {
  const router = useRouter()
  const [user, setUser] = useState<DemoUser | null>(null)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const u = getAuthUser()
    if (!u) {
      router.replace("/logIn")
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

  // Safety: if for some reason user is not set after check
  if (!user) return null

  return (
    <main className="bg-background text-foreground">
      <header className="border-b border-border bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-pretty text-3xl font-semibold tracking-tight">About Us</h1>
              <p className="mt-2 text-muted-foreground">
                Connecting ambitious clients with world-class developers and agentic AI solutions.
              </p>
            </div>
            <Badge variant="secondary" className="uppercase">
              Marketplace
            </Badge>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              We empower teams to build faster with trusted developers and production-ready AI agents. From ideation to
              launch, we streamline collaboration, delivery, and scaling.
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-lg">For Clients</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Hire vetted developers and deploy reliable AI agents for real business outcomes.
              </p>
              <div className="flex gap-2">
                <Button asChild>
                  <a href="/marketplace/post-job">Post a Job</a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="/#profile">Browse Developers</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-lg">For Developers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-muted-foreground">
                Showcase your skills, win projects, and ship agentic solutions that scale.
              </p>
              <div className="flex gap-2">
                <Button asChild>
                  <a href="/marketplace/projects">Find Projects</a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="/marketplace/agents">Publish Agent</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Why Choose Us</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              • Curated talent and agent listings
              <br />• Clear pricing and delivery milestones
              <br />• Secure collaboration and escrow-like flows
              <br />• Documentation, templates, and best practices to ship faster
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-lg">Trust & Safety</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              We prioritize transparent communication, code quality, and responsible AI usage. Reviews, verification,
              and dispute handling keep the marketplace healthy.
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-lg border border-border p-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm text-muted-foreground">You are signed in as</p>
            <p className="font-medium">
              {user.email} · {user.role === "client" ? "Client" : "Developer"}
            </p>
          </div>

          {user.role === "client" ? (
            <div className="flex gap-3">
              <Button asChild>
                <a href="/marketplace/post-job">Create Your Brief</a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="/resources/getting-started">Client Guide</a>
              </Button>
            </div>
          ) : (
            <div className="flex gap-3">
              <Button asChild>
                <a href="/marketplace/projects">Browse Projects</a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="/resources/getting-started">Developer Guide</a>
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
