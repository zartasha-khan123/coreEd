//first one light wale
// "use client"

// import * as React from "react"
// import { cn } from "@/lib/utils"

// type MenuKey = "Platform" | "AI Agents" | "Solutions" | "Resources" | "About"

// const NAV_ITEMS: { key: MenuKey; label: MenuKey; previewSrc: string }[] = [
//   { key: "Platform", label: "Platform", previewSrc: "/img1.avif"},
//   { key: "AI Agents", label: "AI Agents", previewSrc: "/img1.avif" },
//   { key: "Solutions", label: "Solutions", previewSrc: "/img1.avif" },
//   { key: "Resources", label: "Resources", previewSrc: "/img1.avif" },
//   { key: "About", label: "About", previewSrc: "/img1.avif" },
// ]

// // Simple rounded square icon wrapper used across chips
// function IconBox({ children }: { children: React.ReactNode }) {
//   return (
//     <span
//       className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[color:oklch(0.97_0_0)] text-[color:oklch(0.205_0_0)] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)]"
//       aria-hidden="true"
//     >
//       {children}
//     </span>
//   )
// }

// function ChevronDown({ className }: { className?: string }) {
//   return (
//     <svg className={className} width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
//       <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   )
// }

// // Brand mark that mimics Beam's slanted lines
// function BeamMark({ className }: { className?: string }) {
//   return (
//     <svg className={className} width="28" height="20" viewBox="0 0 28 20" fill="none" aria-hidden="true">
//       <rect x="0.5" y="6" width="8" height="3" rx="1.5" transform="skewX(-20)" fill="currentColor" />
//       <rect x="9.5" y="6" width="8" height="3" rx="1.5" transform="skewX(-20)" fill="currentColor" />
//       <rect x="18.5" y="6" width="8" height="3" rx="1.5" transform="skewX(-20)" fill="currentColor" />
//     </svg>
//   )
// }

// export function Navbar({
//   overlay = true,
// }: {
//   // If true, nav starts transparent and becomes solid on scroll
//   overlay?: boolean
// }) {
//   const [open, setOpen] = React.useState<MenuKey | null>(null)
//   const [mobileOpen, setMobileOpen] = React.useState(false)
//   const [solid, setSolid] = React.useState(!overlay)
//   const panelsRef = React.useRef<Record<MenuKey, HTMLDivElement | null>>({
//     Platform: null,
//     "AI Agents": null,
//     Solutions: null,
//     Resources: null,
//     About: null,
//   })

//   React.useEffect(() => {
//     if (!overlay) return
//     const onScroll = () => {
//       setSolid(window.scrollY > 8)
//     }
//     onScroll()
//     window.addEventListener("scroll", onScroll, { passive: true })
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [overlay])

//   React.useEffect(() => {
//     const handleEsc = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         setOpen(null)
//         setMobileOpen(false)
//       }
//     }
//     window.addEventListener("keydown", handleEsc)
//     return () => window.removeEventListener("keydown", handleEsc)
//   }, [])

//   // Close desktop menus when clicking outside
//   React.useEffect(() => {
//     const onDocClick = (e: MouseEvent) => {
//       const target = e.target as Node
//       const isInside = Object.values(panelsRef.current).some((el) => el && el.contains(target))
//       if (!isInside) setOpen(null)
//     }
//     document.addEventListener("click", onDocClick)
//     return () => document.removeEventListener("click", onDocClick)
//   }, [])

//   return (
//     <header
//     //   className={cn(
//     //     "fixed inset-x-0 top-0 z-50 transition-colors",
//     //     solid ? "bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:backdrop-blur" : "bg-transparent",
//     //   )}
//     className={cn(
//     "fixed inset-x-0 top-0 z-50 transition-colors",
//     solid
//       ? "bg-white/90 shadow-sm backdrop-blur-md"
//       : "bg-gradient-to-r from-white/20 via-white/10 to-transparent backdrop-blur-lg"
//   )}
//       role="banner"
//     >
//       <nav aria-label="Primary" className="mx-auto flex h-16 max-w-screen-2xl items-center gap-4 px-4 md:h-20 md:px-8">
//         {/* Left: Brand */}
//         <a href="#" aria-label="Beam" className="flex items-center gap-2 text-[color:oklch(0.205_0_0)]">
//           <BeamMark className="text-[color:oklch(0.205_0_0)]" />
//           <span className="text-lg font-semibold tracking-tight">beam</span>
//         </a>

//         {/* Mobile: hamburger */}
//         <button
//           type="button"
//           className="ml-auto inline-flex items-center justify-center rounded-full border border-[color:oklch(0.922_0_0)] p-2 text-[color:oklch(0.205_0_0)] hover:bg-[color:oklch(0.97_0_0)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:oklch(0.708_0_0)] lg:hidden"
//           aria-label="Open menu"
//           aria-controls="mobile-menu"
//           aria-expanded={mobileOpen}
//           onClick={() => setMobileOpen((v) => !v)}
//         >
//           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
//             <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
//           </svg>
//         </button>

//         {/* Center: primary items */}
//         <ul className="hidden flex-1 items-center justify-center gap-2 lg:flex" role="menubar">
//           {NAV_ITEMS.map((item) => {
//             const active = open === item.key
//             return (
//               <li key={item.key} className="relative" onMouseLeave={() => setOpen(null)}>
//                 <button
//                   type="button"
//                   className={cn(
//                     "group inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:oklch(0.708_0_0)]",
//                     active
//                       ? "bg-[color:oklch(0.97_0_0)] text-[color:oklch(0.205_0_0)]"
//                       : "text-[color:oklch(0.205_0_0)] hover:bg-[color:oklch(0.97_0_0)]",
//                   )}
//                   aria-haspopup="menu"
//                   aria-expanded={active}
//                   onMouseEnter={() => setOpen(item.key)}
//                   onFocus={() => setOpen(item.key)}
//                   onClick={() => setOpen((k) => (k === item.key ? null : item.key))}
//                 >
//                   {item.label}
//                   <ChevronDown className={cn("transition-transform", active && "rotate-180")} />
//                 </button>

