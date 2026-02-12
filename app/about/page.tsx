import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Elevating Your Daily Wellness Ritual
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            MakoCare was born from a simple belief: self-care should be effortless, luxurious, and accessible to everyone.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%AF%A6%E6%83%85-6-cXIYkotevhaIVDoWmPmDf6kXAjOkNF.jpg"
              alt="MakoCare electric bath brush"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">Our Story</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded in London, MakoCare emerged from the vision to transform everyday bathing into a therapeutic spa experience. We noticed how difficult it was to properly care for hard-to-reach areas, especially the back and shoulders.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our team of wellness experts and industrial designers spent years perfecting the ultimate electric bath brush - one that combines ergonomic design, premium materials, and intelligent technology to deliver spa-quality results at home.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today, MakoCare is trusted by thousands across the UK who have made our brush an essential part of their self-care routine.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary/30 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Quality First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every product is crafted with premium materials and undergoes rigorous testing to ensure lasting quality.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Sustainability</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to eco-friendly practices, from packaging to product design, minimizing our environmental impact.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background mb-6">
                <span className="text-2xl">💙</span>
              </div>
              <h3 className="font-semibold text-xl mb-3">Customer Care</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your satisfaction is our priority. We're here to support your wellness journey every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-balance">
          Ready to Transform Your Bathing Experience?
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
          Join thousands who have elevated their daily wellness ritual with MakoCare.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/product">Shop Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
