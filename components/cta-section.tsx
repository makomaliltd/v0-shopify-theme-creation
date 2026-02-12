"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function CtaSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-3xl bg-foreground transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center p-10 lg:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-background/50">
                Premium Gift Set
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-background md:text-4xl lg:text-5xl text-balance">
                The Perfect Gift for Someone Special
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-background/70 max-w-md">
                Complete set includes the electric brush, 3 specialized brush heads, charging base, and 3 wall-mount accessories. Beautifully packaged for gifting.
              </p>
              <Link
                href="/product"
                className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-medium text-foreground transition-all duration-300 hover:bg-background/90 hover:scale-105 active:scale-[0.98]"
              >
                Shop Now
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative aspect-square lg:aspect-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%BB%E5%9B%BE-5-IC3v8itKrpHqzuVluKYr8zQ9xvOgwn.png"
                alt="MakoCare premium gift set packaging"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