//                 {/* Desktop mega panel */}
//                 {/* <div
//                   ref={(el) => void (panelsRef.current[item.key] = el)}
//                   role="menu"
//                   aria-label={`${item.label} menu`}
//                   className={cn(
//                     "pointer-events-none absolute left-1/2 top-full z-50 mt-4 w-[min(92vw,980px)] -translate-x-1/2 opacity-0 transition-opacity",
//                     active && "pointer-events-auto opacity-100",
//                   )}
//                   onMouseEnter={() => setOpen(item.key)}
//                 >
//                   <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5"> */}
//                   <div
//   ref={(el) => void (panelsRef.current[item.key] = el)}
//   role="menu"
//   aria-label={`${item.label} menu`}
//   className={cn(
//     // BEFORE:
//     // "pointer-events-none absolute left-1/2 top-full z-50 mt-4 w-[min(92vw,980px)] -translate-x-1/2 opacity-0 transition-opacity",
//     // AFTER: make it fixed so it centers to viewport under the navbar height
//     "pointer-events-none fixed left-1/2 z-50 w-[min(92vw,980px)] -translate-x-1/2 opacity-0 transition-opacity",
//     // navbar heights: 64px (h-16) on mobile, 80px (md:h-20) on md+.
//     "top-[64px] md:top-[80px]",
//     active && "pointer-events-auto opacity-100"
//   )}
//   onMouseEnter={() => setOpen(item.key)}
// >
//   <div className="mt-3 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5">
//                     <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
//                       {/* Preview */}
//                       <div className="md:col-span-5">
//                         <div className="overflow-hidden rounded-xl border border-[color:oklch(0.922_0_0)]">
//                           <img
//                             src={item.previewSrc || "/placeholder.svg"}
//                             alt={`${item.label} preview`}
//                             className="h-56 w-full object-cover"
//                           />
//                         </div>
//                       </div>

//                       {/* Right content varies by tab */}
//                       <div className="md:col-span-7">
//                         {item.key === "Platform" && <PlatformPanel />}
//                         {item.key === "AI Agents" && <AgentsPanel />}
//                         {item.key === "Solutions" && <SolutionsPanel />}
//                         {item.key === "Resources" && <ResourcesPanel />}
//                         {item.key === "About" && <AboutPanel />}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </li>
//             )
//           })}
//         </ul>

//         {/* Right actions */}
//         <div className="ml-auto hidden items-center gap-3 lg:flex">
//           <a
//             href="#"
//             className="inline-flex items-center rounded-full border border-[color:oklch(0.922_0_0)] bg-white px-4 py-2 text-sm font-medium text-[color:oklch(0.205_0_0)] shadow-sm transition-colors hover:bg-[color:oklch(0.97_0_0)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:oklch(0.708_0_0)]"
//           >
//             Log in
//           </a>
//           <a
//             href="#"
//             className="inline-flex items-center rounded-full bg-[#0B5FFF] px-4 py-2 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#0A53E8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#88B4FF]"
//           >
//             Request Access
//           </a>
//         </div>
//       </nav>

//       {/* Mobile menu panel */}
//       <div id="mobile-menu" className={cn("lg:hidden", mobileOpen ? "block" : "hidden")}>
//         <div className="border-t border-[color:oklch(0.922_0_0)] bg-white/95 backdrop-blur">
//           <div className="mx-auto max-w-screen-2xl px-4 py-4 md:px-8">
//             <ul className="space-y-2">
//               {NAV_ITEMS.map((item) => (
//                 <li key={item.key} className="rounded-xl border border-[color:oklch(0.922_0_0)]">
//                   <button
//                     type="button"
//                     className="flex w-full items-center justify-between px-4 py-3 text-left text-[color:oklch(0.205_0_0)]"
//                     aria-controls={`section-${item.key}`}
//                     aria-expanded={open === item.key}
//                     onClick={() => setOpen((k) => (k === item.key ? null : item.key))}
//                   >
//                     <span className="text-sm font-medium">{item.label}</span>
//                     <ChevronDown className={cn("transition-transform", open === item.key && "rotate-180")} />
//                   </button>
//                   <div
//                     id={`section-${item.key}`}
//                     role="region"
//                     className={cn("grid grid-cols-1 gap-4 px-4 pb-4", open === item.key ? "block" : "hidden")}
//                   >
//                     <img
//                       src={item.previewSrc || "/placeholder.svg"}
//                       alt={`${item.label} preview`}
//                       className="h-40 w-full rounded-lg border border-[color:oklch(0.922_0_0)] object-cover"
//                     />
//                     {/* Reuse desktop content pieces for mobile */}
//                     {item.key === "Platform" && <PlatformPanel compact />}
//                     {item.key === "AI Agents" && <AgentsPanel compact />}
//                     {item.key === "Solutions" && <SolutionsPanel compact />}
//                     {item.key === "Resources" && <ResourcesPanel compact />}
//                     {item.key === "About" && <AboutPanel compact />}
//                   </div>
//                 </li>
//               ))}
//             </ul>

