import { getMetafieldValue } from '@/lib/cosmic'

export default function InventoryBadge({ status }: { status: unknown }) {
  const value = getMetafieldValue(status)
  if (!value) return null

  const isSoldOut = value.toLowerCase().includes('sold')
  const isComing = value.toLowerCase().includes('coming')

  let cls = 'text-signal border-signal/40'
  if (isSoldOut) cls = 'text-warning border-warning/40'
  if (isComing) cls = 'text-archive-gold border-archive-gold/40'

  return (
    <span className={`meta inline-block px-2 py-1 border ${cls} bg-void/50`}>
      {value}
    </span>
  )
}