import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen } from "lucide-react"

const courses = [
  {
    type: "Grado",
    institution: "Universidad de Buenos Aires - Facultad de Derecho",
    courses: ["Derecho del Trabajo y la Seguridad Social (Cátedra titular)", "Elementos de Derecho Laboral"],
  },
  {
    type: "Posgrado",
    institution: "Universidad de Buenos Aires - Facultad de Derecho",
    courses: [
      "Especialización en Derecho del Trabajo - Módulo: Nuevas Tecnologías y Relaciones Laborales",
      "Maestría en Derecho del Trabajo - Seminario: Regulación del Trabajo en Plataformas Digitales",
    ],
  },
]

export function TeachingSection() {
  return (
    <section id="docencia" className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Docencia Universitaria</h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Compromiso con la formación de nuevas generaciones de profesionales del derecho laboral.
          </p>
        </div>
        <div className="space-y-6">
          {courses.map((category, index) => (
            <Card key={index}>
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {category.type === "Grado" ? (
                      <BookOpen className="h-6 w-6 text-primary" />
                    ) : (
                      <GraduationCap className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{category.type}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{category.institution}</p>
                    <ul className="space-y-2">
                      {category.courses.map((course, courseIndex) => (
                        <li key={courseIndex} className="flex items-start gap-2 text-foreground/90">
                          <span className="text-secondary mt-1">•</span>
                          <span>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
