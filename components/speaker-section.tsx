"use client"

import { useState } from "react"
import { BackToTop } from "@/components/back-to-top"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Conference {
  title: string
  role: string
  location: string
  date: string
  image?: string
  images?: string[]
  link?: string
}

const conferences: Conference[] = [
  {
    title: "XXV Congreso AADTySS - Taller: IA en el Poder Judicial",
    role: "Disertante",
    location: "Facultad de Derecho UBA, Buenos Aires",
    date: "Noviembre 2025",
    image: "/aadtyss-1.jpg",
    link: "https://www.linkedin.com/posts/lopezargonz_aadtyss-inteligenciaartificial-justicia-activity-7398169597759262720-_-Ws",
  },
  {
    title: "XXV Congreso Nacional de Derecho del Trabajo - IA en el Poder Judicial",
    role: "Ponente",
    location: "Facultad de Derecho UBA, Buenos Aires",
    date: "5-7 Noviembre 2025",
    image: "/conference-ia-derecho.jpg",
    link: "https://www.linkedin.com/posts/lopezargonz_derechodeltrabajo-inteligenciaartificial-activity-7391505090890686464-Ha3R?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAs7_sBqMOWrNJAJgM5FVvW1j_No-TMon8",
  },
  {
    title: "XIII Congreso Regional Americano (ISLSSL) - Trabajo Digno y Rehumanización",
    role: "Ponente",
    location: "Montevideo, Uruguay",
    date: "10-13 Septiembre 2025",
    image: "/conference-montevideo.jpg",
  },
  {
    title: "11th Seminar ISLSSL - Human Rights and Business: Bridging Responsibility and Sustainability",
    role: "Ponente: For a Decent Work in the Age of AI",
    location: "Università Ca’ Foscari, Venecia, Italia",
    date: "24 de Mayo 2025",
    image: "/conference-rome.jpg",
    link: "https://www.linkedin.com/posts/lopezargonz_derechodeltrabajo-islssl-inteligenciaartificial-activity-7332797028529270784-GFWO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAs7_sBqMOWrNJAJgM5FVvW1j_No-TMon8",
  },
  {
    title: "Garantías Constitucionales y Derechos Humanos en Argentina: Reflexiones desde Salamanca",
    role: "Conferencista",
    location: "Universidad de Salamanca, España",
    date: "18 de Marzo 2025",
    image: "/conference-salamanca-first.jpg",
    link: "https://www.linkedin.com/posts/lopezargonz_derechoshumanos-constituciaejn-estadosocialdederecho-activity-7312972994455244800-m74a?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAs7_sBqMOWrNJAJgM5FVvW1j_No-TMon8",
  },
  {
    title: "Primeras Jornadas Subsección Americana Jóvenes Juristas (ISLSSL/UNAM)",
    role: "Ponente: Negociación colectiva y nuevas tecnologías en Argentina",
    location: "Universidad Autónoma de México",
    date: "23 de Agosto 2024",
    image: "/conference-mexico.png",
  },
  {
    title: 'Seminario: "Nuevos desafíos del Derecho Laboral" (UBA)',
    role: 'Ponente: "La prestación de servicios trasnacionales"',
    location: "Facultad de Derecho UBA (Centro de Graduados)",
    date: "11 de Abril 2023",
    image: "/conference-uba-challenges.jpg",
  },
  {
    title: "I Congreso Interuniversitario OIT - Justicia Social y Trabajo Decente",
    role: "Ponente: Recualificación profesional y reconversión tecnológica",
    location: "Universidad Complutense de Madrid, España",
    date: "18-19 Noviembre 2021",
    images: ["/conference-oit-1.png", "/conference-oit-2.png"],
  },
  {
    title: 'Jornada Académica: "El derecho del trabajo frente a la transformación digital" (UBA)',
    role: "Exposición: Transporte de personas en plataformas digitales",
    location: "Universidad de Buenos Aires, Argentina",
    date: "18-19 Noviembre 2021",
    image: "/conference-uba-platforms-v2.png",
    link: "https://youtu.be/bvQmP1GXcgM",
  },
  {
    title: "Encuentro Nacional de Jóvenes Juristas - Transformación Digital",
    role: "Expositor",
    location: "Argentina",
    date: "4 de Diciembre 2020",
    image: "/conference-jovenes-juristas.jpg",
  },
]

function ConferenceCard({ conf }: { conf: Conference }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = conf.images || (conf.image ? [conf.image] : ["/placeholder.svg"])
  const hasMultipleImages = images.length > 1

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const CardWrapper = conf.link ? "a" : "div"
  const wrapperProps = conf.link
    ? { href: conf.link, target: "_blank", rel: "noopener noreferrer", className: "block h-full cursor-pointer" }
    : { className: "block h-full" }

  return (
    <CardWrapper {...wrapperProps}>
      <Card className="overflow-hidden hover:shadow-lg transition-all hover:scale-[1.02] border-primary/40 h-full bg-transparent">
        <div className="aspect-square relative overflow-hidden bg-transparent group">
          <img
            src={images[currentImageIndex]}
            alt={conf.title}
            className="w-full h-full object-contain transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg"
            }}
          />

          {hasMultipleImages && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full shadow-sm ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </>
          )}

          {conf.link && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
              <span className="text-white font-medium px-4 py-2 bg-primary/80 rounded-full backdrop-blur-sm">
                Ver Publicación
              </span>
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <div className="space-y-3">
            <div>
              <span className="text-sm font-medium text-primary">{conf.role}</span>
              <h3 className="text-xl font-semibold text-foreground mt-1 leading-tight group-hover:text-primary transition-colors">
                {conf.title}
              </h3>
            </div>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>{conf.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-secondary" />
                <span>{conf.date}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </CardWrapper>
  )
}

export function SpeakerSection() {
  return (
    <section id="congresos" className="py-20 md:py-32 px-4 bg-muted/30 relative">
      <BackToTop />
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Conferencias & Ponencias</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Participación activa en foros académicos internacionales y espacios de debate sobre el futuro del derecho
            laboral.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {conferences.map((conf, index) => (
            <ConferenceCard key={index} conf={conf} />
          ))}
        </div>
      </div>
    </section>
  )
}
