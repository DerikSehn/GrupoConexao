"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const products = [
  { name: "Crédito Imobiliário", href: "/#credito-imobiliario" },
  { name: "Construção Civil", href: "/#construcao-civil" },
  { name: "Consórcios", href: "/#consorcios" },
  { name: "Plano de Benefícios", href: "/#plano-beneficios" },
  { name: "Seguros", href: "/#seguros" },
  { name: "Crédito Consignado", href: "/#credito-consignado" },
  { name: "Veículos", href: "/#veiculos" },
]

export function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < lastScrollY || window.scrollY === 0) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
      setLastScrollY(window.scrollY)
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [lastScrollY])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-black text-white transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center bg-black py-3 -mb-6 px-4 -mx-4 rounded-b-lg hover:animate-pulse">
          <Image
            src="/logo.png"
            alt="Grupo Conexão"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>
        <nav className="hidden md:flex space-x-4">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="text-white hover:text-orange-400 transition-colors"
            >
              {product.name}
            </Link>
          ))}
        </nav>
        {/* Botão Fale Conosco para computadores */}
        <Link
          href="#contact"
          className="hidden md:inline-block bg-orange-400 text-black px-4 py-2 rounded hover:bg-orange-500 transition-colors"
        >
          Fale Conosco
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-primary text-white">
            <nav className="flex flex-col space-y-4 mt-8">
              {products.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className="text-white hover:text-orange-400 transition-colors"
                >
                  {product.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
