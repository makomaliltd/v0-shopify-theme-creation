import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FaqPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            Find answers to common questions about MakoCare products and services.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-3xl px-6 lg:px-8 py-8">
        <Accordion type="single" collapsible className="space-y-4">
          {/* Product Questions */}
          <AccordionItem value="item-1" className="border rounded-2xl px-6 bg-card">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              How does the MakoCare electric bath brush work?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              The MakoCare brush features a powerful motor with dual-speed settings and rotating brush heads. Simply attach your desired brush head, apply your favorite body wash or soap, turn on the device, and gently move it across your skin. The intelligent pressure sensor automatically adjusts speed to prevent excessive pressure.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border rounded-2xl px-6 bg-card">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              Is the brush waterproof?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Yes, the MakoCare electric bath brush is IPX7 waterproof rated, making it completely safe to use in the shower or bath. However, avoid submerging the charging port in water.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border rounded-2xl px-6 bg-card">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              What brush heads are included?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Each MakoCare set includes 6 specialized brush heads: Deep Cleansing Brush (90,000 bristles), Exfoliating Brush, Massage Brush, Gentle Brush, Long-bristle Foam Brush, and Plant Fiber Scrubbing Brush. Each is designed for different skin types and needs.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border rounded-2xl px-6 bg-card">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              How long does the battery last?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              On a full charge, the battery lasts up to 60 days with regular use (10-15 minutes per session). Charging takes approximately 2-3 hours via USB-C.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border rounded-2xl px-6 bg-card">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              How often should I replace the brush heads?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              We recommend replacing brush heads every 3-4 months for optimal hygiene and performance. Replacement heads are available separately on our Brush Heads page.
            </AccordionContent>
          </AccordionItem>

          {/* Shipping & Returns */}
          <AccordionItem value="item-6" className="border rounded-2xl px-6 bg-card">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              Do you offer free shipping?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Yes! We offer free standard shipping on all orders within the UK. Orders typically arrive within 3-5 business days. Express shipping is available for an additional fee.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border rounded-2xl px-6 bg-card">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              What is your return policy?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              We offer a 60-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can return it for a full refund within 60 days of delivery. The product must be in its original condition with all accessories included.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="border rounded-2xl px-6 bg-card">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              Do you ship internationally?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Currently, we ship within the United Kingdom only. International shipping is coming soon. Sign up for our newsletter to be notified when we expand to your region.
            </AccordionContent>
          </AccordionItem>

          {/* Usage & Care */}
          <AccordionItem value="item-9" className="border rounded-2xl px-6 bg-card">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              Can I use the brush on sensitive skin?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Yes! We include a Gentle Brush head specifically designed for sensitive skin. Start with the lowest speed setting and always use gentle, circular motions. If you have any skin conditions, consult with your dermatologist before use.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10" className="border rounded-2xl px-6 bg-card">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              How do I clean and maintain my brush?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              After each use, rinse the brush head thoroughly under warm water and allow it to air dry. Once a week, remove the brush head and clean the attachment point. Store in a dry place away from direct sunlight.
            </AccordionContent>
          </AccordionItem>

          {/* Warranty & Support */}
          <AccordionItem value="item-11" className="border rounded-2xl px-6 bg-card">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              What warranty do you offer?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              All MakoCare products come with a 2-year manufacturer warranty covering defects in materials and workmanship. This does not cover normal wear and tear or damage from misuse.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-12" className="border rounded-2xl px-6 bg-card">
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              How can I contact customer support?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              You can reach our customer support team via email at support@makocare.co.uk or by phone at +44 20 1234 5678 (Mon-Fri, 9am-6pm GMT). We typically respond within 24 hours.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-3xl px-6 lg:px-8 py-16 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
          Still Have Questions?
        </h2>
        <p className="text-muted-foreground mb-8">
          Our support team is here to help you with any additional questions.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>
  )
}
