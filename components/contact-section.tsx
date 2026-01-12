import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, AlertCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 md:py-32 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contacto Académico</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Para consultas académicas, invitaciones institucionales y prensa
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6 p-4 bg-accent/50 rounded-lg">
              <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <p className="text-sm leading-relaxed text-foreground/90">
                Este canal de contacto está destinado exclusivamente para fines académicos, invitaciones a congresos y
                seminarios, colaboraciones institucionales y consultas de prensa. No se gestionan consultas legales
                particulares.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <a href="mailto:lopezargonz@gmail.com">
                  <Mail className="h-5 w-5" />
                  lopezargonz@gmail.com
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                <a href="https://www.linkedin.com/in/lopezargonz" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <footer className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
          <p>© {new Date().getFullYear()} Gastón López Argonz. Todos los derechos reservados.</p>
          <p className="mt-2 text-primary/80">Relator - Cámara Nacional de Apelaciones del Trabajo • Docente UBA</p>
        </footer>
      </div>
    </section>
  )
}
