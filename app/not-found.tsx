import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center grain-overlay">
      <p className="meta text-signal mb-4">error / 404</p>
      <h1 className="font-display font-black text-6xl sm:text-7xl tracking-tightest uppercase text-bone">
        Not in the<br />Archive
      </h1>
      <p className="text-static mt-6 max-w-md mx-auto">
        This artifact has been removed, never existed, or is locked in the vault.
      </p>
      <Link
        href="/"
        className="inline-block mt-10 bg-signal text-void font-display font-bold px-8 py-4 hover:bg-bone transition-colors meta"
      >
        Return to entrance →
      </Link>
    </div>
  )
}