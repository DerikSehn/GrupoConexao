"use client";
import WhatsappButton from "@/components/button/WhatsappButton";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductSection } from "@/components/ProductSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { handleScrollToSection as handleClick } from "@/lib/scroll";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";


const products = [
  { name: "Abertura Conta Corrente Digital – PJ e PF", href: "/product/abertura-conta-corrente", image: '/images/products/abertura-conta-corrente.jpg' },
  { name: "Cartão de Crédito Corporativo", href: "/product/cartao-credito-corporativo", image: '/images/products/cartao-credito-corporativo.jpg' },
  { name: "Reestruturação Empresarial", href: "/product/reestruturacao-empresarial", image: '/images/products/reestruturacao-empresarial.jpg' },
  { name: "Capital de Giro", href: "/product/capital-giro", image: '/images/products/capital-giro.jpg' },
  { name: "Recebíveis", href: "/product/recebiveis", image: '/images/products/recebiveis.jpg' },
  { name: "Empréstimo com Garantia Imóvel", href: "/product/emprestimo-garantia-imovel", image: '/images/products/emprestimo-garantia-imovel.jpg' },
  { name: "Crédito com Garantia Imóvel", href: "/product/credito-garantia-imovel", image: '/images/products/credito-garantia-imovel.jpg' },
  { name: "Crédito Imobiliário", href: "/product/credito-imobiliario", image: '/images/products/credito-imobiliario.jpg' },
  { name: "CDC Lojista", href: "/product/cdc-lojista", image: '/images/products/cdc-lojista.jpg' },
  { name: "Consignado Público e Privado", href: "/product/consignado-publico-privado", image: '/images/products/consignado-publico-privado.jpg' },
  { name: "Convênios Governos", href: "/product/convenios-governos", image: '/images/products/convenios-governos.jpg' },
  { name: "Convênios Prefeituras", href: "/product/convenios-prefeituras", image: '/images/products/convenios-prefeituras.webp' },
  { name: "Construção Civil", href: "/product/construcao-civil", image: '/images/products/construcao-civil.jpg' },
  { name: "Consórcios", href: "/product/consorcios", image: '/images/products/consorcios.jpg' },
  { name: "Seguros", href: "/product/seguros", image: '/images/products/seguros.jpg' },
  { name: "Plano de Benefícios (saúde)", href: "https://api.whatsapp.com/send?phone=5551981728039&text=Ol%C3%A1", image: '/images/products/plano-beneficios.jpg' },
  { name: "Plano de Saúde", href: "https://api.whatsapp.com/send?phone=5551981728039&text=Ol%C3%A1", image: '/images/products/plano-saude.jpg' },
  { name: "Assessoria Jurídica Empresarial", href: "https://api.whatsapp.com/send?phone=5551981728039&text=Ol%C3%A1", image: '/images/products/assessoria-juridica-empresarial.jpg' },
  { name: "Veículos", href: "https://api.whatsapp.com/send?phone=5551981728039&text=Ol%C3%A1", image: '/images/products/veiculos.webp' },
];
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
      <Header />

      <Hero />


      {/* Sobre Nós */}
      <section id="about" className="relative mb-10">
        <span className=" absolute inset-x-1/2 inset-y-0 right-0 z-0 bg-black py-24 px-8"/>
        <div className="container mx-auto relative bg-black bg-gradient-to-l from-black to-black-400 py-24 px-8 rounded-l-xl">
      
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-6xl font-thin  mb-6 text-left text-primary">Quem somos</h2>
              <p className="text-lg mb-4 text-white">
                No Grupo Conexão, somos movidos pelo propósito de transformar desafios em soluções inteligentes.
                Credenciados diretamente às principais plataformas digitais e Fintechs, oferecemos muito mais que
                serviços: entregamos resultados com excelência, inovação e comprometimento.
              </p>
              <p className="text-lg text-gray-300">
                Nossa equipe é formada por profissionais altamente qualificados, prontos para atender às suas
                necessidades com competência, assertividade e consistência, pilares que sustentam nossa atuação e
                garantem um impacto real e duradouro.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white border-primary card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">5+</h3>
                  <p className="text-sm text-gray-600">Anos de Experiência</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-primary card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">1000+</h3>
                  <p className="text-sm text-gray-600">Clientes Satisfeitos</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-primary card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">50+</h3>
                  <p className="text-sm text-gray-600">Parceiros de Negócios</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-primary card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">24/7</h3>
                  <p className="text-sm text-gray-600">Suporte Dedicado</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Produtos */}
      <section id="products" className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          {/* <h2 className="text-3xl font-bold mb-8 text-center text-primary">Nossos Produtos</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {products.map((product, index) => (
            <div key={product.name} className="bg-white relative hover:border-secondary transition-colors border-primary min-h-72">
             <Link href={product.href} className="">
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                placeholder="blur"
                blurDataURL="/logo.png"
                className={`object-cover z-0 ${index % 2 === 0 ? 'filter grayscale brightness-50' : 'filter brightness-50'}`} 
               />
              <span className={cn(`absolute inset-0 z-10 flex  opacity-0 ${index % 2 === 0 ? "bg-black/50" : "bg-primary/70"} opacity-50 transition-opacity`)}/>
              <CardContent className="p-6 flex flex-col   relative z-20 h-full ">
                <h3 className={`text-3xl font-semibold   ${index % 2 !== 0 ? 'text-white' : 'text-primary-800'}`}>{product.name}</h3>
              </CardContent>
              </Link>
            </div>
          ))}         
           </div>
        </div>
      </section>

      {/* Seções de Produtos */}
      <ProductSection
        index={0}
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
        index={1}
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
        index={2}
        id="consorcios"
        title="Consórcios"
        description="Nossos consórcios oferecem uma forma inteligente e planejada de adquirir bens e serviços, com condições especiais e flexibilidade."
        features={[
          "Ampla variedade de consórcios: imóveis, veículos e serviços",
          "Planos com parcelas que cabem no seu bolso",
          "Possibilidade de lance para contemplação antecipada",
          "Atendimento consultivo para escolha do melhor plano",
        ]}
      >
        <div className="flex justify-center p-6">
        {/* Button/Link to /consorcios, wich shows a list of banks and when the user clicks in it, gets a whatsapp api link in a new tab*/}
        <Link href={`/consorcios`} className="text-white hover:text-gray-300 text-lg group ">
          <Button className="bg-primary hover:bg-primary/90 text-white text-lg p-8 flex items-center ">
            Saiba mais <ArrowRight className="ml-2 scale-[2] group-hover:translate-x-2 duration-400 transition-transform" />
          </Button>
        </Link> 
        </div> 
        </ProductSection>

      <ProductSection
        index={3}
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
        index={4}
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
        index={5}
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
        index={6}
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

      <Footer/>

      {/* CTA */}
      <section id="cta" className="py-12 px-4 text-center bg-black relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/images/cta-bg.jpg)' }}></div>
        <div className="container mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Pronto para Impulsionar Seu Negócio?</h2>
          <p className="text-xl mb-8 text-white/90">
            Entre em contato conosco e descubra como podemos ajudar você a alcançar resultados extraordinários.
          </p>
          <Button onClick={() => handleClick('https://api.whatsapp.com/send?phone=5551999300707&text=Ol%C3%A1')} className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-3 mb-4">Fale Conosco</Button>
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