"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { Check } from "lucide-react"

const brushHeads = [
  {
    id: "deep-cleansing",
    name: "Deep Cleansing Brush Head",
    price: 12.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%BB%E5%9B%BE-3-ceO53MTzmC43sRkiKICFrr7ZRycnev.jpg",
    features: ["90,000 ultra-fine bristles", "Deep pore cleansing", "Gentle on skin"],
    description: "Our most popular brush head featuring 90,000 ultra-fine bristles for deep, gentle cleansing.",
  },
  {
    id: "exfoliating",
    name: "Exfoliating Brush Head",
    price: 12.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%AF%A6%E6%83%85-8-J0lZWOM5sZfvSLKwjrKVcb5RhX2uWh.jpg",
    features: ["Removes dead skin cells", "Smooth texture", "Weekly use recommended"],
    description: "Designed to gently exfoliate and reveal smoother, brighter skin.",
  },
  {
    id: "massage",
    name: "Massage Brush Head",
    price: 12.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%BB%E5%9B%BE-2-VOGRPhR6seW9lpy14LX4cdfcSa052M.jpg",
    features: ["Relieves muscle tension", "Improves circulation", "Spa-like experience"],
    description: "Therapeutic massage nodes that help relieve tension and improve blood flow.",
  },
  {
    id: "gentle",
    name: "Gentle Brush Head",
    price: 12.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%AF%A6%E6%83%85-25-cMfDWdsH2TRlxFTBNaEtYZtDAWTNtn.jpg",
    features: ["For sensitive skin", "Extra soft bristles", "Daily use safe"],
    description: "Ultra-soft bristles perfect for sensitive skin and daily gentle cleansing.",
  },
  {
    id: "foam",
    name: "Long-Bristle Foam Brush",
    price: 12.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%BB%E5%9B%BE-4-NuEA9QWwChfbWh5SrwwuNLIL2JfgZg.jpg",
    features: ["Creates rich lather", "Long bristles", "Luxurious foam"],
    description: "Extended bristles that create a luxurious, rich foam for an indulgent cleansing experience.",
  },
  {
    id: "plant-fiber",
    name: "Plant Fiber Scrubbing Brush",
    price: 12.99,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%BB%E5%9B%BE-5-IC3v8itKrpHqzuVluKYr8zQ9xvOgwn.png",
    features: ["Natural plant fibers", "Eco-friendly", "Effective scrubbing"],
    description: "Made from natural plant fibers for eco-conscious, effective body scrubbing.",
  },
]

const bundles = [
  {
    id: "complete-set",
    name: "Complete Brush Head Set",
    price: 59.99,
    originalPrice: 77.94,
    savings: 17.95,
    count: 6,
    description: "All 6 brush heads for the ultimate versatility",
  },
  {
    id: "essentials",
    name: "Essentials Bundle (3 Pack)",
    price: 32.99,
    originalPrice: 38.97,
    savings: 5.98,
    count: 3,
    description: "Deep Cleansing, Gentle, and Massage brush heads",
  },
]

export default function BrushHeadsPage() {
  const { addItem } = useCart()

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Replacement Brush Heads
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            Keep your MakoCare brush performing at its best with our premium replacement heads. Each designed for specific skin care needs.
          </p>
        </div>
      </section>

      {/* Bundles Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-center">
          Value Bundles
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          {bundles.map((bundle) => (
            <div
              key={bundle.id}
              className="relative bg-card border-2 border-foreground rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-1 rounded-full text-xs font-semibold">
                Save £{bundle.savings.toFixed(2)}
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">{bundle.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{bundle.description}</p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold">£{bundle.price}</span>
                <span className="text-sm text-muted-foreground line-through">
                  £{bundle.originalPrice}
                </span>
              </div>
              <Button
                onClick={() =>
                  addItem({
                    id: bundle.id,
                    name: bundle.name,
                    price: bundle.price,
                    quantity: 1,
                    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%BB%E5%9B%BE-5-IC3v8itKrpHqzuVluKYr8zQ9xvOgwn.png",
                  })
                }
                className="w-full rounded-full"
                size="lg"
              >
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Individual Brush Heads */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8 text-center">
          Individual Brush Heads
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {brushHeads.map((head) => (
            <div
              key={head.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary/30">
                <Image
                  src={head.image}
                  alt={head.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{head.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{head.description}</p>
                <ul className="space-y-2 mb-6">
                  {head.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">£{head.price}</span>
                  <Button
                    onClick={() =>
                      addItem({
                        id: head.id,
                        name: head.name,
                        price: head.price,
                        quantity: 1,
                        image: head.image,
                      })
                    }
                    className="rounded-full"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-secondary/30 py-16 mt-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            When to Replace Your Brush Heads
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            For optimal hygiene and performance, we recommend replacing your brush heads every 3-4 months. If you notice bristles fraying or becoming discolored, it's time for a replacement.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="font-semibold mb-2">Compatible</div>
              <p className="text-muted-foreground">Works with all MakoCare electric brush models</p>
            </div>
            <div>
              <div className="font-semibold mb-2">Easy to Clean</div>
              <p className="text-muted-foreground">Rinse under water after each use</p>
            </div>
            <div>
              <div className="font-semibold mb-2">Quick Change</div>
              <p className="text-muted-foreground">Snap on/off design for instant switching</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
