"use client";
import WhatsappButton from "@/components/button/WhatsappButton";
import ContactSection from "@/components/sections/ContactSection";
import { Hero } from "@/components/hero/Hero"; 
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import { handleScrollToSection as handleClick } from "@/lib/scroll";
import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle, Instagram } from "lucide-react";
import { ProductSection } from "@/components/sections/ProductSection";

export default function Home() {
  const prefersReducedMotion = useReducedMotion()
  const slideTransition = { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <WhatsappButton link="https://wa.me/5551981728039?text=Ol%C3%A1" className="fixed bottom-2 right-2" />
      <Hero />


      {/* Sobre Nós */}
      <motion.section
        id="about"
        initial={prefersReducedMotion ? false : { opacity: 0, x: -36 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={slideTransition}
        className="relative mb-10"
      >
        <span className=" absolute inset-x-1/2 inset-y-0 right-0 z-0 bg-black py-24 px-8"/>
        <div className="container mx-auto relative bg-black bg-gradient-to-l from-black to-black-400 py-24 px-8 rounded-l-xl">
      
            <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...slideTransition, delay: 0.1 }}
            >
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
            </motion.div>
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...slideTransition, delay: 0.18 }}
              className="grid grid-cols-2 gap-4"
            >
              <Card className="bg-white border-primary">
                <CardContent className=" p-6 flex flex-col items-center min-h-full text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">17+</h3>
                  <p className="text-sm text-gray-600">Anos de Experiência</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-primary">
                <CardContent className=" p-6 flex flex-col items-center min-h-full text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">95 mil+</h3>
                  <p className="text-sm text-gray-600">Clientes Satisfeitos</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-primary">
                <CardContent className=" p-6 flex flex-col items-center min-h-full text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">44+</h3>
                  <p className="text-sm text-gray-600">Parceiros de Negócios</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-primary">
                <CardContent className=" p-6 flex flex-col items-center min-h-full text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">24/7</h3>
                  <p className="text-sm text-gray-600">Suporte Dedicado</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>
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
      <motion.section
        id="benefits"
        initial={prefersReducedMotion ? false : { opacity: 0, x: 36 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={slideTransition}
        className="py-12 px-4 bg-primary/5"
      >
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
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={prefersReducedMotion ? false : { opacity: 0, x: index % 2 === 0 ? -22 : 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ ...slideTransition, delay: index * 0.06 }}
                className="flex items-start"
              >
                <CheckCircle className="h-6 w-6 text-black mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <ContactSection/>

      <motion.section
        id="instagram"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={slideTransition}
        className="py-12 px-4 text-center bg-black relative"
      >
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
      </motion.section>

    </main>


  )
}