import { getCategories } from '@/lib/cosmic'
import CategoryCard from '@/components/CategoryCard'

export const revalidate = 60

export const metadata = {
  title: 'Archive Wings — THE ARCHIVE',
  description: 'Explore the archive by wing.',
}

export default async function CategoriesPage() {
  const categories = await getCategories()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12 border-b border-line pb-8">
        <p className="meta text-signal mb-3">navigate the museum</p>
        <h1 className="font-display font-black text-5xl sm:text-6xl tracking-tightest uppercase text-bone">
          Archive Wings
        </h1>
      </div>

      {categories.length === 0 ? (
        <p className="meta text-static py-24 text-center">no wings on record</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      )}
    </div>
  )
}