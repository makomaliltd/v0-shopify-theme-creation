"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const detailSections = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%AF%A6%E6%83%85-6-cXIYkotevhaIVDoWmPmDf6kXAjOkNF.jpg",
    alt: "MakoCare neck-worn design for hands-free convenience",
    title: "Designed for Comfort",
    description:
      "The ergonomic design wraps naturally around your body contours, providing effortless reach to every area. Lightweight yet durable materials ensure comfort during extended use.",
    reverse: false,
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%AF%A6%E6%83%85-25-cMfDWdsH2TRlxFTBNaEtYZtDAWTNtn.jpg",
    alt: "Smart pressure sensing technology in action",
    title: "Intelligent Protection",
    description:
      "Built-in pressure sensors automatically adjust brush speed when too much force is detected. If the brush head locks three times consecutively, it safely shuts down to protect your skin.",
    reverse: true,
  },
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%AF%A6%E6%83%85-23-9JdtxrXbaQUFd9nNer5g2cSAtdIj87.jpg",
    alt: "Back coverage demonstration showing 9-point positioning",
    title: "Complete Back Coverage",
    description:
      "Our 9-point positioning method ensures every zone of your back receives thorough attention. The dual-handle extension lets you reach areas that were previously impossible.",
    reverse: false,
  },
]

export function ProductDetails() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-24">
          {detailSections.map((section, i) => (
            <DetailRow key={i} section={section} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DetailRow({
  section,
}: {
  section: (typeof detailSections)[0]
}) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className={`${section.reverse ? "lg:order-2" : ""}`}>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src={section.image}
            alt={section.alt}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className={`${section.reverse ? "lg:order-1" : ""}`}>
        <h3 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
          {section.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {section.description}
        </p>
        <div className="mt-6 h-[1px] w-16 bg-border" />
      </div>
    </div>
  )
}
