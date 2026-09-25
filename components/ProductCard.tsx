import Link from 'next/link'
import { Product } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import { formatPrice, optimizeImage } from '@/lib/format'
import InventoryBadge from '@/components/InventoryBadge'

export default function ProductCard({ product }: { product: Product }) {
  const name = getMetafieldValue(product.metadata?.name) || product.title
  const artifact = getMetafieldValue(product.metadata?.artifact_number)
  const price = product.metadata?.price
  const gallery = product.metadata?.gallery
  const firstImage = gallery && gallery.length > 0 ? gallery[0] : undefined
  const condition = getMetafieldValue(product.metadata?.condition)

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-concrete grain-overlay">
        {firstImage ? (
          <img
            src={optimizeImage(firstImage.imgix_url, 800, 1000)}
            alt={name}
            width={400}
            height={500}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="meta text-static">no image</span>
          </div>
        )}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.metadata?.inventory_status && (
            <InventoryBadge status={product.metadata.inventory_status} />
          )}
        </div>
        {condition && (
          <div className="absolute bottom-3 right-3">
            <span className="meta text-bone bg-void/70 px-2 py-1">{condition}</span>
          </div>
        )}
      </div>

      <div className="mt-3 flex items-start justify-between gap-2">
        <div className="min-w-0">
          {artifact && <p className="meta text-signal mb-1">{artifact}</p>}
          <h3 className="font-display font-semibold text-bone truncate group-hover:text-signal transition-colors">
            {name}
          </h3>
        </div>
        <p className="font-mono text-sm text-bone whitespace-nowrap">{formatPrice(price)}</p>
      </div>
    </Link>
  )
}