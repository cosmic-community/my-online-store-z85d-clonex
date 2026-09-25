export function formatPrice(price: number | undefined): string {
  if (price === undefined || price === null || isNaN(price)) return '—'
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price)
}

export function optimizeImage(
  imgixUrl: string | undefined,
  width: number,
  height: number,
  fit: string = 'crop'
): string {
  if (!imgixUrl) return ''
  return `${imgixUrl}?w=${width}&h=${height}&fit=${fit}&auto=format,compress`
}