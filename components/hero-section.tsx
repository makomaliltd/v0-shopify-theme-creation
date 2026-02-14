"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://files.catbox.moe/7kxiva.jpg"
          alt="MakoCare Electric Bath Brush in use"
          fill
          className={`object-cover transition-transform duration-[8000ms] ease-out ${loaded ? "scale-105" : "scale-100"
            }`}
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 lg:px-8">
        <div className="max-w-2xl">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.3em] text-background/70 transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Premium Body Care
          </p>

          <h1
            className={`mt-6 font-serif text-5xl font-bold leading-tight text-background md:text-7xl lg:text-8xl transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <span className="text-balance">Elevate Your Bathing Ritual</span>
          </h1>

          <p
            className={`mt-6 max-w-lg text-base leading-relaxed text-background/80 md:text-lg transition-all duration-700 delay-[400ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            The electric body brush with 90,000 ultra-fine bristles and 6 interchangeable heads. Your at-home spa experience, reimagined.
          </p>

          <div
            className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 delay-[600ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            <Link
              href="/product"
              className="group flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-medium text-foreground transition-all duration-300 hover:bg-background/90 hover:scale-105 active:scale-[0.98]"
            >
              Shop Now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/#features"
              className="rounded-full border border-background/30 px-8 py-4 text-sm font-medium text-background transition-all duration-300 hover:bg-background/10 hover:border-background/60"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-background/50">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-[1px] bg-background/30 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
