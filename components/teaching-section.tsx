import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen, Scale, Briefcase } from "lucide-react"
import { BackToTop } from "@/components/back-to-top"

const judicialExperience = [
  {
    role: "Cámara Nacional de Apelaciones del Trabajo",
    period: "2021 – Actualidad",
    description: "Poder Judicial de la Nación Argentina",
  },
  {
    role: "Juzgados Nacionales de Primera Instancia del Trabajo",
    period: "2008 – 2021",
    description: "Poder Judicial de la Nación Argentina",
  },
]

const teachingExperience = [
  {
    institution: "Universidad de Buenos Aires (UBA)",
    roles: [
      { title: "Teoría General del Derecho", type: "Posgrado", period: "2019 – Actualidad" },
      { title: "Relaciones Colectivas del Trabajo", type: "Grado", period: "2021 – Actualidad" },
      { title: "Relaciones Individuales del Trabajo", type: "Grado", period: "2019 – Actualidad" },
      { title: "Derecho Procesal Laboral", type: "Grado", period: "2013 – 2020" },
    ],
  },
  {
    institution: "Universidad Católica Argentina (UCA)",
    roles: [
      {
        title: "Gestión de las Relaciones Laborales y Métodos de Resolución de conflictos",
        type: "Posgrado",
        period: "2025 – Actualidad",
      },
    ],
  },
  {
    institution: "Universidad Indoamérica (Ecuador)",
    roles: [{ title: "Contratos Colectivos del Trabajo", type: "Posgrado", period: "2020 – 2022" }],
  },
]

export function TeachingSection() {
  return (
    <section id="experiencia" className="py-20 md:py-32 px-4 relative">
      <BackToTop />
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experiencia Profesional & Docencia</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Trayectoria en la función judicial y compromiso académico con la formación de profesionales.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Poder Judicial */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-6">
              <Scale className="h-6 w-6 text-primary" />
              Poder Judicial
            </h3>
            {judicialExperience.map((job, index) => (
              <Card key={index} className="border-primary/20 bg-muted/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{job.role}</h4>
                      <p className="text-secondary font-medium text-sm mt-1">{job.period}</p>
                      <p className="text-sm text-muted-foreground mt-2">{job.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Docencia */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-6">
              <GraduationCap className="h-6 w-6 text-primary" />
              Docencia Universitaria
            </h3>
            {teachingExperience.map((item, index) => (
              <Card key={index} className="border-primary/20 bg-muted/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-3">{item.institution}</h4>
                      <div className="space-y-3">
                        {item.roles.map((role, rIndex) => (
                          <div key={rIndex} className="relative pl-4 border-l-2 border-primary/20">
                            <h5 className="text-base font-medium text-foreground">{role.title}</h5>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full">{role.type}</span>
                              <span>•</span>
                              <span>{role.period}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