//             <div className="mt-4 flex items-center gap-3">
//               <a
//                 href="#"
//                 className="inline-flex flex-1 items-center justify-center rounded-full border border-[color:oklch(0.922_0_0)] bg-white px-4 py-2 text-sm font-medium text-[color:oklch(0.205_0_0)] hover:bg-[color:oklch(0.97_0_0)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:oklch(0.708_0_0)]"
//               >
//                 Log in
//               </a>
//               <a
//                 href="#"
//                 className="inline-flex flex-1 items-center justify-center rounded-full bg-[#0B5FFF] px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#0A53E8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#88B4FF]"
//               >
//                 Request Access
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// /* --- Panels (desktop + reused in mobile) --- */

// function PlatformPanel({ compact = false }: { compact?: boolean }) {
//   const Item = ({
//     label,
//     desc,
//     icon,
//   }: {
//     label: string
//     desc: string
//     icon: React.ReactNode
//   }) => (
//     <a
//       href="#"
//       className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-[color:oklch(0.97_0_0)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:oklch(0.708_0_0)]"
//     >
//       <IconBox>{icon}</IconBox>
//       <div>
//         <div className="text-sm font-semibold text-[color:oklch(0.205_0_0)]">{label}</div>
//         {!compact && <p className="text-sm text-[color:oklch(0.556_0_0)]">{desc}</p>}
//       </div>
//     </a>
//   )
//   return (
//     <div className={cn("grid gap-2", compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")}>
//       <Item label="Agentic Platform" desc="Build, evaluate and deploy agents." icon={<SquareDots />} />
//       <Item label="Agentic Workflows" desc="Orchestrate steps and tools." icon={<Layers />} />
//       <Item label="Database, Memory & RAG" desc="Ground agents in your data." icon={<Database />} />
//       <Item label="Large Language Models" desc="Use top-tier reasoning models." icon={<Spark />} />
//       <Item label="Security & Deployment" desc="Ship safely at scale." icon={<Lock />} />
//       <Item label="Integrations" desc="Connect CRMs, data sources, APIs." icon={<Puzzle />} />
//     </div>
//   )
// }

// function AgentsPanel({ compact = false }: { compact?: boolean }) {
//   const Chip = ({ text, icon }: { text: string; icon: React.ReactNode }) => (
//     <a
//       href="#"
//       className="inline-flex items-center gap-2 rounded-full border border-[color:oklch(0.922_0_0)] bg-[color:oklch(0.985_0_0)] px-3 py-2 text-sm font-medium text-[color:oklch(0.205_0_0)] shadow-sm hover:bg-[color:oklch(0.97_0_0)]"
//     >
//       <IconBox>{icon}</IconBox>
//       {text}
//     </a>
//   )
//   return (
//     <div className="space-y-3">
//       <div className="text-sm font-semibold text-[color:oklch(0.205_0_0)]">AI Agent Teams</div>
//       <div className="flex flex-wrap gap-3">
//         <Chip text="Finance & Accounting" icon={<Coin />} />
//         <Chip text="Customer Service" icon={<Headset />} />
//         <Chip text="HR & Recruitment" icon={<UserGroup />} />
//       </div>
//       {!compact && (
//         <div>
//           <a
//             href="#"
//             className="mt-2 inline-flex items-center justify-center rounded-full bg-[color:oklch(0.922_0_0)] px-4 py-2 text-sm font-semibold text-[color:oklch(0.205_0_0)] shadow-sm hover:bg-[color:oklch(0.9_0_0)]"
//           >
//             See all agents
//           </a>
//         </div>
//       )}
//     </div>
//   )
// }

// function SolutionsPanel({ compact = false }: { compact?: boolean }) {
//   const Chip = ({ text, icon }: { text: string; icon: React.ReactNode }) => (
//     <a
//       href="#"
//       className="inline-flex items-center gap-2 rounded-full border border-[color:oklch(0.922_0_0)] bg-[color:oklch(0.985_0_0)] px-3 py-2 text-sm font-medium text-[color:oklch(0.205_0_0)] shadow-sm hover:bg-[color:oklch(0.97_0_0)]"
//     >
//       <IconBox>{icon}</IconBox>
//       {text}
//     </a>
//   )
//   return (
//     <div className={cn("grid gap-4", compact ? "grid-cols-1" : "grid-cols-2")}>
//       <div>
//         <div className="mb-2 text-sm font-semibold text-[color:oklch(0.205_0_0)]">By Company Size</div>
//         <div className="flex flex-wrap gap-3">
//           <Chip text="Startups" icon={<Rocket />} />
//           <Chip text="Midsized" icon={<Cube />} />
//           <Chip text="Enterprise" icon={<Building />} />
//         </div>
//       </div>
//       <div>
//         <div className="mb-2 text-sm font-semibold text-[color:oklch(0.205_0_0)]">By Industry</div>
//         <div className="flex flex-wrap gap-3">
//           <Chip text="BPO" icon={<Briefcase />} />
//           <Chip text="Customer Service" icon={<Headset />} />
//           <Chip text="Financial Services" icon={<Coin />} />
//           <Chip text="Staffing & RPO" icon={<UserGroup />} />
//         </div>
//       </div>
//       {!compact && (
//         <div className="md:col-span-2">
//           <a
//             href="#"
//             className="inline-flex items-center justify-center rounded-full bg-[color:oklch(0.922_0_0)] px-5 py-2 text-sm font-semibold text-[color:oklch(0.205_0_0)] shadow-sm hover:bg-[color:oklch(0.9_0_0)]"
//           >
//             See all industries
//           </a>
//         </div>
//       )}
//     </div>
//   )
// }

