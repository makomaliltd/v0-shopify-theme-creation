"use client"

import { useEffect, useState } from "react"
import { Star } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const testimonials = [
  {
    name: "Sophie L.",
    location: "London, UK",
    rating: 5,
    text: "I cannot believe the difference this brush makes. My skin has never felt so smooth and clean. It truly feels like a spa treatment at home.",
  },
  {
    name: "Marie D.",
    location: "Paris, France",
    rating: 5,
    text: "The dual handle design is genius. I can finally reach my entire back without struggling. The different brush heads are a lovely bonus.",
  },
  {
    name: "Aisha K.",
    location: "Dubai, UAE",
    rating: 5,
    text: "Purchased this as a gift and ended up buying one for myself. The battery lasts forever and the pressure sensor is incredibly smart.",
  },
  {
    name: "Emma R.",
    location: "New York, USA",
    rating: 5,
    text: "Premium quality from packaging to product. The massage head is my personal favorite. Worth every penny for the self-care routine upgrade.",
  },
  {
    name: "Yuki T.",
    location: "Tokyo, Japan",
    rating: 5,
    text: "So gentle yet effective. The foaming bristle head creates the most luxurious lather. My bathing routine has been completely transformed.",
  },
]

export function TestimonialsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={titleRef}
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Reviews
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
            Loved by Thousands
          </h2>
        </div>

        <div className="mt-16 relative overflow-hidden">
          <div className="flex flex-col items-center text-center">
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />
              ))}
            </div>

            <div className="relative h-24 md:h-20 flex items-center">
              <p
                key={currentIndex}
                className="max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl font-light italic animate-fade-in"
              >
                {`"${testimonials[currentIndex].text}"`}
              </p>
            </div>

            <div className="mt-8 animate-fade-in" key={`author-${currentIndex}`}>
              <p className="text-sm font-semibold text-foreground">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {testimonials[currentIndex].location}
              </p>
            </div>

            <div className="mt-8 flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === currentIndex
                      ? "w-8 bg-foreground"
                      : "w-1.5 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
