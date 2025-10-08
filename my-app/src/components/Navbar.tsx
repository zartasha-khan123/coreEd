"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Menu, X, ArrowUpRight, Check} from "lucide-react"
import Link from "next/link"
import { User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"


type MenuKey = "platform" | "agents" | "solutions" | "resources" | "about" | null


export default function Navbar() {
  const [open, setOpen] = React.useState<MenuKey>(null)
  const [mobileOpen, setMobileOpen] = React.useState(false)

const [authorized, setAuthorized] = React.useState(false)
const [dropdownOpen, setDropdownOpen] = React.useState(false)
const [activeRole, setActiveRole] = React.useState<"client" | "developer" | null>(null)


  // Close menus on escape
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(null)
        setMobileOpen(false)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        "backdrop-blur supports-[backdrop-filter]:bg-transparent",
      )}
    >
      {/* gradient strip */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 h-[72px]"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.92) 0%, rgba(8,8,8,0.92) 60%, rgba(0,0,0,0.0) 100%)",
        }}
      />
      <div className="relative">
        <div className="mx-auto max-w-[1200px] px-4 lg:px-6">
          <div className="flex h-[72px] items-center justify-between">
            {/* Left: Logo */}
            <a href="#" className="flex items-center gap-2">
              <span
                aria-hidden
                className="inline-flex -skew-x-12 items-center justify-center rounded-md bg-white/90 px-1 py-1"
                style={{ boxShadow: "0 0 12px rgba(255,255,255,0.25) inset" }}
              >
                <span className="block h-[2px] w-3 -translate-y-[3px] bg-black/90" />
                <span className="mx-[3px] block h-[2px] w-3 bg-black/90" />
                <span className="block h-[2px] w-3 translate-y-[3px] bg-black/90" />
              </span>
                 <span
                className="text-[20px] font-semibold tracking-[-0.02em] text-purple-500"
                style={{ fontFamily: "'Darker Grotesque', sans-serif" }} 
              > CoreHive</span>
            </a>

            {/* Center: Capsule Nav */}
            <nav
              className={cn(
                "hidden md:flex items-center justify-center",
                "rounded-full bg-black/90 text-white",
                "px-3 py-2",
                "ring-1 ring-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]",
                 "font-family: 'Darker Grotesque', sans-serif;" 

              )}
              role="navigation"
              aria-label="Primary"
              onMouseLeave={() => setOpen(null)}
              style={{ fontFamily: "'Darker Grotesque', sans-serif" }} 

            >
              <ul className="flex items-center gap-1">
                {[
                  { key: "platform", label: "Platform" , href: "/"},
                  { key: "agents", label: "AI Agents", href: "/#agents" },
                  { key: "solutions", label: "Solutions" , href: "/#profile"},
                  { key: "about", label: "About" ,href:"/about"},
                ].map((item) => (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      onMouseEnter={() => setOpen(item.key as MenuKey)}
                      onFocus={() => setOpen(item.key as MenuKey)}
                      onClick={(e) => e.stopPropagation()} // Prevent closing when clicked
                      className={cn(
                        "relative rounded-full px-6 py-2 text-[18px] font-medium tracking-[-0.01em] whitespace-nowrap",
                        "transition-colors",
                        open === (item.key as MenuKey)
                          ? "bg-white/[0.08] text-white"
                          : "text-white/90 hover:text-white hover:bg-white/[0.06]",  )}
                          style={{ fontFamily: "'Darker Grotesque', sans-serif"}} // Apply font here for the dropdown items as well

                    
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right: Actions */}
            <div className="hidden items-center gap-3 md:flex">
              <a
                href="/logIn"
                className={cn(
                  "rounded-full border px-4 py-1.5 text-[14px] font-medium",
                  "border-white/20 text-white/90 hover:text-white bg-transparent",

                )}
                style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
              >
                Log in
              </a>
{/* Dashboard with user icon & dropdown (professional theme) */}
<div className="relative">
  <button
    onClick={() => {
      if (!authorized) {
        // mock login flow
        setAuthorized(true);
        return;
      }
      setDropdownOpen((v) => !v);
    }}
    className="flex items-center gap-2 rounded-full px-[14px] py-[10px] text-[14px] font-semibold text-white transition-all hover:brightness-125 hover:scale-[1.03] active:scale-[0.98]"
    style={{
      fontFamily: "'Darker Grotesque', sans-serif",
      background:
        "linear-gradient(90deg, #a855f7 0%, #9333ea 35%, #7e22ce 100%)",
      boxShadow:
        "0 10px 28px rgba(168, 85, 247, 0.55), 0 0 0 1px rgba(255,255,255,0.10) inset, 0 0 20px rgba(126, 34, 206, 0.35)",
    }}
  >
    Dashboard

    {/* Animated glowing user icon */}
    <motion.span
      className="relative flex items-center justify-center w-8 h-8 rounded-md transition-all duration-300"
      animate={{
        background:
          !authorized
            ? "linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))"
            : activeRole === "client"
            ? "linear-gradient(145deg, rgba(155,92,251,0.25), rgba(155,92,251,0.08))"
            : "linear-gradient(145deg, rgba(56,189,248,0.25), rgba(56,189,248,0.08))",
        boxShadow:
          authorized && activeRole === "client"
            ? "0 0 16px rgba(155,92,251,0.6), 0 0 0 1px rgba(155,92,251,0.3) inset"
            : authorized && activeRole === "developer"
            ? "0 0 16px rgba(95,49,138,0.6), 0 0 0 1px rgba(56,189,248,0.3) inset"
            : "0 0 0 rgba(0,0,0,0)",
        scale: authorized ? 1.07 : 1,
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: authorized
          ? "0 0 18px rgba(255,255,255,0.3)"
          : "0 0 12px rgba(255,255,255,0.15)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <User
        className={`w-5 h-5 transition-all duration-300 ${
          authorized
            ? "text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.75)]"
            : "text-gray-800"
        }`}
        style={{
          filter: authorized
            ? "drop-shadow(0 0 8px rgba(255,255,255,0.8))"
            : "drop-shadow(0 0 0 rgba(0,0,0,0))",
        }}
      />
    </motion.span>
  </button>

  {/* Dropdown menu */}
  <AnimatePresence>
    {dropdownOpen && (
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="absolute right-0 mt-2 w-44 rounded-xl bg-[#111111] text-white ring-1 ring-white/10 shadow-2xl overflow-hidden"
        style={{ fontFamily: "'Darker Grotesque', sans-serif" }}
      >
        <Link href="/signUp">
          <button
            className="block w-full px-4 py-2 text-left text-[15px] hover:bg-white/[0.08]"
            onClick={() => {
              setActiveRole("client");
              setDropdownOpen(false);
            }}
          >
            Client
          </button>
        </Link>
        <Link href="/signUp">
          <button
            className="block w-full px-4 py-2 text-left text-[15px] hover:bg-white/[0.08]"
            onClick={() => {
              setActiveRole("developer");
              setDropdownOpen(false);
            }}
          >
            Developer
          </button>
        </Link>
      </motion.div>
    )}
  </AnimatePresence>
</div>
</div>
  
            {/* Mobile: Hamburger */}
            <button
              className="inline-flex items-center justify-center rounded-full p-2 text-white md:hidden"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Mega Menus */}
        <MegaMenus open={open} />
      </div>

      {/* Mobile Drawer */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn("absolute left-1/2 z-40 mt-3 hidden w-[880px] -translate-x-1/2 md:block")}>
      <div
        className={cn(
          "h-[420px] rounded-[24px] bg-[#0B0B0B] p-6 text-white",
          "border border-[rgba(255,255,255,0.06)] shadow-[0_20px_80px_rgba(0,0,0,0.6)] backdrop-blur",

        )}
        style={{ fontFamily: "'Darker Grotesque', sans-serif" }}

      >
        {children}
      </div>
    </div>
  )
}

function IconBadge({ children }: { children?: React.ReactNode }) {
  // rounded-square emblem per screenshots
  return (
    <span className="mr-[12px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[0.06] ring-1 ring-white/10">
      {children ?? <span className="block h-2 w-2 rounded-full bg-white/75" />}
    </span>
  )
}

function RightList({
  title,
  items,
   className = "",
}: {
  title?: string
  items: Array<{ label: string; href?: string; badge?: string; external?: boolean }>
  className?: string
}) {
  return (
    <div className="w-[280px]">
      {title && <div className="mb-3 text-[15px] font-semibold text-white/80">{title}</div>}
      <ul className="space-y-[14px]">
        {items.map((it) => (
          <li key={it.label}>
             {it.href ? (
               <Link
                href={it.href}
                className={`group flex items-center rounded-xl p-2 pr-3 text-[18px] font-medium text-white/90 hover:bg-white/[0.06] hover:text-white ${className}`}
              >
              <Check className="mr-2 h-[14px] w-[14px]"/>
             {it.label}
              {it.badge && (
                <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-white/90 group-hover:text-white">
                  {it.badge}
                </span>
              )}
              {it.external && (
                <ArrowUpRight className="ml-1 h-4 w-4 opacity-60 transition-opacity group-hover:opacity-100" />
              )}
            </Link>  ) : (
               <div className={`group flex items-center rounded-xl p-2 pr-3 text-[18px] font-medium text-white/90 ${className}`}>
                <Check className="mr-2 h-[14px] w-[14px]" />
                {it.label}
              </div>)}
          </li>
        ))}
      </ul>
    </div>
  )
}

function CTA({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="mt-5 inline-flex rounded-full px-4 py-2 text-[14px] font-semibold text-white"
      style={{
        background: "linear-gradient(90deg, #373737 0%, #2F2F2F 100%)",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1), 0 6px 18px rgba(0,0,0,0.5)",
        
      }}
    >
      {children}
    </button>
  )
}

