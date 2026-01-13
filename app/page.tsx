import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BioSection } from "@/components/bio-section"
import { PublicationsSection } from "@/components/publications-section"
import { SpeakerSection } from "@/components/speaker-section"
import { TeachingSection } from "@/components/teaching-section"
import { ContactSection } from "@/components/contact-section"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-background cyber-grid relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <BioSection />
        <TeachingSection />
        <PublicationsSection />
        <SpeakerSection />
        <ContactSection />
      </main>
    </div>
  )
}