// function ResourcesPanel({ compact = false }: { compact?: boolean }) {
//   const LinkRow = ({
//     text,
//     badge,
//   }: {
//     text: string
//     badge?: string
//   }) => (
//     <a
//       href="#"
//       className="flex items-center justify-between rounded-xl p-3 text-sm transition-colors hover:bg-[color:oklch(0.97_0_0)]"
//     >
//       <span className="font-medium text-[color:oklch(0.205_0_0)]">{text}</span>
//       {badge && (
//         <span className="rounded-full bg-[color:oklch(0.922_0_0)] px-2 py-1 text-xs font-semibold text-[color:oklch(0.556_0_0)]">
//           {badge}
//         </span>
//       )}
//     </a>
//   )
//   return (
//     <div className="grid grid-cols-1 gap-1">
//       <LinkRow text="Webinars" badge="NEW DATES" />
//       <LinkRow text="Beam Academy" />
//       <LinkRow text="Agentic Insights" badge="BLOGS" />
//       <LinkRow text="Customers" />
//       <LinkRow text="Changelog" />
//       {compact && <p className="px-3 text-xs text-[color:oklch(0.556_0_0)]">Explore docs, insights, and updates.</p>}
//     </div>
//   )
// }

// function AboutPanel({ compact = false }: { compact?: boolean }) {
//   const Simple = ({ text, external = false }: { text: string; external?: boolean }) => (
//     <a
//       href="#"
//       className="flex items-center gap-2 rounded-xl p-3 text-sm transition-colors hover:bg-[color:oklch(0.97_0_0)]"
//     >
//       <span className="font-medium text-[color:oklch(0.205_0_0)]">{text}</span>
//       {external && (
//         <span className="rounded-full bg-[color:oklch(0.922_0_0)] px-1.5 py-0.5 text-[10px] text-[color:oklch(0.556_0_0)]">
//           ↗
//         </span>
//       )}
//     </a>
//   )
//   return (
//     <div className="grid grid-cols-1 gap-1">
//       <Simple text="About Us" />
//       <Simple text="Career" />
//       <Simple text="Trust Center" external />
//       <Simple text="Contact" />
//       <Simple text="Partnerships" />
//       <Simple text="Workshops" />
//       <Simple text="Demos" />
//       {compact && <p className="px-3 text-xs text-[color:oklch(0.556_0_0)]">Learn about Beam.</p>}
//     </div>
//   )
// }

// /* --- Minimal inline icons --- */
// function SquareDots() {
//   return (
//     <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
//       <rect x="2" y="2" width="4" height="4" rx="1" />
//       <rect x="10" y="2" width="4" height="4" rx="1" />
//       <rect x="2" y="10" width="4" height="4" rx="1" />
//       <rect x="10" y="10" width="4" height="4" rx="1" />
//     </svg>
//   )
// }
// function Layers() {
//   return (
//     <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
//       <path d="M10 3l7 4-7 4-7-4 7-4z" stroke="currentColor" strokeWidth="1.4" />
//       <path d="M3 10l7 4 7-4" stroke="currentColor" strokeWidth="1.4" />
//     </svg>
//   )
// }
// function Database() {
//   return (
//     <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
//       <ellipse cx="10" cy="4" rx="6" ry="3" stroke="currentColor" strokeWidth="1.4" />
//       <path d="M4 4v8c0 1.66 2.69 3 6 3s6-1.34 6-3V4" stroke="currentColor" strokeWidth="1.4" />
//     </svg>
//   )
// }
// function Spark() {
//   return (
//     <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
//       <path d="M10 2v6M10 12v6M2 10h6M12 10h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
//     </svg>
//   )
// }
// function Lock() {
//   return (
//     <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
//       <rect x="4" y="9" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" />
//       <path d="M7 9V7a3 3 0 116 0v2" stroke="currentColor" strokeWidth="1.4" />
//     </svg>
//   )
// }
// function Puzzle() {
//   return (
//     <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
//       <path
//         d="M7 3h3a2 2 0 012 2v1a2 2 0 110 4v1a2 2 0 01-2 2H7v-3a2 2 0 11-4 0V5a2 2 0 012-2h2z"
//         stroke="currentColor"
//         strokeWidth="1.4"
//       />
//     </svg>
//   )
// }
// function Coin() {
//   return (
//     <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
//       <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="1.4" />
//       <path d="M10 6v8M7.5 8.5h5" stroke="currentColor" strokeWidth="1.4" />
//     </svg>
//   )
// }
// function Headset() {
//   return (
//     <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
//       <path
//         d="M16 10a6 6 0 10-12 0v4a2 2 0 002 2h1V9a3 3 0 116 0v7h1a2 2 0 002-2v-4z"
//         stroke="currentColor"
//         strokeWidth="1.4"
//       />
//     </svg>
//   )
// }
// function UserGroup() {
//   return (
//     <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
//       <circle cx="7" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
//       <path d="M2 16a5 5 0 0110 0" stroke="currentColor" strokeWidth="1.4" />
//       <circle cx="14.5" cy="9" r="2" stroke="currentColor" strokeWidth="1.4" />
//       <path d="M12.5 16a4 4 0 014-4" stroke="currentColor" strokeWidth="1.4" />
//     </svg>
//   )
// }
// function Rocket() {
//   return (
//     <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
//       <path
//         d="M7 13l-4 4 1-5 8-8a4 4 0 115.66 5.66l-8 8-5 1 4-4"
//         stroke="currentColor"
//         strokeWidth="1.4"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   )
// }
// function Cube() {
//   return (
//     <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
//       <path d="M10 2l7 4v8l-7 4-7-4V6l7-4z" stroke="currentColor" strokeWidth="1.4" />
//       <path d="M10 10l7-4M10 10L3 6" stroke="currentColor" strokeWidth="1.4" />
//     </svg>
//   )
// }
// function Building() {
//   return (
//     <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
//       <rect x="4" y="3" width="12" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
//       <path d="M8 7h1M8 10h1M11 7h1M11 10h1" stroke="currentColor" strokeWidth="1.4" />
//     </svg>
//   )
// }
// function Briefcase() {
//   return (
//     <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
//       <rect x="3" y="6" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.4" />
//       <path d="M7 6V5a2 2 0 012-2h2a2 2 0 012 2v1" stroke="currentColor" strokeWidth="1.4" />
//     </svg>
//   )
// }

