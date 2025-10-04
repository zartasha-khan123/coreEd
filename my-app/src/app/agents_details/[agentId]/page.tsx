// "use client";

// import { useEffect, useMemo, useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   ArrowLeft,
//   CheckCircle2,
//   Copy,
//   Github,
//   Linkedin,
//   MessageCircle,
//   Share2,
//   Star,
//   PlayCircle,
//   X,
//   ExternalLink,
//   Users,
//   Zap,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { agents } from "@/services/agents-data";

// interface AgentDetailsPageProps {
//   params: { agentId: string };
// }

// /* ---- theme helpers ---- */
// const purpleRing = "ring-1 ring-[#7c3aed]/30";
// const purpleText = "text-[#a78bfa]";
// const purpleBg = "bg-gradient-to-b from-[#0b0616] via-[#0a0720] to-[#0a0719]";
// const glass = "backdrop-blur-sm bg-white/5 dark:bg-white/5";

// export default function AgentDetailsPage({ params }: AgentDetailsPageProps) {
//   const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
//   const [copied, setCopied] = useState(false);
//   const dialogRef = useRef<HTMLDivElement | null>(null);

//   const agent = useMemo(
//     () => agents.find((a) => a.id === params.agentId),
//     [params.agentId]
//   );

//   // Close modal on ESC
//   useEffect(() => {
//     function onKey(e: KeyboardEvent) {
//       if (e.key === "Escape") setSelectedVideo(null);
//     }
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   // Close modal on outside click
//   useEffect(() => {
//     function onClick(e: MouseEvent) {
//       if (!dialogRef.current) return;
//       if (e.target instanceof Node && dialogRef.current === e.target) {
//         setSelectedVideo(null);
//       }
//     }
//     if (selectedVideo) window.addEventListener("click", onClick);
//     return () => window.removeEventListener("click", onClick);
//   }, [selectedVideo]);

//   if (!agent) {
//     return (
//       <main className={`min-h-screen grid place-items-center ${purpleBg} px-6`}>
//         <Card className={`max-w-lg w-full border-dashed ${purpleRing}`}>
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <X className="h-5 w-5 text-destructive" />
//               Agent not found
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="flex gap-3">
//             <Link href="/">
//               <Button variant="default" className="gap-2">
//                 <ArrowLeft className="h-4 w-4" />
//                 Back to Agents
//               </Button>
//             </Link>
//             <Button variant="outline" asChild>
//               <a href="mailto:dev@yourdomain.com">Contact support</a>
//             </Button>
//           </CardContent>
//         </Card>
//       </main>
//     );
//   }

//   const pageUrl = typeof window !== "undefined" ? window.location.href : "";

//   const handleCopyLink = async () => {
//     try {
//       await navigator.clipboard.writeText(pageUrl);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 1200);
//     } catch {}
//   };

//   return (
//     <main className={`min-h-screen relative ${purpleBg} text-white`}>
//       {/* aurora accents */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -top-24 -left-24 h-[32rem] w-[32rem] rounded-full bg-[#7c3aed]/20 blur-3xl" />
//         <div className="absolute top-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
//       </div>

//       {/* Top bar */}
//       <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0b0616]/70 supports-[backdrop-filter]:backdrop-blur">
//         <div className="mx-auto max-w-7xl px-4 md:px-6 py-3 flex items-center justify-between">
//           <Link href="/" className="shrink-0">
//             <Button variant="ghost" size="sm" className="gap-2 text-white">
//               <ArrowLeft className="h-4 w-4" />
//               Back to Agents
//             </Button>
//           </Link>
//           <div className="flex items-center gap-2">
//             <Button
//               variant="outline"
//               size="sm"
//               className={`gap-2 ${glass} border-white/10 text-white`}
//               onClick={handleCopyLink}
//             >
//               {copied ? (
//                 <>
//                   <CheckCircle2 className="h-4 w-4" />
//                   Copied
//                 </>
//               ) : (
//                 <>
//                   <Copy className="h-4 w-4" />
//                   Copy link
//                 </>
//               )}
//             </Button>
//             <Button
//               variant="default"
//               size="sm"
//               className="gap-2 bg-[#7c3aed] hover:bg-[#6d28d9]"
//               onClick={() => {
//                 if (navigator.share && pageUrl) {
//                   navigator
//                     .share({
//                       title: agent.name,
//                       text: agent.description,
//                       url: pageUrl,
//                     })
//                     .catch(() => {});
//                 } else {
//                   handleCopyLink();
//                 }
//               }}
//             >
//               <Share2 className="h-4 w-4" />
//               Share
//             </Button>
//           </div>
//         </div>
//       </header>