function MegaMenus({ open }: { open: MenuKey }) {
  return (
    <>
      {open === "platform" && (
        <Panel>
          <div className="grid h-full grid-cols-[minmax(0,1fr)_280px] gap-6">
            <div className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
              <img
                src="/img1.avif"
                alt="Platform preview"
                className="h-[340px] w-full rounded-xl object-cover object-center"
              />
            </div>
            <div className="flex items-start">
              <RightList
                items={[
                  { label: "Agentic Platform",  href: "/"},
                  { label: "Agentic Workflows", href: "/platform" },
                  { label: "Database, Memory & RAG", href: "/platform" },
                  { label: "Large Language Models", href: "/platform" },
                  { label: "Security & Deployment" , href: "/platform"},
                  { label: "Integrations", href: "/platform" },
                ]}
                
              />
            </div>
          </div>
        </Panel>
      )}

      {open === "agents" && (
        <Panel>
          <div className="grid h-full grid-cols-[minmax(0,1fr)_280px] gap-6">
            <div className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
              <img
                src="/bg1.jpg"
                alt="AI Agents preview"
                className="h-[340px] w-full rounded-xl object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-between">
              <RightList
                title="AI Agent Teams"
                items={[
                  { label: "Finance & Accounting" },
                  { label: "Customer Service" },
                  { label: "HR & Recruitment" },
                ]}
              />
              <div>
               <Link href="/#agents"> <CTA>See all agents</CTA></Link>
              </div>
            </div>
          </div>
        </Panel>
      )}

      {open === "solutions" && (
        <Panel>
          <div className="grid h-full grid-cols-[minmax(0,1fr)_280px_280px] gap-6">
            <div className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
              <img
                src="/bg.jpg"
                alt="Solutions preview"
                className="h-[340px] w-full rounded-xl object-cover object-center"
              />
            </div>
            <div className="flex">
              <RightList
                title="By Company Size"
                items={[{ label: "Startups" }, { label: "Midsized" }, { label: "Enterprise" }]}
              />
            </div>
            <div className="flex">
                <div>
              <RightList
                title="By Industry"
                items={[
                  { label: "BPO" },
                  { label: "Customer Service" },
                  { label: "Financial Services" },
                  { label: "Staffing & RPO" },
                ]}
              />
              
            
            <div className="mt-4">
              <CTA>See all industries</CTA>
            </div>
          </div>
          </div></div>
        </Panel>
      )}

      {open === "about" && (
        <Panel>
          <div className="grid grid-cols-[1fr_280px] gap-6">
            <div className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
              <img
                src="/about.jpg"
                alt="About preview"
                className="h-[300px] w-full rounded-xl object-cover object-center"
              />
            </div>
            <div className="flex items-start">
              <RightList
               className="text-[14px]"
                items={[
                  { label: "About Us" },
                  { label: "Career" },
                  { label: "Trust Center", external: true },
                  { label: "Contact" },
                  { label: "Partnerships" },
                  { label: "Workshops" },
                  { label: "Demos" },
                ]}
              />
            </div>
          </div>
        </Panel>
      )}
    </>
  )
}

