import { ProductGallery } from "@/components/product-gallery"
import { ProductInfo } from "@/components/product-info"
import { ProductDetails } from "@/components/product-details"
import { HowToUseSection } from "@/components/how-to-use-section"

export const metadata = {
  title: "MakoCare Electric Bath Brush | Premium Body Care",
  description:
    "The MakoCare electric bath brush features 90,000 ultra-fine bristles, 6 interchangeable heads, and a dual handle design for the ultimate spa experience.",
}

export default function ProductPage() {
  return (
    <div className="pt-20">
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <ProductGallery />
          <ProductInfo />
        </div>
      </section>
      <ProductDetails />
      <HowToUseSection />
    </div>
  )
}
