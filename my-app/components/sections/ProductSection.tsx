import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "../ui/button"
import { motion, useReducedMotion } from "framer-motion"
 
type ButtonProps = {
  title?: string;
  href: string;
}

interface ProductSectionProps {
  id: string;
  title: string;
  description: string;
  features?: string[];
  button?: ButtonProps;
  index: number;
}

export function ProductSection({ id, title, description, features, button, index }: ProductSectionProps) {

  const isEven = index % 2 === 0;
  const prefersReducedMotion = useReducedMotion()
  const slideDirection = isEven ? 36 : -36

  return (
    <motion.section
      id={id}
      initial={prefersReducedMotion ? false : { opacity: 0, x: slideDirection }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative p-8"
    >
      {isEven && 
        
        <span className={cn(`absolute inset-x-1/2 inset-y-8 z-0 bg-black py-24 px-8`,
          index % 4 === 0 ? "left-0" : "right-0"

        )}/>
      }        
    
      <div className={`container mx-auto relative rounded-xl lg:min-h-[600px] py-8 lg:py-0 content-center ${ isEven ? "bg-black" : "bg-transparent"}`}>
    <h2 className="text-4xl lg:text-6xl font-thin  mb-6 text-center text-primary even:text-white">{title}</h2>
        <p className={`text-lg mb-8 text-center max-w-3xl mx-auto ${isEven ? 'text-gray-400' : 'text-gray-800'}`}>{description}</p>
        {features &&
        <div className="grid md:grid-cols-2 gap-6 max-w-prose mx-auto">
          {features?.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              initial={prefersReducedMotion ? false : { opacity: 0, x: slideDirection / 2 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: featureIndex * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
            <Card className=" bg-primary/5  border-primary/5 hover:border-secondary transition-colors">
              <CardContent className={`p-6 flex items-start ${isEven ? 'text-gray-400' : 'text-gray-800'} `}>
                <CheckCircle className="h-6 w-6  mr-4 flex-shrink-0 mt-1" />
                <p>{feature}</p>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
        }
        {button &&

      <div className="flex justify-center p-6">
      <Link href={button.href} className="text-white hover:text-gray-300 text-lg group ">
        <Button className="bg-primary hover:bg-primary/90 text-white text-lg p-8 flex items-center ">
          { button.title ?? "Saiba mais"} <ArrowRight className="ml-2 scale-[2] group-hover:translate-x-2 duration-400 transition-transform" />
        </Button>
      </Link> 
    </div>
        }
      </div>
    </motion.section>
  )
}