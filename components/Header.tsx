import Link from 'next/link'
import { getCategories } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'
import MobileNav from '@/components/MobileNav'

export default async function Header() {
  const categories = await getCategories()

  const navCategories = categories.slice(0, 5).map((cat) => ({
    slug: cat.slug,
    name: getMetafieldValue(cat.metadata?.name) || cat.title,
  }))

  return (
    <header className="sticky top-0 z-40 bg-void/90 backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display font-black text-xl tracking-tightest text-bone group-hover:text-signal transition-colors">
              THE ARCHIVE
            </span>
            <span className="hidden sm:inline-block meta text-static">est. ahmedabad</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="meta text-static hover:text-bone transition-colors">
              Home
            </Link>
            <Link href="/products" className="meta text-static hover:text-bone transition-colors">
              All Pieces
            </Link>
            <Link href="/categories" className="meta text-static hover:text-bone transition-colors">
              Wings
            </Link>
            {navCategories.slice(0, 3).map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="meta text-static hover:text-signal transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </nav>

          <MobileNav categories={navCategories} />
        </div>
      </div>
    </header>
  )
}