export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight mb-8">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          Last updated: February 2026
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using MakoCare's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">2. Product Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strive to provide accurate product descriptions, images, and specifications. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free. Colors may vary due to screen settings.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">3. Pricing & Payment</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All prices are listed in GBP (£) and include VAT where applicable. We reserve the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Modify prices at any time without prior notice</li>
              <li>Correct pricing errors on our website</li>
              <li>Cancel orders if a pricing error is discovered</li>
              <li>Refuse or limit orders from the same customer</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">4. Shipping & Delivery</h2>
            <p className="text-muted-foreground leading-relaxed">
              We offer free standard shipping on all UK orders. Delivery typically takes 5-9 business days. International shipping rates and times vary by destination. We are not responsible for delays caused by customs or shipping carriers.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">5. Returns & Refunds</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We offer a 30-day return policy for unused products in original packaging:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Items must be unused and in resalable condition</li>
              <li>Original packaging and accessories must be included</li>
              <li>Refunds will be processed within 7-10 business days</li>
              <li>Return shipping costs are the customer's responsibility</li>
              <li>Sale items and opened hygiene products cannot be returned</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">6. Product Warranty</h2>
            <p className="text-muted-foreground leading-relaxed">
              All MakoCare electric bath brushes come with a 12-month manufacturer's warranty covering defects in materials and workmanship. The warranty does not cover normal wear and tear, misuse, or damage from accidents.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">7. User Conduct</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Use our website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Post false, misleading, or malicious reviews</li>
              <li>Reproduce, distribute, or modify our content without permission</li>
              <li>Use automated systems to scrape or harvest data</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">8. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website, including text, graphics, logos, images, and software, is the property of MakoCare and protected by UK and international copyright laws. Unauthorized use is prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              MakoCare shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our products or services. Our total liability shall not exceed the amount you paid for the product.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">11. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-4 p-6 bg-secondary/30 rounded-xl">
              <p className="text-foreground">
                <strong>Email:</strong> support@makocare.co.uk<br />
                <strong>Phone:</strong> +44 20 1234 5678<br />
                <strong>WhatsApp:</strong> +44 77 0000 0000
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
