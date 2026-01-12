import type React from "react"
import type { Metadata } from "next"
import { EB_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const ebGaramond = EB_Garamond({ subsets: ["latin"], variable: "--font-serif" })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gastón López Argonz - Derecho del Trabajo en la Era Digital",
  description:
    "Magíster en Derechos Humanos • Relator en Cámara Nacional de Apelaciones del Trabajo • Docente UBA. Autoridad académica en Derecho Laboral, Tecnología y Género.",
  generator: "v0.app",
  icons: {
    icon: "/scale-icon.png",
    apple: "/scale-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${ebGaramond.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