//       {/* Hero */}
//       <section className="mx-auto max-w-7xl px-4 md:px-6 pt-8 md:pt-12">
//         <div className="grid gap-8 lg:grid-cols-3">
//           {/* left column */}
//           <div className="lg:col-span-2">
//             <div className="flex items-start gap-4">
//               <div
//                 className={`flex h-16 w-16 items-center justify-center rounded-2xl ${glass} ${purpleRing} text-4xl shadow-sm`}
//               >
//                 {agent.icon}
//               </div>
//               <div className="min-w-0">
//                 <div className="flex flex-wrap items-center gap-2">
//                   <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
//                     {agent.name}
//                   </h1>
//                   <Badge
//                     variant="secondary"
//                     className="px-2.5 py-1 border-0 bg-[#7c3aed]/15 text-[#c4b5fd]"
//                   >
//                     {agent.category}
//                   </Badge>
//                 </div>
//                 <p className="mt-3 text-white/70 leading-relaxed">
//                   {agent.description}
//                 </p>

//                 {/* Quick Stats (hero under title) */}
//                 {/* <div className="flex flex-wrap gap-6 pt-4">
//                   <div className="flex items-center gap-2">
//                     <div className="flex size-10 items-center justify-center rounded-lg bg-[#7c3aed]/20">
//                       <Users className="size-5 text-[#a78bfa]" />
//                     </div>
//                     <div>
//                       <div className="text-sm font-medium">12.5K+</div>
//                       <div className="text-xs text-white/60">Active Users</div>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-2">
//                     <div className="flex size-10 items-center justify-center rounded-lg bg-fuchsia-500/20">
//                       <Zap className="size-5 text-fuchsia-400" />
//                     </div>
//                     <div>
//                       <div className="text-sm font-medium">98%</div>
//                       <div className="text-xs text-white/60">Satisfaction</div>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-2">
//                     <div className="flex size-10 items-center justify-center rounded-lg bg-green-500/20">
//                       <CheckCircle2 className="size-5 text-green-400" />
//                     </div>
//                     <div>
//                       <div className="text-sm font-medium">500K+</div>
//                       <div className="text-xs text-white/60">
//                         Designs Created
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                  */}
//               </div>
//             </div>

//             {/* cover */}
//             <Card className={`mt-6 overflow-hidden ${glass} ${purpleRing}`}>
//               <CardContent className="p-0">
//                 <div className="relative aspect-video w-full">
//                   <Image
//                     src={agent.image || "/placeholder.svg"}
//                     alt={agent.name}
//                     fill
//                     priority
//                     className="object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
//                   {agent.videos?.[0]?.url && (
//                     <button
//                       onClick={() => setSelectedVideo(agent.videos[0].url)}
//                       className="absolute left-4 bottom-4 md:left-6 md:bottom-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-white/10 hover:bg-white/15 transition border border-white/15"
//                     >
//                       <PlayCircle className="h-5 w-5" />
//                       Watch quick demo
//                     </button>
//                   )}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* right column - Developer blog card WITH STATS */}
//           <aside className="lg:col-span-1">
//             <Card className={`sticky top-20 shadow-xl ${glass} ${purpleRing}`}>
//               <CardHeader className="pb-3">
//                 <CardTitle className="flex items-center justify-between text-white">
//                   Developer
//                   <span className="inline-flex items-center gap-1 text-xs font-medium text-yellow-300/90">
//                     <Star className="h-3.5 w-3.5 fill-yellow-300 text-yellow-300" />
//                     Verified
//                   </span>
//                 </CardTitle>
//               </CardHeader>

//               <CardContent className="space-y-5">
//                 {/* avatar + name */}
//                 <div className="flex items-center gap-4">
//                   <Image
//                     src={agent.developer.image || "/placeholder-developer.jpg"}
//                     alt={agent.developer.name || "Developer"}
//                     width={72}
//                     height={72}
//                     className="rounded-full object-cover border-2 border-[#7c3aed]/40"
//                   />
//                   <div>
//                     <p className="text-base font-semibold">
//                       {agent.developer.name}
//                     </p>
//                     <p className={`text-xs ${purpleText}`}>Creator</p>
//                   </div>
//                 </div>

//                 {/* short bio */}
//                 <p className="text-sm text-white/70 line-clamp-3 leading-6">
//                   {agent.developer.bio || "Building helpful AI assistants."}
//                 </p>

//                 {/* Quick Stats (inside developer card) */}
//                 <div className="flex flex-wrap gap-4">
//                   <div className="flex items-center gap-2">
//                     <div className="flex size-9 items-center justify-center rounded-lg bg-[#7c3aed]/20">
//                       <Users className="size-4 text-[#a78bfa]" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] font-medium">12.5K+</div>
//                       <div className="text-[11px] text-white/60">
//                         Active Users
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="flex size-9 items-center justify-center rounded-lg bg-fuchsia-500/20">
//                       <Zap className="size-4 text-fuchsia-400" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] font-medium">98%</div>
//                       <div className="text-[11px] text-white/60">
//                         Satisfaction
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="flex size-9 items-center justify-center rounded-lg bg-green-500/20">
//                       <CheckCircle2 className="size-4 text-green-400" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] font-medium">500K+</div>
//                       <div className="text-[11px] text-white/60">
//                         Designs
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Stats grid (replacing social links) */}
//                 <div className="grid grid-cols-3 gap-4 rounded-lg border border-white/10 bg-white/5 p-4">
//                   <div className="text-center">
//                     <div className="text-xl font-bold">24</div>
//                     <div className="text-xs text-white/60">Agents</div>
//                   </div>
//                   <div className="text-center border-x border-white/10">
//                     <div className="text-xl font-bold">15K</div>
//                     <div className="text-xs text-white/60">Users</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-xl font-bold">98%</div>
//                     <div className="text-xs text-white/60">Uptime</div>
//                   </div>
//                 </div>

