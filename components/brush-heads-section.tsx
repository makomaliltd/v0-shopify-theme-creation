"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const brushHeads = [
  {
    name: "Deep Cleansing Bristle",
    description: "Curved bristles remove dirt and impurities from deep within pores.",
    benefit: "Deep Clean",
  },
  {
    name: "Groove Convex Head",
    description: "Contoured surface adapts to body curves for an even cleanse.",
    benefit: "Body Contouring",
  },
  {
    name: "Joint Concave Head",
    description: "Designed specifically for knees, elbows, and other joint areas.",
    benefit: "Targeted Care",
  },
  {
    name: "Foaming Long Bristle",
    description: "Creates rich lather from minimal product for a luxurious foam experience.",
    benefit: "Rich Lather",
  },
  {
    name: "Skin Massage Head",
    description: "Silicone nodes stimulate circulation and promote skin renewal.",
    benefit: "Massage",
  },
  {
    name: "Plant Fiber Towel Head",
    description: "Natural plant fibers for the gentlest exfoliation on sensitive skin.",
    benefit: "Gentle Exfoliation",
  },
]

export function BrushHeadsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation()

  return (
    <section id="brush-heads" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            6 Specialized Heads
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            One Brush, Six Experiences
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Each brush head is designed for a specific purpose, so you can customize your bathing routine to perfection.
          </p>
        </div>

        <div
          ref={imageRef}
          className={`mt-16 relative overflow-hidden rounded-2xl transition-all duration-700 ${
            imageVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative aspect-[16/9]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%AF%A6%E6%83%85-8-J0lZWOM5sZfvSLKwjrKVcb5RhX2uWh.jpg"
              alt="Six different brush heads for the MakoCare electric bath brush"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {brushHeads.map((head, i) => (
            <BrushHeadCard key={head.name} head={head} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BrushHeadCard({
  head,
  index,
}: {
  head: (typeof brushHeads)[0]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`group flex items-start gap-4 rounded-xl bg-background p-6 transition-all duration-700 hover:shadow-md ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-foreground transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
        {index + 1}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-foreground">{head.name}</h3>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          {head.description}
        </p>
        <span className="mt-2 inline-block rounded-full bg-secondary px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          {head.benefit}
        </span>
      </div>
    </div>
  )
}
