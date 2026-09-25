// app/products/[slug]/page.tsx
import { getProduct, getReviewsByProduct, getMetafieldValue } from '@/lib/cosmic'
import { formatPrice } from '@/lib/format'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ProductGallery from '@/components/ProductGallery'
import InventoryBadge from '@/components/InventoryBadge'
import ReviewCard from '@/components/ReviewCard'
import Link from 'next/link'

export const revalidate = 60

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = await getProduct(slug)
  if (!product) return { title: 'Not Found — THE ARCHIVE' }
  const name = getMetafieldValue(product.metadata?.name) || product.title
  return {
    title: `${name} — THE ARCHIVE`,
    description: getMetafieldValue(product.metadata?.description).slice(0, 160),
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  const reviews = await getReviewsByProduct(product.id)

  const name = getMetafieldValue(product.metadata?.name) || product.title
  const artifact = getMetafieldValue(product.metadata?.artifact_number)
  const description = getMetafieldValue(product.metadata?.description)
  const condition = getMetafieldValue(product.metadata?.condition)
  const price = product.metadata?.price
  const gallery = product.metadata?.gallery || []
  const category = product.metadata?.category

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/products" className="meta text-static hover:text-bone transition-colors">
        ← back to archive
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
        <ProductGallery images={gallery} alt={name} />

        <div>
          <div className="flex items-center gap-3 flex-wrap">
            {artifact && <span className="meta text-signal">{artifact}</span>}
            {category && (
              <Link
                href={`/categories/${category.slug}`}
                className="meta text-static hover:text-bone transition-colors"
              >
                / {getMetafieldValue(category.metadata?.name) || category.title}
              </Link>
            )}
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl tracking-tightest uppercase text-bone mt-4">
            {name}
          </h1>

          <p className="font-mono text-2xl text-bone mt-4">{formatPrice(price)}</p>

          <div className="flex items-center gap-3 mt-6 flex-wrap">
            {product.metadata?.inventory_status && (
              <InventoryBadge status={product.metadata.inventory_status} />
            )}
            {condition && (
              <span className="meta border border-archive-gold/40 text-archive-gold px-2 py-1">
                {condition}
              </span>
            )}
          </div>

          {description && (
            <div className="mt-8 border-t border-line pt-8">
              <h2 className="meta text-static mb-3">artifact notes</h2>
              <p className="text-bone leading-relaxed whitespace-pre-line">{description}</p>
            </div>
          )}

          <div className="mt-8 border-t border-line pt-8">
            <p className="meta text-static mb-4">
              vintage — single unit — not restocked
            </p>
            <button className="w-full bg-signal text-void font-display font-bold py-4 hover:bg-bone transition-colors meta">
              Claim This Artifact
            </button>
          </div>
        </div>
      </div>

      {reviews.length > 0 && (
        <section className="mt-24 border-t border-line pt-12">
          <h2 className="font-display font-black text-3xl tracking-tightest uppercase text-bone mb-8">
            Street Cast
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}