function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  return (
    <div className={cn("fixed inset-0 z-50 md:hidden", open ? "pointer-events-auto" : "pointer-events-none")}>
      {/* overlay */}
      <div
        className={cn("absolute inset-0 bg-black/60 transition-opacity", open ? "opacity-100" : "opacity-0")}
        onClick={onClose}
      />
      {/* sheet */}
      <div
        className={cn(
          "absolute inset-x-0 top-0 origin-top rounded-b-3xl border-b border-white/10 bg-black/95 p-4 text-white shadow-2xl transition-transform",
          open ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="mx-auto max-w-[680px]">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[15px] font-semibold text-white/80">Menu</span>
            <button className="rounded-full p-2 hover:bg-white/[0.06]" onClick={onClose} aria-label="Close">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-4">
            {/* Each section */}
            <MobileSection
              title="Platform"
              img="/img1.avif"
              items={[
    { label: "Agentic Platform", href: "/" },
    { label: "Agentic Workflows", href: "/" },
    { label: "Database, Memory & RAG", href: "/" },
    { label: "Large Language Models", href: "/" },
    { label: "Security & Deployment", href: "/" },
    { label: "Integrations", href: "/" },
              ]}
            />
            <MobileSection
              title="AI Agents"
              img="/bg1.jpg"
              items={[{label:"Finance & Accounting",href:"/#agents"}, {label:"Customer Service",href:"/#agents"}, {label:"HR & Recruitment",href:"/#agents"}]}
              cta="See all agents"
            />
            <MobileSection
              title="Solutions"
              img="/bg.jpg"
              items={[
                {label:"Startups",href:"/#profile"},
                {label:"Midsized",href:"/#profile"},
                {label:"Enterprise",href:"/#profile"},
                {label:"BPO",href:"/#profile"},
                {label:"Customer Service",href:"/#profile"},
                {label:"Financial Services",href:"/#profile"},
                {label:"Staffing & RPO",href:"/#profile"},
              ]}
             cta="See all industries"
            />
           
            <MobileSection
              title="About"
              img="/about.jpg"
              items={[{label:"About Us",href:"/about"}, {label:"Career",href:"/about"}, {label:"Trust Center",href:"/about"}, {label:"Contact",href:"/about"}, {label:"Partnerships",href:"/about"},{label:"Workshops",href:"/about"},{label:"Demos",href:"/about"}]}
            />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <a href="/logIn" className="rounded-full border border-white/20 px-4 py-2 text-[14px] font-medium text-white/90">
              Log in
            </a>
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
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileSection({
  title,
  img,
  items,
  cta,
}: {
  title: string
  img: string
  items:  Array<{ label: string; href: string }>
  cta?: string
}) {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03]">
      <button
        className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-[16px] font-semibold"
        onClick={() => setOpen((v) => !v)}
      >
        <span>{title}</span>
        <span className={cn("transition-transform", open && "rotate-180")}>⌄</span>
      </button>
      {open && (
        <div className="space-y-3 px-4 pb-4">
          <div className="rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
            <img
              src={img || "/placeholder.svg"}
              alt={`${title} preview`}
              className="h-[160px] w-full rounded-lg object-cover object-center"
            />
          </div>
          <ul className="grid grid-cols-1 gap-2">
            {items.map((it) => (
              <li key={it.label}>
               <Link
          href={it.href}
                  className="flex items-center rounded-xl p-2 text-[15px] text-white/90 hover:bg-white/[0.06]"
                >
                  <IconBadge />
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
          {cta && (
            <button
              className="mt-1 inline-flex rounded-full px-4 py-2 text-[14px] font-semibold text-white"
              style={{
                background: "linear-gradient(90deg, #373737 0%, #2F2F2F 100%)",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1), 0 6px 18px rgba(0,0,0,0.5)",
              }}
            >
              {cta}
            </button>
          )}
        </div>
      )}
    </div>
  )
} 

