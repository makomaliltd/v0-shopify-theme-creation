"use client"

import { useState } from "react"
import Image from "next/image"

const images = [
  {
    src: "https://files.catbox.moe/7kxiva.jpg",
    alt: "MakoCare electric bath brush main product image with accessories",
  },
  {
    src: "https://files.catbox.moe/ryrci9.jpg",
    alt: "MakoCare brush with dual handle design and soap bubbles",
  },
  {
    src: "https://files.catbox.moe/kif4ih.jpg",
    alt: "Close-up of 90,000 ultra-fine bristles for gentle deep cleaning",
  },
  {
    src: "https://files.catbox.moe/t0ba33.jpg",
    alt: "MakoCare powerful motor detail with swirl pattern",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%BB%E5%9B%BE-5-IC3v8itKrpHqzuVluKYr8zQ9xvOgwn.png",
    alt: "MakoCare premium gift set packaging with all accessories",
  },
]

export function ProductGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="flex flex-col gap-4">
      <div className="group relative aspect-square overflow-hidden rounded-2xl bg-secondary">
        <Image
          key={selectedIndex}
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 animate-fade-in"
          priority
          unoptimized
        />
      </div>

      <div className="grid grid-cols-5 gap-3">
        {images.map((image, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className={`relative aspect-square overflow-hidden rounded-lg transition-all duration-300 ${i === selectedIndex
              ? "ring-2 ring-foreground ring-offset-2 ring-offset-background"
              : "opacity-60 hover:opacity-100"
              }`}
            aria-label={`View image ${i + 1}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              unoptimized
            />
          </button>
        ))}
      </div>
    </div>
  )
}
