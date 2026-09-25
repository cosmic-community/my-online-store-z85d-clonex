import { Product } from '@/types'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'

export default function FeaturedDrop({ products }: { products: Product[] }) {
  if (!products || products.length === 0) return null

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="meta text-signal mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-signal animate-pulse" />
            live drop
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tightest uppercase text-bone">
            Featured Pieces
          </h2>
        </div>
        <Link href="/products" className="meta text-static hover:text-bone transition-colors hidden sm:block">
          view all →
        </Link>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}