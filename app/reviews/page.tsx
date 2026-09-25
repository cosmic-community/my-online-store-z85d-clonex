import { getReviews } from '@/lib/cosmic'
import ReviewCard from '@/components/ReviewCard'

export const revalidate = 60

export const metadata = {
  title: 'Street Cast — THE ARCHIVE',
  description: 'What the scene is saying.',
}

export default async function ReviewsPage() {
  const reviews = await getReviews()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12 border-b border-line pb-8">
        <p className="meta text-signal mb-3">word from the scene</p>
        <h1 className="font-display font-black text-5xl sm:text-6xl tracking-tightest uppercase text-bone">
          Street Cast
        </h1>
        <p className="meta text-static mt-4">{reviews.length} voices on record</p>
      </div>

      {reviews.length === 0 ? (
        <p className="meta text-static py-24 text-center">no voices on record yet</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  )
}