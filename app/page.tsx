import { getFeaturedProducts, getProducts, getCategories } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import FeaturedDrop from '@/components/FeaturedDrop'
import CategoryCard from '@/components/CategoryCard'
import ProductGrid from '@/components/ProductGrid'
import Link from 'next/link'

export const revalidate = 60

export default async function HomePage() {
  const [featured, allProducts, categories] = await Promise.all([
    getFeaturedProducts(),
    getProducts(),
    getCategories(),
  ])

  const latest = allProducts.slice(0, 8)

  return (
    <div>
      <Hero />
      <Manifesto />

      <FeaturedDrop products={featured} />

      {categories.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tightest uppercase text-bone">
              Archive Wings
            </h2>
            <Link href="/categories" className="meta text-static hover:text-bone transition-colors hidden sm:block">
              all wings →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tightest uppercase text-bone">
            Latest In
          </h2>
          <Link href="/products" className="meta text-static hover:text-bone transition-colors hidden sm:block">
            view all →
          </Link>
        </div>
        <ProductGrid products={latest} />
      </section>
    </div>
  )
}