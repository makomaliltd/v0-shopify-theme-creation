"use client"

import { useState } from "react"
import { Star, Truck, RotateCcw, Shield, Check } from "lucide-react"
import { useCart } from "@/components/cart-provider"

const variants = [
  { id: "cream", name: "Cream", color: "bg-[#e8ddd0]" },
  { id: "sage", name: "Sage", color: "bg-[#c8d5c3]" },
  { id: "blush", name: "Blush", color: "bg-[#e0c8c0]" },
]

export function ProductInfo() {
  const [selectedVariant, setSelectedVariant] = useState(variants[0])
  const [addedToCart, setAddedToCart] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id: `makocare-brush-${selectedVariant.id}`,
      name: "MakoCare Electric Bath Brush",
      price: 89.99,
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%BB%E5%9B%BE-5-IC3v8itKrpHqzuVluKYr8zQ9xvOgwn.png",
      variant: selectedVariant.name,
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center gap-2">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-foreground text-foreground" />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">4.9 (2,847 reviews)</span>
      </div>

      <h1 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
        Electric Bath Brush
      </h1>

      <p className="mt-2 text-sm text-muted-foreground">
        Premium body care device with 6 interchangeable brush heads
      </p>

      <div className="mt-6 flex items-baseline gap-3">
        <span className="text-3xl font-bold text-foreground">$89.99</span>
        <span className="text-lg text-muted-foreground line-through">$129.99</span>
        <span className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
          -31%
        </span>
      </div>

      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Color
        </p>
        <div className="mt-3 flex gap-3">
          {variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setSelectedVariant(variant)}
              className={`group relative flex flex-col items-center gap-2 transition-all duration-300`}
              aria-label={`Select ${variant.name} color`}
            >
              <div
                className={`h-10 w-10 rounded-full ${variant.color} transition-all duration-300 ${
                  selectedVariant.id === variant.id
                    ? "ring-2 ring-foreground ring-offset-2 ring-offset-background scale-110"
                    : "hover:scale-105"
                }`}
              />
              <span
                className={`text-[10px] font-medium transition-colors ${
                  selectedVariant.id === variant.id
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {variant.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
          What{"'"}s Included
        </p>
        <ul className="flex flex-col gap-2">
          {[
            "Electric bath brush body",
            "3 functional brush heads",
            "USB-C charging base",
            "3 wall-mount accessories",
            "User manual & gift box",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-foreground/80">
              <Check className="h-3.5 w-3.5 flex-shrink-0 text-foreground" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleAddToCart}
        className={`mt-8 w-full rounded-full py-4 text-sm font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
          addedToCart
            ? "bg-foreground/80 text-background"
            : "bg-foreground text-background hover:bg-foreground/90"
        }`}
      >
        {addedToCart ? "Added to Cart" : "Add to Cart -- $89.99"}
      </button>

      <div className="mt-8 grid grid-cols-3 gap-4">
        {[
          { icon: Truck, label: "Free Shipping", sub: "Orders $50+" },
          { icon: RotateCcw, label: "60-Day Returns", sub: "Hassle-free" },
          { icon: Shield, label: "1 Year Warranty", sub: "Full coverage" },
        ].map((perk) => (
          <div key={perk.label} className="flex flex-col items-center gap-1.5 text-center">
            <perk.icon className="h-5 w-5 text-muted-foreground" />
            <span className="text-xs font-medium text-foreground">{perk.label}</span>
            <span className="text-[10px] text-muted-foreground">{perk.sub}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
