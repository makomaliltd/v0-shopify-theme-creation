'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

export function VideoDemoSection() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  const videos = [
    {
      id: 1,
      title: 'How to Use MakoCare',
      description: 'Complete guide to getting started with your electric bath brush',
      thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%AF%A6%E6%83%85-6-cXIYkotevhaIVDoWmPmDf6kXAjOkNF.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
    },
    {
      id: 2,
      title: 'Deep Cleansing Demonstration',
      description: 'Watch how MakoCare removes impurities and exfoliates your skin',
      thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%AF%A6%E6%83%85-25-cMfDWdsH2TRlxFTBNaEtYZtDAWTNtn.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 3,
      title: 'Back Massage & Circulation',
      description: 'Experience the dual-handle massage technique for better circulation',
      thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%AF%A6%E6%83%85-23-9JdtxrXbaQUFd9nNer5g2cSAtdIj87.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
    {
      id: 4,
      title: 'Brush Head Selection Guide',
      description: 'Learn which brush head to use for different skin types and needs',
      thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%AF%A6%E6%83%85-8-J0lZWOM5sZfvSLKwjrKVcb5RhX2uWh.jpg',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ]

  return (
    <section className="py-24 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            See MakoCare in Action
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-balance">
            Watch our product demonstrations to discover the full potential of your bath ritual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {activeVideo === video.id ? (
                <div className="aspect-video">
                  <iframe
                    src={video.videoUrl}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div
                  className="relative aspect-video bg-muted cursor-pointer"
                  onClick={() => setActiveVideo(video.id)}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-16 h-16 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-background">
                      <Play className="w-6 h-6 text-foreground ml-1" fill="currentColor" />
                    </button>
                  </div>
                </div>
              )}

              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-balance">{video.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed text-balance">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
