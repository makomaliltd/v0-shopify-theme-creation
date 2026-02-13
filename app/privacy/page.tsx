export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          Last updated: February 2026
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              At MakoCare, we collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Create an account or make a purchase</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact our customer support team</li>
              <li>Leave a product review</li>
              <li>Participate in surveys or promotions</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Process and fulfill your orders</li>
              <li>Send you order confirmations and shipping updates</li>
              <li>Respond to your questions and provide customer support</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our products and services</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">3. Data Protection & Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption protocols for all payment transactions.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">4. Cookies & Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand customer behavior. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">5. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We work with trusted third-party service providers to process payments, fulfill orders, and deliver marketing communications. These providers are contractually obligated to protect your data and use it only for specified purposes.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">6. Your Rights (GDPR)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Under UK GDPR, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">7. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not intended for children under 16. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-secondary/30 rounded-xl">
              <p className="text-foreground">
                <strong>Email:</strong> privacy@makocare.co.uk<br />
                <strong>Phone:</strong> +44 20 1234 5678<br />
                <strong>Address:</strong> 123 Wellness Street, London, UK W1A 1AA
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
