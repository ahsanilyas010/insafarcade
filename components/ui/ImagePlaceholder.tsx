'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImagePlaceholderProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  sizes?: string
  priority?: boolean
  /** Override to force placeholder mode (useful when src is a known 1px stub) */
  placeholder?: boolean
}

// 1×1 transparent PNG blur placeholder
const BLUR_DATA = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='

export default function ImagePlaceholder({
  src,
  alt,
  width,
  height,
  className = '',
  sizes,
  priority,
}: ImagePlaceholderProps) {
  const [error, setError] = useState(false)
  const filename = src.split('/').pop() ?? src

  if (error) {
    return (
      <div
        className={`img-placeholder ${className}`}
        style={{ width: '100%', aspectRatio: `${width}/${height}` }}
        role="img"
        aria-label={alt}
      >
        {filename}
      </div>
    )
  }

  return (
    <div className="relative" style={{ width: '100%', aspectRatio: `${width}/${height}` }}>
      {/* Concrete placeholder shown until real image loads */}
      <div
        className="img-placeholder absolute inset-0"
        aria-hidden="true"
      >
        {filename}
      </div>
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover relative ${className}`}
        sizes={sizes ?? '100vw'}
        priority={priority}
        onError={() => setError(true)}
        placeholder="blur"
        blurDataURL={BLUR_DATA}
        style={{ zIndex: 1 }}
      />
    </div>
  )
}
