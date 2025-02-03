import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProductSectionProps {
  id: string
  title: string
  description: string
  features: string[]
  children?: React.ReactNode
  index: number
}

gsap.registerPlugin(ScrollTrigger)

export function ProductSection({ id, title, description, features, children, index }: ProductSectionProps) {

  const isEven = index % 2 === 0;
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
    <section id={id} className="relative p-8">
      {isEven && 
        
        <span className={cn(`absolute inset-x-1/2 inset-y-8 z-0 bg-black py-24 px-8`,
          index % 4 === 0 ? "left-0" : "right-0"

        )}/>
      }        
    
      <div className={`container mx-auto relative rounded-xl lg:min-h-[600px] content-center ${ isEven ? "bg-black" : "bg-transparent"}`}>
      <h2 className="text-6xl font-thin  mb-6 text-center text-primary even:text-white">{title}</h2>
        <p className={`text-lg mb-8 text-center max-w-3xl mx-auto ${isEven ? 'text-gray-400' : 'text-gray-800'}`}>{description}</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-prose mx-auto">
          {features.map((feature, id) => (
            <Card key={id} className=" bg-primary/5  border-primary/5 hover:border-secondary transition-colors product-card">
              <CardContent className={`p-6 flex items-start ${isEven ? 'text-gray-400' : 'text-gray-800'} `}>
                <CheckCircle className="h-6 w-6  mr-4 flex-shrink-0 mt-1" />
                <p>{feature}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {children}
      </div>
    </section>
  )
}