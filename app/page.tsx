import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { VideoDemoSection } from "@/components/video-demo-section"
import { BrushHeadsSection } from "@/components/brush-heads-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CustomerReviewsSection } from "@/components/customer-reviews-section"
import { CtaSection } from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <VideoDemoSection />
      <BrushHeadsSection />
      <TestimonialsSection />
      <CustomerReviewsSection />
      <CtaSection />
    </>
  )
}
