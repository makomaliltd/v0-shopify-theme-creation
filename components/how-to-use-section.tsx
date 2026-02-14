"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const usageSteps = [
  {
    title: "Daily Bathing Routine",
    subtitle: "Take a bath",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d1810b22c051487e7fc7ffe63a1f81e4-LDSCANVethxNbFHDJt5Q88ldmRZ9cr.jpg",
    alt: "Daily bathing process with exfoliating brush head",
    steps: [
      "First take a hot shower for about 1 to 2 minutes",
      "Replace with the exfoliating brush head and wet with water",
      "Turn it on, and it will automatically start exfoliating, starting from your neck, then chest, and finally abdomen",
      "Open both handles and rub your back, focusing on cleaning the shoulder blades, spleen bones, and spine area",
      "Finally, rub the buttocks to the legs, and stay a little longer on the joint area",
      "Rinse off the mud with hot water"
    ]
  },
  {
    title: "Bath Time Cleansing",
    subtitle: "Bath",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0785528cdc7e1e2e8c46715def9922a2-4326ycRsmtiQVINOKTdF1MZrSlwaE8.jpg",
    alt: "Bath process with foaming long-bristled brush head",
    steps: [
      "Replace with the foaming long-bristled brush head",
      "Squeeze an appropriate amount of shower gel onto the bristle area",
      "Turn it on and it will automatically foam when it fits the skin",
      "Starting from the neck, then the chest, and finally the abdomen, the device will automatically begin scrubbing",
      "Then, open the dual handles and scrub your back",
      "Finally, scrub the buttocks and legs",
      "Rinse off the foam with hot water"
    ]
  },
  {
    title: "Beautify & Massage",
    subtitle: "Beautify skin",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/925fc312b711a7696ac3fa806f18aa5c-57tgijbQZw4g5TGrnV1dE5nEDkQjGt.jpg",
    alt: "Skin beautifying with massage brush head",
    steps: [
      "Replace with the skin-beautifying massage brush head",
      "How to use body lotion: squeeze the lotion on the outer circular convex points",
      "How to use essential oil: squeeze the essential oil in the middle liquid storage area",
      "Turn on the machine and start applying the target area automatically and evenly",
      "Open the double handle to help apply on the back",
      "Stay for a short time in the application area (so that the skin care products can be absorbed under the massage effect of the silicone bumps)"
    ]
  }
]

export function HowToUseSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl text-balance">
            How to Use Your MakoCare Brush
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Follow these simple routines to get the most from your electric bath brush
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {usageSteps.map((usage, index) => (
            <UsageStep key={index} usage={usage} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

function UsageStep({
  usage,
  reverse,
}: {
  usage: (typeof usageSteps)[0]
  reverse: boolean
}) {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className={`${reverse ? "lg:order-2" : ""}`}>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-card">
          <Image
            src={usage.image}
            alt={usage.alt}
            fill
            className="object-contain p-4"
            unoptimized
          />
        </div>
      </div>

      <div className={`${reverse ? "lg:order-1" : ""}`}>
        <div className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
          {usage.subtitle}
        </div>
        <h3 className="font-serif text-3xl font-bold text-foreground mb-6">
          {usage.title}
        </h3>
        <ol className="flex flex-col gap-4">
          {usage.steps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                {i + 1}
              </div>
              <p className="text-base leading-relaxed text-muted-foreground pt-0.5">
                {step}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
