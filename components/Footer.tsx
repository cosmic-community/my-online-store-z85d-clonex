import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-void mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <span className="font-display font-black text-2xl tracking-tightest text-bone">
              THE ARCHIVE
            </span>
            <p className="mt-4 text-static text-sm max-w-md leading-relaxed">
              Ahmedabad's streetwear culture destination. A digital archive of curated
              pieces — every artifact numbered, every drop intentional.
            </p>
            <p className="meta text-static mt-6">est. ahmedabad / gujarat / india</p>
          </div>

          <div>
            <h3 className="meta text-bone mb-4">Navigate</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-static hover:text-bone transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-static hover:text-bone transition-colors">All Pieces</Link></li>
              <li><Link href="/categories" className="text-static hover:text-bone transition-colors">Archive Wings</Link></li>
              <li><Link href="/reviews" className="text-static hover:text-bone transition-colors">Street Cast</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="meta text-bone mb-4">The Scene</h3>
            <ul className="space-y-3 text-sm text-static">
              <li>Curation over Catalog</li>
              <li>Culture over Commerce</li>
              <li>Community over Customer</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line flex flex-col sm:flex-row justify-between gap-4">
          <p className="meta text-static">© {year} the archive — all rights reserved</p>
          <p className="meta text-static">built in the void</p>
        </div>
      </div>
    </footer>
  )
}