'use client'

import Link from 'next/link'
import { useState } from 'react'

interface NavCategory {
  slug: string
  name: string
}

export default function MobileNav({ categories }: { categories: NavCategory[] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="text-bone p-2"
      >
        <div className="space-y-1.5">
          <span className={`block w-6 h-0.5 bg-bone transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-bone transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-bone transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 top-16 bg-void z-50 px-6 py-8">
          <nav className="flex flex-col gap-6">
            <Link href="/" onClick={() => setOpen(false)} className="font-display text-3xl font-bold text-bone">
              Home
            </Link>
            <Link href="/products" onClick={() => setOpen(false)} className="font-display text-3xl font-bold text-bone">
              All Pieces
            </Link>
            <Link href="/categories" onClick={() => setOpen(false)} className="font-display text-3xl font-bold text-bone">
              Wings
            </Link>
            <div className="border-t border-line pt-6 flex flex-col gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/categories/${cat.slug}`}
                  onClick={() => setOpen(false)}
                  className="meta text-static hover:text-signal"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  )
}