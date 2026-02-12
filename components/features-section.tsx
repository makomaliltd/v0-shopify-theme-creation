"use client"

import Image from "next/image"
import { Droplets, Zap, RotateCw, Shield, Battery, Sparkles } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Droplets,
    title: "90,000 Ultra-Fine Bristles",
    description: "High-density bristle technology for gentle yet deep cleansing that revitalizes your skin.",
  },
  {
    icon: RotateCw,
    title: "Dual Handle Design",
    description: "Innovative single to double handle switch for effortless reach to every part of your body.",
  },
  {
    icon: Zap,
    title: "Powerful Motor",
    description: "Premium motor delivers consistent rotation speed for an even, thorough cleanse every time.",
  },
  {
    icon: Shield,
    title: "Smart Pressure Sensing",
    description: "Auto-adjusts speed when too much pressure is applied. Safety shutdown after 3 consecutive locks.",
  },
  {
    icon: Battery,
    title: "Long-Lasting Battery",
    description: "USB-C rechargeable with up to 60 days of use on a single charge. Freedom from cords.",
  },
  {
    icon: Sparkles,
    title: "6 Brush Heads Included",
    description: "From deep cleansing to massage, each specialized head serves a unique purpose for your skin.",
  },
]

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0]
  index: number
}) {
  const { ref, isVisible } = useScrollAnimation(0.1)
  const Icon = feature.icon

  return (
    <div
      ref={ref}
      className={`group rounded-2xl bg-card p-8 transition-all duration-700 hover:shadow-lg ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-foreground transition-all duration-300 group-hover:scale-110 group-hover:bg-accent">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{feature.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {feature.description}
      </p>
    </div>
  )
}

export function FeaturesSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()

  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Why MakoCare
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Designed for the Perfect Cleanse
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Every detail is crafted to deliver a spa-worthy experience in the comfort of your own bathroom.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ImageShowcase
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%BB%E5%9B%BE-3-ceO53MTzmC43sRkiKICFrr7ZRycnev.jpg"
            alt="Close-up of MakoCare brush head showing 90,000 ultra-fine bristles"
            label="90,000 Bristles"
            description="High-density gentle deep cleaning"
          />
          <ImageShowcase
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%BB%E5%9B%BE-4-NuEA9QWwChfbWh5SrwwuNLIL2JfgZg.jpg"
            alt="MakoCare brush motor power detail"
            label="Powerful Motor"
            description="Consistent rotation for an even cleanse"
          />
        </div>
      </div>
    </section>
  )
}

function ImageShowcase({
  src,
  alt,
  label,
  description,
}: {
  src: string
  alt: string
  label: string
  description: string
}) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="aspect-square relative">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          unoptimized
        />
        <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/20 transition-colors duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-background/70">
            {label}
          </p>
          <p className="mt-1 text-lg font-medium text-background">{description}</p>
        </div>
      </div>
    </div>
  )
}
