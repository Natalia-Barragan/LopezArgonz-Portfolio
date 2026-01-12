"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar } from "lucide-react"

const conferences = [
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
    title: "Encuentro Nacional de Jóvenes Juristas - Transformación Digital",
    role: "Expositor",
    location: "Argentina",
    date: "4 de Diciembre 2020",
    image: "/conference-jovenes-juristas.jpg",
  },
]

export function SpeakerSection() {
  return (
    <section id="congresos" className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Conferencias & Ponencias</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Participación activa en foros académicos internacionales y espacios de debate sobre el futuro del derecho
            laboral.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {conferences.map((conf, index) => {
            const CardWrapper = conf.link ? "a" : "div"
            const wrapperProps = conf.link
              ? { href: conf.link, target: "_blank", rel: "noopener noreferrer", className: "block h-full cursor-pointer" }
              : { className: "block h-full" }

            return (
              <CardWrapper key={index} {...wrapperProps}>
                <Card className="overflow-hidden hover:shadow-lg transition-all hover:scale-[1.02] border-primary/20 h-full">
                  <div className="aspect-video relative overflow-hidden bg-muted">
                    <img
                      src={conf.image || "/placeholder.svg"}
                      alt={conf.title}
                      className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg" // Fallback if image not found
                      }}
                    />
                    {conf.link && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
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
          })}
        </div>
      </div>
    </section>
  )
}
