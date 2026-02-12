"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { Check, Gift, Package, Sparkles } from "lucide-react"

const giftSets = [
  {
    id: "ultimate-spa",
    name: "Ultimate Spa Experience Set",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%BB%E5%9B%BE-5-IC3v8itKrpHqzuVluKYr8zQ9xvOgwn.png",
    includes: [
      "MakoCare Electric Bath Brush (Cream)",
      "All 6 Premium Brush Heads",
      "Luxury Gift Box Packaging",
      "USB-C Charging Cable",
      "Premium Travel Pouch",
      "Instruction Manual & Care Guide",
    ],
    perfect: "Perfect for birthdays, anniversaries, or special celebrations",
    badge: "Best Value",
  },
  {
    id: "wellness-starter",
    name: "Wellness Starter Set",
    price: 89.99,
    originalPrice: 109.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%BB%E5%9B%BE-1-16JJXhKJWVt725PFojH51UwDWL9uwa.jpg",
    includes: [
      "MakoCare Electric Bath Brush",
      "3 Essential Brush Heads (Deep Cleansing, Gentle, Massage)",
      "Gift Box Packaging",
      "USB-C Charging Cable",
      "Quick Start Guide",
    ],
    perfect: "Ideal for introducing someone to premium self-care",
    badge: "Most Popular",
  },
  {
    id: "luxury-duo",
    name: "Luxury Duo Gift Set",
    price: 229.99,
    originalPrice: 279.98,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%BB%E5%9B%BE-2-VOGRPhR6seW9lpy14LX4cdfcSa052M.jpg",
    includes: [
      "2x MakoCare Electric Bath Brushes (Cream & Sage)",
      "12 Brush Heads Total (6 per brush)",
      "Premium Double Gift Box",
      "2x USB-C Charging Cables",
      "2x Travel Pouches",
      "Personalized Gift Message Card",
    ],
    perfect: "Perfect for couples or as a premium corporate gift",
    badge: "Premium",
  },
]

export default function GiftSetsPage() {
  const { addItem } = useCart()

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/20 to-background py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6">
              <Gift className="h-8 w-8 text-foreground" />
              <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Premium Gift Sets
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Give the Gift of Wellness
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Thoughtfully curated gift sets featuring our premium electric bath brush and accessories. Beautifully packaged and ready to delight.
            </p>
          </div>
        </div>
      </section>

      {/* Gift Sets */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {giftSets.map((set, index) => (
            <div
              key={set.id}
              className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative aspect-square rounded-2xl overflow-hidden bg-secondary/30 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={set.image}
                  alt={set.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute top-4 left-4 bg-foreground text-background px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  {set.badge}
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                  {set.name}
                </h2>
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-4xl font-bold">£{set.price}</span>
                  <span className="text-xl text-muted-foreground line-through">
                    £{set.originalPrice}
                  </span>
                  <span className="text-sm font-semibold text-foreground bg-secondary px-3 py-1 rounded-full">
                    Save £{(set.originalPrice - set.price).toFixed(2)}
                  </span>
                </div>

                <div className="bg-secondary/30 p-4 rounded-xl mb-6 flex items-start gap-3">
                  <Package className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{set.perfect}</p>
                </div>

                <div className="mb-8">
                  <h3 className="font-semibold mb-4">What's Included:</h3>
                  <ul className="space-y-3">
                    {set.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() =>
                    addItem({
                      id: set.id,
                      name: set.name,
                      price: set.price,
                      quantity: 1,
                      image: set.image,
                    })
                  }
                  size="lg"
                  className="rounded-full w-full sm:w-auto"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary/30 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-center mb-12">
            Why Choose MakoCare Gift Sets?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background mb-4">
                <Gift className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Premium Packaging</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every gift set comes in luxury packaging, ready to present without additional wrapping.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background mb-4">
                <Package className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Free Shipping</h3>
              <p className="text-muted-foreground leading-relaxed">
                All gift sets include complimentary express shipping within the UK.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background mb-4">
                <Sparkles className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-xl mb-3">Gift Message</h3>
              <p className="text-muted-foreground leading-relaxed">
                Add a personalized message card to make your gift extra special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-3xl px-6 lg:px-8 py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          Need Help Choosing?
        </h2>
        <p className="text-muted-foreground mb-8">
          Our team is here to help you select the perfect gift set. Contact us for personalized recommendations.
        </p>
        <Button asChild variant="outline" size="lg" className="rounded-full">
          <a href="/contact">Get in Touch</a>
        </Button>
      </section>
    </div>
  )
}