// export default Navbar





// //second
// "use client"

// import * as React from "react"
// import { cn } from "@/lib/utils"
// import { Menu, X, ArrowUpRight } from "lucide-react"

// type MenuKey = "platform" | "agents" | "solutions" | "resources" | "about" | null

// export function BeamNavbar() {
//   const [open, setOpen] = React.useState<MenuKey>(null)
//   const [mobileOpen, setMobileOpen] = React.useState(false)

//   // Close menus on escape
//   React.useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === "Escape") {
//         setOpen(null)
//         setMobileOpen(false)
//       }
//     }
//     window.addEventListener("keydown", onKey)
//     return () => window.removeEventListener("keydown", onKey)
//   }, [])

//   return (
//     <header
//       className={cn(
//         "sticky top-0 z-50 w-full",
//         // header bar with subtle dark gradient like screenshots
//         "backdrop-blur supports-[backdrop-filter]:bg-transparent",
//       )}
//     >
//       {/* gradient strip */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute inset-0 h-[72px]"
//         style={{
//           background: "linear-gradient(180deg, rgba(0,0,0,0.92) 0%, rgba(8,8,8,0.92) 60%, rgba(0,0,0,0.0) 100%)",
//         }}
//       />
//       <div className="relative">
//         <div className="mx-auto max-w-[1200px] px-4 lg:px-6">
//           <div className="flex h-[72px] items-center justify-between">
//             {/* Left: Logo */}
//             <a href="#" className="flex items-center gap-2">
//               {/* Simple slashed mark approximating the screenshot logo */}
//               <span
//                 aria-hidden
//                 className="inline-flex -skew-x-12 items-center justify-center rounded-md bg-white/90 px-1 py-1"
//                 style={{ boxShadow: "0 0 12px rgba(255,255,255,0.25) inset" }}
//               >
//                 <span className="block h-[2px] w-3 -translate-y-[3px] bg-black/90" />
//                 <span className="mx-[3px] block h-[2px] w-3 bg-black/90" />
//                 <span className="block h-[2px] w-3 translate-y-[3px] bg-black/90" />
//               </span>
//               <span className="text-[20px] font-semibold tracking-[-0.02em] text-white">beam</span>
//             </a>

//             {/* Center: Capsule Nav */}
//             <nav
//               className={cn(
//                 "hidden md:flex items-center justify-center",
//                 "rounded-full bg-black/90 text-white",
//                 "px-3 py-2",
//                 "ring-1 ring-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]",
//               )}
//               role="navigation"
//               aria-label="Primary"
//               onMouseLeave={() => setOpen(null)}
//             >
//               <ul className="flex items-center gap-1">
//                 {[
//                   { key: "platform", label: "Platform" },
//                   { key: "agents", label: "AI Agents" },
//                   { key: "solutions", label: "Solutions" },
//                   { key: "resources", label: "Resources" },
//                   { key: "about", label: "About" },
//                 ].map((item) => (
//                   <li key={item.key}>
//                     <button
//                       onMouseEnter={() => setOpen(item.key as MenuKey)}
//                       onFocus={() => setOpen(item.key as MenuKey)}
//                       className={cn(
//                         "relative rounded-full px-5 py-2 text-[15px] font-medium tracking-[-0.01em]",
//                         "transition-colors",
//                         open === (item.key as MenuKey)
//                           ? "bg-white/[0.08] text-white"
//                           : "text-white/90 hover:text-white hover:bg-white/[0.06]",
//                       )}
//                     >
//                       {item.label}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </nav>

//             {/* Right: Actions */}
//             <div className="hidden items-center gap-3 md:flex">
//               <a
//                 href="#"
//                 className={cn(
//                   "rounded-full border px-4 py-1.5 text-[14px] font-medium",
//                   "border-white/20 text-white/90 hover:text-white",
//                   "transition-colors",
//                 )}
//               >
//                 Log in
//               </a>
//               <a
//                 href="#"
//                 className="rounded-full px-[14px] py-[10px] text-[14px] font-semibold text-white shadow-lg"
//                 style={{
//                   background: "linear-gradient(90deg, #4F8BFF 0%, #2EA4FF 35%, #2BD0FF 100%)",
//                   boxShadow: "0 8px 24px rgba(47, 140, 255, 0.45), 0 0 0 1px rgba(255,255,255,0.1) inset",
//                 }}
//               >
//                 Request Access
//               </a>
//             </div>

//             {/* Mobile: Hamburger */}
//             <button
//               className="inline-flex items-center justify-center rounded-full p-2 text-white md:hidden"
//               onClick={() => setMobileOpen((v) => !v)}
//               aria-label={mobileOpen ? "Close menu" : "Open menu"}
//             >
//               {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Desktop Mega Menus */}
//         <MegaMenus open={open} />
//       </div>

//       {/* Mobile Drawer */}
//       <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
//     </header>
//   )
// }

