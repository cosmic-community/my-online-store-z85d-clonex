import Link from 'next/link'
import { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import { optimizeImage } from '@/lib/format'

export default function CategoryCard({ category }: { category: Category }) {
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)
  const cover = category.metadata?.cover_image

  return (
    <Link href={`/categories/${category.slug}`} className="group block relative overflow-hidden aspect-[16/10] bg-concrete grain-overlay">
      {cover ? (
        <img
          src={optimizeImage(cover.imgix_url, 1200, 750)}
          alt={name}
          width={600}
          height={375}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-90"
        />
      ) : (
        <div className="absolute inset-0 bg-concrete" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <span className="meta text-signal">archive wing</span>
        <h3 className="font-display font-black text-3xl tracking-tightest text-bone mt-1 uppercase">
          {name}
        </h3>
        {description && (
          <p className="text-static text-sm mt-2 max-w-xs line-clamp-2">{description}</p>
        )}
      </div>
    </Link>
  )
}