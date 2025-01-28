"use client";
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield } from "lucide-react"
import { HomeIcon, Building2, PiggyBank, Heart, CreditCard, Car } from "lucide-react"
import Link from "next/link"
import { ProductSection } from "@/components/ProductSection"
import WaveTransition from "@/components/WaveTransition"

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
    <div className="min-h-screen bg-white">
      <Header />

      <Hero />

      <WaveTransition />

      {/* Sobre Nós */}
      <section id="sobre" className="py-12 px-4 bg-primary/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-primary">Sobre Nós</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4 text-gray-700">
                No Grupo Conexão, somos movidos pelo propósito de transformar desafios em soluções inteligentes.
                Credenciados diretamente às principais plataformas digitais e Fintechs, oferecemos muito mais que
                serviços: entregamos resultados com excelência, inovação e comprometimento.
              </p>
              <p className="text-lg text-gray-700">
                Nossa equipe é formada por profissionais altamente qualificados, prontos para atender às suas
                necessidades com competência, assertividade e consistência, pilares que sustentam nossa atuação e
                garantem um impacto real e duradouro.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white border-primary card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-secondary mb-2">5+</h3>
                  <p className="text-sm text-gray-600">Anos de Experiência</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-primary card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-secondary mb-2">1000+</h3>
                  <p className="text-sm text-gray-600">Clientes Satisfeitos</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-primary card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-secondary mb-2">50+</h3>
                  <p className="text-sm text-gray-600">Parceiros de Negócios</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-primary card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-secondary mb-2">24/7</h3>
                  <p className="text-sm text-gray-600">Suporte Dedicado</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Produtos */}
      <section id="produtos" className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary">Nossos Produtos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Crédito Imobiliário", icon: HomeIcon, href: "#credito-imobiliario" },
              { name: "Construção Civil", icon: Building2, href: "#construcao-civil" },
              { name: "Consórcios", icon: PiggyBank, href: "#consorcios" },
              { name: "Plano de Benefícios", icon: Heart, href: "#plano-beneficios" },
              { name: "Seguros", icon: Shield, href: "#seguros" },
              { name: "Crédito Consignado", icon: CreditCard, href: "#credito-consignado" },
              { name: "Veículos", icon: Car, href: "#veiculos" },
            ].map((product) => (
              <Card key={product.name} className="bg-white border-primary hover:border-secondary transition-colors card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <product.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                  <Button variant="link" asChild>
                    <Link href={product.href} className="text-secondary hover:text-secondary/80">
                      Saiba mais
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seções de Produtos */}
      <ProductSection
        id="credito-imobiliario"
        title="Crédito Imobiliário"
        description="Facilitamos o acesso ao crédito imobiliário, conectando você às melhores oportunidades para realizar o sonho da casa própria."
        features={[
          "Taxas competitivas no mercado",
          "Processo simplificado e ágil",
          "Parceria com as principais instituições financeiras",
          "Suporte personalizado em todas as etapas",
        ]}
      />

      <ProductSection
        id="construcao-civil"
        title="Construção Civil"
        description="Oferecemos soluções completas para o setor de construção civil, conectando empresas a clientes qualificados e prontos para investir."
        features={[
          "Leads qualificados para compra de materiais e serviços",
          "Conexão com investidores e compradores potenciais",
          "Estratégias personalizadas para cada projeto",
          "Suporte técnico especializado",
        ]}
      />

      <ProductSection
        id="consorcios"
        title="Consórcios"
        description="Nossos consórcios oferecem uma forma inteligente e planejada de adquirir bens e serviços, com condições especiais e flexibilidade."
        features={[
          "Ampla variedade de consórcios: imóveis, veículos e serviços",
          "Planos com parcelas que cabem no seu bolso",
          "Possibilidade de lance para contemplação antecipada",
          "Atendimento consultivo para escolha do melhor plano",
        ]}
      />

      <ProductSection
        id="plano-beneficios"
        title="Plano de Benefícios (Saúde)"
        description="Cuidamos da saúde e bem-estar dos seus colaboradores com planos de benefícios abrangentes e personalizados."
        features={[
          "Ampla rede de atendimento",
          "Cobertura para procedimentos ambulatoriais e hospitalares",
          "Programas de prevenção e promoção da saúde",
          "Opções flexíveis para empresas de todos os portes",
        ]}
      />

      <ProductSection
        id="seguros"
        title="Seguros"
        description="Proteja o que é importante para você com nossas soluções em seguros, oferecendo tranquilidade e segurança para sua vida e seus bens."
        features={[
          "Seguros de vida, residencial, automóvel e empresarial",
          "Coberturas personalizadas de acordo com suas necessidades",
          "Processo de contratação simplificado",
          "Suporte ágil em caso de sinistros",
        ]}
      />

      <ProductSection
        id="credito-consignado"
        title="Crédito Consignado Público e Privado"
        description="Oferecemos as melhores condições de crédito consignado, com taxas atrativas e processo simplificado para servidores públicos e trabalhadores do setor privado."
        features={[
          "Taxas de juros reduzidas",
          "Prazos estendidos para pagamento",
          "Desconto em folha de pagamento",
          "Atendimento personalizado e análise rápida",
        ]}
      />

      <ProductSection
        id="veiculos"
        title="Veículos"
        description="Facilitamos a aquisição do seu veículo novo ou seminovo, conectando você às melhores oportunidades do mercado automotivo."
        features={[
          "Ampla rede de concessionárias e revendedoras parceiras",
          "Financiamento com taxas competitivas",
          "Suporte na escolha do veículo ideal para seu perfil",
          "Processo de compra simplificado e transparente",
        ]}
      />

      {/* Benefícios */}
      <section id="beneficios" className="py-12 px-4 bg-primary/5">
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
                <CheckCircle className="h-6 w-6 text-secondary mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 text-center bg-primary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-white">Pronto para Impulsionar Seu Negócio?</h2>
          <p className="text-xl mb-8 text-white/90">
            Entre em contato conosco e descubra como podemos ajudar você a alcançar resultados extraordinários.
          </p>
          <Button className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-3">Fale Conosco</Button>
        </div>
      </section>
    </div>
  )
}