// function Panel({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <div className={cn("absolute left-1/2 z-40 mt-3 hidden w-[920px] -translate-x-1/2 md:block")}>
//       <div
//         className={cn(
//           "rounded-[28px] border border-white/10 bg-black/92 p-6 text-white shadow-[0_20px_80px_rgba(0,0,0,0.6)] backdrop-blur",
//         )}
//       >
//         {children}
//       </div>
//     </div>
//   )
// }

// function IconBadge({
//   children,
// }: {
//   children?: React.ReactNode
// }) {
//   // rounded-square emblem per screenshots
//   return (
//     <span className="mr-3 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] ring-1 ring-white/10">
//       {children ?? <span className="block h-3 w-3 rounded-[6px] bg-white/70" />}
//     </span>
//   )
// }

// function RightList({
//   title,
//   items,
// }: {
//   title?: string
//   items: Array<{ label: string; badge?: string; external?: boolean }>
// }) {
//   return (
//     <div className="min-w-[320px]">
//       {title && <div className="mb-3 text-[15px] font-semibold text-white/80">{title}</div>}
//       <ul className="space-y-3">
//         {items.map((it) => (
//           <li key={it.label}>
//             <a
//               href="#"
//               className="group flex items-center rounded-xl p-2 pr-3 text-[16px] font-medium text-white/90 hover:bg-white/[0.06]"
//             >
//               <IconBadge />
//               <span className="flex-1">{it.label}</span>
//               {it.badge && (
//                 <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-white/90">
//                   {it.badge}
//                 </span>
//               )}
//               {it.external && <ArrowUpRight className="ml-1 h-4 w-4 opacity-70" />}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// function CTA({ children }: { children: React.ReactNode }) {
//   return (
//     <button
//       className="mt-5 inline-flex rounded-full px-4 py-2 text-[14px] font-semibold text-white"
//       style={{
//         background: "linear-gradient(90deg, #373737 0%, #2F2F2F 100%)",
//         boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1), 0 6px 18px rgba(0,0,0,0.5)",
//       }}
//     >
//       {children}
//     </button>
//   )
// }

// function MegaMenus({ open }: { open: MenuKey }) {
//   return (
//     <>
//       {open === "platform" && (
//         <Panel>
//           <div className="grid grid-cols-[1fr_1fr] gap-6">
//             <div className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
//               <img
//                 src="/beam/screenshot-10.png"
//                 alt="Platform preview"
//                 className="h-[300px] w-full rounded-xl object-cover object-center"
//               />
//             </div>
//             <div className="flex items-start">
//               <RightList
//                 items={[
//                   { label: "Agentic Platform" },
//                   { label: "Agentic Workflows" },
//                   { label: "Database, Memory & RAG" },
//                   { label: "Large Language Models" },
//                   { label: "Security & Deployment" },
//                   { label: "Integrations" },
//                 ]}
//               />
//             </div>
//           </div>
//         </Panel>
//       )}

//       {open === "agents" && (
//         <Panel>
//           <div className="grid grid-cols-[1fr_1fr] gap-6">
//             <div className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
//               <img
//                 src="/beam/screenshot-14.png"
//                 alt="AI Agents preview"
//                 className="h-[300px] w-full rounded-xl object-cover object-center"
//               />
//             </div>
//             <div className="flex flex-col justify-between">
//               <RightList
//                 title="AI Agent Teams"
//                 items={[
//                   { label: "Finance & Accounting" },
//                   { label: "Customer Service" },
//                   { label: "HR & Recruitment" },
//                 ]}
//               />
//               <div>
//                 <CTA>See all agents</CTA>
//               </div>
//             </div>
//           </div>
//         </Panel>
//       )}

//       {open === "solutions" && (
//         <Panel>
//           <div className="grid grid-cols-[1fr_1fr] gap-6">
//             <div className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
//               <img
//                 src="/beam/screenshot-12.png"
//                 alt="Solutions preview"
//                 className="h-[300px] w-full rounded-xl object-cover object-center"
//               />
//             </div>
//             <div className="grid grid-cols-2 gap-6">
//               <RightList
//                 title="By Company Size"
//                 items={[{ label: "Startups" }, { label: "Midsized" }, { label: "Enterprise" }]}
//               />
//               <RightList
//                 title="By Industry"
//                 items={[
//                   { label: "BPO" },
//                   { label: "Customer Service" },
//                   { label: "Financial Services" },
//                   { label: "Staffing & RPO" },
//                 ]}
//               />
//               <div className="col-span-2">
//                 <CTA>See all industries</CTA>
//               </div>
//             </div>
//           </div>
//         </Panel>
//       )}

//       {open === "resources" && (
//         <Panel>
//           <div className="grid grid-cols-[1fr_1fr] gap-6">
//             <div className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
//               <img
//                 src="/beam/screenshot-13.png"
//                 alt="Resources preview"
//                 className="h-[300px] w-full rounded-xl object-cover object-center"
//               />
//             </div>
//             <div className="flex items-start">
//               <RightList
//                 items={[
//                   { label: "Webinars", badge: "NEW DATES" },
//                   { label: "Beam Academy" },
//                   { label: "Agentic Insights", badge: "BLOGS" },
//                   { label: "Customers" },
//                   { label: "Changelog" },
//                 ]}
//               />
//             </div>
//           </div>
//         </Panel>
//       )}

//       {open === "about" && (
//         <Panel>
//           <div className="grid grid-cols-[1fr_1fr] gap-6">
//             <div className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
//               <img
//                 src="/beam/screenshot-14.png"
//                 alt="About preview"
//                 className="h-[300px] w-full rounded-xl object-cover object-center"
//               />
//             </div>
//             <div className="flex items-start">
//               <RightList
//                 items={[
//                   { label: "About Us" },
//                   { label: "Career" },
//                   { label: "Trust Center", external: true },
//                   { label: "Contact" },
//                   { label: "Partnerships" },
//                   { label: "Workshops" },
//                   { label: "Demos" },
//                 ]}
//               />
//             </div>
//           </div>
//         </Panel>
//       )}
//     </>
//   )
// }

