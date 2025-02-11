"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import WaveTransition from "@/components/WaveTransition"
import { handleScrollToSection as handleClick } from "@/lib/scroll"
import gsap from "gsap"
import { ArrowRight, Shield, TrendingUp, Users, Zap } from "lucide-react"
import { useEffect, useRef } from "react"

const features = [
  { icon: Users, title: "Leads Qualificados", description: "Clientes prontos para comprar" },
  { icon: TrendingUp, title: "Alta Conversão", description: "Resultados comprovados" },
  { icon: Shield, title: "Segurança", description: "Dados protegidos" },
  { icon: Zap, title: "Agilidade", description: "Processos otimizados" },
]

export function Hero() {
  const heroRef = useRef(null)
  const mainRef = useRef(null)
  const ctaButtonRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animação de entrada
      gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      })

      // Animação do botão CTA
      gsap.to(ctaButtonRef.current, {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
      })

      /* parallax do hero em relação ao conteudo principal */
     /*  gsap.to(mainRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: 150,
        rotate: -.05, 
        scale: 1.01,
      }) */
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (<div ref={mainRef} >

    <section ref={heroRef} className="relative pt-52 pb-24 px-4 bg-primary bg-gradient-to-t from-primary to-primary-600  ">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="hero-content text-left">
          <h1 className="text-lg font-secondary mb-4 text-white">
            Conectando <span className="text-black tracking-tight">Oportunidades</span>, Gerando{" "}
            <span className="text-black tracking-widest">Resultados</span>
          </h1>
          <p className="text-4xl mb-6 text-white font-primary"><b>Encurtamos o processo de captação dos seus clientes, garantimos o lead ideal</b></p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => handleClick('#about')} ref={ctaButtonRef} className="bg-black hover:bg-black/90 text-white">
              Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button onClick={() => handleClick('#contact')}  variant="outline" className="border-white text-black hover:bg-black/10 hover:text-white">
              Fale Conosco
            </Button>
          </div>
        </div>
        <div className="mt-8 md:mt-0 grid grid-cols-2 gap-4">
          {features.map((card, index) => (
            <Card
              key={index}
              className="hero-card bg-white/10 border-white/20 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6 flex flex-col items-center text-center text-white">
                <card.icon className="h-12 w-12 text-black mb-2" />
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm ">{card.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
      <WaveTransition />
  </div>
  )
}

