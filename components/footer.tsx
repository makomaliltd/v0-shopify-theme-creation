import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <h3 className="font-serif text-2xl font-bold tracking-tight">MakoCare</h3>
            <p className="mt-4 text-sm text-background/60 leading-relaxed">
              Elevate your bathing ritual. Premium electric body brushes designed for the ultimate spa experience at home.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-background/40">
              Shop
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/product" className="text-sm text-background/70 hover:text-background transition-colors duration-300">
                  Electric Bath Brush
                </Link>
              </li>
              <li>
                <Link href="/#brush-heads" className="text-sm text-background/70 hover:text-background transition-colors duration-300">
                  Brush Heads
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-sm text-background/70 hover:text-background transition-colors duration-300">
                  Gift Sets
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-background/40">
              Company
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link href="/#" className="text-sm text-background/70 hover:text-background transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-sm text-background/70 hover:text-background transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/#" className="text-sm text-background/70 hover:text-background transition-colors duration-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-background/40">
              Newsletter
            </h4>
            <p className="mt-4 text-sm text-background/60 leading-relaxed">
              Join our community for exclusive offers and wellness tips.
            </p>
            <form className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full border border-background/20 bg-transparent px-4 py-2.5 text-sm text-background placeholder:text-background/40 focus:outline-none focus:border-background/50 transition-colors"
              />
              <button
                type="submit"
                className="rounded-full bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-background/90 transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            2026 MakoCare. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/#" className="text-xs text-background/40 hover:text-background/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/#" className="text-xs text-background/40 hover:text-background/70 transition-colors">
              Terms of Service
            </Link>
            <Link href="/#" className="text-xs text-background/40 hover:text-background/70 transition-colors">
              Shipping
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
