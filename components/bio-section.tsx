import { GraduationCap, Building2, Calendar, Award } from "lucide-react"

const education = [
  {
    institution: "Universidad de Salamanca",
    degree: "Doctorado en Derecho",
    period: "2019 - 2025",
    description: "Tesis sobre impacto de algoritmos en relaciones laborales.",
  },
  {
    institution: "Sapienza Università di Roma",
    degree: "Estancia de Investigación",
    period: "2025",
    description: "Facoltà di Giurisprudenza - Diritto del lavoro.",
  },
  {
    institution: "Universidad de Salamanca",
    degree: "Maestría en Derecho del Trabajo",
    period: "2017 - 2018",
    description: "Relaciones Laborales.",
  },
  {
    institution: "Universidad de Salamanca",
    degree: "Especialización en Derecho del Trabajo",
    period: "Finalizado",
    description: "Especialización de posgrado.",
  },
  {
    institution: "UCASAL",
    degree: "Diplomatura en Derecho Procesal Laboral",
    period: "Finalizado",
    description: "Formación especializada en litigio laboral.",
  },
  {
    institution: "Universidad de Buenos Aires",
    degree: "Abogado",
    period: "2006 - 2012",
    description: "Orientación en Derecho del Trabajo.",
  },
]

export function BioSection() {
  return (
    <section id="trayectoria" className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">Trayectoria</h2>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/90 mb-16 text-justify">
          <p>
            Soy abogado especializado en Derecho del Trabajo, con experiencia en el ámbito judicial, académico y de
            investigación. Desde hace más de veinte años trabajo en la Justicia Nacional del Trabajo y desde el año 2013
            soy docente en la Facultad de Derecho de la Universidad de Buenos Aires.
          </p>
          <p>
            Cursé posgrados en Argentina y España, donde obtuve el título de Magíster en Derecho del Trabajo y
            Relaciones Laborales, y actualmente realizo mi doctorado en la Universidad de Salamanca, centrado en el
            impacto de la inteligencia artificial y los algoritmos en las relaciones laborales.
          </p>
          <p>
            He participado como ponente en congresos nacionales e internacionales, y mis trabajos fueron publicados en
            revistas jurídicas de prestigio en Argentina, Uruguay y España.
          </p>
          <p>
            Poseo vasta experiencia en el estudio, enseñanza y aplicación del Derecho del Trabajo, con un enfoque que
            combina práctica judicial, reflexión académica y análisis de los desafíos contemporáneos del mundo laboral.
          </p>
        </div>

        {/* Formación Académica */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center justify-center gap-3">
            <GraduationCap className="h-8 w-8 text-primary" />
            Formación Académica
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {education.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-lg group"
              >
                <div className="mb-4 p-3 bg-primary/5 rounded-lg w-fit group-hover:bg-primary/10 transition-colors">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2 leading-tight">{item.degree}</h4>
                <div className="text-secondary font-medium text-sm mb-3">{item.institution}</div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{item.period}</span>
                </div>
                {item.description && (
                  <p className="text-sm text-muted-foreground/80 leading-relaxed border-t border-primary/10 pt-3 mt-3">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
