// app/categories/[slug]/page.tsx
import { getCategory, getProductsByCategory, getMetafieldValue } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ProductGrid from '@/components/ProductGrid'
import Link from 'next/link'

export const revalidate = 60

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategory(slug)
  if (!category) return { title: 'Not Found — THE ARCHIVE' }
  const name = getMetafieldValue(category.metadata?.name) || category.title
  return {
    title: `${name} Wing — THE ARCHIVE`,
    description: getMetafieldValue(category.metadata?.description).slice(0, 160),
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    notFound()
  }

  const products = await getProductsByCategory(category.id)
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/categories" className="meta text-static hover:text-bone transition-colors">
        ← all wings
      </Link>

      <div className="mb-12 border-b border-line pb-8 mt-6">
        <p className="meta text-signal mb-3">archive wing</p>
        <h1 className="font-display font-black text-5xl sm:text-6xl tracking-tightest uppercase text-bone">
          {name}
        </h1>
        {description && (
          <p className="text-static mt-4 max-w-2xl leading-relaxed">{description}</p>
        )}
        <p className="meta text-static mt-4">{products.length} artifacts</p>
      </div>

      <ProductGrid products={products} />
    </div>
  )
}