"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { products } from "@/data/products"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Header() {
  const [isVisible, setIsVisible] = React.useState(true)
  const [lastScrollY, setLastScrollY] = React.useState(0)

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

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [handleScroll, lastScrollY])

  return (
    //  inner rounded curve effect at bottom right
    <header className={`fixed top-0 left-0 right-0 z-50 bg-black text-white transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center "
        >
        <Link href="/" className="flex items-center bg-black py-3 -mb-6 px-4 -mx-4 rounded-b-lg hover:animate-pulse">
          <Image
            src="/logo.png"
            alt="Grupo Conexão"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                Serviços
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:grid-cols-2">
                  {products.map((product) => (
                    <ListItem
                      key={product.name}
                      title={product.name}
                      href={ product.button?.href ?? product.href}
                      className=""
                    >
                      <p>
                      {product.description}
                      </p>
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contato
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, href, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href!}
          legacyBehavior
          passHref
        >
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors group hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <h3 className="text-sm font-medium leading-none text-white group-hover:text-black group-focus:text-black">{title}</h3>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
