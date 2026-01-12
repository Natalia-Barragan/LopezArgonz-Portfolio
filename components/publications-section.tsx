"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, ExternalLink, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const publications = [
  {
    title: "El impacto de la tecnología en la Justicia Nacional del Trabajo: la verdadera transformación de la Oficina Judicial",
    journal: "Revista de Derecho Laboral – Actualidad",
    publisher: "Rubinzal Culzoni",
    year: "13 Jun 2023",
    description: "Revista de Derecho Laboral – Actualidad, pp. 360-373.",
  },
  {
    title: "Reconversión de empresas y recualificación laboral en la revolución 4.0",
    journal: "Libro: Nuevas tecnologías, derechos humanos y negociación colectiva",
    publisher: "Tirant lo blanch",
    year: "23 May 2023",
    description: "En AA. VV., SANGUINETI RAYMOND, W. (Dir), pp. 19-50.",
  },
  {
    title: "La recualificación profesional en los procesos de reconversión tecnológica de empresas: una mirada a propósito de la Declaración EMN de OIT",
    journal: "I Congreso Interuniversitario OIT",
    publisher: "Ministerio de Trabajo (España) / UCM",
    year: "15 Mar 2023",
    description: "En 'Justicia social, trabajo decente y objetivos de desarrollo sostenible'. Ministerio de Trabajo, Migraciones y Seguridad Social.",
  },
  {
    title: "Recensión del libro 'Diligencia debida y trabajo decente en las cadenas globales de valor'",
    journal: "Revista de Derecho Laboral – Actualidad",
    publisher: "Rubinzal Culzoni",
    year: "29 Dic 2022",
    description: "Obra dirigida por Sanguineti Raymond y Vivero Serrano, pp. 369-373.",
  },
  {
    title: "La indemnización por muerte en la Ley de Contrato de Trabajo",
    journal: "Anuario AADTySS",
    publisher: "Rubinzal Culzoni",
    year: "28 Nov 2022",
    description: "Anuario de la Asociación Argentina de Derecho del Trabajo, pp. 245-274.",
  },
  {
    title: "La Indemnización por muerte en la Ley de Contrato de Trabajo",
    journal: "Revista de Derecho Laboral",
    publisher: "Rubinzal Culzoni",
    year: "31 Oct 2022",
    description: "Las indemnizaciones laborales – II, 2022-2, pp. 423-452.",
  },
  {
    title: "Empresas trasnacionales y derechos humanos: Análisis técnico-jurídico y razones para avanzar hacia un instrumento vinculante",
    journal: "Doctrina",
    publisher: "Rubinzal Culzoni",
    year: "13 Jul 2022",
    description: "Coautoría con Peres Diaz D. Cita Online RC D 246/2022.",
    link: "https://www.rubinzalonline.com.ar/index.php/usuarios/pdf/doctrina/2137404/",
  },
  {
    title: "Inteligencia artificial y formación profesional: dos aliadas en la transformación digital",
    journal: "Libro: De la economía digital a la sociedad del e-work decente",
    publisher: "Aranzadi España",
    year: "29 Dic 2021",
    description: "En AA.VV., Molina Navarrete y Vallecillo Gámez (dir). pp. 335-354.",
  },
  {
    title: "Las reformas laborales en América Latina: entre el derecho al empleo y el Derecho del trabajo",
    journal: "Revista Derecho del Trabajo",
    publisher: "La Ley Uruguay",
    year: "30 Sep 2021",
    description: "Año IX – número 12 – pp. 53-67.",
  },
  {
    title: "Reseña bibliográfica de LITTERIO L.H., 'Trabajadores plataforma dependientes en la Argentina y en el mundo'",
    journal: "Revista Jurídica de Buenos Aires",
    publisher: "Thomson Reuters La Ley",
    year: "01 Sep 2021",
    description: "Año 46 - número 102 - 2021-I.",
    link: "http://www.derecho.uba.ar/publicaciones/rev_juridica/rjba-i-2021.pdf",
  },
  {
    title: "La aplicación de las Directrices de la OCDE sobre empresas multinacionales: El caso Nidera",
    journal: "Comercio Internacional, Trabajo y Derechos Humanos",
    publisher: "Ed. Univ. Salamanca",
    year: "15 Jul 2021",
    description: "En AA.VV., Sanguineti Raymond (Dir). pp. 145-158.",
    link: "https://doi.org./10.14201/0AQ0308",
  },
  {
    title: "El proyecto del Poder Ejecutivo Nacional sobre equidad de género y su impacto sobre las relaciones del trabajo",
    journal: "Revista de Derecho Laboral",
    publisher: "Rubinzal-Culzoni",
    year: "22 May 2019",
    description: "Revista de Derecho Laboral - 2019, pp. 315-356.",
  },
  {
    title: "La muerte del trabajador y la extinción del contrato de trabajo",
    journal: "Revista de Derecho Laboral",
    publisher: "Rubinzal-Culzoni",
    year: "03 Jul 2018",
    description: "Revista de Derecho Laboral - 2018, pp. 347-378.",
  },
  {
    title: "Comentario al art. 206 de Ley de Contrato de Trabajo",
    journal: "Ley de Contrato de Trabajo Comentada",
    publisher: "Rubinzal Culzoni",
    year: "12 Sep 2016",
    description: "En Ackerman, M.E. y Sforsini M.I., T. II, pp. 597-599.",
  },
]

function PublicationCard({ pub, index }: { pub: (typeof publications)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="glass-card hover:scale-[1.02] transition-all duration-300 h-full group relative overflow-hidden border-primary/20">

        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <CardHeader className="relative z-10">
          <div className="flex items-start gap-4">
            <div className="glass-card p-3 rounded-xl border border-primary/30 group-hover:border-primary/60 transition-all group-hover:shadow-lg group-hover:shadow-primary/30">
              <FileText className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl mb-3 leading-tight text-foreground group-hover:text-primary transition-colors">
                {pub.title}
              </CardTitle>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                <span className="font-medium text-primary/80">{pub.publisher}</span>
                <span>•</span>
                <span>{pub.year}</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className="text-muted-foreground leading-relaxed mb-4">{pub.description}</p>
          {pub.link && (
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-primary hover:text-primary hover:bg-primary/10 group/btn"
              asChild
            >
              <a href={pub.link} target="_blank" rel="noopener noreferrer">
                Leer más
                <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function PublicationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="publicaciones" className="py-20 md:py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-cyber">Investigación & Publicaciones</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Producción académica enfocada en la intersección entre derecho laboral, tecnología y derechos humanos.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1 w-32 mx-auto mt-6 bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
          />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {publications.map((pub, index) => (
            <PublicationCard key={index} pub={pub} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
