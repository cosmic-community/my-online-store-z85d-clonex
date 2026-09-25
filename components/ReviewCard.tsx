import { Review } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import StarRating from '@/components/StarRating'

export default function ReviewCard({ review }: { review: Review }) {
  const name = getMetafieldValue(review.metadata?.reviewer_name) || 'anonymous'
  const text = getMetafieldValue(review.metadata?.review)
  const rating = review.metadata?.rating ?? 0
  const product = review.metadata?.product

  return (
    <div className="border border-line bg-concrete p-6 grain-overlay">
      <div className="flex items-center justify-between mb-4">
        <StarRating rating={Number(rating)} />
        <span className="meta text-static">{String(rating)}/5</span>
      </div>
      {text && <p className="text-bone text-sm leading-relaxed mb-4">"{text}"</p>}
      <div className="border-t border-line pt-4 flex items-center justify-between">
        <span className="font-display font-semibold text-bone">{name}</span>
        {product && (
          <span className="meta text-signal truncate max-w-[120px]">
            {getMetafieldValue(product.metadata?.name) || product.title}
          </span>
        )}
      </div>
    </div>
  )
}