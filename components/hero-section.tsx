"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles, Scale, Bot, BookOpen } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Gastón López Argonz"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 100) // Speed of typing effect

    return () => clearInterval(interval)
  }, [])

  const scrollToPublications = () => {
    const element = document.querySelector("#publicaciones")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-16 px-4 relative scan-line overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <div className="space-y-8 md:space-y-12">

          {/* Icons Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-6 mb-8"
          >
            <div className="glass-card p-3 rounded-xl animated-border">
              <BookOpen className="w-8 h-8 text-secondary" />
            </div>
            <div className="glass-card p-4 rounded-xl animated-border relative group">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
              <Scale className="w-12 h-12 text-foreground relative z-10" />
            </div>
            <div className="glass-card p-3 rounded-xl animated-border">
              <Bot className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          {/* Main Title Name Typing Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-[80px] md:min-h-[120px]" // Prevent layout shift
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="gradient-text-cyber">
                {displayedText}
                <span className="animate-pulse text-primary ml-1">|</span>
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }} // Delay until name finishes typing
            className="text-xl md:text-3xl font-light text-foreground/90 max-w-4xl mx-auto leading-relaxed"
          >
            Explorando los desafíos emergentes de la inteligencia
            artificial, la regulación algorítmica y las transformaciones del trabajo en el siglo XXI.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="glass-card inline-block px-8 py-4 rounded-2xl border border-primary/30 mt-4"
          >
            <p className="text-lg md:text-xl text-primary font-medium">
              Magíster en Derecho del Trabajo • Universidad de Salamanca
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-2">
              Relator en Cámara Nacional de Apelaciones del Trabajo • Docente UBA
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              size="lg"
              onClick={scrollToPublications}
              className="text-base font-medium px-8 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-background border-0 shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 transition-all group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Ver Producción Académica
                <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