//                 {/* View full profile */}
//                 <Link
//                   href={`/profile/${agent.developer?.id ?? agent.id}`}
//                   prefetch
//                   className="block"
//                 >
//                   <Button className="w-full justify-center gap-2 bg-[#7c3aed] hover:bg-[#6d28d9]">
//                     View full profile
//                     <ExternalLink className="h-4 w-4" />
//                   </Button>
//                 </Link>
//               </CardContent>
//             </Card>
//           </aside>
//         </div>
//       </section>

//       {/* Video Gallery */}
//       {agent.videos?.length > 0 && (
//         <section className="mx-auto max-w-7xl px-4 md:px-6 mt-10">
//           <div className="flex items-center justify-between">
//             <h2 className="text-2xl font-bold">Demo Videos</h2>
//             <p className="text-sm text-white/60">Click a thumbnail to play</p>
//           </div>

//           <div className="relative mt-4">
//             <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-transparent to-[#0b0616]" />
//             <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-transparent to-[#0b0616]" />

//             <div className="flex gap-2 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/20">
//               {agent.videos.map(
//                 (
//                   video: {
//                     thumbnail: string;
//                     url: string;
//                     title?: string;
//                     duration?: string;
//                   },
//                   index: number
//                 ) => (
//                   <Card
//                     key={index}
//                     className={`flex-shrink-0 w-[18rem] snap-start overflow-hidden transition-all hover:shadow-lg ${glass} ${purpleRing}`}
//                   >
//                     <CardContent className="p-0">
//                       <button
//                         className="relative aspect-video w-full"
//                         onClick={() => setSelectedVideo(video.url)}
//                         aria-label={`Play demo video ${index + 1}`}
//                       >
//                         <Image
//                           src={video.thumbnail}
//                           alt={video.title || `Demo video ${index + 1}`}
//                           fill
//                           sizes="(max-width: 768px) 100vw, 320px"
//                           className="object-cover"
//                         />
//                         <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition grid place-items-center">
//                           <PlayCircle className="h-12 w-12 text-white drop-shadow" />
//                         </div>
//                         {video.duration && (
//                           <span className="absolute bottom-2 right-2 text-[11px] font-medium bg-black/70 text-white px-1.5 py-0.5 rounded">
//                             {video.duration}
//                           </span>
//                         )}
//                       </button>
//                       {(video.title || video.duration) && (
//                         <div className="px-3 py-2">
//                           <p className="text-sm font-medium truncate">
//                             {video.title || `Demo ${index + 1}`}
//                           </p>
//                           <p className="text-xs text-white/60">
//                             {video.duration ? `${video.duration}` : "Preview"}
//                           </p>
//                         </div>
//                       )}
//                     </CardContent>
//                   </Card>
//                 )
//               )}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Features */}
//       {agent.features?.length > 0 && (
//         <section className="mx-auto max-w-7xl px-4 md:px-6 mt-10 pb-16">
//           <Card className={`${glass} ${purpleRing}`}>
//             <CardHeader>
//               <CardTitle className="text-white">Key Features</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//                 {agent.features.map((feature: string, index: number) => (
//                   <li
//                     key={index}
//                     className="flex items-start gap-3 rounded-lg border border-white/10 p-3"
//                   >
//                     <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#7c3aed]/20 text-[#c4b5fd]">
//                       <svg
//                         className="h-4 w-4"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                     </div>
//                     <span className="text-sm leading-6 text-white/90">
//                       {feature}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </CardContent>
//           </Card>
//         </section>
//       )}

//       {/* Video Modal */}
//       {selectedVideo && (
//         <div
//           ref={dialogRef}
//           className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4"
//           role="dialog"
//           aria-modal="true"
//           aria-label="Demo video"
//         >
//           <div className="relative w-full max-w-4xl">
//             <button
//               onClick={() => setSelectedVideo(null)}
//               className="absolute -top-10 right-0 text-white/90 hover:text-white transition"
//               aria-label="Close"
//               title="Close"
//             >
//               <X className="h-7 w-7" />
//             </button>
//             <video
//               src={selectedVideo}
//               controls
//               autoPlay
//               className="w-full rounded-xl shadow-2xl ring-1 ring-white/10"
//             />
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }

// /** utils */
// function formatNumber(n: number) {
//   try {
//     return new Intl.NumberFormat(undefined, {
//       notation: "compact",
//       maximumFractionDigits: 1,
//     }).format(n);
//   } catch {
//     return `${n}`;
//   }
// }



// app/agents-details/[agentId]/page.tsx
import AgentDetailsPage from "@/components/agentDetails";
import { use } from "react";

export default function Page({
  params,
}: {
  params: Promise<{ agentId: string }>;
}) {
  const { agentId } = use(params);          // ✅ unwrap params (server)
  return <AgentDetailsPage agentId={agentId} />;
}
