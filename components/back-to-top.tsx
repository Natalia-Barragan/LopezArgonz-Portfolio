"use client"

import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BackToTop() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="absolute top-8 right-4 md:right-8 z-20">
            <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="rounded-full bg-background/50 backdrop-blur-sm border border-primary/20 hover:bg-primary/20 hover:text-primary transition-all hover:scale-110"
                title="Volver al inicio"
            >
                <ArrowUp className="h-5 w-5" />
            </Button>
        </div>
    )
}
