"use client";
import WhatsappButton from "@/components/button/WhatsappButton";
import ContactSection from "@/components/sections/ContactSection";
import { Hero } from "@/components/hero/Hero"; 
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import { handleScrollToSection as handleClick } from "@/lib/scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, Instagram } from "lucide-react";
import { useEffect } from "react";
import TextParallax from "@/components/design/TextParallax";
import { partners } from "@/data/partners";
import ProductCard from "@/components/cards/ProductCard";
import { ProductSection } from "@/components/sections/ProductSection";

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    gsap.fromTo(".hero-content", 
      { opacity: 0, y: -50 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )

    gsap.fromTo(".card", 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".card",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      }
    )

    gsap.fromTo(".product-section", 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".product-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      }
    )

    gsap.fromTo(".benefit-item", 
      { opacity: 0, x: -50 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".benefit-item",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      }
    )
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <WhatsappButton link="https://api.whatsapp.com/send?phone=5551999300707&text=Ol%C3%A1" className="fixed bottom-2 right-2" />
      <Hero />


      {/* Sobre Nós */}
      <section id="about" className="relative mb-10">
        <span className=" absolute inset-x-1/2 inset-y-0 right-0 z-0 bg-black py-24 px-8"/>
        <div className="container mx-auto relative bg-black bg-gradient-to-l from-black to-black-400 py-24 px-8 rounded-l-xl">
      
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-6xl font-thin  mb-6 text-left text-primary">Quem somos</h2>
                <p className="text-lg mb-4 text-white">
                No Grupo Conexão, somos movidos pelo propósito de <strong>transformar desafios</strong> em <strong>soluções inteligentes</strong>.
                Credenciados diretamente às principais <strong>plataformas digitais</strong> e <strong>Fintechs</strong>, oferecemos muito mais que
                serviços: entregamos <strong>resultados com excelência</strong>, <strong>inovação</strong> e <strong>comprometimento</strong>.
                </p>
                <p className="text-lg text-gray-300">
                Nossa equipe é formada por <strong>profissionais altamente qualificados</strong>, prontos para atender às suas
                necessidades com <strong>competência</strong>, <strong>assertividade</strong> e <strong>consistência</strong>, pilares que sustentam nossa atuação e
                garantem um <strong>impacto real e duradouro</strong>.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white border-primary card">
                <CardContent className=" p-6 flex flex-col items-center min-h-full text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">17+</h3>
                  <p className="text-sm text-gray-600">Anos de Experiência</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-primary card">
                <CardContent className=" p-6 flex flex-col items-center min-h-full text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">95 mil+</h3>
                  <p className="text-sm text-gray-600">Clientes Satisfeitos</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-primary card">
                <CardContent className=" p-6 flex flex-col items-center min-h-full text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">44+</h3>
                  <p className="text-sm text-gray-600">Parceiros de Negócios</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-primary card">
                <CardContent className=" p-6 flex flex-col items-center min-h-full text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">24/7</h3>
                  <p className="text-sm text-gray-600">Suporte Dedicado</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-5xl font-thin my-10 mt-20  text-center text-primary">Parceiros</h2>

      <TextParallax
        images={partners.map((bank) => ({
          src: bank.image,
        }))}
      />


      {/* Nossos Produtos */}
      <h2 className="text-5xl font-thin  my-10 mt-20 text-center text-primary">Nossos Serviços</h2>
      
      <section id="products" className="py-12 px-2 md:px-4  bg-white">
        <div className="container lg:mx-auto px-0 mx-0">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {products.map((product, index) => (
            <ProductCard 
              key={product.name} 
              product={product} 
              index={index}
            />
          ))}         
           </div>
        </div>
      </section> 
     

      {/* Seções de Produtos */}
      {products.map((product, index) => (
        <ProductSection 
          key={product.id} 
          id={product.id} 
          title={product.title} 
          description={product.description} 
          features={product.features} 
          button={product.button}
          index={index}
        />
      ))}
      {/* Benefícios */}
      <section id="benefits" className="py-12 px-4 bg-primary/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Benefícios</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Leads de alta qualidade",
              "Conexão direta com clientes prontos para comprar",
              "Aumento nas taxas de conversão",
              "Estratégias personalizadas por setor",
              "Suporte especializado em todo o processo",
              "Tecnologia de ponta para matching de clientes",
            ].map((benefit) => (
              <div key={benefit} className="flex items-start benefit-item">
                <CheckCircle className="h-6 w-6 text-black mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection/>

      <section id="instagram" className="py-12 px-4 text-center bg-black relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/images/cta-bg.jpg)' }}></div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Pronto para Impulsionar Seu Negócio?</h2>
          <p className="text-xl mb-8 text-white/90">
            Entre em contato conosco e descubra como podemos ajudar você a alcançar resultados extraordinários.
          </p>
          <Button onClick={() => handleClick('#contact')} className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-3 mb-4">Fale Conosco</Button>
          <div className="flex flex-col items-center gap-4">
            <a href="https://www.instagram.com/grupoconexao_br" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 text-lg flex gap-4">
              <Instagram className=""/>
              <p>
              Siga-nos no Instagram
              </p>
            </a>
          </div>
        </div>
      </section>

    </div>


  )
}