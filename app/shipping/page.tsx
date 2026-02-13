import { Truck, Package, Clock, Shield } from 'lucide-react'

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/30 to-background py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Shipping Information
          </h1>
          <p className="text-xl text-muted-foreground text-balance">
            Fast, free, and secure delivery to your doorstep
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">On all UK orders</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">5-9 Days</h3>
              <p className="text-sm text-muted-foreground">Standard delivery</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Track Your Order</h3>
              <p className="text-sm text-muted-foreground">Real-time updates</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Secure Packaging</h3>
              <p className="text-sm text-muted-foreground">Safe delivery guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-3xl font-semibold mb-6">UK Shipping</h2>
              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <div>
                      <h3 className="font-semibold">Standard Delivery</h3>
                      <p className="text-sm text-muted-foreground">Royal Mail / DPD</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">FREE</p>
                      <p className="text-sm text-muted-foreground">5-9 business days</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Express Delivery</h3>
                      <p className="text-sm text-muted-foreground">DPD Next Day</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">£5.99</p>
                      <p className="text-sm text-muted-foreground">1-2 business days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-semibold mb-6">International Shipping</h2>
              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <div>
                      <h3 className="font-semibold">Europe</h3>
                      <p className="text-sm text-muted-foreground">EU Countries</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">£9.99</p>
                      <p className="text-sm text-muted-foreground">7-14 business days</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <div>
                      <h3 className="font-semibold">United States & Canada</h3>
                      <p className="text-sm text-muted-foreground">North America</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">£14.99</p>
                      <p className="text-sm text-muted-foreground">10-20 business days</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">Rest of World</h3>
                      <p className="text-sm text-muted-foreground">All other countries</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">£19.99</p>
                      <p className="text-sm text-muted-foreground">15-30 business days</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                * Customs fees and import duties may apply for international orders and are the responsibility of the customer.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-semibold mb-6">Order Processing</h2>
              <div className="bg-secondary/30 rounded-xl p-8">
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Order Confirmation</h4>
                      <p className="text-sm text-muted-foreground">
                        You'll receive an email confirmation immediately after placing your order
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Processing (1-2 business days)</h4>
                      <p className="text-sm text-muted-foreground">
                        Orders are carefully prepared and quality checked
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Dispatch Notification</h4>
                      <p className="text-sm text-muted-foreground">
                        You'll receive a tracking number via email once shipped
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 text-sm font-semibold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Delivery</h4>
                      <p className="text-sm text-muted-foreground">
                        Track your package in real-time until it arrives at your door
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-3xl font-semibold mb-6">FAQs</h2>
              <div className="space-y-4">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-2">Do you ship to my country?</h3>
                  <p className="text-sm text-muted-foreground">
                    We ship worldwide! If your country isn't listed at checkout, please contact us via WhatsApp and we'll arrange delivery.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-2">Can I track my order?</h3>
                  <p className="text-sm text-muted-foreground">
                    Yes! Once your order ships, you'll receive a tracking number via email. You can track your package in real-time.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-2">What if I'm not home during delivery?</h3>
                  <p className="text-sm text-muted-foreground">
                    Our carriers will leave a delivery card with instructions. You can arrange redelivery or collection at your local depot.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-semibold mb-2">My order hasn't arrived. What should I do?</h3>
                  <p className="text-sm text-muted-foreground">
                    If your order hasn't arrived within the expected timeframe, please contact us via WhatsApp or email and we'll investigate immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