// function MobileDrawer({
//   open,
//   onClose,
// }: {
//   open: boolean
//   onClose: () => void
// }) {
//   return (
//     <div className={cn("fixed inset-0 z-50 md:hidden", open ? "pointer-events-auto" : "pointer-events-none")}>
//       {/* overlay */}
//       <div
//         className={cn("absolute inset-0 bg-black/60 transition-opacity", open ? "opacity-100" : "opacity-0")}
//         onClick={onClose}
//       />
//       {/* sheet */}
//       <div
//         className={cn(
//           "absolute inset-x-0 top-0 origin-top rounded-b-3xl border-b border-white/10 bg-black/95 p-4 text-white shadow-2xl transition-transform",
//           open ? "translate-y-0" : "-translate-y-full",
//         )}
//       >
//         <div className="mx-auto max-w-[680px]">
//           <div className="mb-2 flex items-center justify-between">
//             <span className="text-[15px] font-semibold text-white/80">Menu</span>
//             <button className="rounded-full p-2 hover:bg-white/[0.06]" onClick={onClose} aria-label="Close">
//               <X className="h-6 w-6" />
//             </button>
//           </div>

//           <div className="space-y-4">
//             {/* Each section */}
//             <MobileSection
//               title="Platform"
//               img="/beam/screenshot-10.png"
//               items={[
//                 "Agentic Platform",
//                 "Agentic Workflows",
//                 "Database, Memory & RAG",
//                 "Large Language Models",
//                 "Security & Deployment",
//                 "Integrations",
//               ]}
//             />
//             <MobileSection
//               title="AI Agents"
//               img="/beam/screenshot-14.png"
//               items={["Finance & Accounting", "Customer Service", "HR & Recruitment"]}
//               cta="See all agents"
//             />
//             <MobileSection
//               title="Solutions"
//               img="/beam/screenshot-12.png"
//               items={[
//                 "Startups",
//                 "Midsized",
//                 "Enterprise",
//                 "BPO",
//                 "Customer Service",
//                 "Financial Services",
//                 "Staffing & RPO",
//               ]}
//               cta="See all industries"
//             />
//             <MobileSection
//               title="Resources"
//               img="/beam/screenshot-13.png"
//               items={["Webinars", "Beam Academy", "Agentic Insights", "Customers", "Changelog"]}
//             />
//             <MobileSection
//               title="About"
//               img="/beam/screenshot-14.png"
//               items={["About Us", "Career", "Trust Center", "Contact", "Partnerships", "Workshops", "Demos"]}
//             />
//           </div>

//           <div className="mt-6 flex items-center justify-between">
//             <a href="#" className="rounded-full border border-white/20 px-4 py-2 text-[14px] font-medium text-white/90">
//               Log in
//             </a>
//             <a
//               href="#"
//               className="rounded-full px-[14px] py-[10px] text-[14px] font-semibold text-white"
//               style={{
//                 background: "linear-gradient(90deg, #4F8BFF 0%, #2EA4FF 35%, #2BD0FF 100%)",
//                 boxShadow: "0 8px 24px rgba(47, 140, 255, 0.45), 0 0 0 1px rgba(255,255,255,0.1) inset",
//               }}
//             >
//               Request Access
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// function MobileSection({
//   title,
//   img,
//   items,
//   cta,
// }: {
//   title: string
//   img: string
//   items: string[]
//   cta?: string
// }) {
//   const [open, setOpen] = React.useState(false)
//   return (
//     <div className="rounded-2xl border border-white/10 bg-white/[0.03]">
//       <button
//         className="flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-[16px] font-semibold"
//         onClick={() => setOpen((v) => !v)}
//       >
//         <span>{title}</span>
//         <span className={cn("transition-transform", open && "rotate-180")}>⌄</span>
//       </button>
//       {open && (
//         <div className="space-y-3 px-4 pb-4">
//           <div className="rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
//             <img
//               src={img || "/placeholder.svg"}
//               alt={`${title} preview`}
//               className="h-[160px] w-full rounded-lg object-cover object-center"
//             />
//           </div>
//           <ul className="grid grid-cols-1 gap-2">
//             {items.map((it) => (
//               <li key={it}>
//                 <a
//                   href="#"
//                   className="flex items-center rounded-xl p-2 text-[15px] text-white/90 hover:bg-white/[0.06]"
//                 >
//                   <IconBadge />
//                   {it}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           {cta && (
//             <button
//               className="mt-1 inline-flex rounded-full px-4 py-2 text-[14px] font-semibold text-white"
//               style={{
//                 background: "linear-gradient(90deg, #373737 0%, #2F2F2F 100%)",
//                 boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.1), 0 6px 18px rgba(0,0,0,0.5)",
//               }}
//             >
//               {cta}
//             </button>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }



"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Menu, X, ArrowUpRight, Check} from "lucide-react"

type MenuKey = "platform" | "agents" | "solutions" | "resources" | "about" | null

