import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const products = [
  { name: "Crédito Imobiliário", href: "#credito-imobiliario" },
  { name: "Construção Civil", href: "#construcao-civil" },
  { name: "Consórcios", href: "#consorcios" },
  { name: "Plano de Benefícios", href: "#plano-beneficios" },
  { name: "Seguros", href: "#seguros" },
  { name: "Crédito Consignado", href: "#credito-consignado" },
  { name: "Veículos", href: "#veiculos" },
]

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GrupoConexaoLogo-N9HTAXl5grkTCsN7AgFJg6mpuNG6ug.jpeg"
            alt="Grupo Conexão"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>
        <nav className="hidden md:flex space-x-4">
          {products.map((product) => (
            <Link key={product.name} href={product.href} className="text-white hover:text-orange-400 transition-colors">
              {product.name}
            </Link>
          ))}
        </nav>
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

