import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Gastón López Argonz'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  // Brand Colors
  const background = '#020c1b' // Deep Navy
  const foreground = '#e2e8f0' // Slate 200/White-ish

  return new ImageResponse(
    (
      <div
        style={{
          background,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          width="300"
          height="300"
          viewBox="0 0 24 24"
          fill="none"
          stroke={foreground}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          // @ts-ignore
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Lucide Scale Icon Paths */}
          <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
          <path d="M7 21h10" />
          <path d="M12 3v18" />
          <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