export function Navbar() {
  const [open, setOpen] = React.useState<MenuKey>(null)
  const [mobileOpen, setMobileOpen] = React.useState(false)

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
        // header bar with subtle dark gradient like screenshots
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
              <span className="text-[20px] font-semibold tracking-[-0.02em] text-purple-500">CoreEd</span>
            </a>

            {/* Center: Capsule Nav */}
            <nav
              className={cn(
                "hidden md:flex items-center justify-center",
                "rounded-full bg-black/90 text-white",
                "px-3 py-2",
                "ring-1 ring-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]",
              )}
              role="navigation"
              aria-label="Primary"
              onMouseLeave={() => setOpen(null)}
            >
              <ul className="flex items-center gap-1">
                {[
                  { key: "platform", label: "Platform" },
                  { key: "agents", label: "AI Agents" },
                  { key: "solutions", label: "Solutions" },
                  { key: "resources", label: "Resources" },
                  { key: "about", label: "About" },
                ].map((item) => (
                  <li key={item.key}>
                    <button
                      onMouseEnter={() => setOpen(item.key as MenuKey)}
                      onFocus={() => setOpen(item.key as MenuKey)}
                      className={cn(
                        "relative rounded-full px-6 py-2 text-[18px] font-medium tracking-[-0.01em] whitespace-nowrap",
                        "transition-colors",
                        open === (item.key as MenuKey)
                          ? "bg-white/[0.08] text-white"
                          : "text-white/90 hover:text-white hover:bg-white/[0.06]",
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right: Actions */}
            <div className="hidden items-center gap-3 md:flex">
              <a
                href="#"
                className={cn(
                  "rounded-full border px-4 py-1.5 text-[14px] font-medium",
                  "border-white/20 text-white/90 hover:text-white bg-transparent",
                )}
              >
                Log in
              </a>
              <a
                href="#"
                className="rounded-full px-[14px] py-[10px] text-[14px] font-semibold text-white"
                style={{
                background: "linear-gradient(90deg, #a855f7 0%, #9333ea 35%, #7e22ce 100%)",
boxShadow:
  "0 10px 28px rgba(168, 85, 247, 0.55), 0 0 0 1px rgba(255,255,255,0.10) inset, 0 0 20px rgba(126, 34, 206, 0.35)",

                }}
              >
                Request Access
              </a>
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
  items: Array<{ label: string; badge?: string; external?: boolean }>
  className?: string
}) {
  return (
    <div className="w-[280px]">
      {title && <div className="mb-3 text-[15px] font-semibold text-white/80">{title}</div>}
      <ul className="space-y-[14px]">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href="#"
className={`group flex items-center rounded-xl p-2 pr-3 text-[18px] font-medium text-white/90 hover:bg-white/[0.06] hover:text-white ... ${className}`}
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
            </a>
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
                  { label: "Agentic Platform"},
                  { label: "Agentic Workflows" },
                  { label: "Database, Memory & RAG" },
                  { label: "Large Language Models" },
                  { label: "Security & Deployment" },
                  { label: "Integrations" },
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
                src="/img1.avif"
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
                <CTA>See all agents</CTA>
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
                src="/img1.avif"
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

      {open === "resources" && (
        <Panel>
          <div className="grid h-full grid-cols-[minmax(0,1fr)_280px] gap-6">
            <div className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
              <img
                src="/img1.avif"
                alt="Resources preview"
                className="h-[300px] w-full rounded-xl object-cover object-center"
              />
            </div>
            <div className="flex items-start">
              <RightList
                items={[
                  { label: "Webinars", badge: "NEW DATES" },
                  { label: "Beam Academy" },
                  { label: "Agentic Insights", badge: "BLOGS" },
                  { label: "Customers" },
                  { label: "Changelog" },
                ]}
              />
            </div>
          </div>
        </Panel>
      )}

      {open === "about" && (
        <Panel>
          <div className="grid grid-cols-[1fr_280px] gap-6">
            <div className="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10">
              <img
                src="/img1.avif"
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
              img="/beam/screenshot-10.png"
              items={[
                "Agentic Platform",
                "Agentic Workflows",
                "Database, Memory & RAG",
                "Large Language Models",
                "Security & Deployment",
                "Integrations",
              ]}
            />
            <MobileSection
              title="AI Agents"
              img="/beam/screenshot-14.png"
              items={["Finance & Accounting", "Customer Service", "HR & Recruitment"]}
              cta="See all agents"
            />
            <MobileSection
              title="Solutions"
              img="/beam/screenshot-12.png"
              items={[
                "Startups",
                "Midsized",
                "Enterprise",
                "BPO",
                "Customer Service",
                "Financial Services",
                "Staffing & RPO",
              ]}
              cta="See all industries"
            />
            <MobileSection
              title="Resources"
              img="/beam/screenshot-13.png"
              items={["Webinars", "Beam Academy", "Agentic Insights", "Customers", "Changelog"]}
            />
            <MobileSection
              title="About"
              img="/beam/screenshot-14.png"
              items={["About Us", "Career", "Trust Center", "Contact", "Partnerships", "Workshops", "Demos"]}
            />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <a href="#" className="rounded-full border border-white/20 px-4 py-2 text-[14px] font-medium text-white/90">
              Log in
            </a>
            <a
              href="#"
              className="rounded-full px-[14px] py-[10px] text-[14px] font-semibold text-white"
              style={{
                background: "linear-gradient(90deg, #4F8BFF 0%, #2EA4FF 35%, #2BD0FF 100%)",
                boxShadow:
                  "0 10px 28px rgba(47,140,255,0.55), 0 0 0 1px rgba(255,255,255,0.10) inset, 0 0 20px rgba(43,208,255,0.35)",
              }}
            >
              Request Access
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
  items: string[]
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
              <li key={it}>
                <a
                  href="#"
                  className="flex items-center rounded-xl p-2 text-[15px] text-white/90 hover:bg-white/[0.06]"
                >
                  <IconBadge />
                  {it}
                </a>
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
