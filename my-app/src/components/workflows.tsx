"use client";

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { agents } from "@/services/agents-data";

type Agent = typeof agents[number];

export default function Workflows({ agent }: { agent?: Agent }) {
  const [selected, setSelected] = useState<{ url: string; title: string } | null>(null);
  const [showAll, setShowAll] = useState(false);

  if (!agent || !Array.isArray(agent.videos) || agent.videos.length === 0) {
    return <p className="text-gray-400 text-sm">No workflows available.</p>;
  }

  // 👇 IMPORTANT: yahan local variable banaya hai, agent ka field nahi.
  const videosToShow = showAll ? agent.videos : agent.videos.slice(0, 3);

  return (
    <section id="workflows" className="mb-12 ">
      {/* Section Heading */}
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-foreground font-serif">Developer Spotlight</h2>
        <p className="text-sm text-muted-foreground">
          {agent.name}: The workflows listed below can be directly applied to your team and projects for faster, smarter execution.
        </p>
      </div>

      {/* Horizontal Video Cards (aapka asli layout preserve) */}
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-secondary scrollbar-thumb-primary">
        {videosToShow.map((video, index) => (
          <Card
            key={index}
            className="flex-shrink-0 w-90 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-primary/50"
          >
            <CardContent className="p-0">
              <div
                className="relative aspect-video rounded-b-none overflow-hidden cursor-pointer"
                onClick={() => setSelected({ url: video.url, title: video.title })}
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                  <div className="h-14 w-14 rounded-full bg-white/90 flex items-center justify-center">
                    <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Duration chip */}
                {video.duration && (
                  <span className="absolute bottom-2 right-2 text-xs px-2 py-0.5 rounded bg-black/70 text-white">
                    {video.duration}
                  </span>
                )}
              </div>

              {/* Title + subtitle */}
              <div className="p-3 space-y-1">
                <h3 className="text-sm font-semibold">{video.title}</h3>
                {video.subtitle && (
                  <p className="text-xs text-muted-foreground">{video.subtitle}</p>
                )}

                {/* Tags */}
                {video.tags?.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {video.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* OLX-style description (collapsible look-alike) */}
              <div className="px-3 pb-3">
                <details className="group rounded-md border border-border/60 bg-muted/20">
                  <summary className="list-none cursor-pointer select-none px-3 py-2 text-xs text-foreground/90 flex items-center justify-between">
                    <span>Workflow Description</span>
                    <svg className="h-4 w-4 transition group-open:rotate-180" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </summary>
                  <div className="px-3 pb-3 text-xs whitespace-pre-wrap text-muted-foreground">
                    {video.description}
                  </div>
                  <div className="px-3 pb-3">
                    <Button size="sm" className="h-8 text-xs" onClick={() => setSelected({ url: video.url, title: video.title })}>
                      Watch Demo
                    </Button>
                  </div>
                </details>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show More / Show Less */}
      {/* {agent.videos.length > 0 &&  (
        <div className="mt-6 text-center">
          <Button
            variant="outline"
            onClick={() => setShowAll((v) => !v)}
            className="px-6 "
          >
            {showAll ? "Show Less" : `Show More (${agent.videos.length - 3,0})`}
          </Button>
        </div>
      )} */}

      {agent.videos.length > 0 && (
  <div className="mt-6 text-center">
    <Button
      variant="outline"
      onClick={() => setShowAll((v) => !v)}
      className="px-6"
    >
      {showAll
        ? "Show Less"
        : `Show More (${Math.max(agent.videos.length - 3, 0)})`}
    </Button>
  </div>
)}


      {/* Simple modal for video playback */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="w-full max-w-3xl bg-background rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <h4 className="text-sm font-semibold">{selected.title}</h4>
              <button className="text-sm" onClick={() => setSelected(null)}>✕</button>
            </div>
            <div className="aspect-video">
              <video src={selected.url} controls className="w-full h-full" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


// "use client";

// import Image from "next/image";
// import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { agents } from "@/services/agents-data";

// type Agent = typeof agents[number];

// export default function Workflows({ agent }: { agent?: Agent }) {
//   const [selected, setSelected] = useState<{ url?: string; title?: string } | null>(null);
//   const [showAll, setShowAll] = useState(false);

//   if (!agent || !Array.isArray(agent.videos) || agent.videos.length === 0) {
//     return <p className="text-gray-400 text-sm">No workflows available.</p>;
//   }

//   const videosToShow = showAll ? agent.videos : agent.videos.slice(0, 3);

//   return (
//     <section className="mb-12 ">
//       {/* Section Heading */}
//       <div className="mb-6">
//         <h2 className="text-3xl font-bold text-foreground font-serif">Developer Spotlight</h2>
//         <p className="text-sm text-muted-foreground">
//           {agent.name}: The workflows listed below can be directly applied to your team and projects for faster, smarter execution.
//         </p>
//       </div>

//       {/* Horizontal Video Cards */}
//       <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-secondary scrollbar-thumb-primary">
//         {videosToShow.map((video, index) => (
//           <Card
//             key={index}
//             className="flex-shrink-0 w-90 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-primary/50"
//           >
//             <CardContent className="p-0">
//               <div
//                 className="relative aspect-video rounded-b-none overflow-hidden cursor-pointer"
//                 onClick={() => setSelected({ url: video.url, title: video.title })}
//               >
//                 <Image
//                   src={video.thumbnail || "/placeholder.png"}
//                   alt={video.title || "Workflow video"}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, 400px"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center">
//                   <div className="h-14 w-14 rounded-full bg-white/90 flex items-center justify-center">
//                     <svg className="h-8 w-8 text-black" viewBox="0 0 24 24" fill="currentColor">
//                       <path d="M8 5v14l11-7z" />
//                     </svg>
//                   </div>
//                 </div>

//                 {/* Duration chip */}
//                 {video.duration && (
//                   <span className="absolute bottom-2 right-2 text-xs px-2 py-0.5 rounded bg-black/70 text-white">
//                     {video.duration}
//                   </span>
//                 )}
//               </div>

//               {/* Title + subtitle */}
//               <div className="p-3 space-y-1">
//                 <h3 className="text-sm font-semibold">{video.title}</h3>
//                 {video.subtitle && (
//                   <p className="text-xs text-muted-foreground">{video.subtitle}</p>
//                 )}

//                 {/* Tags */}
//                 {video.tags?.length > 0 && (
//                   <div className="mt-2 flex flex-wrap gap-1.5">
//                     {video.tags.map((t, i) => (
//                       <span
//                         key={i}
//                         className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20"
//                       >
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* OLX-style description (collapsible) */}
//               {video.description && (
//                 <div className="px-3 pb-3">
//                   <details className="group rounded-md border border-border/60 bg-muted/20">
//                     <summary className="list-none cursor-pointer select-none px-3 py-2 text-xs text-foreground/90 flex items-center justify-between">
//                       <span>Workflow Description</span>
//                       <svg className="h-4 w-4 transition group-open:rotate-180" viewBox="0 0 24 24" fill="currentColor">
//                         <path d="M7 10l5 5 5-5z" />
//                       </svg>
//                     </summary>
//                     <div className="px-3 pb-3 text-xs whitespace-pre-wrap text-muted-foreground">
//                       {video.description}
//                     </div>
//                     <div className="px-3 pb-3">
//                       <Button
//                         size="sm"
//                         className="h-8 text-xs"
//                         onClick={() =>
//                           setSelected({ url: video.url, title: video.title })
//                         }
//                       >
//                         Watch Demo
//                       </Button>
//                     </div>
//                   </details>
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Show More / Show Less */}
//       {agent.videos.length > 3 && (
//         <div className="mt-6 text-center">
//           <Button
//             variant="outline"
//             onClick={() => setShowAll((v) => !v)}
//             className="px-6"
//           >
//             {showAll
//               ? "Show Less"
//               : `Show More (${Math.max(agent.videos.length - 3, 0)})`}
//           </Button>
//         </div>
//       )}

//       {/* Simple modal for video playback */}
//       {selected?.url && (
//         <div
//           className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
//           onClick={() => setSelected(null)}
//         >
//           <div className="w-full max-w-3xl bg-background rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
//             <div className="flex items-center justify-between px-4 py-3 border-b">
//               <h4 className="text-sm font-semibold">{selected.title}</h4>
//               <button className="text-sm" onClick={() => setSelected(null)}>✕</button>
//             </div>
//             <div className="aspect-video">
//               <video src={selected.url} controls className="w-full h-full" />
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
