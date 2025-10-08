"use client"

import { cn } from "@/lib/utils"

export default function Footer() {
  return (
    <footer
      className={cn("relative mt-16 border-t border-white/10 text-foreground", "bg-[rgba(0,0,0,0.92)]")}
      aria-labelledby="footer-heading"
    >
      {/* subtle gradient strip to mirror header */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[72px] left-0 right-0 h-[72px]"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(8,8,8,0.92) 60%, rgba(0,0,0,0.92) 50%)",
        }}
      />
      <div className="mx-auto max-w-[1200px] px-4 py-12 lg:px-6">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-stretch">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="/" className="flex items-center gap-2">
              <span
                aria-hidden
                className="inline-flex -skew-x-12 items-center justify-center rounded-md bg-white/90 px-1 py-1"
                style={{ boxShadow: "0 0 12px rgba(255,255,255,0.25) inset" }}
              >
                <span className="block h-[2px] w-3 -translate-y-[3px] bg-black/90" />
                <span className="mx-[3px] block h-[2px] w-3 bg-black/90" />
                <span className="block h-[2px] w-3 translate-y-[3px] bg-black/90" />
              </span>
              <span className="text-[20px] font-semibold tracking-[-0.02em] text-foreground">CoreHive</span>
            </a>
            <p className="mt-4 text-sm text-[color:oklch(0.708_0_0)]">
              Marketplace for vetted AI Agents and Developers. Hire talent, post jobs, and launch projects with agentic
              workflows.
            </p>
            <div className="mt-4 flex gap-2">
              <a
                href="/signUp"
                className="rounded-full px-[14px] py-[10px] text-[14px] font-semibold text-white"
                style={{
                  background: "linear-gradient(90deg, #a855f7 0%, #9333ea 35%, #7e22ce 100%)",
                  boxShadow:
                    "0 10px 28px rgba(168, 85, 247, 0.55), 0 0 0 1px rgba(255,255,255,0.10) inset, 0 0 20px rgba(126, 34, 206, 0.35)",
                }}
              >
                DashBaord
              </a>
              <a
                href="/contact"
                className="rounded-full px-[14px] py-[10px] text-[14px] font-semibold text-foreground"
                style={{
                  background: "linear-gradient(90deg, #373737 0%, #2F2F2F 100%)",
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1), 0 6px 18px rgba(0,0,0,0.5)",
                }}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Link columns */}
          <nav aria-label="Footer" className="grid w-full grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            <FooterGroup
              title="Marketplace"
              links={[
                { label: "Hire Agents", href: "/marketplace/agents" },
                { label: "Hire Developers", href: "/marketplace/developers" },
                { label: "Browse Projects", href: "/marketplace/projects" },
                { label: "Post a Job", href: "/marketplace/post-job" },
              ]}
            />
            <FooterGroup
              title="For Agents"
              links={[
                { label: "Agent Templates", href: "/agents/templates" },
                { label: "Agent Profiles", href: "/agents" },
                { label: "Pricing", href: "/pricing" },
                { label: "Docs", href: "/docs" },
              ]}
            />
            <FooterGroup
              title="For Developers"
              links={[
                { label: "Developer Tools", href: "/developers/tools" },
                { label: "Starter Kits", href: "/developers/starters" },
                { label: "Integrations", href: "/platform/integrations" },
                { label: "Guides", href: "/developers/guides" },
              ]}
            />
            <FooterGroup
              title="Platform"
              links={[
                { label: "Agentic Platform", href: "/platform/agentic-platform" },
                { label: "Workflows", href: "/platform/agentic-workflows" },
                { label: "Data & RAG", href: "/platform/data-memory-rag" },
                { label: "Security", href: "/platform/security-deployment" },
              ]}
            />
            <FooterGroup
              title="Company"
              links={[
                { label: "About", href: "/about" },
                { label: "Careers", href: "/about/careers" },
                { label: "Customers", href: "/resources/customers" },
                { label: "Contact", href: "/contact" },
              ]}
            />
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-[color:oklch(0.708_0_0)] md:flex-row">
          <p>© {new Date().getFullYear()} CoreEd, Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/trust" className="hover:text-foreground">
              Trust Center
            </a>
            <a href="/status" className="hover:text-foreground">
              Status
            </a>
            <a href="/legal/privacy" className="hover:text-foreground">
              Privacy
            </a>
            <a href="/legal/terms" className="hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterGroup({
  title,
  links,
}: {
  title: string
  links: Array<{ label: string; href: string }>
}) {
  return (
    <div>
      <h3 className="mb-3 text-[15px] font-semibold text-foreground/80">{title}</h3>
      <ul role="list" className="space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-[15px] text-foreground/80 transition-colors hover:text-foreground">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
