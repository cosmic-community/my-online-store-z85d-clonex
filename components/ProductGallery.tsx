'use client'

import { useState } from 'react'
import { CosmicImage } from '@/types'
import { optimizeImage } from '@/lib/format'

export default function ProductGallery({
  images,
  alt,
}: {
  images: CosmicImage[]
  alt: string
}) {
  const [active, setActive] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="aspect-[4/5] bg-concrete flex items-center justify-center grain-overlay">
        <span className="meta text-static">no image on record</span>
      </div>
    )
  }

  const current = images[active] || images[0]

  return (
    <div>
      <div className="aspect-[4/5] overflow-hidden bg-concrete grain-overlay scanlines relative">
        {current && (
          <img
            src={optimizeImage(current.imgix_url, 1200, 1500)}
            alt={alt}
            width={600}
            height={750}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2 mt-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`aspect-square overflow-hidden bg-concrete border ${
                i === active ? 'border-signal' : 'border-line'
              }`}
            >
              <img
                src={optimizeImage(img.imgix_url, 200, 200)}
                alt={`${alt} view ${i + 1}`}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}