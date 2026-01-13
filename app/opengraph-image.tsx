import { ImageResponse } from 'next/og'

export const runtime = 'edge'

// Image metadata
export const alt = 'Gastón López Argonz'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
    // Font and colors matching the brand
    // Background: #020c1b (Deep Navy)
    // Foreground: #e2e8f0 (Slate 200)

    return new ImageResponse(
        (
            <div
                style={{
                    background: '#020c1b',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* Using the SVG paths from the original logo, but scaling it to be "delicate" 
            Original viewBox is 180x180. We render it at 250x250px on a 1200x630 canvas.
        */}
                <svg
                    width="250"
                    height="250"
                    viewBox="0 0 180 180"
                    fill="none"
                    // @ts-ignore
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#e2e8f0"
                        d="M101.141 53H136.632C151.023 53 162.689 64.6662 162.689 79.0573V112.904H148.112V79.0573C148.112 78.7105 148.098 78.3662 148.072 78.0251L112.581 112.898C112.701 112.902 112.821 112.904 112.941 112.904H148.112V126.672H112.941C98.5504 126.672 86.5638 114.891 86.5638 100.5V66.7434H101.141V100.5C101.141 101.15 101.191 101.792 101.289 102.422L137.56 66.7816C137.255 66.7563 136.945 66.7434 136.632 66.7434H101.141V53Z"
                    />
                    <path
                        fill="#e2e8f0"
                        d="M65.2926 124.136L14 66.7372H34.6355L64.7495 100.436V66.7372H80.1365V118.47C80.1365 126.278 70.4953 129.958 65.2926 124.136Z"
                    />
                </svg>
            </div>
        ),
        {
            ...size,
        }
    )
}
