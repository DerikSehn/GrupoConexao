"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const whatsappPhone = "5551981728039"
const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
  "Olá! Gostaria de falar com um consultor do Grupo Conexão."
)}`

const navigation = [
  { label: "Soluções", href: "/#solutions" },
  { label: "Sobre", href: "/#about" },
  { label: "Contato", href: "/#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 24)

    updateHeader()
    window.addEventListener("scroll", updateHeader, { passive: true })
    return () => window.removeEventListener("scroll", updateHeader)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-[#060606]/95 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-5 lg:h-24 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Página inicial do Grupo Conexão">
          <Image
            src="/logo.png"
            alt="Grupo Conexão"
            width={180}
            height={60}
            priority
            className="h-10 w-auto lg:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-white/80 transition-colors hover:text-[#ff8833]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-xl bg-[#ff6b00] px-4 py-3 text-sm font-bold text-white shadow-[0_8px_20px_rgba(255,107,0,0.25)] transition-all hover:scale-[1.02] hover:bg-[#ff8833] md:inline-flex"
        >
          <Image src="/whatsapp.png" alt="WhatsApp" width={16} height={16} className="h-4 w-4" />
          Fale no WhatsApp
        </a>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white md:hidden" aria-label="Abrir menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-white/10 bg-[#060606] text-white">
            <nav className="mt-10 flex flex-col gap-2" aria-label="Navegação móvel">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 hover:text-[#ff8833]"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-[#44cf6c] px-4 py-4 text-sm font-bold text-[#060606]"
              >
                <Image src="/whatsapp.png" alt="WhatsApp" width={20} height={20} className="h-5 w-5" />
                Fale no WhatsApp
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
