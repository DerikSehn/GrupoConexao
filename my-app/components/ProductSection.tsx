"use client";
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface ProductSectionProps {
  id: string
  title: string
  description: string
  features: string[]
}

gsap.registerPlugin(ScrollTrigger)

export function ProductSection({ id, title, description, features }: ProductSectionProps) {
  useEffect(() => {
    gsap.fromTo(`#${id} .product-card`, 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: `#${id}`,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      }
    )
  }, [id])

  return (
    <section id={id} className="py-12 px-4 bg-primary/5 even:bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">{title}</h2>
        <p className="text-lg mb-8 text-center max-w-3xl mx-auto text-gray-700">{description}</p>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-primary hover:border-secondary transition-colors product-card">
              <CardContent className="p-6 flex items-start">
                <CheckCircle className="h-6 w-6 text-secondary mr-4 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{feature}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}