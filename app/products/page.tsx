import { getProducts } from '@/lib/cosmic'
import ProductGrid from '@/components/ProductGrid'

export const revalidate = 60

export const metadata = {
  title: 'All Pieces — THE ARCHIVE',
  description: 'Browse every curated artifact in the archive.',
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12 border-b border-line pb-8">
        <p className="meta text-signal mb-3">the full archive</p>
        <h1 className="font-display font-black text-5xl sm:text-6xl tracking-tightest uppercase text-bone">
          All Pieces
        </h1>
        <p className="meta text-static mt-4">{products.length} artifacts on record</p>
      </div>
      <ProductGrid products={products} />
    </div>
  )
}