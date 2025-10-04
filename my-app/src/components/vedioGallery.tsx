"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface Video {
  id: string
  title: string
  duration: string
  thumbnail: string
  description: string
}

const videos: Video[] = [
  {
    id: "1",
    title: "Brand Kit Generator",
    duration: "52s",
    thumbnail: "/ai-design-tool-with-colorful-crystal-flower.jpg",
    description: "Learn how to generate complete brand kits with AI",
  },
  {
    id: "2",
    title: "Landing Page Draft",
    duration: "1m 18s",
    thumbnail: "/designer-working-on-computer-screen-at-night.jpg",
    description: "Create professional landing pages in minutes",
  },
  {
    id: "3",
    title: "Design Review Bot",
    duration: "45s",
    thumbnail: "/futuristic-city-with-flying-vehicles.jpg",
    description: "Get instant AI-powered design feedback",
  },
]

export function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tight text-balance lg:text-4xl">Demo Videos</h2>
        <p className="text-lg text-muted-foreground text-balance">
          Click a thumbnail to play and see the agent in action
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className="group relative overflow-hidden rounded-xl bg-card ring-1 ring-border transition-all hover:ring-2 hover:ring-primary focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <AspectRatio ratio={16 / 9}>
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-primary/90 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-primary">
                  <Play className="size-7 fill-primary-foreground text-primary-foreground" />
                </div>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-end justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-balance leading-tight">{video.title}</h3>
                  </div>
                  <span className="shrink-0 rounded-md bg-black/60 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {video.duration}
                  </span>
                </div>
              </div>
            </AspectRatio>
          </button>
        ))}
      </div>

      {/* Video Modal */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="max-w-5xl p-0" showCloseButton={false}>
          {selectedVideo && (
            <div className="relative">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 z-50 flex size-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <X className="size-5" />
              </button>
              <AspectRatio ratio={16 / 9} className="bg-black">
                <div className="flex size-full items-center justify-center">
                  <img
                    src={selectedVideo.thumbnail || "/placeholder.svg"}
                    alt={selectedVideo.title}
                    className="size-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/40">
                    <div className="flex size-20 items-center justify-center rounded-full bg-primary">
                      <Play className="size-9 fill-primary-foreground text-primary-foreground" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white">{selectedVideo.title}</h3>
                      <p className="mt-2 text-white/80">{selectedVideo.description}</p>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
