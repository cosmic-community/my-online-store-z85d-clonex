import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden scanlines grain-overlay border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 relative z-10">
        <p className="meta text-signal mb-6">arc — ahmedabad streetwear archive</p>
        <h1 className="font-display font-black text-hero tracking-tightest leading-[0.85] uppercase text-bone">
          Enter
          <br />
          The <span className="text-signal">Archive</span>
        </h1>
        <p className="mt-8 max-w-xl text-static text-base sm:text-lg leading-relaxed">
          Not a thrift store. A digital streetwear museum. Every piece curated,
          numbered, and rare — Ahmedabad's streetwear culture destination.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-signal text-void font-display font-bold px-8 py-4 hover:bg-bone transition-colors meta"
          >
            Browse Artifacts →
          </Link>
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 border border-line text-bone font-display font-bold px-8 py-4 hover:border-signal hover:text-signal transition-colors meta"
          >
            Archive Wings
          </Link>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-concrete/40 to-transparent pointer-events-none" />
    </section>
  )
}